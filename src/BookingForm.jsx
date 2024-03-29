import React, { useState } from 'react';
import './index.css'; // Importera CSS-filen för styling

const BookingForm = () => {
    // State hooks för varje datapunkt
  const [classType, setClassType] = useState('');
  const [numTickets, setNumTickets] = useState(1);
  const [title, setTitle] = useState('Mr');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [agreement, setAgreement] = useState(false);


  // Funktioner för att uppdatera tillståndet för varje datapunkt, när vi bockar i eller skriver osv.
  const handleClassTypeChange = (e) => {
    setClassType(e.target.value);
  };

  const handleNumTicketsChange = (e) => {
    setNumTickets(parseInt(e.target.value));
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgreementChange = (e) => {
    setAgreement(e.target.checked);
  };
// Funktion för att mata ut informationen i konsolen när vi klickar på bokningsknappen
  const handleBooking = () => {
    const bookingData = {
      classType,
      numTickets,
      title,
      firstName,
      lastName,
      agreement
    };

    console.log(bookingData);
  };
// Formuläret
  return (
    <div className="booking-form">
      <h2>ÅKA TÅG</h2>
      <p>Stockholm 10:30 till GÖTEBORG 14:45</p>
      <label>
        <input
          type="radio"
          name="classType"
          value="1st"
          checked={classType === '1st'}
          onChange={handleClassTypeChange}
        /> 1a klass
        <input
          type="radio"
          name="classType"
          value="2nd"
          checked={classType === '2nd'}
          onChange={handleClassTypeChange}
        /> 2a klass
      </label>
      <br />
      <label>
        Antal biljetter:
        <select value={numTickets} onChange={handleNumTicketsChange}>
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Titel:
        <select value={title} onChange={handleTitleChange}>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
        </select>
      </label>
      <br />
      <label>
        Förnamn:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Efternamn:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        <input type="checkbox" checked={agreement} onChange={handleAgreementChange} />
        Jag godkänner
      </label>
      <br />
      <button onClick={handleBooking}>BOKA biljett</button> 
    </div>
  );
};

export default BookingForm;
