import React, { useState } from "react";
import Main from "../template/main";
import Axios from "axios";
import TablePersons from "./list";

function User() {
  const baseUrl = "http://localhost:3001/users";
  const [user, setUser] = useState({ name: "", email: "" });
  const [flag, setFlag] = useState(false);
  const clear = () => setUser(initialState.user);
  const getList = async () => await Axios(baseUrl);

  const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle:
      "Cadastro de usuários: Incluir, Listar,Alterar e Excluir. Criado com React Hooks!"
  };

  const initialState = {
    user: { name: "", email: "" }
  };

  const updateField = e => {
    setFlag(false);
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const save = () => {
    const inputs = document.querySelectorAll("input");
    if (!isInputEmpty(inputs)) return false;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    Axios[method](url, user).then(() => {
      setUser(initialState.user);
      setFlag(true);
    });
  };

  const edit = elem => {
    setUser({
      name: elem.name,
      email: elem.email,
      id: elem.id
    });
  };

  function renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={user.name}
                onChange={e => updateField(e)}
                placeholder="Digite o nome..."
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={user.email}
                onChange={e => updateField(e)}
                placeholder="Digite o E-mail..."
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={e => save(e)}>
              Salvar
            </button>
            <button className="btn btn-secondary ml-2" onClick={() => clear()}>
              Cancelar
            </button>
          </div>
        </div>
        <hr />
      </div>
    );
  }

  function isInputEmpty(inputs) {
    let resp = 0;
    inputs.forEach(input => {
      input.className = "form-control";
      if (!input.value) {
        input.className += " border-danger";
        resp++;
      }
    });
    return resp ? false : true;
  }

  return (
    <Main {...headerProps}>
      {renderForm()}
      {TablePersons(getList, edit, flag)}
    </Main>
  );
}

export default User;
