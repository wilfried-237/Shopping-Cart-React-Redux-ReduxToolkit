import { useEffect, useState } from "react"
import ShopItem from "../../components/ShopItem/ShopItem";


export default function Home() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData(){
    try{
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const getData = await response.json();

      if(getData){
        setData(getData);
        setLoading(false);
        setError(null);
      }

    }catch(e){
        setError(e.message);
        setLoading(false);
    }
  }

  useEffect(()=>{
    fetchData();
  }, [])

    if(error) return <div>An Error Occured ! {error}</div>
  
    if(loading) return <div className="spinner-border text-primary"></div>

    console.log(data)
  
  
    
  

  return (
    <div className="home d-inline-flex">
      {
        data && data.length>0 ? 
          data.map((item)=> <ShopItem key={item.id} item={item} />)
        :null
      }
    </div>
  )
}
