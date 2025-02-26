

const BrandButton = ({ text }: { text: string }) => {
  return (
    <button className="bg-brand text-white text-sm rounded-sm px-10 py-3">
      {text}
    </button>
  )
}

export default BrandButton