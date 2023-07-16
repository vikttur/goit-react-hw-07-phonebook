import { useSelector } from 'react-redux';
import { getContactsFilter, getContactsList } from 'redux/selectors';
import ContactItems from '../ContactItems/ContactItems';
import css from './ContactList.module.css';

export default function ContactList() {
  const allContacts = useSelector(getContactsList);
  const filter = useSelector(getContactsFilter);
  const filteredContacts = [
    ...allContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    ),
  ];

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactItems key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
}
