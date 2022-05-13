import { Component } from "react";

import "./search-box.style.css";

class SearchBox extends Component {
  render() {
    const { onSerachChange, placeholder, className } = this.props;
    return (
      <div>
        <input
          type="search"
          className={`search-box ${className}`}
          placeholder={placeholder}
          onChange={onSerachChange}
        />
      </div>
    );
  }
}

export default SearchBox;
