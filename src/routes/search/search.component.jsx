import { useState, useEffect, Fragment} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { fetchProductsStart } from "../../store/products/products.action";

import { selectProductsMap, selectProductIsLoading} from "../../store/products/products.selector";

import ProductCard from "../../components/product-card/products-card.component"
import Spinner from "../../components/spinner/spinner.component"

import { BrandContainer as ProductContainer } from "../brands/brand.styles"

import { SearchContainer } from "./search.styles";

const Search = () => {  
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProductsStart());
    }, [dispatch]);

    const productsMap = useSelector(selectProductsMap);
    const isLoading = useSelector(selectProductIsLoading);
    const [productsArray, setProducts] = useState([]);
    const [searchParams] = useSearchParams();

    const query = searchParams.get('name');

    useEffect(() => {
        setProducts([])
    Object.keys(productsMap).map(key => {
        const productMap = productsMap[key];
    Object.keys(productMap).map((category) => {
        const categories = productMap[category];
    Object.keys(categories).map((product) => {
        const products = categories[product];
        setProducts(productsArray => [...productsArray, products])
   })
    })
   })
    }, [productsMap,query]);


    
    
    return ( 
        <SearchContainer>
            <h2>Searchs Resuslts for: {`"${query}"`}</h2>
        <ProductContainer>
            {isLoading ? (<Spinner />) :
                (
                    productsArray.filter((_, idx) => _.name.toLowerCase().includes(query)).map(category =>(
                     <ProductCard key={category.id} category={category} />
                    ))
                )
            }
            </ProductContainer>
        </SearchContainer>
     );
}
 
export default Search;