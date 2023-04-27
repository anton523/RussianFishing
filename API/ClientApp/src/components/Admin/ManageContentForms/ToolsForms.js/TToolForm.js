import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createTool, updateTool, deleteTool } from '../../../../utils/ToolsApi';

export function TToolForm({ formData, setFormData, formGroup, formGroups, setObj, setFormGroup, defaultFormData }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    let success = formGroup === formGroups[1] ? await createTool(formData) : await updateTool(formData.Id, formData);

    if (success) {
      alert('Удалось');
    } else {
      alert('Неудачно');
    }
  };

  const handleDelete = async (event) => {
    deleteTool(formData.Id).then(isDeleted => {
      if (isDeleted) {
        alert('Удалена');
        setObj(prev => prev.filter(x => x.id !== formData.Id));
        setFormData(defaultFormData);
        setFormGroup(formGroups[1]);
      } else {
        alert('Не удалось');
      }
    })
  }

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
      <div style={{ display: 'flex' }}>
        <Button type="submit">{formGroup === formGroups[1] ? 'Отправить' : 'Изменить'}</Button>
        {
          formGroup === formGroups[3] ? <Button onClick={handleDelete} style={{ marginLeft: 'auto' }} color='danger'>Удалить</Button> : <></>
        }
      </div>
    </Form>
  );
}