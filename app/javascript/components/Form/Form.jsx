import React from "react";
import PropTypes from "prop-types";
import Search from "../Search/Search";

const Form = props => {
  return (
    <div>
      <input type="text" onChange={props.changed} />
      <button onClick={props.search}>Search</button>
    </div>
  );
};

Form.propTypes = {
  changed: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
};

export default Form;
