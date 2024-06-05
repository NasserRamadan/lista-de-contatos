import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ContactItem from './ContactItem';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactList: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);

    return (
        <List>
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </List>
    );
};

export default ContactList;
