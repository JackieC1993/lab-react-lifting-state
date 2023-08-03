import React from "react";

const Attendee = ({ attendee, onToggleAttendee }) => {
  return(
    <div className="attendee">
      <p>{attendee.name}</p>
      <button onClick= {() => onToggleAttendee(attendee)}>
        {attendee.attending ? 'Mark as Not Attending' : 'Mark as Attending'}
      </button>
    </div>
  );
};

export default Attendee;
