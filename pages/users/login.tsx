import Link from "next/link";
import { useState } from "react";
import {
  appendErrors,
  FieldErrors,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

// less cdoe
// don't deal with event
//react hook form

//유저가 입력하기 시작하면 트리거됨
//

interface ILoginForm {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ mode: "onTouched" });

  function onValid(data: ILoginForm) {
    console.log(data);
  }

  function onInvalid(errors: FieldErrors) {
    console.log(errors);
  }

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
        <div className="relative p-4 w-full max-w-md h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 py-4">
            <div className="py-10 px-10">
              <h3 className="mb-8 text-2xl font-medium text-gray-900 dark:text-white">
                로그인
              </h3>
              <form
                className="space-y-6"
                onSubmit={handleSubmit(onValid, onInvalid)}
              >
                {/* email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@email.com"
                    type="email"
                    {...register("email", {
                      required: "email 필드는 필수입니다",
                      pattern: {
                        message: "이메일 형식이 올바르지 않습니다",
                        value:
                          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      },
                    })}
                  />
                  <p className="text-red-400 text-xs italic mt-3 ml-1">
                    {errors.email?.message}
                  </p>
                </div>
                {/* password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 }dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="••••••••"
                    type="password"
                    {...register("password", {
                      required: "Password 필드는 필수입니다",
                    })}
                  />
                  <p className="text-red-400 text-xs italic mt-3 ml-1">
                    {errors.password?.message}
                  </p>
                </div>

                <div className="flex justify-between">
                  {/* 로그인 상태 유지 */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        type="checkbox"
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
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="submit"
                >
                  로그인
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  계정이 없으신가요?{" "}
                  <Link href="/users/register">
                    <a
                      href="#"
                      className="text-blue-700 hover:underline dark:text-blue-500"
                    >
                      회원가입
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
