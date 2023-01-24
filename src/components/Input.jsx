import React from "react";
import arrow from "../assets/icon-arrow.svg";
const Input = () => {
  return (
    <section>
      <h1 className="heading">IP Address Tracker</h1>
      <form className="form">
        <input type="text" />
        <button>
          <img
            src={arrow}
            alt="Search Location with ip"
            className="min-w-[15px]"
          />
        </button>
      </form>
    </section>
  );
};

export default Input;
