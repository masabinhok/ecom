import { Link, NavLink } from "react-router"
import { cart, heart, search } from "../assets"


const NavElem = [{
  name: 'Home',
  link: '/'
}, {
  name: 'About',
  link: '/about'
}, {
  name: 'Contact',
  link: '/contact'
},
{
  name: "Signup",
  link: "/signup"
}]

const Navbar = () => {
  return (
    <section className="bg-white border-b border-gray-200 h-24 flex-center pt-5">
      <nav className="flex items-center justify-between max-w-[1320px] w-full">
        <div className="flex-center">
          <Link to="/">
            <h1 className="font-bold text-xl">Exclusive</h1>
          </Link>
        </div>
        <div>
          <ul className="flex-center gap-10">
            {
              NavElem.map((elem, index) => (
                <NavLink to={elem.link} key={index} 
                className={({isActive})=>isActive ? "underline" : ""}>
                  <li>
                    {elem.name}
                  </li></NavLink>
              ))
            }
          </ul>
        </div>
        <div className="flex-center gap-5">
          <div className="flex-center bg-gray-100 rounded-sm px-4 py-2 w-full">
            <input type="search" placeholder="What are you looking for?" className="text-sm w-[200px] outline-none " />
            <img src={search} alt="search" className="w-6 h-auto cursor-pointer" />
          </div>
          <div className="flex-center gap-5">
            <Link to="/wishlist">
              <img src={heart} alt="wishlist" className="w-7 h-auto object-cover" />
            </Link>
            <Link to="/cart">
              <img src={cart} alt="cart" className="w-10 h-auto object-cover" />
            </Link>
          </div>


        </div>
      </nav>
    </section>
  )
}

export default Navbar