import ProductCard from "../components/ProductCard"
import Sidebar from "../components/Sidebar"
import { products } from "../constants"


const Shop = () => {
  return (
    <main className=" max-w-[1320px] w-full flex">
      <Sidebar />
      <section className=" flex items-center justify-center p-10">
        <div className="grid grid-cols-4 gap-10">
          {
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default Shop