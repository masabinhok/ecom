import { Link } from "react-router"
import BrandButton from "../components/BrandButton"


const Error = () => {
  return (
    <main className="max-w-[1320px] w-full flex flex-col p-10">
      <div className="text-sm flex items-center gap-2 mb-10">
        <Link to="/">
          <span className="text-black-400">Home</span>
        </Link>
        /

        <span>
          404 Not Found
        </span>
      </div>
      <section className="flex-center mt-20 flex-col gap-10">
        <h1 className="text-7xl font-bold">404 Not Found</h1>
        <p className="text-sm text-black-400">Your visited page not found. You may go home page.</p>
        <Link to="/" >
          <BrandButton text="Back to Home Page" />
        </Link>
      </section>

    </main >
  )
}

export default Error