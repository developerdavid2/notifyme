import React, { useState, Fragment } from "react";

import {
  Button,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";
import { clsx } from "clsx";

export default function Tabs({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
      <div className="flex gap-2 md:gap-8 flex-col md:flex-row">
        {/* Buttons */}
        <div className="md:mx-auto md:order-2 md:flex-[50%]">
          <TabList className="mb-8 flex flex-col justify-center rounded-[36px] border border-n-6  p-4 max-md:p-2 max-md:gap-[13px] bg-gray-800/10 shadow-lg shadow-black/20 backdrop-blur-sm border-gray-300/30 gap-6">
            {tabs.map((tab, index) => (
              <Tab key={index} as={Fragment}>
                {({ selected }) => (
                  <div
                    className={clsx(
                      "flex px-4 py-3 gap-x-5 rounded-3xl hover:bg-indigo-600/10 cursor-pointer",
                      selected &&
                        "bg-indigo-900/10 border-none focus-visible:outline-none shadow-md transition-colors duration-150"
                    )}>
                    {/* Tab Figure */}
                    <div className="max-w-[30%]">
                      <div
                        className={clsx(
                          "relative h-12 w-12 max-md:h-8 max-md:w-8 rounded-full bg-n-5 transition-colors duration-150",
                          selected && "text-blur"
                        )}>
                        <p className="h6 font-poppins absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                          {tab.id + 1}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start max-md:justify-center">
                      <h6
                        className={clsx(
                          "text-xl max-md:text-sm text-n-2 font-semibold transition-colors duration-150 ease-in-out focus-visible:outline-none ",
                          selected && "text-n-1"
                        )}>
                        {tab.title}
                      </h6>
                      <p className="text-sm text-n-4 max-md:hidden">
                        {tab.description}
                      </p>
                    </div>
                  </div>
                )}
              </Tab>
            ))}
          </TabList>
        </div>

        {/* Tab panels */}
        <TabPanels className="md:mx-auto md:flex-[50%] md:order-1">
          <div className="relative flex flex-col">
            {tabs.map((tab, index) => (
              <TabPanel key={index} as={Fragment} static={true}>
                <Transition show={selectedTab === index}>
                  <article className="w-full items-stretch rounded-2xl focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 min-[480px]:flex transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-y-8 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-y-12">
                    <figure className="p-2 w-full mask-linear   shadow-xl">
                      <img
                        className="w-full max-h-[75vh] h-auto rounded-lg object-contain"
                        width={100}
                        height={400}
                        src={tab.image}
                        alt={tab.title}
                      />
                    </figure>
                  </article>
                </Transition>
              </TabPanel>
            ))}
          </div>
        </TabPanels>
      </div>
    </TabGroup>
  );
}
