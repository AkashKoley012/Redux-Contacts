import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../store/slices/ContactSlice';

const Contact = (props) => {
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(updateContact(props.contact.id));
  };
  return (
    <Card>
      <Image src={props.contact.picture} alt="Not Found" />
      <Details>
        <Name>{props.contact.name}</Name>
        <Detail>{props.contact.place}</Detail>
        <Detail>{props.contact.email}</Detail>
        <Detail>{props.contact.contact}</Detail>
        <Buttons>
          <Button onClick={handelClick}>Edit</Button>
          <Button onClick={() => dispatch(deleteContact(props.contact.id))}>
            Delete
          </Button>
        </Buttons>
      </Details>
    </Card>
  );
};

const Card = styled.li`
  width: 30rem;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  height: 20rem;
  background: white;
  border-radius: 10px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;
const Image = styled.img`
  border-radius: 50%;
  width: 8rem;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Name = styled.h3`
  font-size: 1.5rem;
  color: orange;
  margin-bottom: 1rem;
`;
const Detail = styled.p`
  color: gray;
`;
const Buttons = styled.div`
  display: flex;
`;
const Button = styled.button``;

Contact.propTypes = {
  contact: PropTypes.any.isRequired,
};

export default Contact;
