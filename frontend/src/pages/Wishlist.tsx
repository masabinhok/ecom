import ProductCard from "../components/ProductCard"
import { flashSales } from "../constants"


const Wishlist = () => {
  return (
    <main className="flex w-full p-10 flex-col max-w-[1320px]">
      <div className="flex items-center justify-between">
        <p>
          Wishlist(4)
        </p>
        <button className="px-10 py-2 border border-black-200 rounded-sm">
          Move all to Cart
        </button>
      </div>

      <section className="grid justify-items-center grid-cols-4 mt-10 justify">
        {
          flashSales.map((product, index) => (
            <ProductCard key={index} product={product} isWishlist={true} />
          ))
        }
      </section>
    </main>
  )
}

export default Wishlist