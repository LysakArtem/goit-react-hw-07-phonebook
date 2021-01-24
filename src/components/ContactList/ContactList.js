import Filter from '../Filter';
import { useSelector, useDispatch } from 'react-redux';
// import { removeContact } from '../../redux/operations';
// import { getContacts, getContactsFiltered } from '../../redux/selectors';
import { getContacts, getContactsFiltered, removeContact } from '../../redux';
import s from './ContactList.module.css';
export default function ContactList() {
  const contacts = useSelector(getContacts);
  const contactsFiltered = useSelector(getContactsFiltered);

  const dispatch = useDispatch();

  if (contacts.length === 0) return null;
  return (
    <div className={s.contacts}>
      <h1 className={s.title}>Contacts</h1>
      {contacts.length === 1 ? null : <Filter />}
      {contactsFiltered.length !== 0 ? (
        <ul className={s.contactList}>
          {contactsFiltered.map(({ id, name, number }) => (
            <li className={s.contactItem} key={id}>
              <span className={s.name}>{name}: </span>
              <span className={s.number}>{number}</span>
              <button
                type="button"
                className={s.button}
                onClick={() => dispatch(removeContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Такого контакта в списке нет!</p>
      )}
    </div>
  );
}
