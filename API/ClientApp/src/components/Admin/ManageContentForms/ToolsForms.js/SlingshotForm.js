import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createSlingshot, updateSlingshot, deleteSlingshot } from '../../../../utils/ToolsApi';

export function SlingshotForm({ formData, setFormData, formGroup, formGroups, setObj, setFormGroup, defaultFormData }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    let success = formGroup === formGroups[0] ? await createSlingshot(formData) : await updateSlingshot(formData.Id, formData);

    if (success) {
      alert('Удалось');
    } else {
      alert('Неудачно');
    }
  };

  const handleDelete = async (event) => {
    deleteSlingshot(formData.Id).then(isDeleted => {
      if (isDeleted) {
        alert('Удалена');
        setObj(prev => prev.filter(x => x.id !== formData.Id));
        setFormData(defaultFormData);
        setFormGroup(formGroups[0]);
      } else {
        alert('Не удалось');
      }
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name.startsWith('Score')) {
      setFormData({ ...formData, [name]: parseInt(value) });
      return;
    }

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
          placeholder="Cobra Tube S "
          type="text"
          value={formData.Name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Прикормка
        </Label>
        <Input
          id="bait"
          name="Bait"
          placeholder="Бойлы"
          type="text"
          value={formData.Bait}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Вид
        </Label>
        <Input
          id="sort"
          name="Sort"
          placeholder="Кобра"
          type="text"
          value={formData.Sort}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          0 Очков
        </Label>
        <Input
          id="score0"
          name="Score0"
          placeholder="38"
          type="number"
          value={formData.Score0}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          1 Очко
        </Label>
        <Input
          id="score1"
          name="Score1"
          placeholder="32"
          type="number"
          value={formData.Score1}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          2 Очка
        </Label>
        <Input
          id="score2"
          name="Score2"
          placeholder="11"
          type="number"
          value={formData.Score2}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          3 Очка
        </Label>
        <Input
          id="score3"
          name="Score3"
          placeholder="465"
          type="number"
          value={formData.Score3}
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