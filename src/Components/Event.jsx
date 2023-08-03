import React, {useState} from 'react';
import Attendees from '.Attendees';

const Event = ({event, onToggleAttendee}) => {
  const [showAttendees, setShowAttendees] = useState(false);
  
  const handleToggleAttendess = () => {

    setShowAttendees(!showAttendees);
  };

  return (
    <li className="event">
      <h2>{event.name}</h2>
      <button onClick={handleToggleAttendess}>
        {showAttendees ? 'Hide Attendees' : 'Show Attendees'}
      </button>
      {showAttendees && <Attendees attendees={event.attendees} onToggleAttendee={onToggleAttendee} />}
    </li>
  );
};

export default Event;
