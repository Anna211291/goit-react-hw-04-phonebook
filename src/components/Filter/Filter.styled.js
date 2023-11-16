import styled from 'styled-components';

export const StyledFilter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #7eb101;
  font-size: 16px;
  font-weight: 500;
`;
export const FilterLable = styled.label`
  display: flex;
  justify-content: space-between;
  color: #7eb101;
  font-size: 16px;
  font-weight: 500;
`;
export const InputdWrapper = styled.input`
  width: 100%;
  height: 32px;
  font-size: 16px;
  padding: 4px;
  outline: none;
  border: 1px solid #bbf330;
  &:hover {
    border: 2px solid #7eb101;
  }
  border-radius: 4px;
  color: #2c2c2c;
`;
