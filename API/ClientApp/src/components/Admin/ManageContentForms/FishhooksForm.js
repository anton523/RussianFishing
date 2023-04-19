import React, { useState } from 'react';
import { ListGroup, ListGroupItem, Col, FormGroup, Label, Input } from 'reactstrap';
import { HooksForm } from './FishhooksForms/HookForm';
import { FishingLinesForm } from './FishhooksForms/FishinglinesForm';

const fishhooks = []
const items = ["Крючки", "Лески"]

export function FishhooksForm() {
  const [selected, setSelected] = useState(items[0]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
      <div>
        <ListGroup>
          <ListGroupItem action tag="button" color={selected === items[0] ? 'primary' : 'secondary'} onClick={() => setSelected(items[0])}>
            Добавить крючок
          </ListGroupItem>
          <ListGroupItem action tag="button" color={selected === items[1] ? 'primary' : 'secondary'} onClick={() => setSelected(items[1])}>
            Добавить леску
          </ListGroupItem>
          {
            fishhooks.map(hook => {
              return <ListGroupItem action tag="button">{hook}</ListGroupItem>
            })
          }
        </ListGroup>
      </div>
      {
        selected === items[0] ? <HooksForm /> : <FishingLinesForm />
      }
    </div>
  );
}