import React, { useState } from 'react';
import { Form, Col, FormGroup, Label, Input, ListGroup, ListGroupItem, FormText, Button } from 'reactstrap';
import { NaturalBaitsForm } from './BaitsForms/NaturalBaitsForm';
import { UnnaturalBaitsForm } from './BaitsForms/UnnaturalBaitsForm';

const baits = []
const items = ["Наживка", "Приманка"]

export function BaitsForm() {
  const [selected, setSelected] = useState(items[0]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
      <div>
        <ListGroup>
          <ListGroupItem action tag="button" color={selected === items[0] ? 'primary' : 'secondary'} onClick={() => setSelected(items[0])}>
            Добавить наживку
          </ListGroupItem>
          <ListGroupItem action tag="button" color={selected === items[1] ? 'primary' : 'secondary'} onClick={() => setSelected(items[1])}>
            Добавить приманку
          </ListGroupItem>
          {
            baits.map(bait => {
              return <ListGroupItem action tag="button">{bait}</ListGroupItem>
            })
          }
        </ListGroup>
      </div>
      {
        selected === items[0] ? <NaturalBaitsForm /> : <UnnaturalBaitsForm />
      }
    </div>
  );
}