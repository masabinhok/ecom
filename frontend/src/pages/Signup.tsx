import { Link } from "react-router"
import { google } from "../assets"


const SignUp = () => {
  return (
    <section className="flex-[2] flex flex-col text-sm p-10 mt-20 px-30 max-w-[600px]">
      <h1 className="text-3xl font-medium">Create an Account</h1>
      <p className="mt-3">Enter your details below</p>

      <form className="flex flex-col gap-10 mt-10 ">
        <input className="outline-none border-b border-black-200" type="name" placeholder="Name" />
        <input className="outline-none border-b border-black-200" type="email" placeholder="Email or Phone Number" />
        <input className="outline-none border-b border-black-200" type="password" placeholder="Password" />
        <button className="w-full bg-brand text-white py-4 rounded-sm">
          Create Account
        </button>
      </form>

      <button className="flex-center gap-2 w-full py-3 border border-black-200 rounded-sm mt-5">
        <img src={google} alt="" />
        Sign up with Google
      </button>

      <p className=" mt-10 text-center text-black-400">Already have an account? <Link className="cursor-pointer font-medium" to="/login"><span className="text-black-700 border-b border-black-200 pb-1 ml-1">Login</span></Link></p>
    </section>
  )
}

export default SignUp