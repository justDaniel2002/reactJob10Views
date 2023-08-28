import React, { useState } from "react";
import ShowModal from "./Modals";

import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const pages = ["Home", "Intership", "Courses"];

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ShowModal handleClose={handleClose}/>
          </Box>
        </Modal>
      </div>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className="font-black text-2xl text-blue-900">IT LAND</h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-20">
            {pages.map((page) => {
              return currentPage === page ? (
                <a
                  href="#"
                  className=" text-sm font-semibold leading-6 text-blue-500 underline decoration-blue-500"
                >
                  {page}
                </a>
              ) : (
                <a
                  onClick={() => setCurrentPage(page)}
                  href="#"
                  className=" text-sm font-semibold leading-6 text-gray-900"
                >
                  {page}
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
            <a onClick={handleOpen}
              className="text-sm font-semibold leading-6"
            >
              <button
                className="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-1 px-4 border border-blue-900 hover:border-transparent rounded"
              >
                Log In
              </button>
            </a>
            <Link to="/SignUp" className="text-sm font-semibold leading-6">
              <button className="bg-blue-900 hover:bg-white text-white font-semibold hover:text-blue-900 py-1 px-4 border border-blue-900 rounded">
                Register
              </button>
            </Link>
            <a href="#" className="text-sm font-semibold leading-6">
              <button className="opacity-50 cursor-not-allowed bg-white hover:bg-gray-10 text-gray-800 font-semibold py-1 px-4 border border-gray-400  rounded shadow">
                Admin
              </button>
            </a>
          </div>
        </nav>

        
      </header>
    </>
  );
};

const Navbar2 = () => {

  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className="font-black text-2xl text-blue-900">IT LAND</h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export {Navbar, Navbar2};
