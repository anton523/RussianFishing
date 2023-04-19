import React, { useState } from 'react';
import { ListGroup, ListGroupItem, FormGroup, Label, Input } from 'reactstrap';
import { SlingshotForm } from './ToolsForms.js/SlingshotForm';
import { TToolForm } from './ToolsForms.js/TToolForm';

const tools = []
const items = ["Кобры / Рогатки", "Инструменты"]

export function ToolsForm() {
  const [selected, setSelected] = useState(items[0]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
      <div>
        <ListGroup>
          <ListGroupItem action tag="button" color={selected === items[0] ? 'primary' : 'secondary'} onClick={() => setSelected(items[0])}>
            Добавить рогатку / кобру
          </ListGroupItem>
          <ListGroupItem action tag="button" color={selected === items[1] ? 'primary' : 'secondary'} onClick={() => setSelected(items[1])}>
            Добавить инструмент
          </ListGroupItem>
          {
            tools.map(tool => {
              return <ListGroupItem action tag="button">{tool}</ListGroupItem>
            })
          }
        </ListGroup>
      </div>
      {
        selected === items[0] ? <SlingshotForm /> : <TToolForm />
      }
    </div>
  );
}