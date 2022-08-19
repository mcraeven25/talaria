import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import ProductCard, { PRODUCT_TYPE } from '../product-card/products-card.component'

import {Preview, CategoryContainer} from './category.styles'


const Category = ({ categories, names,title}) => {
    const navigate = useNavigate()

    const navigateHandler = () => navigate(`${title}/${names}`)

    return (    
        <CategoryContainer>
            <h2 onClick={navigateHandler}>{names}</h2>
            <Preview>
                {Object.keys(categories).map(keys => {
             console.log(categories)
             if (keys <= 2) {
                 const category = categories[keys];
                 return <ProductCard productType={PRODUCT_TYPE.shop} key={category.id} category={category} />
             }
        }
         )}
        </Preview>  
            
        </CategoryContainer>
     );
}
 
export default Category;