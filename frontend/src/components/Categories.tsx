import { Link } from "react-router"
import { leftArrow, rightArrow } from "../assets"
import { categories } from "../constants"

const Categories = () => {
  return (
    <main className="w-full flex flex-col p-10">
      <div className="flex items-center gap-3">
        <div className="bg-brand w-4 h-8 rounded-sm"></div>
        <div className="text-brand font-semibold">Categories</div>
      </div>

      <div className="w-full  flex items-center justify-between mt-5 ">
        <h1 className="text-3xl font-semibold">Browse By Category</h1>
        <div className="flex items-center gap-2">
          <button className="bg-black-100 rounded-full p-2">
            <img src={leftArrow} alt="leftArrow" className="size-5" />
          </button>
          <button className="bg-black-100 rounded-full p-2">
            <img src={rightArrow} alt="rightArrow" className="size-4 " />
          </button>
        </div>
      </div>
      <div className="grid justify-items-center grid-cols-6 gap-5 mt-10">
        {
          categories.map((category, index) => (
            <Link key={index} to={`/shop/${category.name}`} >
              <div className="flex-center flex-col p-10 hover:text-white gap-3 border rounded-sm border-black-200 hover:bg-brand  group" >
                <img src={category.image} alt={category.name} className="group-hover:invert" />
                <p className="text-sm ">{category.name}</p>
              </div>
            </Link>

          ))
        }
      </div>
    </main >
  )
}

export default Categories