import React from "react";
import ScheduleItem from "./ScheduleItem";

const Schedule = ({ id, schedule }) => {
  return (
    <table className="schedule" key={id}>
      <tr>
        <th>Sub-método de pago</th>
        <th>Método de pago</th>
        <th>Imagen</th>
      </tr>
      {schedule.map(({ id, paymentVouchers }) => {
        return (
          <ScheduleItem
            id={id}
            nameMethodTipoPago={paymentVouchers[0].nameMethodTipoPago}
            nameMethodSubTipoPago={paymentVouchers[0].nameMethodSubTipoPago}
            image={paymentVouchers[0].base64}
          />
        );
      })}
    </table>
  );
};

export default Schedule;
