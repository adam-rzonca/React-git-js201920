import React from "react";
import RadioButton from "components/RadioButton";

function CatalogFilter() {
  return (
    <div className="filter">
      <div className="filter-header">
        <h4>Search</h4>
        <span className="clear">Clear</span>
      </div>
      <div>
        <input type="text" placeholder="search..."></input>
      </div>
      <h4>Manufacturer</h4>
      <div>
        <RadioButton
          name="manufacturer"
          id="all"
          value="all"
          for="all"
          text="All"
        />
        <RadioButton
          name="manufacturer"
          id="apple"
          value="apple"
          for="apple"
          text="Apple"
        />
        <RadioButton
          name="manufacturer"
          id="dell"
          value="dell"
          for="dell"
          text="Dell"
        />
      </div>
    </div>
  );
}

export default CatalogFilter;
