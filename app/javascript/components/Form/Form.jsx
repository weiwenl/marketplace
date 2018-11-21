import React from "react";
import PropTypes from "prop-types";
import Search from "../Search/Search";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'

const Form = props => {
  return (
    <form>
      <Input type="text" onChange={props.changed} placeholder="Search"/>
      <Button color="primary" onClick={props.search}>Find</Button>
    </form>
  );
};

Form.propTypes = {
  changed: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
};

export default Form;
