import { Link } from "react-router"
import { gamepad, monitor } from "../assets"
import BrandButton from "../components/BrandButton"


const Checkout = () => {
  return (
    <main className="max-w-[1320px] w-full flex flex-col p-10 mb-20">
      <div className="text-sm flex items-center gap-2 mb-10">
        <Link to="/account">
          <span className="text-black-400">Account</span>
        </Link>
        /
        <Link to="/account">
          <span className="text-black-400">Product</span>
        </Link>
        /
        <Link to="/account">
          <span className="text-black-400">Cart</span>
        </Link>
        /
        <Link to="/account">
          <span className="text-black-400">Checkout</span>
        </Link>
      </div>

      <section className="flex justify-between mt-10 items-center">
        <div className="flex-[1] flex flex-col gap-5 max-w-[500px]">
          <h1 className="text-3xl font-medium">Billing Details</h1>
          <form className="flex flex-col gap-5">
            <label htmlFor="firstName" className="flex flex-col gap-1">
              <span className="text-xs text-black-300">First Name</span>
              <input type="text" id="firstName" name="firstName" className="outline-none p-2 px-4 bg-gray-100 rounded-sm w-full" />
            </label>
            <label htmlFor="companyName" className="flex flex-col gap-1">
              <span className="text-xs text-black-300">Company Name</span>
              <input type="text" id="companyName" name="companyName" className="outline-none p-2 px-4 bg-gray-100 rounded-sm w-full" />
            </label>
            <label htmlFor="streetAddress" className="flex flex-col gap-1">
              <span className="text-xs text-black-300">Street Address</span>
              <input type="text" id="streetAddress" name="streetAddress" className="outline-none p-2 px-4 bg-gray-100 rounded-sm w-full" />
            </label>
            <label htmlFor="apartmentFloor" className="flex flex-col gap-1">
              <span className="text-xs text-black-300">Apartment, floor etc (optional)</span>
              <input type="text" id="apartmentFloor" name="apartmentFloor" className="outline-none p-2 px-4 bg-gray-100 rounded-sm w-full" />
            </label>
            <label htmlFor="townCity" className="flex flex-col gap-1">
              <span className="text-xs text-black-300">Town City</span>
              <input type="text" id="townCity" name="townCity" className="outline-none p-2 px-4 bg-gray-100 rounded-sm w-full" />
            </label>
            <label htmlFor="phoneNumber" className="flex flex-col gap-1">
              <span className="text-xs text-black-300">Phone Number</span>
              <input type="text" id="phoneNumber" name="phoneNumber" className="outline-none p-2 px-4 bg-gray-100 rounded-sm w-full" />
            </label>
            <label htmlFor="email" className="flex flex-col gap-1">
              <span className="text-xs text-black-300">Email Address</span>
              <input type="text" id="email" name="email" className="outline-none p-2 px-4 bg-gray-100 rounded-sm w-full" />
            </label>
          </form>
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <span className="text-xs text-black-900">Save this information for faster checkout next time.</span>
          </div>
        </div>
        <div className="flex-[1] flex flex-col gap-5 text-sm max-w-[400px]" >
          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <img src={monitor} alt="monitor" className="size-10 " />
              <span>LCD MONITOR</span>
            </div>
            <div>$650</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <img src={gamepad} alt="gamepad" className="size-10 " />
              <span>Gamepad</span>
            </div>
            <div>$1100</div>
          </div>
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

          <div className="flex flex-col gap-3">
            <label htmlFor="paymentType" className="flex gap-3 items-center">
              <input id="paymentType" name="bank" type="radio" className="" />
              <span id="paymentType">Bank</span>
            </label>
            <label htmlFor="paymentType" className="flex gap-3 items-center">
              <input id="paymentType" name="bank" type="radio" className="" />
              <span id="paymentType">Cash on Delivery</span>
            </label>
          </div>
          <div className="flex items-center gap-5">
            <input type="text" className="border-2 border-black-200 w-[300px] py-3 px-4 text-sm" placeholder="Coupon Code" />
            <button className="text-white text-sm bg-brand py-3 rounded-sm px-6 w-fit whitespace-nowrap ">
              Apply Coupon
            </button>
          </div>
          <BrandButton text="Place Order" />

        </div>
      </section>

    </main>
  )
}

export default Checkout