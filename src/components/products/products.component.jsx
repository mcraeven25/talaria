import ProductCard, { PRODUCT_TYPE } from "../../components/product-card/products-card.component";

const Products = ({ title, categories }) => {
 
    return (  
      Object.keys(categories).map((name) => {
        const category = categories[name];
        if (title) {
          if (category.name.toLowerCase().includes(title.toLowerCase())) {
            return <ProductCard productType={PRODUCT_TYPE.base} key={category.id} category={category} />
          }
        } else {
          return <ProductCard productType={PRODUCT_TYPE.base} key={category.id} category={category} />
        }
        })  
    );
}
 
export default Products;