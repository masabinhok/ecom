import { Link } from "react-router"
import { speaker } from "../assets"
import RoundTimer from "./RoundTimer"


const CategoryAd = () => {
  return (
    <main className="h-[500px] p-10">
      <div className=" bg-gradient-to-r from-black-900 to-black-700 flex-center h-full rounded-sm">
        <div className="flex-[1] flex flex-col p-10">
          <h1 className="text-green font-medium text-sm">Categories</h1>
          <h1 className="text-white text-4xl font-medium mt-5">Enhance Your
            <br />
            Music Experience</h1>
          <RoundTimer d={5} h={23} m={59} s={35} />
          <Link className="w-fit" to="/shop">
            <button className="text-sm bg-green text-white  w-fit px-10 py-3 rounded-sm  mt-5">
              Buy Now!
            </button>
          </Link>
        </div>
        <div className="flex-[1] flex-center p-20">
          <img src={speaker} alt="speaker" />
        </div>
      </div>
    </main>
  )
}

export default CategoryAd