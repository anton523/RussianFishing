import React from 'react';
import './Profile.css';

export function ProfileInfo({user}) {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Профиль</h3>
        <span>Join date: {new Date(user.createdAt).toLocaleDateString()}</span>
        <hr />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h5>Обо мне</h5>
        <div className='info-container' style={{ display: 'flex', gap: '15px' }}>
          <div>0 (полученные лайки)</div>
          <div>0 (полученные комментарии)</div>
          <div>0 (лучшие ответы)</div>
        </div>
        <hr />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h5>Описание</h5>
        <div style={{ fontSize: '15px', fontStyle: 'italic', wordBreak: 'break-all' }}>{user.description}</div>
      </div>
    </>
  );
}