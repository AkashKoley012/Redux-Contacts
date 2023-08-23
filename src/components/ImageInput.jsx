import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateNewContact } from '../store/slices/ContactSlice';
import { useEffect, useRef } from 'react';

const ImageInput = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.contacts);
  const image = data.newContact['Image'];
  const handelChange = (e) => {
    dispatch(updateNewContact({ value: e.target.files[0], target: 'Image' }));
  };
  useEffect(() => {
    if (!image) ref.current.value = '';
  }, [image]);
  return (
    <Container>
      <Label>Image:</Label>
      <InputTag type="file" onChange={handelChange} ref={ref} required />
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

export default ImageInput;
