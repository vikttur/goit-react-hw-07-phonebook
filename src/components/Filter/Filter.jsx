import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/filter';
import { selectContactsFilter } from 'redux/selectors';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const onHandlerFilterChange = ({ currentTarget: { value } }) => {
    const normalizeText = value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizeText));
  };

  const onDisplayAll = () => {
    dispatch(setContactsFilter(''));
  };

  return (
    <label className={css.inputBlock}>
      Find contacts by name
      <input
        type="text"
        name="name"
        className={css.inputField}
        value={filter}
        placeholder="Enter name"
        onChange={onHandlerFilterChange}
      />
      <button type="button" onClick={() => onDisplayAll()}>
        Show all
      </button>
    </label>
  );
}
