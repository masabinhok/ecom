import { services } from "../constants"

interface ServiceProps {
  image: string
  title: string
  desc: string
}

const Service = ({ image, title, desc }: ServiceProps) => {
  return (
    <div className="flex-center flex-col mt-10 mb-30">
      <div className="flex-center bg-black-200 rounded-full size-20">
        <div className="bg-black-900 rounded-full size-16 flex-center">
          <img src={image} alt="" />
        </div>
      </div>

      <h1 className="font-semibold mt-3">{title}</h1>
      <p className="text-xs mt-1">{desc}</p>
    </div>
  )
}



const Services = () => {
  return (
    <section
      className="grid justify-items-center grid-cols-3 w-full">
      {
        services.map((service, index) => (
          <Service key={index} {...service} />
        ))
      }
    </section>
  )
}

export default Services