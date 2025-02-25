import { eye, heart } from "../assets"

interface ProductCardProps {
  product: {
    id: number
    image: string
    name: string
    price: number
    discount: number
    rating: number
    reviews: number
  },
  showDiscount: boolean,
}

const ProductCard = ({ product, showDiscount }: ProductCardProps) => {
  return (
    <div className="max-w-[270px] w-full">
      <div className="relative bg-black-100 flex-center h-[250px] rounded-sm ">
        <img src={product.image} alt="gamepad" className=" object-cover" />
        {
          showDiscount &&
          <button className="absolute top-2 left-2 bg-brand px-4 py-2 text-white rounded-sm text-xs">
            {((product.price - product.discount) / product.price * 100).toFixed(2)}% off
          </button>
        }

        <button className="bg-white-200 absolute top-2 right-2 p-2 rounded-full cursor-pointer ">
          <img src={heart} alt="wishlist_icon" className="size-4" />
        </button>
        <button className="bg-white-200 absolute top-12 right-2 p-2 rounded-full cursor-pointer ">
          <img src={eye} alt="wishlist_icon" className="size-4" />
        </button>
      </div>
      <div className="text-sm font-medium flex flex-col mt-4">
        <p className="">{product.name}</p>
        <p className="text-brand mt-2">${product.discount} <span className="text-black-300 line-through">${product.price}</span></p>
        <p className="flex gap-2 items-center mt-1">
          <span className="text-yellow">{product.rating}</span>
          <span className="text-black-300">({product.reviews})</span>
        </p>
      </div>
    </div>
  )
}

export default ProductCard