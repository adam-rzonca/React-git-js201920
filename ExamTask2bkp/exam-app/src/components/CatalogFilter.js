import React, { useEffect, useRef } from "react";
import ProductsService from "services/products.service";

function CatalogFilter({
  manufacturer,
  handleManufactureChange,
  searchText,
  handleSearchTextChange,
  handleClearClick,
  manufacturersList,
}) {
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div className="filter">
      <div className="filter-header">
        <h4>Search</h4>
        <a href="#" className="clear" onClick={handleClearClick}>
          Clear
        </a>
      </div>
      <div>
        <input
          type="text"
          placeholder="search..."
          value={searchText}
          onChange={handleSearchTextChange}
          ref={searchRef}
        ></input>
      </div>
      <h4>Manufacturer</h4>
      <div>
        {getRadioButtons(
          manufacturer,
          handleManufactureChange,
          manufacturersList
        )}
      </div>
    </div>
  );
}

export default CatalogFilter;

function getRadioButtons(
  manufacturer,
  handleManufactureChange,
  manufacturersList
) {
  const radioButtons = [
    <div key={ProductsService.all}>
      <input
        type="radio"
        name="manufacturer"
        checked={manufacturer === ProductsService.all}
        value={ProductsService.all}
        onChange={handleManufactureChange}
      />
      <label>All</label>
    </div>,
  ];

  manufacturersList.forEach((elem) => {
    radioButtons.push(
      <div key={elem}>
        <input
          type="radio"
          name="manufacturer"
          checked={manufacturer === elem}
          value={elem}
          onChange={handleManufactureChange}
        />
        <label>{elem}</label>
      </div>
    );
  });

  return radioButtons;
}
