import { useState } from 'react';
import s from './ContactForm.module.css';

export function ContactForm({onSubmit}) {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleChange = evt => {
    const {name, value} = evt.currentTarget;
    if (name === 'contactName') {setContactName(value)}
    if (name === 'contactNumber') {setContactNumber(value)}
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({contactName, contactNumber});
    setContactName('');
    setContactNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
          Name
          <input 
              type="text" 
              name="contactName" 
              className={s.input}
              value={contactName}
              onChange={handleChange}
          />
      </label>
      <label className={s.label}>
          Number
          <input 
              type="text" 
              name="contactNumber" 
              className={s.input}
              value={contactNumber}
              onChange={handleChange}
          />
      </label>
      <button type="submit" className={s.btn}>Add contact</button>
    </form>
  );
}