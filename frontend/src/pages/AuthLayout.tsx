import { Outlet } from "react-router"
import { loginSnap } from "../assets"


const AuthLayout = () => {
  return (
    <main className="flex justify-between w-full py-10">
      <div className="bg-light flex-[3] h-[781px]">
        <img src={loginSnap} alt="login_snap_image" className="h-[701px]" />
      </div>
      <Outlet />
    </main>
  )
}

export default AuthLayout