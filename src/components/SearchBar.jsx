import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (e) => {
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <input
        type="text"
        value={this.props.searchQuery}
        onChange={this.handleChange}
        placeholder="Search notes..."
        className="search-bar"
      />
    );
  }
}

export default SearchBar;
