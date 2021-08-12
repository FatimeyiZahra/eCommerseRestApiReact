import React,{ useEffect, useState} from 'react'
import axios from 'axios';

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState([]);
    useEffect((id) => {
        axios
          .get("https://localhost:44368/v1/homepage/product/${id}")
          .then((res) => setProductDetails(res.data));
      }, []);
    return (
        <div>
            {
                productDetails&& productDetails.map(details=>(
                    <div>
                        <ul>
                            <li>{details.desc}</li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductDetails
