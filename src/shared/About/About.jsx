import about1 from "../../assets/about1.png";
import { FaGamepad, FaUser } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";

const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto p-3 sm:p-0 text-white bg-cover grid sm:grid-cols-2 gap-7">
        <div data-aos="fade-right">
          <img src={about1} alt="" />
        </div>
        <div className="space-y-5"data-aos="fade-left">
          <h2 className="text-3xl md:text-5xl font-bold font-chakraPetch mb-14">
            WE ARE PROFESSIONAL TEAM ESPORT
          </h2>
          <p className="max-w-lg">
            Distinctively provide acces mutfuncto users whereas transparent
            proceses somes ncentivize eficient functionalities rather than an
            extensible archtectur services and cross
          </p>
          <div className="space-y-5">
            <div className="flex gap-5 items-center">
              <div className="min-w-[48px] h-12 rounded-full bg-gradient-to-r from-[#F029A0] to-[#F0B000] text-white text-2xl flex items-center justify-center">
                <FaGamepad></FaGamepad>
              </div>
              <div>
                <h4 className="text-xl font-semibold">
                  103K COMMUNITY EARNING
                </h4>
                <p>
                  Distinctively provide acces mutfuncto users whereas
                  communicate leveraged services
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="min-w-[48px] h-12 rounded-full bg-gradient-to-r from-[#F029A0] to-[#F0B000] text-white text-2xl flex items-center justify-center">
                <FaUser></FaUser>
              </div>
              <div>
                <h4 className="text-xl font-semibold">
                  34M+ REGISTERED PLAYERS
                </h4>
                <p>
                  Distinctively provide acces mutfuncto users whereas
                  communicate leveraged services
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="min-w-[48px] h-12 rounded-full bg-gradient-to-r from-[#F029A0] to-[#F0B000] text-white text-2xl flex items-center justify-center">
                <HiBadgeCheck></HiBadgeCheck>
              </div>
              <div>
                <h4 className="text-xl font-semibold">
                  103K COMMUNITY EARNING
                </h4>
                <p>
                  Distinctively provide acces mutfuncto users whereas
                  communicate leveraged services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
