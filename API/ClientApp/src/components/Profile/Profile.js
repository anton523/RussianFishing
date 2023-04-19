import React, { useContext, useEffect, useState } from 'react';
import { Container, Button } from 'reactstrap';
import { ProfileInfo } from './ProfileInfo';
import { ProfileEdit } from './ProfileEdit';
import { UserContext } from '../../contexts/User';
import { Loading } from '../../addons/Loading';

const items = ['Информация', 'Редактирование']

export function Profile() {
  const [selected, setSelected] = useState(items[0]);
  const { user, changeUser } = useContext(UserContext);

  if (user === null){
    return <Loading></Loading>
  }

  return (
    <div style={{ display: 'flex', gap: '50px' }}>
      <Container className='border box-shadow mb-3' style={{
        height: '300px',
        width: '25%',
        minWidth: '150px',
        backgroundColor: 'rgb(238,238,238)',
        margin: '0',
        border: 'solid 1px lightgray',
        textAlign: 'center'
      }}>
        <div style={{ width: '100px', height: '100px', margin: 'auto', marginTop: '15px' }}>
          <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src={user.avatarUri ? user.avatarUri : '/imgs/profile.png'} />
        </div>
        <div style={{ color: '#1F1F1F', paddingTop: '10px', textAlign: 'center' }}>
          {user.login}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', padding: '0 15px', fontSize: '13px', borderRight: 'solid 1px lightgray' }}>
            <span>0</span>
            <span>Подписчики</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', padding: '0 15px', fontSize: '13px' }}>
            <span>0</span>
            <span>Подписки</span>
          </div>
        </div>
        {
          selected === items[0]
            ? <Button outline block style={{ position: 'relative', bottom: '-5px' }} onClick={() => setSelected(items[1])}>Редактировать профиль</Button>
            : <Button outline block style={{ position: 'relative', bottom: '-5px' }} onClick={() => setSelected(items[0])}>Отмена</Button>
        }

      </Container>
      <div style={{ width: '100%', minWidth: '175px' }}>
        {
          selected === items[0] ? <ProfileInfo user={user} /> : <ProfileEdit changeUser={changeUser} />
        }
      </div>
    </div>
  );
}