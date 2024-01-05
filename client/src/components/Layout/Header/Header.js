/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../../Form/SearchInput";
import useCategory from "../../../hooks/useCategory";
import { useCart } from "../../../context/cart";
import { Badge } from "antd";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  // BellIcon,
  XMarkIcon,
  MagnifyingGlassPlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import SearchForm from "../../Form/SearchInput";

// import "./Header.css";

const navigation = [
  { name: "DASHBOARD", href: "#", current: true },
  { name: "HOME", href: "/", current: false },
  { name: "SHOP", href: "#", current: false },
  { name: "CATEGORY", href: "/categories", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  // const categories = useCategory();
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
    <Disclosure as='nav' className='bg-white-800 mt-4'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-4'>
            <div className='relative flex h-6 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex  sm:px-6 items-center cursor-pointer'>
                <h1>
                  <a href='/'>IMAN TILES</a>
                </h1>
              </div>
              <div className='flex flex-1 items-center justify-between gap-8 sm:items-stretch sm:justify-start'>
                <div className='hidden sm:ml-6 sm:block '>
                  <div className='flex space-x-4 '>
                    {navigation.map((item) => (
                      <div className='relative group' key={item.name}>
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-400 text-white mr-6"
                              : "text-gray-900 hover:bg-gray-400 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}>
                          {item.name}
                        </a>
                        {item.name === "CATEGORY" && (
                          <div className='hidden group-hover:block absolute  right-0 left-5 z-10 mt-2 w-40  text-center rounded-md bg-white  border-2 border-blue-400 focus:outline'>
                            <a
                              href='#'
                              className='px-0 py-0 text-md text-right text-gray-700'>
                              Floor Tiles
                            </a>
                            <a
                              href='#'
                              className='block px-0 py-0 text-sm text-gray-700'>
                              Submenu Item 2
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile dropdown */}

              <div className='flex items-end  space-x-4 sm:none'>
                <div className='flex items-center '>
                  <a
                    href='#'
                    className='ml-4 text-gray-800 hover:text-gray-300'
                    onClick={handleSearchIconClick}>
                    <MagnifyingGlassPlusIcon
                      className='h-6 w-6'
                      aria-hidden='true'
                    />
                  </a>
                  {isSearchOpen && <SearchForm />}
                </div>
                <Badge count={cart?.length} showZero offset={[10, -5]}>
                  <a
                    href='/cart'
                    className='ml-4 text-gray-800 hover:text-gray-300'>
                    <ShoppingCartIcon className='h-6 w-6' aria-hidden='true' />
                  </a>
                </Badge>

                <div>
                  {auth.user ? ( // Conditionally render logout link when user is logged in
                    <a
                      href='/logout'
                      className='ml-4 text-gray-800 hover:text-gray-300'
                      onClick={handleLogout}>
                      Logout
                    </a>
                  ) : (
                    // Render other links or components when user is not logged in
                    <>
                      <a
                        href='/login'
                        className='ml-4 text-gray-800 hover:text-gray-300'>
                        Login
                      </a>
                      <a
                        href='/register'
                        className='ml-4 text-gray-800 hover:text-gray-300'>
                        Register
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

//  <NavLink to='/cart' className='nav-link' >
//                   <Badge count={cart?.length} showZero offset={[10, -5]}>
//                    <h6 className="cart"> Cart</h6>
//                   </Badge>
//                 </NavLink>

// <NavLink
//                           to={`/dashboard/${
//                             auth?.user?.role === 1 ? "admin" : "user"
//                           }`}
//                           className='dropdown-item'>
//                           Dashboard
//                         </NavLink>

//  <ul className='dropdown-menu'>
//                   <li>
//                     <Link className='dropdown-item' to={"/categories"}></Link>
//                   </li>
//                   {categories?.map((c, index) => (
//                     <li key={index}>
//                       <Link
//                         className='dropdown-item'
//                         to={`/category/${c.slug}`}>
//                         {c.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>

//  {!auth?.user ? (
//                   <>
//                     <li className='nav-item'>
//                       <NavLink to='/register' className='nav-link'>
//                         Register
//                       </NavLink>
//                     </li>
//                     <li className='nav-item'>
//                       <NavLink to='/login' className='nav-link'>
//                         Login
//                       </NavLink>
//                     </li>
