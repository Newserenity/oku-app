import Image from "next/image";
import React from "react";
import QuickSearchCard from "./QuickSearchCard";

const recomends = [
  {
    id: 1,
    name: "#디지털 #휴대용기기 #애플",
    description: "애플 디바이스 전체",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    id: 2,
    name: "#문구 #사무용품",
    description: "중고 학용품 전체",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    id: 3,
    name: "#주방 #데코 #요리",
    description: "주방용품 전체",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

function QuickSearch() {
  return (
    <div className="hidden lg:block bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-10 lg:max-w-none lg:py-14">
          <h2 className="text-2xl font-bold text-gray-900">빠른 검색</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {recomends.map((recomends) => (
              <QuickSearchCard
                key={recomends.id}
                id={recomends.id}
                name={recomends.name}
                description={recomends.description}
                imageSrc={recomends.imageSrc}
                imageAlt={recomends.imageAlt}
                href={recomends.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickSearch;
