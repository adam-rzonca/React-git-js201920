import React from "react";
import manufacturers from "services/manufacturers";

function CatalogFilter({
  manufacture,
  handleManufactureChange,
  name,
  handleNameChange,
  handleClearClick
}) {
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
          value={name}
          onChange={handleNameChange}
        ></input>
      </div>
      <h4>Manufacturer</h4>
      <div>
        <div>
          <input
            type="radio"
            name="manufacturere"
            checked={manufacture === manufacturers.all}
            value={manufacturers.all}
            onChange={handleManufactureChange}
          />
          <label>All</label>
        </div>
        <div>
          <input
            type="radio"
            name="manufacturere"
            checked={manufacture === manufacturers.apple}
            value={manufacturers.apple}
            onChange={handleManufactureChange}
          />
          <label>Apple</label>
        </div>
        <div>
          <input
            type="radio"
            name="manufacturere"
            checked={manufacture === manufacturers.dell}
            value={manufacturers.dell}
            onChange={handleManufactureChange}
          />
          <label>Dell</label>
        </div>
      </div>
    </div>
  );
}

export default CatalogFilter;
