import aboutus from '../assets/images/about_us.jpg'
const AboutPage = () => {
  return (
    <div>

      <section className="max-w-[90%] font-jost lg:max-w-[70%] mx-auto my-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-full h-full overflow-hidden">
          <img
            className="rounded-xl"
            src={aboutus}
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
