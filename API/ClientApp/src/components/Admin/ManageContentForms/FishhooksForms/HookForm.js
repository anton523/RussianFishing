import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createHook } from "../../../../utils/HooksApi";

const items = ["КЛАССИЧЕСКИЕ", "КАРПОВЫЕ", "ОГРУЖЁННЫЕ", "ТРОЙНИКИ", "ДЖИГ-ГОЛОВКИ", "ОФСЕТНЫЕ", "ЖИВЦОВЫЕ", "МОРСКИЕ"];

export function HooksForm() {
  const [selected, setSelected] = useState(items[0]);
  const [formData, setFormData] = useState({
    Type: 0,
    Name: '',
    Height: 0,
    S24: 0, S22: 0, S20: 0, S19: 0, S18: 0, S17: 0,
    S16: 0, S15: 0, S14: 0, S13: 0, S12: 0, S11: 0, S10: 0, S9: 0,
    S8: 0, S7: 0, S6: 0, S5: 0, S4: 0, S3: 0, S2: 0, S1: 0,
    S1Zero: 0, S2Zero: 0, S3Zero: 0,
    S4Zero: 0, S5Zero: 0, S6Zero: 0, S8Zero: 0, S10Zero: 0,
    S12Zero: 0,
  });

  const s = [formData.S1, formData.S2, formData.S3, formData.S4, formData.S5, formData.S6, formData.S7,
  formData.S8, formData.S9, formData.S10, formData.S11, formData.S12, formData.S13,
  formData.S14, formData.S15, formData.S16, formData.S17, formData.S18, formData.S19, formData.S20, '', formData.S22, '', formData.S24
  ];

  const sZero = [formData.S1Zero, formData.S2Zero, formData.S3Zero, formData.S4Zero, formData.S5Zero,
  formData.S6Zero, '', formData.S8Zero, '', formData.S10Zero, '', formData.S12Zero
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    let success = await createHook(formData);

    if (success) {
      alert('Добавлена');
    } else {
      alert('Неудачно');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'Type') {
      setSelected(value);
      setFormData({ ...formData, [name]: items.indexOf(value) });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  function render1(x) {
    if (x === 23 || x === 21)
      return;

    if (selected === items[1]) {
      if (x > 18) {
        return;
      }
    }

    if (selected === items[2]) {
      if (x > 14 || x === 13 || x === 11 || x === 9 || x === 7 || x === 5 || x === 3) {
        return;
      }
    }

    if (selected === items[3]) {
      if (x > 8) {
        return;
      }
    }

    if (selected === items[4]) {
      if (x > 10 || x === 9) {
        return;
      }
    }

    if (selected === items[5]) {
      if (x > 8 || x === 7 || x === 5 || x === 3) {
        return;
      }
    }

    if (selected === items[6]) {
      if (x > 4 || x === 3) {
        return;
      }
    }

    if (selected === items[7]) {
        return;
    }

    return <FormGroup key={x}>
      <Label>
        {x}
      </Label>
      <Input
        id={x}
        name={`S${x}`}
        placeholder="6,40"
        type="number"
        value={s[x - 1]}
        onChange={handleChange}
      />
    </FormGroup>;
  }

  function render2(x) {
    if (x === 0) {
      return;
    }

    if (selected === items[0] || selected === items[1] || selected === items[5] || selected === items[6]) {
      if (x > 4) {
        return;
      }
    }

    if (selected === items[2]) {
      if (x > 2) {
        return;
      }
    }

    if (selected === items[3]) {
      if (x > 6) {
        return;
      }
    }

    if (selected === items[4]) {
      if (x === 7 || x === 9 || x === 11) {
        return;
      }
    }

    if (selected === items[7]) {
      if (x === 1 || x === 7 || x === 9 || x === 11) {
        return;
      }
  }

    return <FormGroup key={x}>
      <Label>
        {`${x}/0`}
      </Label>
      <Input
        id={`${x}/0`}
        name={`S${x}Zero`}
        placeholder="6,40"
        type="number"
        value={sZero[x - 1]}
        onChange={handleChange}
      />
    </FormGroup>;
  }

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
          placeholder="Червь"
          type="text"
          value={formData.Name}
          onChange={handleChange}
        />
      </FormGroup>
      {
        selected === items[2]
          ? <FormGroup>
            <Label>
              Вес
            </Label>
            <Input
              id="height"
              name="Height"
              placeholder="3,0"
              type="number"
              value={formData.Height}
              onChange={handleChange}
            />
          </FormGroup> : <></>
      }
      {
        [...Array(24).keys()].reverse().map(x => {
          return render1(x + 1)
        })
      }
      {
        [...Array(12).keys()].map(x => {
          return render2(x + 1)
        })
      }
      <Button type="submit">
        Отправить
      </Button>
    </Form>
  );
}