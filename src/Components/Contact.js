import React from "react";
import "../images/contact.css";

const Contact = () => {
  return (
    <div className="seg" id="contact">
      <div class="centered">
        Any Industrial or Maintenance related issues? we are happy to help you
      </div>

      <div>
        <button
          type="button"
          class="py-2 px-4 border-1 border-orange-600 flex justify-center items-center  bg-orange-600 hover:bg-transparent hover:border-orange-600 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg pt-4"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="mr-2 pt-1"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <a href="tel:+15555551212">Contact Us</a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
