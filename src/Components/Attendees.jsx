import React from "react";
import Attendee from './Attendee';

const Attendee = ({ attendees, onToggleAttendee }) => {
  return(
    <div className="attendees">
      <button onClick={() => onToggleAttendee(attendees[0])}>
        {attendees[0].attending ? 'Mark as Not Attending' : 'Mark as Attending'}
      </button>
      {attendees.map((attendee) => (
        <Attendee key= {attendee.id} attendee={attendee} onToggleAttendee={onToggleAttendee} />
      ))}
    </div>
  );
};
export default Attendees;
