import React, { useState, useEffect } from "react";
import Axios from "axios";

function Lista(list, edit, flag) {
  const baseUrl = "http://localhost:3001/users";
  const [param, setParam] = useState([]);
  const [isDeleted, setDeleted] = useState(false);

  const remove = user => {
    Axios.delete(`${baseUrl}/${user}`);
    setDeleted(true);
  };

  useEffect(() => {
    const main = async () => {
      const response = await list();
      const responseData = await response.data;
      const filteredData = responseData.map(item => item);
      setParam(filteredData);
    };
    main();
    setDeleted(false);
  }, [flag, isDeleted]);

  const retorno = param.map(elem => {
    return (
      <tr key={elem.id}>
        <td>{elem.id}</td>
        <td>{elem.name}</td>
        <td>{elem.email}</td>
        <td>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-warning mr-3"
              onClick={() => edit(elem)}
            >
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button className="btn btn-danger" onClick={() => remove(elem.id)}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </td>
      </tr>
    );
  });

  const RenderTable = () => {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>{retorno}</tbody>
        </table>
      </div>
    );
  };
  return RenderTable();
}

export default Lista;
