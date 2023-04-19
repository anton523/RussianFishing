import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { ManageUsers } from './ManageUsers';
import { ManageContent } from './ManageContent';

const manageList = ['users', 'content']

export function Admin() {
  const [manage, setManage] = useState(manageList[0]);

  function render() {
    return manage === manageList[0] ? <ManageUsers /> : <ManageContent />;
  }

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
      <div style={{ margin: 'auto' }}>
        <ButtonGroup>
          <Button onClick={() => setManage(manageList[0])}>
            Управление пользователями
          </Button>
          <Button onClick={() => setManage(manageList[1])}>
            Управление контентом
          </Button>
        </ButtonGroup>
      </div>
      { render() }
    </div>
  );
}