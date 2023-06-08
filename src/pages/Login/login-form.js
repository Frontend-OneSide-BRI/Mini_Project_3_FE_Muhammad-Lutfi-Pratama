import { useState, Fragment } from "react";
import { BsFillPersonFill, BsKeyFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "src/components/Atom/AnimatedIcon/loading-icon";
import generateTokenAPI from "src/services/Auth/auth";
import { setTokenAPI } from "src/services/Auth/auth-slice";

export default function LoginForm() {
  const navigate = useNavigate();
  let [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });
  let [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();


  const handleUserInput = e => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerateToken = async () => {
    setIsLoading(true);
    let token = await generateTokenAPI();

    if (token.success) {
      setIsLoading(false);
      localStorage.setItem("token", token.request_token);
      navigate("/browse");
      dispatch(setTokenAPI(token));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleGenerateToken();
  };

  return (
    <Fragment>
      <form
        className="max-w-md mx-auto my-10 text-center"
        onSubmit={handleSubmit}
      >
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
            onChange={e => handleUserInput(e)}
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
            onChange={e => handleUserInput(e)}
          />
        </div>
        <button
          type="submit"
          class="text-white bg-gray-700 transition-all hover:bg-pink-800 hover:scale-105 focus:ring-4 focus:outline-none mt-4 font-medium rounded-full text-sm md:text-lg md:mt-4 md:w-full w-5/6 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
        >
          {isLoading && (
            <div className="absolute">
              <LoadingIcon />
            </div>
          )}
          Submit
        </button>
      </form>
    </Fragment>
  );
}
