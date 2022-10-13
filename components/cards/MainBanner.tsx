import Link from "next/link";
import React from "react";

function MainBanner() {
  return (
    <div className="hidden lg:block lg:pb-0 bg-gray-100 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between mx-auto max-w-2xl py-10 px-10 border rounded-3xl bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 lg:max-w-none lg:py-14">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            <span className="block">안쓰는 물건을 지금 팔아볼까요?</span>
            <span className="block text-blue-700">지금 바로 시작해 봅시다</span>
          </h2>
          <div className="flex flex-row space-x-3 text-center content-center">
            <Link href="/test">
              <button
                type="submit"
                className="font-semibold text-sm mx-4 my-3 bg-white text-blue-700 hover:bg-gray-100 hover:text-blue-800 rounded-lg px-7 py-2"
              >
                출품하기
              </button>
            </Link>
            <button className="font-semibold text-sm mx-4 my-3 text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-10 py-2 ">
              자세히 알아보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
