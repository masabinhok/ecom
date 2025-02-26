

const Login = () => {
  return (
    <section className="flex-[2] flex flex-col text-sm p-10 mt-20 px-30 max-w-[600px]">
      <h1 className="text-3xl font-medium">Log in to Exclusive</h1>
      <p className="mt-3">Enter your details below</p>

      <form className="flex flex-col gap-10 mt-10 ">
        <input className="outline-none border-b border-black-200" type="email" placeholder="Email or Phone Number" />
        <input className="outline-none border-b border-black-200" type="password" placeholder="Password" />
        <div className="flex items-center justify-between">
          <button className="w-fit px-6 bg-brand text-white py-3 rounded-sm">
            Log in
          </button>
          <p className="text-brand">Forgot Password ?</p>
        </div>

      </form>


    </section>
  )
}

export default Login