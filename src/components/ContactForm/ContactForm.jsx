import { useSelector, useDispatch } from 'react-redux';
import { selectContactsList } from 'redux/selectors';
import { addContact } from 'redux/operations';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const newName = form.elements.name.value;
    const newNumber = form.elements.number.value;

    if (isExist(contacts, newName))
      return alert(`${newName} is already in contacts.`);

    dispatch(addContact({ name: newName, phone: newNumber }));
    form.reset();
  };

  const isExist = (contacts, newName) => {
    if (!contacts) return;

    return contacts.find(
      contact => contact.name.toLowerCase() === newName.toLowerCase()
    );
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.inputBlock}>
        Name
        <input
          type="text"
          name="name"
          className={css.inputField}
          placeholder="Enter name"
        />
      </label>
      <label className={css.inputBlock}>
        Number
        <input
          type="tel"
          name="number"
          className={css.inputField}
          placeholder="Enter the phone number"
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
