import CardList from "@/components/CardList";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Upcoming from "@/components/Upcoming";
const index = () => {
  return (
    <div className="flex flex-col items-center">
      <Navigation />
      <Hero />
      <Upcoming />
      <CardList />
    </div>
  );
};

export default index;
