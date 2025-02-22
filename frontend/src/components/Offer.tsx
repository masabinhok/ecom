import { NavLink } from "react-router"


const Offer = () => {
  return (
    <div className="bg-black text-white w-full h-10 flex-center text-sm ">
      <div className="flex-center gap-2 ">
        <h1 >Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
        <NavLink to="/product-details/swimsuits" className="font-semibold underline">ShopNow</NavLink>
      </div>
      <div className="ml-52">
        <select name="language" id="language" className="bg-black text-white curosr-pointer">
          <option value="eng">English</option>
          <option value="nep">Nepali</option>
        </select>
      </div>

    </div>
  )
}

export default Offer