import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { CoilsGear } from './CoilsGear';
import { RodsGear } from './RodsGear';

const manageList = ['Coils', 'Rods']

export function Gears() {
  const [manage, setManage] = useState(manageList[0]);

  function render() {
    return manage === manageList[0] ? <CoilsGear /> : <RodsGear />;
  }

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column', margin: 'auto', padding: '0 10%' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup>
          <Button onClick={() => setManage(manageList[0])}>
            Катушки
          </Button>
          <Button onClick={() => setManage(manageList[1])}>
            Удилища
          </Button>
        </ButtonGroup>
      </div>
      { render() }
    </div>
  );
}