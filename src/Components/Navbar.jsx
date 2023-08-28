import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search/${searchValue}`);
    setSearchValue("");
  };
  return (
    <>
      <div className="navbar bg-base-100 md:px-36">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Episodes</a>
              </li>
              <li>
                <a>Categories</a>
                <ul className="p-2">
                  <li>
                    <a>Tech</a>
                  </li>
                  <li>
                    <a>Business</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>For Listeners</a>
              </li>
            </ul>
          </div>
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => navigate("/")}
          >
            Podhub
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a  onClick={()=> navigate("/podcasts")}>Episodes</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="p-2">
                  <li>
                    <a  onClick={()=>window.my_modal_1.showModal()}>Tech</a>
                  </li>
                  <li>
                    <a  onClick={()=>window.my_modal_1.showModal()}>Business</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a  onClick={()=>window.my_modal_1.showModal()}>For Listeners</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search podcasts..."
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              className="input input-bordered w-24 md:w-auto"
            />
            <button type="submit" className="btn btn-square btn-neutral">
              <Icon icon="fluent:search-24-regular" />
            </button>
          </form>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            This website is demo so not all features are working.
          </p>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Navbar;
