
const AboutPage = () => {
  return (
    <div>
      <section className="bg-fixed grid relative  bg-[url('/src/assets/images/banner.jpg')] h-[300px] lg:h-[400px] bg-center"> 
        <div className="w-full grid place-items-center text-center">
          <div>
            <p className=" text-base lg:text-xl text-white font-normal mb-10">
              Home | About
            </p>
            <h1 className="text-white font-bold text-4xl">About Us</h1>
          </div>
        </div>
      </section>

      <section className="max-w-[90%] font-jost lg:max-w-[70%] mx-auto my-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-full h-full overflow-hidden">
          <img
            className="rounded-xl"
            src="/src/assets/images/about_us.jpg"
            alt=""
          />
        </div>

        <div className="space-y-5">
          <h3 className="text-4xl font-semibold">Our Story</h3>
          <h4 className="text-lg font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem minus modi ipsum placeat molestiae ipsa perspiciatis!
            Recusandae minus magni tempora officiis porro culpa, quas iste
            possimus eius odit. Facere nostrum corrupti pariatur eligendi
            excepturi dolorem minus autem reiciendis sequi architecto a illo hic
            temporibus voluptatibus, similique enim dignissimos deserunt
            cupiditate!
          </h4>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
