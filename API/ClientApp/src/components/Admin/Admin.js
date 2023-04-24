import React, { useContext, useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { ManageUsers } from './ManageUsers';
import { ManageContent } from './ManageContent';
import { UserContext } from '../../contexts/User';
import { Navigate, useNavigate } from 'react-router-dom';
import { Loading } from '../../addons/Loading';
import { AuthContext } from '../../contexts/Auth';
import { useEffect } from 'react';
import { whoami } from '../../utils/UserApi';

const manageList = ['users', 'content']

export function Admin() {
  const [manage, setManage] = useState(manageList[0]);
  const [status, setStatus] = useState(true);
  const userContext = useContext(UserContext);

  useEffect(() => {
    whoami().then(status => {
      setStatus(status);
    })
  }, [])

  if (!status){
    return <Navigate to='/' />
  }

  if (userContext.user === null){
    return <Loading />
  }

  if (userContext.user.role !== 'Admin'){
    return <Navigate to='/' />
  }

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