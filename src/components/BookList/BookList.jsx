import React from 'react';
import PropTypes from 'prop-types';
import {
  ListUl,
  ListLi,
  SpanName,
  SpanNumber,
  ListButton,
} from './BookList.styled.jsx';

export function BookList({ contacts, deleteContact }) {
  return (
    <ListUl>
      {contacts.map(contact => {
        return (
          <ListLi key={contact.id}>
            <SpanName>{contact.name}</SpanName>:
            <SpanNumber>{contact.number}</SpanNumber>
            <ListButton onClick={() => deleteContact(contact.id)}>
              Delete
            </ListButton>
          </ListLi>
        );
      })}
    </ListUl>
  );
}

BookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
