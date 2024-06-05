import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../features/contacts/contactsSlice';
import { Contact } from '../features/contacts/Contact';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactForm: React.FC = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newContact: Contact = {
            id: uuidv4(),
            name,
            email,
            phone
        };
        dispatch(addContact(newContact));
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome Completo" required />
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
            <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" required />
            <Button type="submit">Adicionar Contato</Button>
        </Form>
    );
};

export default ContactForm;
