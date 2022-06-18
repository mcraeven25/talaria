import { useSelector } from 'react-redux';

import { selectProductsMap, selectProductIsLoading } from "../../store/products/products.selector";

import BrandPreview from "../../components/brand-preview/brand-preview.component";
import Spinner from '../../components/spinner/spinner.component';



const BrandsPreview = () => {
  const productsMap = useSelector(selectProductsMap);
  const isLoading = useSelector(selectProductIsLoading);
  return (
    <div>
      {isLoading ? (<Spinner />) :
        (Object.keys(productsMap).map((title) => {
        const products = productsMap[title];
        return <BrandPreview key={title} title={title} products={products} />;
    
        }))
      }
    </div>
  );
};

export default BrandsPreview;
