import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { AddContact, Contact, EditContact } from '../components';

const ContactList = () => {
  const data = useSelector((state) => state.contacts);

  return (
    <>
      <Header>Contact List</Header>
      <List>
        {data.contacts.map((contact, id) =>
          data.editContact === contact.id ? (
            <EditContact key={id} contact={contact} />
          ) : (
            <Contact key={id} contact={contact} />
          )
        )}
      </List>
      <AddContact />
    </>
  );
};

const Header = styled.h1`
  margin: 2rem;
  color: aqua;
`;
const List = styled.ul`
  list-style-type: none;
  width: 90vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export default ContactList;
