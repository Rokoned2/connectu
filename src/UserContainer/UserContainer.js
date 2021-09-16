import React, { useState } from "react";

const UserContainer = ({ id, name, lastname, email, stateText, schedule }) => {
  const [showSchedule, setShowSchedule] = useState(false);
  console.log("schedule ", schedule);

  const Schedule = ({ id, amortization, image }) => (
    <>
      <br />
      <p>{amortization}</p>
      <div>
        {image ? (
          <img
            src={`data:image/png;base64,${image}`}
            alt="screenshots"
            width={450}
          />
        ) : (
          "No hay imagen"
        )}
      </div>
      <br />
    </>
  );

  return (
    <div key={id}>
      <h3>
        {name} {lastname}
      </h3>
      <p>{email}</p>
      <p>Estado: {stateText}</p>
      <button onClick={() => setShowSchedule(!showSchedule)}>
        Crono. de pagos
      </button>
      {showSchedule &&
        schedule.length !== 0 &&
        schedule.map(({ id, amortization, paymentVouchers }) => {
          console.log("paymentVouchers ", paymentVouchers[0]);
          return (
            <Schedule
              id={id}
              amortization={amortization}
              image={paymentVouchers[0].base64}
            />
          );
        })}
    </div>
  );
};

export default UserContainer;
