import { Link } from "react-router"; // Fixed import
import BrandButton from "../components/BrandButton";

const Account = () => {
  return (
    <main className="max-w-[1320px] w-full flex flex-col p-10 mb-20">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between">
        <div className="text-sm flex items-center gap-2 mb-10">
          <Link to="/">
            <span className="text-black-400">Home</span>
          </Link>
          /
          <Link to="/account">
            <span className="text-black-400">My Account</span>
          </Link>
        </div>
        <div >
            <h2 className="text-sm text-brand font-medium">Sabin Shrestha</h2>
        </div>
      </div>


      <section className="flex gap-10 text-sm">
        {/* Sidebar */}
        <div className="flex-[1] flex flex-col">
          <div className="mb-3">
            <h1 className="font-medium mb-3">Manage My Account</h1>
            <div className="px-5 flex flex-col gap-2 text-black-300">
              <Link to="/account">My Profile</Link>
              <Link to="/account">Address Book</Link>
              <Link to="/account">My Payment Options</Link>
            </div>
          </div>

          <div className="mb-3">
            <h1 className="font-medium mb-3">My Orders</h1>
            <div className="px-5 flex flex-col gap-2 text-black-300">
              <Link to="/account">My Returns</Link>
              <Link to="/account">My Cancellations</Link>
            </div>
          </div>

          <div className="mb-3">
            <h1 className="font-medium mb-3">My Wishlist</h1>
          </div>
        </div>

        {/* Profile Form */}
        <div className="flex-[3] flex flex-col shadow shadow-black-100 rounded-sm p-10">
          <h2 className="text-brand font-medium mb-5 text-lg">Edit Your Profile</h2>
          <form className="w-full space-y-5">
            {/* Name Fields */}
            <div className="flex items-center gap-10">
              <label htmlFor="firstName" className="flex flex-col gap-1 w-full">
                <span className="text-xs text-black-300">First Name</span>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="outline-none p-2 px-4 bg-gray-100 rounded-sm w-full"
                />
              </label>
              <label htmlFor="lastName" className="flex flex-col gap-1 w-full">
                <span className="text-xs text-black-300">Last Name</span>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="outline-none p-2 px-4 bg-gray-100 rounded-sm w-full"
                />
              </label>
            </div>

            {/* Email & Address */}
            <div className="flex items-center gap-10">
              <label htmlFor="email" className="flex flex-col gap-1 w-full">
                <span className="text-xs text-black-300">Email</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="outline-none p-2 px-4 bg-gray-100 rounded-sm w-full"
                />
              </label>
              <label htmlFor="address" className="flex flex-col gap-1 w-full">
                <span className="text-xs text-black-300">Address</span>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="outline-none p-2 px-4 bg-gray-100 rounded-sm w-full"
                />
              </label>
            </div>

            {/* Password Change */}
            <div className="flex flex-col gap-3 text-sm">
              <span className="font-medium text-black-400">Change Password</span>
              <label htmlFor="currentPassword" className="flex flex-col gap-1">
                <span className="text-xs text-black-300">Current Password</span>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  className="outline-none p-2 px-4 bg-gray-100 rounded-sm w-full"
                />
              </label>
              <label htmlFor="newPassword" className="flex flex-col gap-1">
                <span className="text-xs text-black-300">New Password</span>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  className="outline-none p-2 px-4 bg-gray-100 rounded-sm w-full"
                />
              </label>
              <label htmlFor="confirmPassword" className="flex flex-col gap-1">
                <span className="text-xs text-black-300">Confirm Password</span>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="outline-none p-2 px-4 bg-gray-100 rounded-sm w-full"
                />
              </label>
            </div>

            <div className="flex justify-end items-center gap-5">
              <button className="text-sm shadow shadow-black-100 py-3 px-6 rounded-sm">
                Cancel
              </button>
              <BrandButton text="Save Changes" />
            </div>

          </form>
        </div>
      </section>
    </main>
  );
};

export default Account;
