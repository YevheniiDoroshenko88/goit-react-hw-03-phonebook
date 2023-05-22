import React from 'react';
import { FilterDiv, FilterInput } from './BookFilter.styled.jsx';
import PropTypes from 'prop-types';

export function BookFilter({ handleChange, value }) {
  return (
    <FilterDiv>
      Filter
      <FilterInput
        type="text"
        value={value}
        onChange={handleChange}
        name="filter"
      />
    </FilterDiv>
  );
}

BookFilter.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
