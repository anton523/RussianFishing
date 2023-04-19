import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { FishingLineHooks } from './FishingLineHooks';
import { HookHooks } from './HookHooks';

const manageList = ['Крючки', 'Лески']

export function Hooks() {
  const [manage, setManage] = useState(manageList[0]);

  function render() {
    return manage === manageList[0] ? <HookHooks /> : <FishingLineHooks />;
  }

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column', margin: 'auto', padding: '0 10%' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup>
          <Button onClick={() => setManage(manageList[0])}>
            Крючки
          </Button>
          <Button onClick={() => setManage(manageList[1])}>
            Лески
          </Button>
        </ButtonGroup>
      </div>
      { render() }
    </div>
  );
}