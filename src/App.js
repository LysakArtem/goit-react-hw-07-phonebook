import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import { fetchContact } from './redux';

import './App.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div className="App">
      <AddContact />
      <ContactList />
    </div>
  );
}
