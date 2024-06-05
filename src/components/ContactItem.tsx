import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../features/contacts/contactsSlice';
import styled from 'styled-components';
import { Contact } from '../features/contacts/Contact';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  padding: 0.25rem 0.5rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

interface Props {
  contact: Contact;
}

const ContactItem: React.FC<Props> = ({ contact }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  return (
    <Item>
      <div>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <Button onClick={handleRemove}>Remover</Button>
    </Item>
  );
};

export default ContactItem;
