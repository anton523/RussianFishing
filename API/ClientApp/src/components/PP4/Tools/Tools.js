import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { SlingShotsTool } from './Slingshots';
import { TTools } from './TTools';

const manageList = ['КОБРЫ / РОГАТКИ', 'ИНСТРУМЕНТЫ']

export function Tools() {
  const [manage, setManage] = useState(manageList[0]);

  function render() {
    return manage === manageList[0] ? <SlingShotsTool /> : <TTools />;
  }

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column', margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup>
          <Button onClick={() => setManage(manageList[0])}>
            {
              manageList[0]
            }
          </Button>
          <Button onClick={() => setManage(manageList[1])}>
            {
              manageList[1]
            }
          </Button>
        </ButtonGroup>
      </div>
      {render()}
    </div>
  );
}