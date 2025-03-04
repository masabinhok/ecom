import { Link } from "react-router"
import {  delivery, gamepad0, gamepad1, gamepad2, gamepad3, gamepad5, heart, returnIcon } from "../assets"
import { useState } from "react"
import BrandButton from "../components/BrandButton"
import { flashSales } from "../constants"
import ProductCard from "../components/ProductCard"


const ProductDetails = () => {
  const [quantity, setQuantity] = useState<number>(1)

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1)
    }
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <main className="max-w-[1320px] w-full flex flex-col p-10 mb-20">
      <div className="text-sm flex items-center gap-2 mb-10">
        <Link to="/">
          <span className="text-black-400">Account</span>
        </Link>/
        <Link to="/">
          <span className="text-black-400">Gaming</span>
        </Link>
        /
        <span className="font-medium">Havic HV G-92 Gamepad</span>
      </div>

      <section>
        <div className="flex gap-5 ">
          <div className="flex flex-col gap-5">
            <div className="bg-black-100 flex-center size-34 p-3">
              <img src={gamepad0} alt="" />
            </div>
            <div className="bg-black-100 flex-center size-34 p-3">
              <img src={gamepad1} alt="" />
            </div>
            <div className="bg-black-100 flex-center size-34 p-3">
              <img src={gamepad2} alt="" />
            </div>
            <div className="bg-black-100 flex-center size-34 p-3">
              <img src={gamepad3} alt="" />
            </div>
          </div>
          <div className="bg-black-100 flex-center flex-[3]">
            <img src={gamepad5} alt="" className="object-cover" />
          </div>
          <div className="flex-[2] flex justify-center flex-col gap-3">
            <h1 className="text-2xl font-medium">Havic HV G-92 Gamepad</h1>
            <div className="flex gap-2 text-xs">
              <span className="text-yellow">4.5</span>
              <span className="text-black-300">(23 reviews)</span>
              <span>|</span>
              <span className="text-green">In Stock</span>
            </div>
            <p className="text-2xl">$192.00</p>
            <p className="py-5 border-b text-xs text-black-500">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>

            <div className="flex gap-2 my-3 items-center">
              <p className="mr-5">Colours:</p>
              <button className="size-5 rounded-full bg-brand"></button>
              <button className="size-5 rounded-full bg-light"></button>
            </div>
            <div className="flex gap-2 items-center mb-3">
              <p className="mr-5">Size:</p>
              <button className="text-sm border border-black-400 size-7 rounded-sm p-1">XS</button>
              <button className="text-sm border border-black-400  size-7 rounded-sm p-1">S</button>
              <button className="text-sm border border-black-400 size-7  rounded-sm p-1">M</button>
              <button className="text-sm border border-black-400 size-7  rounded-sm p-1">L</button>
              <button className="text-sm border border-black-400 size-7  rounded-sm p-1">XL</button>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className=" flex ">
                <button className=" p-2 px-4 text-xl rounded-tl-sm rounded-bl-sm bg-brand  text-white" onClick={handleDecrement}>-</button>
                <span className="text-xl font-medium flex-center w-fit px-6 border " >{quantity}</span>
                <button className=" p-2 text-xl px-4 rounded-tr-sm rounded-br-sm bg-brand text-white  " onClick={handleIncrement} >+</button>
              </div>
              <BrandButton text="Buy Now" />
              <button className="border rounded-sm p-2 flex-center">
                <img src={heart} alt="wishlist" className="size-5" />
              </button>
            </div>
            <div className="flex flex-col gap-2 border rounded-md text-sm mt-5">
              <div className="border-b p-3 flex items-center gap-3">
                <img src={delivery} alt="" className="invert" />
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-xs underline">Enter you postal code for Delivery Availability</p>
                </div>
              </div>
              <div className=" p-3 flex items-center gap-3">
                <img src={returnIcon} alt="" className="" />
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-xs underline">Enter you postal code for Delivery Availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center gap-3 mt-20">
        <div className="bg-brand w-4 h-8 rounded-sm"></div>
        <div className="text-brand font-semibold">Related Item</div>
      </div>
      <section className="mt-10 grid justify-items-center grid-cols-4 gap-10">
        {
          flashSales.map((product) => {
            return (
              <ProductCard key={product.id} product={product}  />
            )
          })
        }
      </section>




    </main>
  )
}

export default ProductDetails