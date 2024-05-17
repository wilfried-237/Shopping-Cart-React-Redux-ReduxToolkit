import { useSelector } from "react-redux"
import CartItem from "../../components/cartItem";


export default function Cart() {

  const {cart} = useSelector(state=> state);
  console.log(cart)

  return (
    <>
    <div className="text-center m-2">Cart</div>
    <div className="home d-inline-flex">
      {
        cart && cart.length>0 ? 
        cart.map((item)=> <CartItem key={item.id} item={item} />)
        :null
      }
    </div>
    </>
  )
}
