import CardList from "@/components/CardList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Upcoming from "@/components/Upcoming";
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pb-12">
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <Upcoming text="Upcoming" />
          <CardList />
          <Upcoming text="Popular" />
          <CardList />
          <Upcoming text="Top rated" />
          <CardList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
