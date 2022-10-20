import Link from "next/link";
import React from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  agreement: boolean;
}

function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IRegisterForm>({ mode: "onTouched" });

  function onValid(data: IRegisterForm) {
    console.log(data);
  }

  function onInvalid(errors: FieldErrors) {
    console.log(errors);
  }

  function inputPassword() {
    getValues().password;
  }

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
        <div className="relative p-4 w-full max-w-md h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 py-4">
            <div className="py-10 px-10">
              <h3 className="mb-8 text-2xl font-medium text-gray-900 dark:text-white">
                회원가입
              </h3>
              <form
                className="space-y-6"
                onSubmit={handleSubmit(onValid, onInvalid)}
              >
                {/* name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    닉네임
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name"
                    {...register("name", {
                      required: "닉네임 필드는 필수입니다",
                    })}
                  />
                  <p className="text-red-400 text-xs italic mt-3 ml-1">
                    {errors.name?.message}
                  </p>
                </div>
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
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="user@domain.com"
                    {...register("email", {
                      required: "email 필드는 필수입니다",
                      validate: {
                        // 이미 가입된 이메일인지 검증
                        // existEmail: () => {}
                      },
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
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    {...register("password", {
                      required: "password 필드는 필수입니다",
                      pattern: {
                        message:
                          "password는 8글자이상, 문자, 숫자, 특수문자를 포함해야합니다",
                        value:
                          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                      },
                    })}
                  />
                  <p className="text-red-400 text-xs italic mt-3 ml-1">
                    {errors.password?.message}
                  </p>
                </div>
                {/* password check */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Password 확인
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    type="password"
                    id="passwordCheck"
                    placeholder="••••••••"
                    //if 문은 동작하나 validation을 통과하지 못함
                    // getValues().password;
                    {...register("passwordCheck", {
                      required: "passwordCheck is required",
                      validate: {
                        inputPassword: (value) =>
                          getValues().password == value ||
                          "password가 다릅니다",
                      },
                    })}
                  />
                  <p className="text-red-400 text-xs italic mt-3 ml-1">
                    {errors.passwordCheck?.message}
                  </p>
                </div>

                <div className="flex justify-between">
                  {/* 이용약관 동의 */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        id="agreement"
                        type="checkbox"
                        {...register("agreement", {
                          required: "agreement 필드는 필수입니다",
                        })}
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      이용약관 동의
                    </label>
                  </div>

                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    약관상세내용
                  </a>
                </div>
                <p className="text-red-400 text-xs italic mt-3 ml-1">
                  {errors.agreement?.message}
                </p>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  로그인
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  이미 계정이 있으신가요?{" "}
                  <Link href="/users/login">
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

export default Register;
