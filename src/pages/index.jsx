import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Separation from "@/components/Separation";
import Popular from "@/components/Popular";
import Top from "@/components/Top";
import Upcoming from "@/components/Upcoming";
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pb-12">
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <Separation text="Upcoming" />
          <Upcoming />
          <Separation text="Popular" />
          <Popular />
          <Separation text="Top Rated" />
          <Top />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
