import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cart-slice";
import { useEffect } from "react";

export default function ShopItem({item}) {

  const dispatch = useDispatch()
  const {cart} = useSelector(state => state)
  let index;
  console.log(item)

  useEffect(()=>{
    const index = cart.findIndex((product)=> product.id == item.id)
    console.log(index)

  }, [cart])

 function handleAddToCard(){
    dispatch(addToCart(item))
 }

 function handleRemoveFromCard(){
  cart = cart.filter((product)=> product.id == item.id)
}


  return (
    <>
      <div className="card m-2" style={{width: "210px"}}>
        <img className="card-img-top " src={item.image} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title d-block text-truncate">{item.title}</h4>
          <p className="card-text"><strong>${item.price}</strong></p>
          <button onClick={()=> handleAddToCard()} className="btn btn-primary d-block m-auto">
            {cart.findIndex((product)=> product.id == item.id) == -1 ? "Add to cart": "Remove from cart"}
          </button>
        </div>
      </div>
    </>
  );
}
