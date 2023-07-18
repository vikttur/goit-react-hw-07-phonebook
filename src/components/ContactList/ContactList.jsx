import { useSelector } from 'react-redux';
import { selectContactsList, selectContactsFilter } from 'redux/selectors';
import ContactItems from '../ContactItems/ContactItems';
import css from './ContactList.module.css';

export default function ContactList() {
  const allContacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);

  const filteredContacts = [
    ...allContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    ),
  ];

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, phone }) => {
        return <ContactItems key={id} id={id} name={name} phone={phone} />;
      })}
    </ul>
  );
}
