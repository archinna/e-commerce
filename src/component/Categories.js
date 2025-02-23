import { useState, useEffect } from "react";
import React from "react";
import "./Project.css";
import { Outlet, Link } from "react-router-dom";


function ProductCategories() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    // const categoryElement = [];

    // for (let i = 0; i < data.length; i++) {
    //     categoryElement.push(<li class="display_categories">{data[i].toUpperCase()}</li>)
    // }

    const categoryElement= data.map((values)=>
            <li>
            <Link to={`/${values}`}>{values.toUpperCase()}</Link>          
            </li> 
    )
    return (
        <>
            <div class="container">
            <h2><u><i>Categories : </i></u></h2>           
            <div class="display_categories">
                {data.length > 0 ? (
                    <ul class='categoryElement'>{categoryElement}</ul>
                ) : (<h3>Loading....</h3>)
                }
            </div>            
            <p><i>Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app.</i></p> 
            <p><i>Consumers find a product of interest by visiting the website of the retailer directly or by searching among alternative vendors using a shopping search engine, which displays the same product's availability and pricing at different e-retailers. As of 2020, customers can shop online using a range of different computers and devices, including desktop computers, laptops, tablet computers and smartphones.</i></p>
            </div> 
            </>   
    );
} export default ProductCategories; 