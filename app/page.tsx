import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Sessions from './components/Sessions';
import Coaches from './components/Coaches';
import Sponsors from './components/Sponsors';
import Gallery from './components/Gallery';
import Join from './components/Join';
import Credentials from './components/Credentials';
import Footer from './components/Footer';

// Re-fetch Coaches / Credentials from Airtable in the background at most every 6 hours,
// so edits made in Airtable still show up on the live site the same day, without making
// unnecessary Airtable API calls on every visit. (Previously 5 minutes — that was too
// frequent for a low-traffic site and contributed to hitting Airtable's free-plan API
// call limit.)
export const revalidate = 21600;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Sessions />
        <Coaches />
        <Sponsors />
        <Gallery />
        <Join />
        <Credentials />
      </main>
      <Footer />
    </>
  );
}
