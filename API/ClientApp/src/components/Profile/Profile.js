import React, { useContext, useEffect, useState } from 'react';
import { Container, Button } from 'reactstrap';
import { ProfileInfo } from './ProfileInfo';
import { ProfileEdit } from './ProfileEdit';
import { UserContext } from '../../contexts/User';
import { Loading } from '../../addons/Loading';
import './Profile.css';

const items = ['Информация', 'Редактирование']

export function Profile() {
  const [selected, setSelected] = useState(items[0]);
  const { user, changeUser } = useContext(UserContext);

  if (user === null) {
    return <Loading></Loading>
  }

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Container className='border box-shadow mb-3 bg-light' style={{
        width: '40%',
        height: 'min-content',
        minWidth: '150px',
        border: 'solid 1px lightgray',
        borderRadius: '5px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div style={{ paddingTop: '1rem' }}>
          <img width='100%' style={{
            borderRadius: '5px'
          }} src={user.avatarUri ? user.avatarUri : '/imgs/profile.png'} />
        </div>
        <div style={{ color: '#1F1F1F', textAlign: 'center' }}>
          <h4>{user.login}</h4>
        </div>
        <div className='media'>
          <div className='media-item'>
            <div>0</div>
            <div>Подписчики</div>
          </div>
          <div className='media-item'>
            <div>0</div>
            <div>Подписки</div>
          </div>
        </div>
        {
          selected === items[0]
            ? <Button block style={{ marginTop: '2rem', marginBottom: '1rem' }} outline onClick={() => setSelected(items[1])}>Редактировать профиль</Button>
            : <Button block style={{ marginTop: '2rem', marginBottom: '1rem' }} outline onClick={() => setSelected(items[0])}>Отмена</Button>
        }
      </Container>
      <div style={{ width: '100%' }}>
        {
          selected === items[0] ? <ProfileInfo user={user} /> : <ProfileEdit changeUser={changeUser} />
        }
      </div>
    </div>
  );
}