import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactItems.module.css';

export default function ContactItems({ id, name, phone }) {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={css.item}>
      <span className={css.marker}></span>
      <p className={css.label}>{name}:</p>
      <p className={css.quantity}>{phone}</p>
      <button
        type="button"
        className={css.button}
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
