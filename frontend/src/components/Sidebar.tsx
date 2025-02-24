import { Link } from "react-router"
import { sidebarData } from "../constants"


const Sidebar = () => {
  return (
    <section className="w-fit">
      <ul className="flex flex-col gap-5 p-5 border-r border-black-200 w-full pr-20 ">
        {
          sidebarData.map((item, index) => (
            <Link to={item.link} key={index}>
              <li className="">{item.title}</li>
            </Link>
          ))
        }
      </ul>
    </section>
  )
}

export default Sidebar