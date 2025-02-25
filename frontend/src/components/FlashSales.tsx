import { Link } from "react-router"
import { flashSales } from "../constants"
import Stopwatch from "./Stopwatch"



const FlashSales = () => {
  return (
    <main className="w-full flex flex-col p-10">
      <div className="flex items-center gap-3">
        <div className="bg-brand w-4 h-8 rounded-sm"></div>
        <div className="text-brand font-semibold">Today's</div>
      </div>
      <div className="flex items-end gap-10">
        <p className="text-3xl  font-semibold">Flash Sales</p>
        <Stopwatch />
      </div>
      <section className="mt-10 grid grid-cols-4 gap-10">
        {
          flashSales.map((product) => {
            return (
              <div key={product.id} className="max-w-[270px] w-full">
                <div className="relative bg-black-100 flex-center h-[250px] rounded-sm ">
                  <img src={product.image} alt="gamepad" className=" object-cover" />
                  <button className="absolute top-2 left-2 bg-brand px-4 py-2 text-white rounded-sm text-xs">
                    {((product.price - product.discount) / product.price * 100).toFixed(2)}% off</button>

                </div>
                <div className="text-sm font-medium flex flex-col mt-4">
                  <p className="">{product.name}</p>
                  <p className="text-brand mt-2">${product.discount} <span className="text-black-300 line-through">${product.price}</span></p>
                  <p className="flex gap-2 items-center mt-1">
                    <span className="text-yellow">{product.rating}</span>
                    <span className="text-black-300">({product.reviews})</span>
                  </p>
                </div>
              </div>
            )
          })
        }
      </section>
      <div className="flex-center my-10">
        <Link to="/shop">
          <button className="bg-brand text-white py-3 px-10 text-sm rounded-sm cursor-pointer">
            View All Products
          </button>
        </Link>
      </div>
    </main>
  )
}

export default FlashSales