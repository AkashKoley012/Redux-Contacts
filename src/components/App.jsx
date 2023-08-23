import styled from 'styled-components';
import { ContactList } from '../components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initialdata } from '../api';
import { initContact } from '../store/slices/ContactSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initialdata(12).then((data) => dispatch(initContact(data.results)));
  });
  return (
    <Container>
      <ContactList />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
`;

export default App;
