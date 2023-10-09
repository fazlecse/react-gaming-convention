import { useLoaderData, useParams } from "react-router-dom";
import Banner2 from "../../shared/Banner2/Banner2";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const service = serviceDetails.find((service) => service.id === idInt);

  return (
    <div>
      <Banner2></Banner2>
      <div className="bg-[#0E063D] bg-[url('https://i.ibb.co/TqNtpTs/tournaments-bg.png')] bg-no-repeat bg-cover py-20 ">
        <div className="container mx-auto  p-3 sm:p-0 text-center -mt-[150px] bg-[#4609C3] rounded-md">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div>
              <img src={service.image2} alt="" />
            </div>
            <div>
              <h1 className="text-7xl text-white font-chakraPetch font-semibold">
                VS
              </h1>
            </div>
            <div>
              <img src={service.image3} alt="" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="container mx-auto p-3 sm:p-2">
            <div className="bg-[#130757] py-20 px-10 grid grid-cols-2 gap-4 items-center ">
              <div>
                <h1 className="text-5xl text-white font-chakraPetch font-semibold">
                  {service.name}
                </h1>
                <p className="text-lg text-white font-semibold mt-5">
                  {service.short_description}
                </p>
              </div>
              <div>
                <h1 className="text-5xl text-[#00FADF] font-chakraPetch font-semibold">
                  {service.price}
                </h1>

                <button className="mt-5 btn bg-gradient-to-r from-[#F029A0] to-[#F0B000] text-white">
                  Book Now
                </button>
              </div>
            </div>
            <div className="py-16 px-10">
              <h1 className="text-center text-4xl text-white font-chakraPetch font-semibold">
                INFORMATION
              </h1>
              <div className="grid md:grid-cols-2">
                <div>
                  <h1 className="text-2xl text-white font-chakraPetch font-semibold mt-10 mb-5">
                    FORMAT
                  </h1>
                  <ul className="space-y-2">
                    <li className="text-lg text-white">
                      Map pool: Selected Aim Maps
                    </li>
                    <li className="text-lg text-white">
                      All kind of cheating will result in a permanent suspension
                      from Begam.
                    </li>
                    <li className="text-lg text-white">
                      Playing with a cheater will result in a 3 month suspension
                      from Begam.
                    </li>
                    <li className="text-lg text-white">
                      Toxic behaviour will cause warnings and in severe cases
                      both
                    </li>
                    <li className="text-lg text-white">
                      disqualifications and suspensions.
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-2xl text-white font-chakraPetch font-semibold mt-10 mb-5">
                    PRIZE CLAIM
                  </h1>
                  <ul className="space-y-2">
                    <li className="text-lg text-white">
                      Prize claims must be completed within 24 hours of the end
                      of the
                    </li>
                    <li className="text-lg text-white">
                      tournament otherwise risk penalty of the prize. Claims can
                      take up to 72
                    </li>
                    <li className="text-lg text-white">
                      hours to be processed.
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-2xl text-white font-chakraPetch font-semibold mt-10 mb-5">
                    RULES
                  </h1>
                  <ul className="space-y-2">
                    <li className="text-lg text-white">
                      Please be respectful to your host and other participants.
                      If any malicious behavior is reported, you will be removed
                      from the tournament.
                    </li>
                    <li className="text-lg text-white">
                      Please be on time for your registration and for the actual
                      tournament. You (and your team) will be disqualified on
                      no-show.
                    </li>
                    <li className="text-lg text-white">
                      You and all of your teammates must be registered to
                      qualify for the event.
                    </li>

                    <li className="text-lg text-white">
                      You can play in this tournament only if your registered
                      and in-game names match, otherwise you will be
                      disqualified.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
