import React, { useEffect, useRef } from "react";
import { all, getManufacturersList } from "services/products.service";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText, setManufacturer } from "redux/actions";

function CatalogFilter() {
  const searchText = useSelector((state) => state.searchText);
  const manufacturer = useSelector((state) => state.manufacturer);
  const products = useSelector((state) => state.products);
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
    dispatch(setManufacturer(all));
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
      <div>
        {getRadioButtons(products, manufacturer, handleManufactureChange)}
      </div>
    </div>
  );
}

export default CatalogFilter;

function getRadioButtons(products, manufacturer, handleManufactureChange) {
  const radioButtons = [
    <div key={all}>
      <input
        type="radio"
        name="manufacturer"
        checked={manufacturer === all}
        value={all}
        onChange={handleManufactureChange}
      />
      <label>All</label>
    </div>,
  ];

  getManufacturersList(products).forEach((elem) => {
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
