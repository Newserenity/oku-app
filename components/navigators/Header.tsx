import {
  HeartIcon,
  UserCircleIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";
import EventBar from "./EventBar";
import Link from "next/link";

const navigation = {
  categories: [
    {
      id: "HOME",
      name: "HOME",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

function Header() {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <EventBar />
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-row justify-between border-b border-gray-200">
          <div className="">
            <div className="flex h-16 items-center">
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-10">
                  <a
                    href="#"
                    className="text-lg font-bold text-gray-700 hover:text-gray-800"
                  >
                    OKU PLATFORM
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    매거진
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    고객센터
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex h-16 mr-3 items-center">
              <div className="ml-auto flex items-center">
                <div className=" lg:hidden">
                  <a
                    href="#"
                    className="text-lg font-bold text-gray-700 hover:text-gray-800"
                  >
                    OKU
                  </a>
                </div>
              </div>
            </div>
          </div>

          <SearchBar></SearchBar>

          <div className="hidden sm:flex">
            <div className="flex h-16 items-center">
              <div className="ml-auto flex items-center">
                <div className="flex flex-1 items-center justify-end space-x-6">
                  <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    <Link href="/users/login">로그인</Link>
                  </a>
                  <span className="h-6 w-px bg-gray-200" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    회원가입
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Like */}
          <div className="flex flex-row sm:hidden">
            <a href="#" className="group -m-2 flex items-center p-2">
              <Link href="/users/login">
                <UserCircleIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
              </Link>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
