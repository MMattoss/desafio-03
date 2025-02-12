import closeCartIcon from "../../assets/close-cart-icon.svg"

const ShoppingCartOverlay = () => {
  return <div className="bg-red-600">
    <div className="flex justify-between">
      <h1 className="text-black text-2xl font-semibold">Shopping Cart</h1>
      <img src={closeCartIcon} alt="Close cart" />
    </div>

  </div>
}

export default ShoppingCartOverlay;