import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import UserContainer from "./UserContainer/UserContainer";

const options = [
  { value: 0, label: "Inactivo" },
  { value: 1, label: "Activo" },
  { value: 2, label: "Pendiente validación inicial" },
  { value: 3, label: "Rechazo inicial" },
  { value: 4, label: "Pagar Despues" },
  { value: 5, label: "Deuda" },
  { value: 6, label: "Deuda 2" },
  { value: 7, label: "Deuda 3" },
  { value: 8, label: "PreLiquidacion" },
  { value: 9, label: "Congelado" },
  { value: 10, label: "Pendiente validación cuota" },
  { value: 11, label: "Rechazo cuota" },
  { value: 12, label: "Suscripción finalizada" },
  { value: 13, label: "Pendiente validación migración" },
  { value: 14, label: "Rechazo migración" },
  { value: 15, label: "Liquidacion" },
];

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);
  const [schedule, setSchedule] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getSchedule = () => {
      axios
        .get(
          "https://servicios.inclubtest.online:2053/api/payment/schedule/vouchers/383"
        )
        .then((response) => {
          setSchedule(response.data.objModel);
        });
    };
    getSchedule();
  }, []);

  useEffect(() => {
    const getUsers = () => {
      setLoading(true);
      axios
        .get(
          `https://servicios.inclubtest.online:2053/api/suscription/all/state/${
            selectedOption && selectedOption.value
          }`
        )
        .then((response) => {
          setLoading(false);
          if (response.data.objModel.length !== 0)
            return setUsers(response.data.objModel);
        })
        .catch(setUsers([]));
    };
    getUsers();
  }, [selectedOption]);

  const handleChange = (newSelectedOption) => {
    setSelectedOption(newSelectedOption);
    // selectedOption can be null when the `x` (close) button is clicked
    // if (selectedOption) {
    //   console.log(`Selected: ${selectedOption.label}`);
  };

  return (
    <>
      <h1>Users</h1>
      <Select
        options={options}
        value={selectedOption}
        defaultValue={options[2]}
        onChange={handleChange}
      />
      {isLoading ? (
        <h3>Cargando...</h3>
      ) : users.length !== 0 ? (
        users.map(
          ({ id, userResponseDto: { name, lastname, email, stateText } }) => (
            <>
              <br />
              <UserContainer
                id={id}
                name={name}
                lastname={lastname}
                email={email}
                stateText={stateText}
                schedule={schedule}
              />
              <br />
            </>
          )
        )
      ) : (
        <h2>No hay usuarios de este estado</h2>
      )}
    </>
  );
};

export default App;
