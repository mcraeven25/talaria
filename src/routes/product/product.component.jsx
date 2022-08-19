import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';


import { fetchProductsStart } from "../../store/products/products.action";
import { selectProductsMap } from "../../store/products/products.selector";

import ProductItem from "../../components/product-item/product-item.component";

const Product = () => {
    const productsMap = useSelector(selectProductsMap);
    const [productsArray, setProducts] = useState([]);

    const { id } = useParams();

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchProductsStart());
    }, [dispatch]);
  
 
    useEffect(() => {
        setProducts([])
     // eslint-disable-next-line
     Object.keys(productsMap).map(key => {
        const productMap = productsMap[key];
     // eslint-disable-next-line
     Object.keys(productMap).map((category) => {
        const categories = productMap[category];
     // eslint-disable-next-line
    Object.keys(categories).map((product) => {
        const products = categories[product];
        setProducts(productsArray => [...productsArray, products])
   })
    })
   })
    }, [productsMap,id]);
    
    return ( 
        <div>
            {
                productsArray.map(product => {
                    
                    if (product.id == id) {
                       
                    return <ProductItem key={product.id} product={product} />
                    }
               })
                    
            }
        </div>
     );
}
 
export default Product;