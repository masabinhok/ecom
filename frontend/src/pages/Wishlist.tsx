import { Link } from "react-router"
import ProductCard from "../components/ProductCard"
import { bestSellers, flashSales } from "../constants"


const Wishlist = () => {
  return (
    <main className="flex w-full p-10 flex-col max-w-[1320px] mb-20">
      <div className="flex items-center justify-between">
        <p>
          Wishlist(4)
        </p>
        <button className="px-10 py-3 border-2 border-black-200 rounded-sm font-medium text-sm ">
          Move all to Cart
        </button>
      </div>

      <section className="grid justify-items-center grid-cols-4 mt-10 justify">
        {
          flashSales.map((product, index) => (
            <ProductCard key={index} product={product} showDelete={true} showAddToCart={true} showReviews={false} />
          ))
        }
      </section>
      <section className="w-full flex flex-col mt-10">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="bg-brand w-4 h-8 rounded-sm"></div>
            <div className="text-brand font-semibold">Just For You</div>
          </div>
          <Link to="/shop">
            <button className="border-2 border-black-200  px-10 py-3 text-sm font-medium rounded-sm ">
              See All
            </button>
          </Link>


        </div>
        <section className="mt-10 grid justify-items-center grid-cols-4 gap-10">
          {
            bestSellers.map((product) => {
              return (
                <ProductCard key={product.id} product={product} showAddToCart={true} />
              )
            })
          }
        </section>
      </section>
    </main>
  )
}

export default Wishlist