import { Link } from "react-router-dom";

const ServiceCard = ({ card }) => {
  const { id, image1, name, price, short_description } = card || {};
  return (
    <div className="p-5 border flex flex-col sm:flex-row text-center sm:text-left gap-5 text-white items-center" >
      <figure>
        <img src={image1} alt="" />
      </figure>
      <div className="space-y-4">
        <h3 className="text-2xl font-chakraPetch font-semibold">{name}</h3>
        <h2 className="text-xl font-chakraPetch font-semibold">
          Price: {price}
        </h2>
        <p className="text-lg font-chakraPetch font-semibold">
          {short_description}
        </p>
        <Link to={`/servicecard/${id}`}>
          <button className="mt-5 btn bg-gradient-to-r from-[#F029A0] to-[#F0B000] text-white">
            View Tournament
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
