import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { getContactsList } from 'redux/selectors';
import ContactList from '../ContactList/ContactList';
import Notification from '../Notification/Notification';

export default function App() {
  const contacts = useSelector(getContactsList);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {contacts.length !== 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="The contact list is empty" />
        )}
      </Section>
    </>
  );
}
