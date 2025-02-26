import { Link } from "react-router"
import { bestSellers, } from "../constants"
import ProductCard from "./ProductCard"


const BestSellers = () => {
  return (
    <main className="w-full flex flex-col p-10">
      <div className="flex items-center gap-3">
        <div className="bg-brand w-4 h-8 rounded-sm"></div>
        <div className="text-brand font-semibold">This Month</div>
      </div>

      <div className="w-full  flex items-center justify-between mt-5 ">
        <h1 className="text-3xl font-semibold">Best Selling Products</h1>
        <Link to="/shop">
          <button className="text-white bg-brand px-6 py-2 text-sm rounded-sm " >
            View All
          </button>
        </Link>
      </div >
      <section className="mt-10 grid justify-items-center grid-cols-4 gap-10">
        {
          bestSellers.map((product) => {
            return (
              <ProductCard key={product.id} product={product} />
            )
          })
        }
      </section>
    </main >
  )
}

export default BestSellers