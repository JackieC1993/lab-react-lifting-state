import React, {useState} from 'react';

const NewEventForm = ({ onAddEvent}) => {
  const [eventName, setEventName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddEvent(eventName);
    setEventName('');
  };

  return(
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    placeholder="Event Name"
    value={eventName}
    onChange={(e) => setEventName(e.target.value)}
    />
    <button type="submit">Add Event</button>
    </form>
  );
};

export default NewEventForm;