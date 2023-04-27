import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { CoilsCategories } from '../../../../addons/Gears/CoilsCategories';
import { createCoil, deleteCoil, updateCoil } from '../../../../utils/GearsApi';

const items = CoilsCategories.map(x => x.name);

export function CoilsForm({ formData, setFormData, formGroup, formGroups, setCoils, setFormGroup, defaultFormData }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    let success = formGroup === formGroups[0] ? await createCoil(formData) : await updateCoil(formData.Id, formData);

    if (success) {
      alert('Удалось');
    } else {
      alert('Неудачно');
    }
  };

  const handleDelete = async (event) => {
    deleteCoil(formData.Id).then(isDeleted => {
      if (isDeleted) {
        alert('Удалена');
        setCoils(prev => prev.filter(x => x.id !== formData.Id));
        setFormData(defaultFormData);
        setFormGroup(formGroups[0]);
      } else {
        alert('Не удалось');
      }
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    if (name === 'CoilType') {
      setFormData({ ...formData, [name]: items.indexOf(value) });
      console.log(formData[formData.CoilType]);
      return;
    }

    if (name === 'Size' || name === 'Level') {
      setFormData({ ...formData, [name]: parseInt(value) });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form style={{ width: '100%', paddingBottom: '50px' }} onSubmit={handleSubmit}>
      <FormGroup>
        <Label>
          Тип
        </Label>
        <Input
          id='coilType'
          name='CoilType'
          type="select"
          value={formData[formData.CoilType]}
          onChange={handleChange}
        >
          {
            items.map(item => {
              return <option key={item}>{item}</option>
            })
          }
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>
          Название
        </Label>
        <Input
          id="name"
          name="Name"
          placeholder="Goliaf 30000"
          type="text"
          value={formData.Name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Размер
        </Label>
        <Input
          id="size"
          name="Size"
          placeholder="30000"
          type="number"
          value={formData.Size}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Тест
        </Label>
        <Input
          id="test"
          name="Test"
          placeholder="40"
          type="number"
          value={formData.Test}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Передат.
        </Label>
        <Input
          id="peredat"
          name="Peredat"
          placeholder="5,80"
          type="number"
          value={formData.Peredat}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          300м. в мм.
        </Label>
        <Input
          id="threeHundred"
          name="ThreeHundred"
          placeholder="0,44"
          type="number"
          value={formData.ThreeHundred}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Скор.
        </Label>
        <Input
          id="speed"
          name="Speed"
          placeholder="1,63"
          type="number"
          value={formData.Speed}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Фрик.
        </Label>
        <Input
          id="freak"
          name="Freak"
          placeholder="33,60"
          type="number"
          value={formData.Freak}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Мех. кг.
        </Label>
        <Input
          id="mechKilo"
          name="MechKilo"
          placeholder="120,00"
          type="number"
          value={formData.MechKilo}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Ур.
        </Label>
        <Input
          id="level"
          name="Level"
          placeholder="32"
          type="number"
          value={formData.Level}
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
      <div style={{ display: 'flex' }}>
        <Button type="submit">{formGroup === formGroups[0] ? 'Отправить' : 'Изменить'}</Button>
        {
          formGroup === formGroups[2] ? <Button onClick={handleDelete} style={{ marginLeft: 'auto' }} color='danger'>Удалить</Button> : <></>
        }
      </div>
    </Form>
  );
}