

export default function CartItem({item}) {
  return (
    <>
      <div className="card m-2" style={{width: "210px"}}>
        <img className="card-img-top " src={item.image} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title d-block text-truncate">{item.title}</h4>
          <p className="card-text"><strong>${item.price}</strong></p>
        </div>
      </div>
    </>
  )
}
