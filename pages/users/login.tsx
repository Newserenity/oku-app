import React from "react";

function login() {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
        <div className="relative p-4 w-full max-w-md h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 py-4">
            <div className="py-10 px-10">
              <h3 className="mb-8 text-2xl font-medium text-gray-900 dark:text-white">
                로그인
              </h3>
              <form className="space-y-6" action="#">
                {/* email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                  />
                </div>
                {/* password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>

                <div className="flex justify-between">
                  {/* 로그인 상태 유지 */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      로그인 상태 유지
                    </label>
                  </div>

                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    로그인에 문제가 있나요?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  로그인
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  계정이 없으신가요?{" "}
                  <a
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    회원가입
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
