const Banner2 = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/r2CHB2Y/banner-bg.png')] bg-no-repeat bg-cover">
      <div className="container mx-auto p-3 sm:p-2 text-center -mt-[85px]">
        <div className="pt-48 pb-32 space-y-5">
          <h1 className="text-3xl md:text-7xl font-bold font-chakraPetch text-white">
            TOURNAMENTS
          </h1>
          <div className="text-xl breadcrumbs flex justify-center ">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>Tournaments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
