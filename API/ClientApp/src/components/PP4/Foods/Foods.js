import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { AlcoholFoods } from './AlcoholFoods';
import { FFoods } from './FFoods';

const manageList = ['Алкоголь', 'Еда']

export function Foods() {
  const [manage, setManage] = useState(manageList[0]);

  function render() {
    return manage === manageList[0] ? <AlcoholFoods /> : <FFoods />;
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
          <Button disabled onClick={() => setManage(manageList[1])}>
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