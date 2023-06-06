import React from "react";
import { BsFillPersonFill, BsKeyFill } from "react-icons/bs";

export default function Login() {
  return (
    <div className="flex flex-col items-center h-screen md:flex-row">
      <section className="text-center my-14 md:w-4/6 lg:w-3/6 sm:my-12 md:p-16">
        <h1 className="text-4xl font-extrabold text-center md:text-[46px] text-pink-800 dark:text-white">
          Sign in{" "}
          <span className="text-[20px] md:text-[26px] text-gray-900">
            to your account
          </span>{" "}
        </h1>
        <h2 className="text-sm md:text-[14px] font-thin opacity-80">
          Let's go on the fantasy world{" "}
        </h2>
        <form className="max-w-md mx-auto my-10 text-center">
          <label
            for="input-group-1"
            class="block mb-2 text-sm md:text-lg font-semibold text-gray-900 dark:text-white"
          >
            Username
          </label>
          <div class="relative mb-6">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsFillPersonFill className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="input-group-1"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@gmail.com.com"
              required
            />
          </div>
          <label
            for="input-group-"
            class="block mb-2 md:text-lg text-sm font-semibold text-gray-900 dark:text-white"
          >
            Password
          </label>
          <div class="relative mb-6">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsKeyFill className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="password"
              id="input-group-2"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>
          <button
            type="submit"
            class="text-white bg-gray-700 transition-all hover:bg-pink-800 hover:scale-105 focus:ring-4 focus:outline-none mt-4 font-medium rounded-full text-sm md:text-lg md:mt-4 md:w-full w-5/6 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </section>
      {/* Poster image */}
      <section className="order-first p-2 md:h-screen md:w-2/6 lg:w-3/6 md:order-none">
        <img
          src="https://images.unsplash.com/photo-1585951237313-1979e4df7385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="poster"
          className="object-cover w-full h-full shadow-2xl rounded-3xl"
        />
      </section>
    </div>
  );
}
