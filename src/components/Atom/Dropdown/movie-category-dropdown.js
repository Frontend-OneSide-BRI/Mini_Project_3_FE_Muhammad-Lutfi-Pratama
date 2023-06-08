import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FormatString } from "src/helper";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MovieCategoryDropdown({ activeFilterListener }) {
  let [activeFilter, setActiveFilter] = useState("trending");

  let filterList = ["trending", "popular", "upcoming", "top rated"];

  const handleActiveFilter = filter => {
    setActiveFilter(filter);
    activeFilterListener(filter);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white/30 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/40">
          {FormatString.capitalize(activeFilter)}
          <ChevronDownIcon
            className="w-5 h-5 -mr-1 text-gray-200"
            aria-hidden="true"
          />
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
        <Menu.Items className="absolute left-0 z-10 w-56 mt-2 origin-top-right divide-y divide-gray-100 shadow-lg rounded-xl bg-white/90 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {filterList.map((filter, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <p
                    onClick={() => handleActiveFilter(filter)}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-md lg:text-sm cursor-pointer hover:rounded-full "
                    )}
                  >
                    {FormatString.capitalize(filter)}
                  </p>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
