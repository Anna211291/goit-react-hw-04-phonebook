import { RiDeleteBinLine, RiContactsFill } from 'react-icons/ri';
import {
  ContactInfo,
  DelBtn,
  StyledContactListItem,
} from './ContactListItem.styled';

export const ContactListItem = ({
  contact: { name, number, id },
  onDelete,
}) => {
  return (
    <StyledContactListItem>
      <ContactInfo>
        <RiContactsFill size={22} />
        {name}: {number}
      </ContactInfo>
      <DelBtn type="button" onClick={() => onDelete(id)}>
        <RiDeleteBinLine size={20} />
      </DelBtn>
    </StyledContactListItem>
  );
};
