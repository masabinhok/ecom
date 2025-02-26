import { Link } from "react-router"
import { leftArrow, rightArrow } from "../assets"
import { exploreProducts } from "../constants"
import ProductCard from "./ProductCard"

const Explore = () => {
  return (
    <main className="w-full flex flex-col p-10">
      <div className="flex items-center gap-3">
        <div className="bg-brand w-4 h-8 rounded-sm"></div>
        <div className="text-brand font-semibold">Our Products</div>
      </div>

      <div className="w-full  flex items-center justify-between mt-5 ">
        <h1 className="text-3xl font-semibold">Explore Our Products</h1>
        <div className="flex items-center gap-2">
          <button className="bg-black-100 rounded-full p-2">
            <img src={leftArrow} alt="leftArrow" className="size-5" />
          </button>
          <button className="bg-black-100 rounded-full p-2">
            <img src={rightArrow} alt="rightArrow" className="size-4 " />
          </button>
        </div>
      </div>
      <section className="mt-10 grid justify-items-center grid-cols-4 gap-10 mb-5 ">
        {
          exploreProducts.map((product) => {
            return (
              <ProductCard key={product.id} product={product} showDiscount={false} showDiscountAmount={false} />
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
    </main >
  )
}

export default Explore