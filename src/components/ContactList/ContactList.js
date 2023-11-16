import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactListWrapper } from 'components/ContactList/ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactListWrapper>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ContactListWrapper>
  );
};
