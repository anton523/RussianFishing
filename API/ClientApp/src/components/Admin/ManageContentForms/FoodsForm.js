import React, { useState } from 'react';
import { ListGroup, ListGroupItem, FormGroup, Label, Input } from 'reactstrap';
import { AlcoholForm } from './FoodsForms/AlcoholForm';

const foods = []
const items = ["Алкоголь", "Еда"]

export function FoodsForm() {
  const [selected, setSelected] = useState(items[0]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
      <div>
        <ListGroup>
          <ListGroupItem action tag="button" color={selected === items[0] ? 'primary' : 'secondary'} onClick={() => setSelected(items[0])}>
            Добавить алкоголь
          </ListGroupItem>
          <ListGroupItem disabled action tag="button" color={selected === items[1] ? 'primary' : 'secondary'} onClick={() => setSelected(items[1])}>
            Добавить еду
          </ListGroupItem>
          {
            foods.map(food => {
              return <ListGroupItem action tag="button">{food}</ListGroupItem>
            })
          }
        </ListGroup>
      </div>
      {
        selected === items[0] ? <AlcoholForm /> : <AlcoholForm />
      }
    </div>
  );
}