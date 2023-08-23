import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateNewContact } from '../store/slices/ContactSlice';

const Input = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.contacts);
  const handelChange = (e) => {
    const obj = { value: e.target.value, target: props.label };
    if (props.id) obj.id = props.id;
    dispatch(updateNewContact(obj));
  };
  return (
    <Container>
      <Label>{props.label}:</Label>
      <InputTag
        type="text"
        onChange={handelChange}
        value={props.value ? props.value : data.newContact[props.label]}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: static;
  margin: 0rem 1rem;
  max-width: 240px;
`;
const Label = styled.label``;
const InputTag = styled.input``;

Input.propTypes = {
  label: PropTypes.any.isRequired,
  value: PropTypes.string,
  id: PropTypes.string,
};

export default Input;
