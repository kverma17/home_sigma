import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import './css/DynamicDropdown.css';
import { Link } from 'react-router-dom';

function DynamicDropdown({ dropdownName, options, setLimit }) {
  const handleLogoClick = () => {
    setLimit(16);
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center items-center w-40 gap-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover: gap-10">
          {dropdownName}
          <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 gap-20 z-10 w-40 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {Object.keys(options).map((option) => {
              let linkTo;
              if (option === "About Home Sigma") {
                linkTo = "/about-home-sigma";
              } else if (option === "Our Team") {
                linkTo = "/our-team";
              }
              else if (option === "FAQ") {
                linkTo = "/faq";
              } else {
                linkTo = `/category/${option}`;
              }
              
              return (
                <Link to={linkTo} className="listing-link" key={option} onClick={handleLogoClick}>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        {option}
                      </a>
                    )}
                  </Menu.Item>
                </Link>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DynamicDropdown;
