import { Link } from "react-router"
import { appstore, send, playstore, qrcode } from "../assets"
import { footerData, socials } from "../constants"


const Footer = () => {
  return (
    <main className="w-full bg-black-800 text-white-100 flex flex-col items-center justify-center gap-5 p-5 fixed bottom-0 z-50 ">
      <section className=" grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full max-w-[1320px] text-sm mt-10 ">
        <ul className="flex flex-col  p-5 ">
          <li className="font-bold text-xl">Exclusive</li>
          <li className="text-lg mt-5 text-white-400">Subscribe</li>
          <li className="mt-4 mb-2 text-white-500">Get 10% off your first order</li>
          <li className="border-white-100 border-2 rounded-sm p-3 pl-4 flex flex-row items-center justify-between w-fit ">
            <input type="text" placeholder="Enter your email" className="outline-none text-black-400" />
            <button onClick={() => alert("Subscribed")}>
              <img src={send} alt="send" className="size-4 pointer-cursor" />
            </button>
          </li>
        </ul>

        {
          footerData.slice(0, 1).map((data, index) => (
            <ul key={index} className="flex flex-col gap-5 p-5">
              <li className="text-lg">{data.title}</li>
              {
                data.links.map((link, index) => (
                  <li className="text-white-500" key={index}>{link.title}</li>
                ))
              }
            </ul>
          ))
        }
        {
          footerData.slice(1, 3).map((data, index) => (
            <ul key={index} className="flex flex-col gap-5 p-5">
              <li className="text-lg">{data.title}</li>
              {
                data.links.map((link, index) => (
                  <Link to={`${link.link}`} key={index}>
                    <li className="text-white-500">{link.title}</li>
                  </Link>
                ))
              }
            </ul>
          ))
        }

        <div className="flex flex-col gap-2 p-5">
          <div className="flex flex-col">
            <h1 className="text-lg">Download App</h1>
            <p className="text-black-400 mt-5"> Save $3 with App New User Only</p>
          </div>
          <div className="flex gap-2">
            <div>
              <img src={qrcode} alt="qrcode" className="w-20 h-auto rounded-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <img src={appstore} alt="appstore-download" className="object-cover" />
              <img src={playstore} alt="playstore-download" className="object-cover" />
            </div>
          </div>
          <div className="flex mt-5 items-center gap-5 ">
            {
              socials.map((social, index) => (
                <Link key={index} to={social.link} target="_blank" rel="noreferrer">
                  <img src={social.icon} alt={social.title} />
                </Link>
              ))
            }

          </div>

        </div>

      </section>
      <section className="flex items-center justify-center p-5">
        <p className="text-center text-black-400">&#169; Copyright 2025. All right reserved.</p>
      </section>
    </main>
  )
}

export default Footer