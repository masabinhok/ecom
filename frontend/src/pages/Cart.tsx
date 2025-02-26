import CartItem from "../components/CartItem"
import { flashSales } from "../constants"

const Cart = () => {
  return (
    <main className="max-w-[1320px] w-full flex flex-col p-10">
      <div className="text-sm flex items-center gap-2 mb-10">
        <span className="text-black-400">Home</span>
        /
        <span className="">Cart</span>
      </div>
      <section>
        <div className="grid grid-cols-4 text-sm p-4 px-10 shadow shadow-black-100  justify-items-center">
          <h1>Product</h1>
          <h1>Price</h1>
          <h1>Quantity</h1>
          <h1>Subtotal</h1>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          {
            flashSales.map((product, index) => (
              <CartItem key={index} product={product} quantityAmount={1} />
            ))
          }
        </div>
       
      </section>
    </main>
  )
}

export default Cart