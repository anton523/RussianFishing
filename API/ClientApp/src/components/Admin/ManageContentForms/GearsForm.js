import React, { useState } from 'react';
import { Form, Col, FormGroup, Label, Input, ListGroup, ListGroupItem, FormText, Button } from 'reactstrap';
import { NaturalBaitsForm } from './BaitsForms/NaturalBaitsForm';
import { UnnaturalBaitsForm } from './BaitsForms/UnnaturalBaitsForm';
import { CoilsForm } from './GearsForms.js/CoilsForm';
import { RodsForm } from './GearsForms.js/RodsForm';

const gears = []
const items = ["Катушки", "Удилища"]

export function GearsForm() {
  const [selected, setSelected] = useState(items[0]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
      <div>
        <ListGroup>
          <ListGroupItem action tag="button" color={selected === items[0] ? 'primary' : 'secondary'} onClick={() => setSelected(items[0])}>
            Добавить катушку
          </ListGroupItem>
          <ListGroupItem action tag="button" color={selected === items[1] ? 'primary' : 'secondary'} onClick={() => setSelected(items[1])}>
            Добавить удилище
          </ListGroupItem>
          {
            gears.map(gear => {
              return <ListGroupItem action tag="button">{gear}</ListGroupItem>
            })
          }
        </ListGroup>
      </div>
      {
        selected === items[0] ? <CoilsForm /> : <RodsForm />
      }
    </div>
  );
}