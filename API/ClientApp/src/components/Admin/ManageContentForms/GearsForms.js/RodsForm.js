import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { RodsCategories } from '../../../../addons/Gears/RodsCategories';
import { createRod } from '../../../../utils/GearsApi';

const items = RodsCategories.map(x => x.name);

export function RodsForm() {
  const [formData, setFormData] = useState({
    Type: 0,
    Name: '',
    Sort: '',
    Power: '',
    Test1: 0,
    Test2: 0,
    Length: 0,
    Feel: 0,
    Hardness: 0,
    Build: "",
    Bonus1: "",
    Bonus2: "",
    Bonus3: "",
    Durability: 0,
    Level: 0,
    SilverPrice: 0,
    GoldPrice: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    let success = await createRod(formData);

    if (success) {
      alert('Добавлена');
    } else {
      alert('Неудачно');
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'Type') {
      setFormData({ ...formData, [name]: items.indexOf(value) });
      return;
    }

    if (name === 'Test1' || name === 'Test2' || name === 'Feel' || name === 'Hardness' || name === 'Level' || name === 'SilverPrice' || name === 'GoldPrice'){
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
          id='type'
          name='Type'
          type="select"
          value={formData[formData.Type]}
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
          Тип
        </Label>
        <Input
          id="sort"
          name="Sort"
          placeholder="Max"
          type="text"
          value={formData.Sort}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Мощность
        </Label>
        <Input
          id="power"
          name="Power"
          placeholder="Лёгкое"
          type="text"
          value={formData.Power}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Тест - 1
        </Label>
        <Input
          id="test1"
          name="Test1"
          placeholder="2"
          type="number"
          value={formData.Test1}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Тест - 2
        </Label>
        <Input
          id="test1"
          name="Test2"
          placeholder="18"
          type="number"
          value={formData.Test2}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Длина
        </Label>
        <Input
          id="length"
          name="Length"
          placeholder="8,00"
          type="number"
          value={formData.Length}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Чув.
        </Label>
        <Input
          id="feel"
          name="Feel"
          placeholder="5"
          type="number"
          value={formData.Feel}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Жёс.
        </Label>
        <Input
          id="hardness"
          name="Hardness"
          placeholder="9"
          type="number"
          value={formData.Hardness}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Строй
        </Label>
        <Input
          id="Build"
          name="Build"
          placeholder="Средний"
          type="text"
          value={formData.Build}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Бонус 1
        </Label>
        <Input
          id="bonus1"
          name="Bonus1"
          placeholder="Оснастки +3"
          type="text"
          value={formData.Bonus1}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Бонус 2
        </Label>
        <Input
          id="bonus2"
          name="Bonus2"
          placeholder="Оснастки +3"
          type="text"
          value={formData.Bonus2}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Бонус 3
        </Label>
        <Input
          id="bonus3"
          name="Bonus3"
          placeholder="Оснастки +3"
          type="text"
          value={formData.Bonus3}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Прочн.
        </Label>
        <Input
          id="durability"
          name="Durability"
          placeholder="17,00"
          type="number"
          value={formData.Durability}
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
          За серебро
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
      <Button type="submit">
        Отправить
      </Button>
    </Form>
  );
}