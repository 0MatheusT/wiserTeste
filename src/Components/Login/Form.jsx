import React, { useState } from "react";
import './Form.css'

const  LoginForm = (props) => {
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`E-mail: ${email} \nSenha: ${password}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-mail:
        <input
          type="text"
          value={email}
          onChange={e => setName(e.target.value)}
          placeholder = "user.name@mail.com"
        />
      </label>
      <label>
        Senha:
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder = "*******"
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default LoginForm;