import React from "react";
import Image from "next/image";

interface IProducts {
  id: number;
  name: string;
  href: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

function Product(props: IProducts) {
  return (
    <a key={props.id} href={props.href} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          src={props.imageSrc}
          alt={props.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          layout="fill"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{props.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{props.price}</p>
    </a>
  );
}

export default Product;
