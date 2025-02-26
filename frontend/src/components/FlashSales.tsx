import { Link } from "react-router"
import { flashSales } from "../constants"
import Timer from "./Timer"
import ProductCard from "./ProductCard"



const FlashSales = () => {
  return (
    <main className="w-full flex flex-col p-10">
      <div className="flex items-center gap-3">
        <div className="bg-brand w-4 h-8 rounded-sm"></div>
        <div className="text-brand font-semibold">Today's</div>
      </div>
      <div className="flex items-end gap-10">
        <p className="text-3xl  font-semibold">Flash Sales</p>
        <Timer d={5} h={23} m={59} s={35} />
      </div>
      <section className="mt-10 grid justify-items-center grid-cols-4 gap-10">
        {
          flashSales.map((product) => {
            return (
              <ProductCard key={product.id} product={product} showDiscount={true} showDiscountAmount={true} />
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