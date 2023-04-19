import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createTool } from '../../../../utils/ToolsApi';

export function TToolForm(){
  const [formData, setFormData] = useState({
    Name: '',
    Description: '',
    SilverPrice: 0,
    GoldPrice: 0,
    Image: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)
    let success = await createTool(formData);

    if (success) {
      alert('Добавлена');
    } else {
      alert('Неудачно');
    }
  };

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    const { name } = event.target;
    setFormData({ ...formData, [name]: selectedFile })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form style={{ width: '100%', paddingBottom: '50px' }} onSubmit={handleSubmit}>
      <FormGroup>
        <Label>
          Название
        </Label>
        <Input
          id="name"
          name="Name"
          placeholder="Лопата"
          type="text"
          value={formData.Name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Описание
        </Label>
        <Input
          id="description"
          name="Description"
          placeholder="Хорошо копает"
          type="textarea"
          value={formData.Description}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Цена сер.
        </Label>
        <Input
          id="silverPrice"
          name="SilverPrice"
          placeholder="123,23"
          type="number"
          value={formData.SilverPrice}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Цена зол.
        </Label>
        <Input
          id="goldPrice"
          name="GoldPrice"
          placeholder="177,23"
          type="number"
          value={formData.GoldPrice}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Фото
        </Label>
        <Input
          id="image"
          name="Image"
          type="file"
          onChange={handleImageUpload}
        />
      </FormGroup>
      <Button type="submit">
        Отправить
      </Button>
    </Form>
  );
}