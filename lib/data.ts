export type Coach = {
  id: string;
  name: string;
  roles: string[];
  bio: string;
  photo?: string;
};

export type Credential = {
  id: string;
  title: string;
  holder?: string;
  issuer?: string;
  belt: 'white' | 'yellow' | 'orange' | 'green' | 'blue' | 'brown' | 'black';
};

export type SessionSlot = {
  id: string;
  ageGroup: string;
  day: string;
  time: string;
  venue: string;
  cost: string;
};

// Fallback content — shown until the equivalent Airtable tables are populated.
// Editing rows in Airtable (Coaches / Credentials) will override this without a redeploy.

export const coaches: Coach[] = [
  {
    id: 'david',
    name: 'David Follett',
    roles: ['Lead Coach', 'Co-Founder', 'Level 2 BE Coach'],
    bio: 'David co-founded Net Ninjas with Becky in 2024 and leads coaching on court. He plays international para-badminton and brings that competitive experience into a warm, patient teaching style built for beginners and juniors alike.',
  },
  {
    id: 'becky',
    name: 'Becky Follett',
    roles: ['Assistant Coach', 'Welfare Officer', 'First Aider', 'Co-Founder', 'Level 1 BE Coach'],
    bio: 'Becky co-founded Net Ninjas after playing badminton for her county as a junior. She looks after coaching, welfare and first aid, making sure every young player has a safe, encouraging place to learn.',
  },
  {
    id: 'sharon',
    name: 'Sharon Dunk',
    roles: ['Assistant Coach', 'First Aider', 'Level 2 BE Coach'],
    bio: 'Sharon supports sessions on court and is one of the club\u2019s qualified first aiders.',
  },
  {
    id: 'rachel',
    name: 'Rachel Noakes',
    roles: ['Assistant Coach', 'Level 1 BE Coach'],
    bio: 'Rachel helps run drills and games each week, working closely with our younger players.',
  },
  {
    id: 'al',
    name: 'Al Banks',
    roles: ['Volunteer Coach'],
    bio: 'Al helps coach our Year 7\u201311 group, developing technique as players progress toward more competitive play.',
  },
  {
    id: 'noah',
    name: 'Noah Dare',
    roles: ['Volunteer Coach'],
    bio: 'Noah supports coaching across both age groups, helping players build confidence with every session.',
  },
  {
    id: 'kasey',
    name: 'Kasey Saunders',
    roles: ['Volunteer Coach'],
    bio: 'Kasey volunteers on court each week, supporting our juniors as they build their skills.',
  },
  {
    id: 'ben',
    name: 'Ben Smith',
    roles: ['Volunteer Coach'],
    bio: 'Ben volunteers on court each week, supporting our juniors as they build their skills.',
  },
  {
    id: 'jamie',
    name: 'Jamie Samuel',
    roles: ['Volunteer Coach'],
    bio: 'Jamie volunteers on court each week, supporting our juniors as they build their skills.',
  },
  {
    id: 'tempy',
    name: 'Tempy Forsyth',
    roles: ['Volunteer Coach'],
    bio: 'Tempy volunteers on court each week, supporting our juniors as they build their skills.',
  },
];

export const clubTeam = [
  { name: 'Steve Dew', role: 'Parent Representative' },
];

export const playerLeadership = [
  { name: 'Joshua', role: 'Club Captain' },
  { name: 'Oscar', role: 'Vice Captain' },
  { name: 'Josie', role: 'Player Representative' },
];

export const sessions: SessionSlot[] = [
  {
    id: 'juniors',
    ageGroup: 'Reception \u2013 Year 6',
    day: 'Friday',
    time: '5:00 \u2013 6:00pm',
    venue: 'Broadclyst Sports Hall',
    cost: '\u00A34 per child',
  },
  {
    id: 'seniors',
    ageGroup: 'Year 7 \u2013 Year 11',
    day: 'Friday',
    time: '6:00 \u2013 7:00pm',
    venue: 'Broadclyst Sports Hall',
    cost: '\u00A34 per child',
  },
];

export const credentials: Credential[] = [
  {
    id: 'david-international',
    title: 'England Para-Badminton Player',
    holder: 'David Follett \u2014 No.1 England singles, No.14 world singles, No.6 world mixed doubles',
    belt: 'black',
  },
  {
    id: 'becky-county',
    title: 'Former Junior County Player',
    holder: 'Becky Follett',
    belt: 'brown',
  },
  {
    id: 'coaching-l2',
    title: 'Level 2 Badminton England Qualified Coach',
    holder: 'David Follett & Sharon Dunk',
    belt: 'blue',
  },
  {
    id: 'coaching-l1',
    title: 'Level 1 Badminton England Qualified Coach',
    holder: 'Becky Follett & Rachel Noakes',
    belt: 'green',
  },
  {
    id: 'safeguarding',
    title: 'Safeguarding & Welfare Trained',
    holder: 'Becky Follett, Welfare Officer',
    belt: 'orange',
  },
  {
    id: 'first-aid',
    title: 'Paediatric First Aid Qualified',
    holder: 'Becky Follett & Sharon Dunk',
    belt: 'yellow',
  },
  {
    id: 'dbs',
    title: 'DBS Checked Coaching Team',
    belt: 'white',
  },
];

export type Sponsor = {
  id: string;
  name: string;
  slug: string;
};

export const sponsors: Sponsor[] = [
  { id: 'echoes-nursery', name: 'Echoes Nursery', slug: 'echoes-nursery' },
  { id: 'broadclyst-parish-council', name: 'Broadclyst Parish Council', slug: 'broadclyst-parish-council' },
  { id: 'poundland-association', name: 'Poundland Association', slug: 'poundland-association' },
  { id: 'badminton-england', name: 'Badminton England', slug: 'badminton-england' },
  { id: 'tesco-stronger-starts', name: 'Tesco Stronger Starts', slug: 'tesco-stronger-starts' },
  { id: 'sport-england', name: 'Sport England', slug: 'sport-england' },
];

export const facebookUrl = 'https://www.facebook.com/groups/924072052433131/';

export const safeguardingPolicyUrl = '/documents/badminton-england-safeguarding-policy.pdf';
