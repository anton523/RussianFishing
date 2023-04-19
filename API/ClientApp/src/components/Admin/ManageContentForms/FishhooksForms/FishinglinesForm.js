import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createFishingline } from "../../../../utils/HooksApi";

export function FishingLinesForm() {
  const [formData, setFormData] = useState({
    Name: '',
    Sort: '',
    Hardness: 0,
    Thickness: 0,
    Length1: 0,
    Price1: 0,
    Length2: 0,
    Price2: 0,
    Length3: 0,
    Price3: 0,
    Length4: 0,
    Price4: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    let success = await createFishingline(formData);

    if (success) {
      alert('Добавлена');
    } else {
      alert('Неудачно');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name.startsWith('Length') || name.startsWith('Price')){
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
          placeholder="Super Line - 1.5lb"
          type="text"
          value={formData.Name}
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
          placeholder="Нейлоновая"
          type="text"
          value={formData.Sort}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Прочность
        </Label>
        <Input
          id="hardness"
          name="Hardness"
          placeholder="0,70"
          type="number"
          value={formData.Hardness}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Толщина
        </Label>
        <Input
          id="еhickness"
          name="Thickness"
          placeholder="0,10"
          type="number"
          value={formData.Thickness}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          100-120 м.
        </Label>
        <Input
          id="length1"
          name="Length1"
          placeholder="120"
          type="number"
          value={formData.Length1}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Цена
        </Label>
        <Input
          id="price1"
          name="Price1"
          placeholder="6"
          type="number"
          value={formData.Price1}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          300-500 м.
        </Label>
        <Input
          id="length2"
          name="Length2"
          placeholder="120"
          type="number"
          value={formData.Length2}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Цена
        </Label>
        <Input
          id="price2"
          name="Price2"
          placeholder="6"
          type="number"
          value={formData.Price2}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          500-1000 м.
        </Label>
        <Input
          id="length3"
          name="Length3"
          placeholder="120"
          type="number"
          value={formData.Length3}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Цена
        </Label>
        <Input
          id="price3"
          name="Price3"
          placeholder="6"
          type="number"
          value={formData.Price3}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          1000-2000 м.
        </Label>
        <Input
          id="length4"
          name="Length4"
          placeholder="120"
          type="number"
          value={formData.Length4}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Цена
        </Label>
        <Input
          id="price4"
          name="Price4"
          placeholder="6"
          type="number"
          value={formData.Price4}
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit">
        Отправить
      </Button>
    </Form>
  );
}