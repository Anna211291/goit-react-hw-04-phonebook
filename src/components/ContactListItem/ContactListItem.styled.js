import styled from 'styled-components';

export const StyledContactListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #7eb101;
  font-size: 16px;
  font-weight: 500;
  padding: 0;
  margin: 0;
`;

export const ContactInfo = styled.p`
  display: flex;
  justify-content: center;

  color: #2c2c2c;
  gap: 8px;
  svg {
    color: #7eb101;
    border: 2px solid #7eb101;
  }
`;
export const DelBtn = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 2px;
  border: none;
  background-color: transparent;
  color: #7eb101;
  &:hover {
    background-color: #7eb101;
    color: white;
  }
`;
