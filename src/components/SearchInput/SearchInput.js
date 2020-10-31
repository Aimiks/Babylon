import React, { Component } from "react";
import PropTypes from "prop-types";

const ENTER_KEY = 13;

class SearchInput extends Component {
  constructor(props) {
    super();

    this.state = {
      value: "",
    };
    this.timer = null;
  }

  handleChange = (e) => {
    clearTimeout(this.timer);

    this.setState({ value: e.target.value });

    this.timer = setTimeout(this.triggerChange, this.props.waitInterval);
  };

  handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(this.timer);
      this.triggerChange();
    }
  };

  triggerChange = () => {
    const { value } = this.state;

    this.props.onChange(value);
  };

  render() {
    const { ...rest } = this.props;

    return (
      <input
        type={rest.type}
        className={rest.className}
        placeholder={rest.placeholder}
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

SearchInput.defaultProps = {
  waitInterval: 300,
};
SearchInput.propTypes = {
  onChange: PropTypes.func,
  delay: PropTypes.number,
};

export default SearchInput;
