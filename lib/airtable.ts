import Airtable from 'airtable';
import { coaches as fallbackCoaches, credentials as fallbackCredentials, type Coach, type Credential } from './data';

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;

function getBase() {
  if (!apiKey || !baseId) return null;
  return new Airtable({ apiKey }).base(baseId);
}

// Reads are best-effort: if Airtable isn't configured yet, or a table is
// empty, the site falls back to the seed content in lib/data.ts so it never
// breaks while the base is being set up.

export async function getCoaches(): Promise<Coach[]> {
  const base = getBase();
  if (!base) return fallbackCoaches;

  try {
    const records = await base('Coaches')
      .select({ view: 'Grid view', sort: [{ field: 'Order', direction: 'asc' }] })
      .all();

    if (!records.length) return fallbackCoaches;

    return records.map((r) => {
      const photoField = r.get('Photo') as { url: string }[] | undefined;
      return {
        id: r.id,
        name: (r.get('Name') as string) ?? '',
        roles: ((r.get('Roles') as string) ?? '')
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean),
        bio: (r.get('Bio') as string) ?? '',
        photo: photoField?.[0]?.url,
      };
    });
  } catch (err) {
    console.error('Airtable getCoaches failed, using fallback content:', err);
    return fallbackCoaches;
  }
}

export async function getCredentials(): Promise<Credential[]> {
  const base = getBase();
  if (!base) return fallbackCredentials;

  try {
    const records = await base('Credentials').select({ view: 'Grid view' }).all();
    if (!records.length) return fallbackCredentials;

    return records.map((r) => ({
      id: r.id,
      title: (r.get('Title') as string) ?? '',
      holder: r.get('Holder') as string | undefined,
      issuer: r.get('Issuer') as string | undefined,
      belt: (r.get('Belt') as Credential['belt']) ?? 'white',
    }));
  } catch (err) {
    console.error('Airtable getCredentials failed, using fallback content:', err);
    return fallbackCredentials;
  }
}

export type EnquiryPayload = {
  parentName: string;
  childName: string;
  ageGroup: string;
  email: string;
  phone?: string;
  preferredSession: string;
  message?: string;
};

export async function submitEnquiry(payload: EnquiryPayload) {
  const base = getBase();
  if (!base) {
    throw new Error(
      'Airtable is not configured. Set AIRTABLE_API_KEY and AIRTABLE_BASE_ID as environment variables.'
    );
  }

  await base('Enquiries').create([
    {
      fields: {
        'Parent/Guardian Name': payload.parentName,
        'Child Name': payload.childName,
        'Age / Year Group': payload.ageGroup,
        Email: payload.email,
        Phone: payload.phone ?? '',
        'Preferred Session': payload.preferredSession,
        Message: payload.message ?? '',
        'Submitted At': new Date().toISOString(),
      },
    },
  ]);
}
