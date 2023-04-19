import React, { useState, useContext } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { register } from '../../utils/UserApi'
import { AuthContext } from '../../contexts/Auth';
import { useNavigate } from "react-router-dom";

export function Register() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formData;
    const successRegister = await register(email, password);
    auth.login(successRegister);

    if (successRegister){
      navigate('/');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Зарегистрироваться</h1>
        <h6>Уже есть аккаунт? <a href="/login">Войти</a></h6>
      </div>
      <Form style={{ width: '500px', margin: 'auto' }} onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">
            Эл. почта
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="pp4@example.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">
            Пароль
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="********"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
        <div style={{ textAlign: 'center' }}>
          <Button type="submit" block>
            Зарегистрироваться
          </Button>
        </div>
      </Form>
    </div>
  );
}