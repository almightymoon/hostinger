import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../../Form/SearchInput";
import useCategory from "../../../hooks/useCategory";
import { useCart } from "../../../context/cart";
import { Badge } from "antd";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassPlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import SearchForm from "../../Form/SearchInput";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();

  const navigation = [
    {
      name: "DASHBOARD",
      to: `/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`,
    },
    { name: "HOME", to: "/", current: false },
    { name: "ABOUT", to: "/about", current: false },
    { name: "CATEGORY", to: "/categories", current: false },
  ];

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <Disclosure as="nav" className="bg-white-800 mt-4">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-4">
            <div className="relative flex h-6 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    <span className="absolute -inset-0.5" />
    <span className="sr-only">Open main menu</span>
    {open ? (
      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    ) : (
      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    )}
  </Disclosure.Button>
</div>

              <div className="flex sm:px-6 items-center cursor-pointer">
                <h1>
                  <Link to="/">IMAN TILES</Link>
                </h1>
              </div>
              <div className="flex flex-1 items-center justify-between gap-8 sm:items-stretch sm:justify-center">
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <div
                        className="relative group"
                        key={item.name}
                        // Add "hidden" class for small screens
                        ClassName={`${
                          item.name !== "CATEGORY" ? "hidden sm:block" : ""
                        }`}>
                        <Link
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current
                              ? "bg-gray-400 text-white mr-6"
                              : "text-gray-900 hover:bg-gray-400 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}>
                          {item.name}
                        </Link>
                        {item.name === "CATEGORY" && (
                          <div className="hidden group-hover:block absolute  right-0 left-5 z-10 mt-2 w-40  text-center rounded-md bg-white  border-2 border-blue-400 focus:outline">
                            <Link
                              to="#"
                              className="px-0 py-0 text-md text-right text-gray-700">
                              Floor Tiles
                            </Link>
                            <Link
                              to="#"
                              className="block px-0 py-0 text-sm text-gray-700">
                              Submenu Item 2
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex  flex items-end  space-x-4">
                <div className="flex items-center ">
                  <Link
                    to="#"
                    className="ml-4 text-gray-800 hover:text-gray-300"
                    onClick={handleSearchIconClick}>
                    <MagnifyingGlassPlusIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Link>
                  {isSearchOpen && <SearchForm />}
                </div>
                <Badge count={cart?.length} showZero offset={[10, -5]}>
                  <Link
                    to="/cart"
                    className="ml-4 text-gray-800 hover:text-gray-300">
                    <ShoppingCartIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Link>
                </Badge>
                <div>
                  {auth.user ? (
                    <Link
                      to="/logout"
                      className="ml-4 text-gray-800 hover:text-gray-300"
                      onClick={handleLogout}>
                      Logout
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="ml-4 text-gray-800 hover:text-gray-300">
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="ml-4 text-gray-800 hover:text-gray-300">
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
  <div className="space-y-1 px-2 pb-3 pt-2">
    {navigation.map((item) => (
      <Disclosure.Button
        key={item.name}
        as="a"
        href={item.to}
        className={classNames(
          item.current
            ? "bg-gray-900 text-white"
            : "text-black hover:bg-gray-700 hover:text-white", // Change color to black
          "block rounded-md px-3 py-2 text-base font-medium"
        )}
        aria-current={item.current ? "page" : undefined}
      >
        {item.name}
      </Disclosure.Button>
    ))}
    {/* Add conditional rendering for login/logout options */}
    {auth.user ? (
      <div className="flex flex-col space-y-2">
        <a onClick={handleLogout} class="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" data-headlessui-state="open">logout</a>
      </div>
    ) : (
      <div className="flex flex-col space-y-2">
       <a href="/login" class="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" data-headlessui-state="open">Login</a>
        <a href="/register" class="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" data-headlessui-state="open">Register</a>
      </div>
    )}
    {/* End of conditional rendering */}
  </div>
</Disclosure.Panel>

        </>
      )}
    </Disclosure>
  );
}
