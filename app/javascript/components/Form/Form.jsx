import React from "react";
import PropTypes from "prop-types";
import Search from "../Search/Search";

const Form = props => {
  return (
    <form>
      <input type="text" onChange={props.changed} placeholder="Search"/>
      <button onClick={props.search}>Search</button>
    </form>
  );
};

Form.propTypes = {
  changed: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
};

export default Form;
