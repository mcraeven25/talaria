import { Fragment } from "react";
import Slider from "react-slick";


import ProductCard from "../product-card/products-card.component";
import CarouselItem from "../carousel-item/carousel-item.component";


const Carousel = ({ products }) => {
   
     const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
    <Slider {...settings}>
            {products.filter((product) => {
             if (product.id === 19 || product.id === 7 ||  product.id === 13 ||  product.id === 5 || product.id === 27) {
                 return product;
              }
            }).map(category => <CarouselItem key={category.id} category={category} /> )   
                    }
                 
     </Slider>

    );


}
 
export default Carousel;