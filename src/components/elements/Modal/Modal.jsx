import React, { useState } from "react";
import LinkButton from "../Button/LinkButton";

export default function Modal(props) {
  const [modal, setModal] = useState(false);
  const { children, text, className } = props;
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <LinkButton onClick={toggleModal} className={className}>
        {text}
      </LinkButton>
      {modal && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="relative bg-white w-full max-w-md p-6 rounded-lg flex flex-col">
            <div className="absolute top-0 right-0 p-2">
              <button onClick={toggleModal} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mb-4">{children}</div>
            <div className="mt-3">
              <LinkButton className="bg-red-700 py-2 px-4 rounded-lg text-white hover:opacity-70" onClick={toggleModal}>
                Cancel
              </LinkButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
