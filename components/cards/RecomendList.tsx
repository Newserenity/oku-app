import React from "react";
import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

function RecomendList() {
  return (
    <div className="bg-white mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-7">
        혹시 이 물건이 필요하세요?
      </h2>

      <div className="grid grid-cols-4 gap-y-5 gap-x-3 sm:gap-y-6 sm:gap-x-4 lg:grid-cols-5 lg:gap-x-5 xl:grid-cols-6 xl:gap-x-6">
        {products.map((product) => (
          <>
            <Product
              id={product.id}
              href={product.href}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              name={product.name}
              price={product.price}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default RecomendList;
