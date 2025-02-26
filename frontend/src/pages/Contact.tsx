import { Link } from "react-router"
import BrandButton from "../components/BrandButton"
import { call, mail } from "../assets"


const Contact = () => {
  return (
    <main className="max-w-[1320px] w-full flex flex-col p-10">
      <div className="text-sm flex items-center gap-2 mb-10">
        <Link to="/">
          <span className="text-black-400">Home</span>
        </Link>
        /
        <span className="">Contact</span>
      </div>

      <section className="mt-10 flex gap-10">

        <div className="flex-[1] p-10 flex flex-col gap-4 text-sm shadow shadow-black-100 rounded-sm text-black-500">
          <div className="flex gap-3 items-center">
            <div className="size-10 flex-center bg-brand rounded-full p-2">
              <img src={call} alt="" className="size-5" />
            </div>
            <p className="text-xl font-medium text-black">Call to Us</p>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +977 9848920299</p>
          <div className="border-b border-black-400 my-5" />

          <div className="flex gap-3 items-center">
            <div className="size-10 flex-center bg-brand rounded-full p-2">
              <img src={mail} alt="" className="size-5" />
            </div>
            <p className="text-xl font-medium text-black">Write to Us</p>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
        <div className="flex-[2] flex p-10 flex-col shadow shadow-black-100 rounded-sm">
          <form className="flex flex-col gap-8 ">
            <div className="flex gap-5 w-full items-center ">
              <input type="text" placeholder="Your Name" required className="bg-black-100 px-4 w-full py-4 rounded-sm text-sm outline-none" />
              <input type="email" placeholder="Your Email" required className="bg-black-100 px-4 w-full py-4 rounded-sm text-sm outline-none" />
              <input type="number" placeholder="Your Phone" required className="bg-black-100 px-4 py-4 w-full rounded-sm text-sm outline-none" />
            </div>
            <div>
              <textarea name="message" id="message" placeholder="Your Message" className="bg-black-100 px-4 py-4 resize-none rounded-sm text-sm outline-none w-full h-52"></textarea>
            </div>
            <div className="flex justify-end">
              <BrandButton text="Send Message" />
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact