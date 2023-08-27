import React from "react";
import Header from "../Components/Header";
import WelcomeImage from "../Images/Welcome.png";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Home = () => {
  return (
    <>
      <Header />

      <div>
        <img
          src={WelcomeImage}
          style={{ width: "100%", height: "80vh" }}
          alt="welcom img"
        />
        <div
          style={{
            position: "absolute",
            left: "30%",
            top: "40%",
            width: "600px",
          }}
          className="lg:flex"
        >
          <input
            className="m-auto shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Search"
            type="text"
            placeholder="Search"
          />
          <button className="bg-blue-900 hover:bg-white text-white font-semibold hover:text-white py-1 px-4 border border-blue-900 hover:border-transparent rounded">
            Search
          </button>
        </div>

        <div className="text-center pt-10">
          <h2 className="font-bold text-xl text-blue-900 px-7">TOP INTERSHIP</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
