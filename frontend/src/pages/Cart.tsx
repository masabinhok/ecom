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
      <div className="flex items-center justify-between mt-10">
        <button className="border-2 border-black-200 px-10 py-3 rounded-sm text-sm ">
          Continue Shopping
        </button>
        <button className="border-2 border-black-200 px-10 py-3 rounded-sm text-sm ">
          Update Cart
        </button>
      </div>
      <section className="flex justify-between items-start mt-20">
        <div className="flex items-center gap-5">
          <input type="text" className="border-2 border-black-200 w-[300px] py-3 px-4 text-sm" placeholder="Coupon Code" />
          <button className="text-white text-sm bg-brand px-10 py-3 rounded-sm ">
            Apply Coupon
          </button>
        </div>
        <div className="border-2 border-black-700 max-w-[400px] rounded-sm w-full p-5 text-sm flex flex-col gap-5">
          <h1 className="font-medium text-lg">Cart Total</h1>
          <div className="flex justify-between pb-1 border-b-2 border-black-200 text-sm">
            <p>Subtotal:</p>
            <p>$3000</p>
          </div>
          <div className="flex justify-between pb-1 border-b-2 border-black-200 text-sm">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between  text-sm">
            <p>Total:</p>
            <p>$3000</p>
          </div>
          <button className="text-white text-sm bg-brand px-6 py-3 rounded-sm self-center w-fit ">
            Proceed to Checkout
          </button>

        </div>
      </section>
    </main>
  )
}

export default Cart