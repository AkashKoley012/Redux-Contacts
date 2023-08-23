import styled from 'styled-components';
import { ImageInput, Input } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../store/slices/ContactSlice';

const AddContact = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.contacts);
  const contact = data.newContact;

  const handelClick = () => {
    if (
      contact['Title'] &&
      contact['First Name'] &&
      contact['Last Name'] &&
      contact['Email'] &&
      contact['Country'] &&
      contact['State'] &&
      contact['Image'] &&
      contact['Phone']
    )
      dispatch(addContact());
  };
  return (
    <Column>
      <Row>
        <Input label="Title" />
        <Input label="First Name" />
        <Input label="Last Name" />
      </Row>
      <Row>
        <Input label="Country" />
        <Input label="State" />
      </Row>
      <Row>
        <Input label="Email" />
        <Input label="Phone" />
      </Row>
      <Row>
        <ImageInput />
      </Row>
      <Button onClick={handelClick} type="submit">
        Add Contact
      </Button>
    </Column>
  );
};

const Row = styled.div`
  display: flex;
`;

const Column = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  margin-bottom: 1rem;
`;

export default AddContact;
