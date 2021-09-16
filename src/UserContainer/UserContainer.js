import React, { useState } from "react";
import Schedule from "./Schedule";

const UserContainer = ({ id, name, lastname, email, stateText, schedule }) => {
  const [showSchedule, setShowSchedule] = useState(false);

  return (
    <div key={id} className="user-item">
      <div className="user-item__user-info">
        <div className="user-item__info">
          <h3>
            {name} {lastname}
          </h3>
          <p>Email: {email}</p>
          <p>Estado: {stateText}</p>
        </div>
        <button
          className="user-item__btn btn"
          onClick={() => setShowSchedule(!showSchedule)}
        >
          Ver pagos
        </button>
      </div>
      {showSchedule && schedule.length !== 0 && (
        <Schedule id={id} schedule={schedule} />
      )}
    </div>
  );
};

export default UserContainer;
