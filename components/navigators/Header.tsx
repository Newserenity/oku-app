import { UserCircleIcon } from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";
import EventBar from "./EventBar";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <EventBar />
        <nav className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-row justify-between border-b border-gray-200">
          <div className="">
            <div className="flex h-16 items-center">
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-10">
                  <Link href="/">
                    <a className="text-lg font-bold text-gray-700 hover:text-gray-800">
                      OKU PLATFORM
                    </a>
                  </Link>
                  <Link href="/magazin">
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      매거진
                    </a>
                  </Link>
                  <Link href="/support">
                    <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      고객센터
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="my-auto flex items-center">
            <div className=" lg:hidden">
              <Link href="/">
                <a className="text-lg font-bold text-gray-700 hover:text-gray-800">
                  OKU
                </a>
              </Link>
            </div>
          </div>

          <SearchBar></SearchBar>

          <div className="hidden px-12 sm:flex">
            <div className="flex h-16 items-center">
              <div className="ml-auto flex items-center">
                <div className="flex flex-1 items-center justify-end space-x-6">
                  <Link href="/users/login">
                    <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      로그인
                    </a>
                  </Link>
                  <span className="h-6 w-px bg-gray-200" />
                  <Link href="/users/register">
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      회원가입
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Like */}
          <div className="flex flex-row sm:hidden">
            <Link href="/users/login">
              <a href="#" className="group -m-2 flex items-center p-2">
                <UserCircleIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
              </a>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
