import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import {
  changePageThunkActionCreator,
  fetchCapsulesThunkActionProvider,
  updateFiltersThunkActionCreator,
} from "../redux/action";

function SearchForm(props) {
  const [filters, setFilters] = useState({
    status: "",
    reuse_count: "",
    type: "",
  });
  let dispatch = useDispatch();

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const updateFilters = () => {
    dispatch(updateFiltersThunkActionCreator(filters));
    dispatch(changePageThunkActionCreator(1));
    dispatch(fetchCapsulesThunkActionProvider());
  };
  return (
    <div className="search-form">
      <h2>Search Form</h2>
      <div className="search-filters">
        <Form.Select
          aria-label="Select-1"
          name="status"
          onChange={handleFilterChange}
        >
          <option value="">Filter By Status</option>
          <option value="active">Active</option>
          <option value="retired">Retired</option>
          <option value="unknown">Unknown</option>
          <option value="destroyed">Destroyed</option>
        </Form.Select>
        <Form.Select
          aria-label="Select-2"
          name="reuse_count"
          onChange={handleFilterChange}
        >
          <option value="">Filter By Reuse Count</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </Form.Select>
        <Form.Select
          aria-label="Select-3"
          name="type"
          onChange={handleFilterChange}
        >
          <option value="">Filter By Type</option>
          <option value="Dragon 1.0">Dragon 1.0</option>
          <option value="Dragon 1.1">Dragon 1.1</option>
          <option value="Dragon 2.0">Dragon 2.0</option>
        </Form.Select>

        <button className="search-btn" onClick={updateFilters}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
