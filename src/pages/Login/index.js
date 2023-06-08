import { useNavigate } from "react-router-dom";
import LoginForm from "./login-form";
import { HomeIcon } from "@heroicons/react/20/solid";

export default function Login() {
  const navigate = useNavigate();

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
        <LoginForm />
      </section>
      <section className="order-first p-2 md:h-screen md:w-2/6 lg:w-3/6 md:order-none">
        <img
          src="https://images.unsplash.com/photo-1585951237313-1979e4df7385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="poster"
          className="object-cover w-full h-full shadow-2xl rounded-3xl"
        />
      </section>
      <HomeIcon
        onClick={() => navigate("/")}
        className="w-16 h-16 p-2 text-pink-700 border border-gray-600 rounded-full cursor-pointer hover:scale-110"
      />
    </div>
  );
}
