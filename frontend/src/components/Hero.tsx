import { Link } from "react-router"
import { heroImages } from "../constants"
import { useEffect, useState } from "react"
import Sidebar from "./Sidebar";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => ((prev + 1) % heroImages.length))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [currentImage])
  return (
    <main className="w-full flex">
      <Sidebar />
      <section className="flex items-center justify-center p-10 flex-[4]">
        <div className="relative">
          <Link to={heroImages[currentImage].link}>
            <img src={heroImages[currentImage].src} alt="" className="object-cover aspect-[16:9] rounded-sm " />
          </Link>
          <div className="absolute bottom-5 left-50 right-50 flex-center gap-5">
            {heroImages.map((image, index) => {
              return (
                <div>
                  <button onClick={() => {
                    setCurrentImage(index)
                  }} className={`size-3 rounded-full ${currentImage === index ? "bg-white-100" : "bg-black-200"
                    }`}>
                  </button>
                  <img src={image.src} className="hidden size-0" alt="hidden_image" />
                </div>
              )
            })}
          </div>
        </div>

      </section>
    </main>
  )
}

export default Hero