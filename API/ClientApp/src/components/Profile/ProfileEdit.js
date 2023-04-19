import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { updateUser } from '../../utils/UserApi';

export function ProfileEdit({changeUser}) {
  const [formData, setFormData] = useState({
    Email: '',
    Login: '',
    Description: '',
    Image: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const successUpdate = await updateUser(formData);

    if (successUpdate) {
      changeUser();
      alert('Обновлено!');
    } else {
      alert('Не удалось :(');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    const { name } = event.target;
    setFormData({ ...formData, [name]: selectedFile })
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Мой аккаунт</h3>
        <span>Посмотрите и отредактируйте сведения о себе.</span>
        <hr />
      </div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <FormGroup>
              <Label>
                Сменить отоброжаемое имя
              </Label>
              <Input
                id="login"
                name="Login"
                placeholder="example"
                type="text"
                value={formData.Login}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>
                Сменить фотографию
              </Label>
              <Input
                id="image"
                name="Image"
                type="file"
                onChange={handleImageUpload}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>
            Сменить эл. почту
          </Label>
          <Input
            id="exampleEmail"
            name="Email"
            placeholder="example@example.com"
            type="email"
            value={formData.Email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Сменить описание
          </Label>
          <Input
            id="description"
            name="Description"
            placeholder="Описание"
            type="textarea"
            value={formData.Description}
            onChange={handleChange}
          />
        </FormGroup>
        <div style={{ textAlign: 'center' }}>
          <Button type="submit" block>
            Обновить
          </Button>
        </div>
      </Form>
    </>
  );
}