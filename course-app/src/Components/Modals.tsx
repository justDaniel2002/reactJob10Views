import React, { useState } from "react";

const StudentLoginModal = () => {
  return (
    <>
      <h3 className="mb-4 text-xl font-medium text-center items-center text-gray-900 dark:text-white">
        <button
          className="px-4 py-2 border justify-center items-center flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 m-auto"
          style={{ width: "100%" }}
        >
          <img
            className="w-5 h-5"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Login with Google</span>
        </button>
      </h3>
      <form className="space-y-6" action="#">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-sm font-bold text-blue-900 hover:underline "
          >
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
          New To IT LAND? Register {"("}
          <a
            href="#"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Student
          </a>
          /
          <a
            href="#"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Company{")"}
          </a>
        </div>
      </form>
    </>
  );
};

const AdminLoginModal = () => {
  return (
    <>
      <form className="space-y-6" action="#">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-sm font-bold text-blue-900 hover:underline "
          >
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
          New To IT LAND? Register {"("}
          <a
            href="#"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Student
          </a>
          /
          <a
            href="#"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Company{")"}
          </a>
        </div>
      </form>
    </>
  );
};

const ShowModal = ({ handleClose }: any) => {
  const [showing, setShowing] = useState(StudentLoginModal());
  const [selectedModal, setSelected] = useState("Student");

  const Selected = (str:string) => {
    if(str=="Student"){
        setShowing(StudentLoginModal())
        setSelected("Student")
    }else{
        setShowing(AdminLoginModal())
        setSelected("Admin")
    }
  }

  return (
    <>
      <div className="relative w-full max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={handleClose}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          <div className="px-6 py-6 lg:px-8">
            <nav
              className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8"
              aria-label="Global"
            >
              {selectedModal === "Student" ? (
                <>
                  <div className="mx-3">
                    <a
                      onClick={() => Selected("Student")}
                      href="#"
                      className=" text-lg font-bold leading-6 text-blue-900 underline decoration-blue-900"
                    >
                      Student
                    </a>
                  </div>
                  <div className="mx-3">
                    <a
                      onClick={() => Selected("Admin")}
                      href="#"
                      className=" text-lg font-bold leading-6"
                    >
                      Admin
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="mx-3">
                    <a
                      onClick={() => Selected("Student")}
                      href="#"
                      className=" text-lg font-bold leading-6"
                    >
                      Student
                    </a>
                  </div>

                  <div className="mx-3">
                    <a
                      onClick={() => Selected("Admin")}
                      href="#"
                      className=" text-lg font-bold leading-6 text-blue-900 underline decoration-blue-900"
                    >
                      Admin
                    </a>
                  </div>
                </>
              )}
            </nav>

            {showing}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowModal;
