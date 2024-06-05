import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const App: React.FC = () => {
    return (
        <Container>
            <h1>Lista de Contatos</h1>
            <ContactForm />
            <ContactList />
        </Container>
    );
};

export default App;
