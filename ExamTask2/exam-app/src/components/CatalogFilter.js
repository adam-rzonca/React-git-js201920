import React, { useEffect, useRef } from "react";
import ProductsService from "services/products.service";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText, setManufacturer } from "redux/actions";

function CatalogFilter() {
  const searchText = useSelector((state) => state.searchText);
  const manufacturer = useSelector((state) => state.manufacturer);
  const dispatch = useDispatch();

  const searchRef = useRef(null);

  const handleManufactureChange = (e) => {
    dispatch(setManufacturer(e.target.value));
  };

  const handleSearchTextChange = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  const handleClearClick = (e) => {
    e.preventDefault();
    dispatch(setManufacturer(ProductsService.all));
    dispatch(setSearchText(""));
  };

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
      <div>{getRadioButtons(manufacturer, handleManufactureChange)}</div>
    </div>
  );
}

export default CatalogFilter;

function getRadioButtons(manufacturer, handleManufactureChange) {
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

  ProductsService.getManufacturersList().forEach((elem) => {
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
