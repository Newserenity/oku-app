import Image from "next/image";
import React from "react";

interface IRecomend {
  id: number;
  name: string;
  href: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

function QuickSearchCard(props: IRecomend) {
  return (
    <div key={props.id} className="group relative">
      <div className="relative h-40 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 aspect-w-3 aspect-h-1">
        <Image
          src={props.imageSrc}
          alt={props.imageAlt}
          className="h-full w-full object-cover object-center"
          layout="fill"
        />
      </div>
      <h3 className="mt-6 text-md text-gray-500">
        <a href={props.href}>
          <span className="absolute inset-0" />
          {props.name}
        </a>
      </h3>
      <p className="text-lg font-bold text-gray-900">{props.description}</p>
    </div>
  );
}

export default QuickSearchCard;
