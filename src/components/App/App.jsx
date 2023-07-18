import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  selectContactsList,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import Section from '../Section/Section';
import Loader from '../Loader/Loader';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import Notification from '../Notification/Notification';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {isLoading && !error && <Loader />}
        {/* {isLoading && !error && <b>Request in progress...</b>} */}
        {contacts ? (
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
