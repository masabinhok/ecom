import BestSellers from "../components/BestSellers"
import Categories from "../components/Categories"
import CategoryAd from "../components/CategoryAd"
import FlashSales from "../components/FlashSales"
import Hero from "../components/Hero"


const HomePage = () => {
  return (
    <main className="max-w-[1320px] w-full">
      <Hero />
      <FlashSales />
      <Categories />
      <BestSellers/>
      <CategoryAd/>
    </main>
  )
}

export default HomePage