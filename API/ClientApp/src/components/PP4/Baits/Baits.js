import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { NaturalBaits } from './NaturalBaits';
import { UnnaturalBaits } from './UnnaturalBaits';

const manageList = ['Приманки', 'Наживки']

export function Baits() {
  const [manage, setManage] = useState(manageList[0]);

  function render() {
    return manage === manageList[0] ? <UnnaturalBaits /> : <NaturalBaits />;
  }

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column', margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup>
          <Button onClick={() => setManage(manageList[0])}>
            Приманки
          </Button>
          <Button onClick={() => setManage(manageList[1])}>
            Наживки
          </Button>
        </ButtonGroup>
      </div>
      {render()}
    </div>
  );
}