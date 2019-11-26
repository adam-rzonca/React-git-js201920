import React from "react";

function MenuBar() {
  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <span className="navbar-brand d-flex align-items-center">
            <strong>Menu</strong>
          </span>
          <span className="navbar-toggler-icon"></span>
        </div>
      </div>
    </header>
  );
}

export default MenuBar;
