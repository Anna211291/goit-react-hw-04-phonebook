import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  width: 460px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
  color: #7eb101;
  font-size: 16px;
  font-weight: 500;
  border: 2px solid #7eb101;
  padding: 16px;
`;

export const StyledLable = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const FieldWrapper = styled(Field)`
  width: 100%;
  height: 32px;
  font-size: 18px;
  padding: 4px;
  outline: none;
  border: 1px solid #bbf330;
  &:hover {
    border: 2px solid #7eb101;
  }
  border-radius: 4px;
`;
export const ErrorWrapper = styled(ErrorMessage)`
  color: red;
  font-weight: 500;
  font-size: 14px;
`;
export const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  gap: 4px;
  border-radius: 8px;
  border: none;
  background-color: transparent;
  color: #7eb101;
  border: 2px solid #7eb101;
  &:hover {
    background-color: #7eb101;
    color: white;
  }
  font-weight: 500;
  font-size: 14px;
  padding: 8px;
`;
