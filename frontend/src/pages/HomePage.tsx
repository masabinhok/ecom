import BestSellers from "../components/BestSellers"
import Categories from "../components/Categories"
import CategoryAd from "../components/CategoryAd"
import Explore from "../components/Explore"
import Featured from "../components/Featured"
import FlashSales from "../components/FlashSales"
import Hero from "../components/Hero"
import Services from "../components/Services"


const HomePage = () => {
  return (
    <main className="max-w-[1320px] w-full">
      <Hero />
      <FlashSales />
      <Categories />
      <BestSellers/>
      <CategoryAd/>
      <Explore/>
      <Featured/>
      <Services/>
    </main>
  )
}

export default HomePage