import { useState } from "react"
import { deleteIcon, eye, heart } from "../assets"
import { Link } from "react-router"

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
  showDelete?: boolean
  showAddToCart?: boolean
  showReviews?: boolean
}

const ProductCard = ({ product, showDelete = false, showAddToCart = false, showReviews = true }: ProductCardProps) => {
  const [hover, setHover] = useState<boolean>(false)
  return (
    <div onMouseEnter={() => {
      setHover(true)
    }}
      onMouseLeave={() => {
        setHover(false)
      }}
      className="max-w-[270px] w-full">
      <div className="relative bg-black-100 flex-center h-[250px] rounded-sm ">
        <img src={product.image} alt="gamepad" className=" object-cover" />
        {
          product.discount !== 0 &&
          <button className="absolute top-2 left-2 bg-brand px-4 py-2 text-white rounded-sm text-xs">
            {product.discount} %OFF
          </button>
        }
        {
          (showAddToCart || hover) && (
            <Link to={`/product-details/${product.id}`} className="absolute bottom-0 py-3 w-full bg-black-900 text-white  text-center text-sm">
              Add to Cart
            </Link>
          )
        }

        {
          !showDelete &&
          (
            <>
              <button className="bg-white-200 absolute top-2 right-2 p-2 rounded-full cursor-pointer ">
                <img src={heart} alt="wishlist_icon" className="size-4" />
              </button>
              <button className="bg-white-200 absolute top-12 right-2 p-2 rounded-full cursor-pointer ">
                <img src={eye} alt="wishlist_icon" className="size-4" />
              </button></>

          )
        }

        {
          showDelete && (
            <button className="bg-white-200 absolute top-2 right-2 p-2 rounded-full cursor-pointer ">
              <img src={deleteIcon} alt="wishlist_icon" className="size-4" />
            </button>
          )
        }


      </div>
      <div className="text-sm font-medium flex flex-col mt-4">
        <p className="">{product.name}</p>
        <div className={`flex ${product.discount ? "flex-col" : "flex-row items-end gap-3"} `}>
          <p className="text-brand mt-2">${
            product.discount ? (product.price - (product.price * product.discount) / 100) : product.price
          }
            {
              product.discount &&
              <span className="text-black-300 line-through ml-2">${product.price}</span>
            }
          </p>
          {
            showReviews &&
            <p className="flex gap-2 items-center mt-1">
              <span className="text-yellow">{product.rating}</span>
              <span className="text-black-300">({product.reviews})</span>
            </p>
          }

        </div>

      </div>
    </div>
  )
}

export default ProductCard