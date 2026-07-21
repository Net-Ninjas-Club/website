import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Sessions from './components/Sessions';
import Coaches from './components/Coaches';
import Credentials from './components/Credentials';
import Sponsors from './components/Sponsors';
import Gallery from './components/Gallery';
import Join from './components/Join';
import Footer from './components/Footer';

// Re-fetch Coaches / Credentials from Airtable in the background every 5 minutes,
// so edits made in Airtable show up on the live site without needing a redeploy.
export const revalidate = 300;

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
