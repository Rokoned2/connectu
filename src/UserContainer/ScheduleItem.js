import React from "react";

const ScheduleItem = ({
  id,
  nameMethodTipoPago,
  nameMethodSubTipoPago,
  image,
}) => (
  <>
    <tr key={id}>
      <td>
        <p>{nameMethodSubTipoPago}</p>
      </td>
      <td>{nameMethodTipoPago}</td>
      <td>
        {image ? (
          <img
            className="schedule__img-pay"
            src={`data:image/png;base64,${image}`}
            alt="screenshots"
          />
        ) : (
          "No hay imagen"
        )}
      </td>
    </tr>
  </>
);

export default ScheduleItem;
