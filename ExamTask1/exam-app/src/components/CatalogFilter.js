import React from "react";
import StyledDiv from "components/StyledDiv";
import manufacturers from "services/manufacturers";

function CatalogFilter({
  manufacture,
  handleManufactureChange,
  name,
  handleNameChange,
  handleClearClick
}) {
  return (
    <StyledDiv className="filter">
      <StyledDiv className="filter-header">
        <h4>Search</h4>
        <a href="#" className="clear" onClick={handleClearClick}>
          Clear
        </a>
      </StyledDiv>
      <StyledDiv>
        <input
          type="text"
          placeholder="search..."
          value={name}
          onChange={handleNameChange}
        ></input>
      </StyledDiv>
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
    </StyledDiv>
  );
}

export default CatalogFilter;
