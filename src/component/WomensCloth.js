
import { useEffect, useState } from "react";
import {useNavigate,} from 'react-router';



function WomensClothProduct(){

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        fetch("https://fakestoreapi.com/products/category/women's%20clothing")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])
    const Navegar =(id) => {
        navigate(`/ProductDetails/${id}`);
    };


    const womensclothProducts = data.map((values) =>
        <span><div onClick={ () =>Navegar(values.id) }><b>{values.id}
    {values.title}</b></div>
    <br/>
    <div className="container2">
    <img className="womensclothImage"src={values.image} alt={values.title}/>
    <span className="description">{values.description}</span></div> </span>  
    )
    return (
        <>
            <h3>womenscloth Products</h3>
            <div>
                {data.length > 0 ? (
                <div className="womensclothStyle">{womensclothProducts}</div>

                ) : <h3>Loading...</h3>}
            </div>
        </>

    );
    
        

} export default WomensClothProduct;