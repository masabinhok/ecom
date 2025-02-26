import { useState } from "react"

interface CartItemProps {
  product: {
    id: number
    image: string
    name: string
    price: number
    discount: number
    rating: number
    reviews: number
    stock: number
  },
  quantityAmount: number
}


const CartItem = ({ product, quantityAmount }: CartItemProps) => {
  const [quantity, setQuantity] = useState<number>(quantityAmount)

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <div className='grid grid-cols-4 justify-items-center p-4 px-10 text-sm shadow shadow-black-100'>
      <div className='flex gap-2 items-center '>
        <img src={product.image} alt="" className="size-10" />
        <p>{product.name}</p>
      </div>
      <p>${product.discount !== 0 ? (product.price - (product.discount / 100 * product.price)) : product.price}</p>
      <div className="flex gap-2 items-center">
        <button className="border px-3 py-1 rounded-sm border-black-200 font-bold" onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button className="border px-3 py-1 rounded-sm border-black-200 font-bold" onClick={handleIncrement}>+</button>
      </div>
      <p>${(product.discount !== 0 ? (product.price - (product.discount / 100 * product.price)) : product.price) * quantity}</p>
    </div >
  )
}

export default CartItem