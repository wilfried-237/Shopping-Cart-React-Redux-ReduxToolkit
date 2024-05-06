export default function ShopItem({item}) {
  return (
    <>
      <div className="card d-flex" style={{width: "200px"}}>
        <img className="card-img-top" src={item.image} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{item.title}</h4>
          <p className="card-text"><strong>${item.price}</strong></p>
          <button href="#" className="btn btn-primary">
            Add to Card
          </button>
        </div>
      </div>
    </>
  );
}
