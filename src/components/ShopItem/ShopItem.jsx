import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cart-slice";

export default function ShopItem({item}) {

  const dispatch = useDispatch()

 function handleAddToCard(){
  dispatch(addToCart(item))
 }


  return (
    <>
      <div className="card m-2" style={{width: "210px"}}>
        <img className="card-img-top " src={item.image} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title d-block text-truncate">{item.title}</h4>
          <p className="card-text"><strong>${item.price}</strong></p>
          <button onClick={()=> handleAddToCard()} className="btn btn-primary d-block m-auto">
            Add to Card
          </button>
        </div>
      </div>
    </>
  );
}
