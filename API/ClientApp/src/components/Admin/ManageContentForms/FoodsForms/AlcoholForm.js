import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createAlcohol } from "../../../../utils/FoodsApi";

export function AlcoholForm() {
  const [formData, setFormData] = useState({
    Name: '',
    Shop: '',
    Pond: '',
    Skill: 0,
    Max: 0,
    Hours: 0,
    Portions: 0,
    Ostrog: 0,
    Portion: 0,
    Full: 0,
    PerOnePercent: 0,
    PerOnePercent2: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    let success = await createAlcohol(formData);

    if (success) {
      alert('Добавлена');
    } else {
      alert('Неудачно');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'Hours' || name === 'Portions' || name === 'Full'){
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
          placeholder="Kuban Blache / Ruby Diamond"
          type="text"
          value={formData.Name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Магазин
        </Label>
        <Input
          id="shop"
          name="Shop"
          placeholder="Продуктовый"
          type="text"
          value={formData.Shop}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Водоём
        </Label>
        <Input
          id="pond"
          name="Pond"
          placeholder="Любой"
          type="text"
          value={formData.Pond}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Опыт %
        </Label>
        <Input
          id="skill"
          name="Skill"
          placeholder="19,00"
          type="number"
          value={formData.Skill}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Max %
        </Label>
        <Input
          id="max"
          name="Max"
          placeholder="190"
          type="number"
          value={formData.Max}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Часов
        </Label>
        <Input
          id="hours"
          name="Hours"
          placeholder="12"
          type="number"
          value={formData.Hours}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Порций
        </Label>
        <Input
          id="portions"
          name="Portions"
          placeholder="2"
          type="number"
          value={formData.Portions}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Цена
        </Label>
        <Input
          id="price"
          name="Price"
          placeholder="298,80"
          type="number"
          value={formData.Price}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Острог
        </Label>
        <Input
          id="ostrog"
          name="Ostrog"
          placeholder="239,04"
          type="number"
          value={formData.Ostrog}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Порция
        </Label>
        <Input
          id="portion"
          name="Portion"
          placeholder="119,52"
          type="number"
          value={formData.Portion}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Full СЧ
        </Label>
        <Input
          id="full"
          name="Full"
          placeholder="2329"
          type="number"
          value={formData.Full}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          за 1 %
        </Label>
        <Input
          id="perOnePercent"
          name="PerOnePercent"
          placeholder="6,29"
          type="number"
          value={formData.PerOnePercent}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          за 1 % на СЧ
        </Label>
        <Input
          id="perOnePercent2"
          name="PerOnePercent2"
          placeholder="6,29"
          type="number"
          value={formData.PerOnePercent2}
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit">
        Отправить
      </Button>
    </Form>
  );
}