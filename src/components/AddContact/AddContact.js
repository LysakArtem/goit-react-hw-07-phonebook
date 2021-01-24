import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/operations';
import { addContact } from '../../redux'
import s from './AddContacts.module.css';

export default function AddContact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(addContact(data));

  const handlerInputChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length <= 2 || number.trim().length <= 6) {
      alert('Введите коректное значение');
    } else {
      onSubmit({ name, number });
      setName('');
      setNumber('');
    }
  };

  return (
    <>
      <h1>Phonebook </h1>
      <form className={s.formAddContact} onSubmit={handleSubmit}>
        <label className={s.addLable}>
          Name
          <input
            className={s.inputFild}
            type="text"
            name="name"
            value={name}
            placeholder="Введите имя"
            onChange={handlerInputChange}
          ></input>
        </label>
        <label className={s.addLable}>
          Number
          <input
            className={s.inputFild}
            type="phone"
            name="number"
            placeholder="Введите номер"
            value={number}
            onChange={handlerInputChange}
          ></input>
        </label>
        <button className="add-contact-btn" type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
