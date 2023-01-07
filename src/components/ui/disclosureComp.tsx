import { Disclosure, Transition } from "@headlessui/react";
import { BsChevronUp } from "react-icons/bs";

interface DisclosureCompProps {
  text: string;
  answer: string;
}

export default function DisclosureComp({ text, answer }: DisclosureCompProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="text-md flex w-full justify-between bg-mothora-primary px-4 py-2 text-left font-bold text-black hover:bg-mothora-hover focus:outline-none focus-visible:ring focus-visible:ring-mothora-primary focus-visible:ring-opacity-75">
            <p>
              <span>{text}</span>
            </p>
            <BsChevronUp
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-black`}
            />
          </Disclosure.Button>
          {/* <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          > */}
          <Disclosure.Panel className="text-md mb-4 rounded-md bg-gray-800 px-4 pt-4 pb-2 text-gray-200">
            <span className="font-[Roboto] text-xl">{answer}</span>
          </Disclosure.Panel>
          {/* </Transition> */}
        </>
      )}
    </Disclosure>
  );
}
