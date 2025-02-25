import Categories from "../components/Categories"
import FlashSales from "../components/FlashSales"
import Hero from "../components/Hero"


const HomePage = () => {
  return (
    <main className="max-w-[1320px] w-full">
      <Hero />
      <FlashSales />
      <Categories />
    </main>
  )
}

export default HomePage