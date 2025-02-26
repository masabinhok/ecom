import { Link } from "react-router";
import { africanModel, instagram, linkedin, twitter } from "../assets";
import { aboutUs, people } from "../constants";
import Services from "../components/Services";

const About = () => {
  return (
    <main className="max-w-[1320px] w-full flex flex-col p-10">
      <div className="text-sm flex items-center gap-2 mb-10">
        <Link to="/">
          <span className="text-black-400">Home</span>
        </Link>
        /
        <span className="">About</span>
      </div>

      <section className="flex-center gap-20">
        <div className="flex-[1] flex flex-col">
          <h1 className="text-7xl font-semibold">Our Story</h1>
          <p className="mt-10 text-sm text-black-500">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands, serving 3 million customers across the region.
          </p>
          <p className="mt-3 text-sm text-black-500">
            Exclusive has more than 1 million products to offer, growing rapidly. We offer a diverse assortment in categories ranging from consumer goods to lifestyle products.
          </p>
        </div>
        <div className="flex-[1]">
          <img src={africanModel} alt="African model" className="h-[600px] w-auto object-cover" />
        </div>
      </section>

      <section className="grid grid-cols-4   gap-4 w-full mt-30 mb-10">
        {aboutUs.map((item, index) => {
          return (
            <div key={index} className="flex flex-col group items-center border-2 border-gray-200 p-10 rounded-lg hover:bg-brand hover:text-white max-w-xs">
              <div className="bg-gray-200 h-16 w-16 rounded-full flex-center">
                <div className="bg-gray-900 h-12 w-12 group-hover:bg-white rounded-full flex-center">
                  <img src={item.icon} alt={item.desc} className="h-10 w-10 group-hover:invert" />
                </div>
              </div>
              <h1 className="font-semibold text-xl mt-3">{item.amount}</h1>
              <p className="text-xs">{item.desc}</p>
            </div>
          );
        })}
      </section>

      <section className="grid grid-cols-3 justify-itesms-center gap-10 my-20">
        {
          people.map((person, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-black-100 flex-center rounded-sm pt-5">
                <img src={person.image} alt="" />
              </div>
              <h1 className="mt-5 text-xl font-semibold">
                {person.name}
              </h1>
              <p className="text-sm text-black-500">
                {person.position}
              </p>
              <div className="flex gap-2 items-center mt-2">
                <img src={twitter} alt="facebook-icon" className="size-5 invert" />
                <img src={linkedin} alt="facebook-icon" className="size-3 invert" />
                <img src={instagram} alt="facebook-icon" className="size-4 invert" />
              </div>
            </div>
          ))
        }
      </section>

      <Services />




    </main>
  );
};

export default About;
