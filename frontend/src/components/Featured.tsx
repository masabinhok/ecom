import { Link } from "react-router"
import { perfume, ps5, speakers, womenCollection } from "../assets"


const Featured = () => {
  return (
    <main className="w-full flex flex-col p-10">
      <div className="flex items-center gap-3">
        <div className="bg-brand w-4 h-8 rounded-sm"></div>
        <div className="text-brand font-semibold">Featured</div>
      </div>

      <div className="w-full  flex items-center mt-5 mb-10 ">
        <h1   className="text-3xl font-semibold">New Arrival</h1>
      </div>

      <section className="flex gap-5 w-full text-white h-[600px]">
        <div className="bg-black flex-[1] p-5 flex items-start justify-end h-full flex-col gap-3 relative ">
          <img src={ps5} alt="ps5 image" className="absolute " />
          <div className="z-10 flex flex-col gap-3">
            <h1 className="font-medium text-xl">PlayStation 5</h1>
            <p className="text-xs font-light">Black and White version of the PS5 <br /> coming out on sale.</p>
            <Link to='/shop/play-station' className="cursor-pointer">
              <p className="underline text-sm  ">Shop Now</p></Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 flex-[1] ">
          <div className="flex-[1] bg-black p-5 flex items-start justify-end h-full flex-col gap-3 relative ">
            <img src={womenCollection} alt="ps5 image" className="absolute right-10 bottom-0" />
            <div className="z-10 flex flex-col gap-3">

              <h1 className="font-medium text-xl">Women's Collection </h1>
              <p className="text-xs font-light">Featured woman collections that  <br /> give you another vibe.</p>
              <Link to='/shop/womens-collection' className="cursor-pointer">
                <p className="underline text-sm ">Shop Now</p></Link>
            </div>
          </div>
          <div className="flex gap-5 flex-[1]">
            <div className="flex-[1] bg-black p-5 flex items-start justify-end h-full flex-col gap-3 relative">
              <img src={speakers} alt="ps5 image" className="absolute size-48" />
              <div className="z-10 flex flex-col gap-3">

                <h1 className="font-medium text-xl">Speakers</h1>
                <p className="text-xs font-light">Amazon wireless speakers</p>
                <Link to='/shop/speakers' className="cursor-pointer">
                  <p className="underline text-sm ">Shop Now</p></Link>
              </div>
            </div>
            <div className="flex-[1] bg-black p-5 flex items-start justify-end h-full flex-col gap-3 relative ">
              <img src={perfume} alt="ps5 image" className="absolute size-48" />
              <div className="z-10 flex flex-col gap-3">
                <h1 className="font-medium text-xl">Perfume</h1>
                <p className="text-xs font-light">GUCCI INTENSE OUD EDP</p>
                <Link to='/shop/perfumes' className="cursor-pointer">
                  <p className="underline text-sm">Shop Now</p></Link>
              </div>
            </div>
          </div>
        </div>
      </section>



    </main >
  )
}

export default Featured