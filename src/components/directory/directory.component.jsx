import BrandsContainer from "../brands-container/brands-container.component";

import { DirectoryContainer } from "./directory.styles";

const brands = [
  {
    id: 1,
    name: "Nike",
    imageURL:
      "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png",
    route: "shop/nike",
  },
  {
    id: 2,
    name: "Jordan",
    imageURL:
      "https://logos-world.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png",
    route: "shop/jordan",
  },
  {
    id: 3,
    name: "adidas",
    imageURL: "https://pngimg.com/uploads/adidas/adidas_PNG8.png",
    route: "shop/adidas",
  },
  {
    id: 4,
    name: "Under Armour",
    imageURL:
      "https://logos-world.net/wp-content/uploads/2020/04/Under-Armour-Logo.png",
    route: "shop/under armour",
  },
  {
    id: 5,
    name: "Puma",
    imageURL:
      "https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-1980-present.png",
    route: "shop/puma",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {brands.map((brand) => (
        <BrandsContainer key={brand.id} brand={brand} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
