import { useLoaderData } from "react-router-dom";
import Banner from "../../shared/Banner/Banner";
import ServiceCard from "./ServiceCard";
import About from "../../shared/About/About";
import HowItWork from "../../shared/HowItWork/HowItWork";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);
  const cards = useLoaderData();
  return (
    <div className="bg-[#0E063D]">
      <Banner></Banner>
      <About></About>
      <div className=" bg-[url('https://i.ibb.co/TqNtpTs/tournaments-bg.png')] bg-no-repeat bg-cover py-10 sm:py-20 ">
        <div className="container mx-auto p-3 sm:p-2 text-white">
          <div className="space-y-5 mb-10 text-center" data-aos="fade-down">
            <h2 className="text-3xl md:text-5xl font-bold font-chakraPetch">
              BROWSE TOURNAMENTS
            </h2>
            <p className="max-w-lg mx-auto">
              Find the perfect tournaments for you. Head to head matches where
              you pick the game, rules and prize.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 " data-aos="fade-up">
            {cards.map((card) => (
              <ServiceCard key={card.id} card={card}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
      <HowItWork></HowItWork>
    </div>
  );
};

export default Home;
