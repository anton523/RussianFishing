import React from 'react';

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
        <div style={{ display: 'flex', gap: '15px' }}>
          <span>0 (полученные лайки)</span>
          <span>0 (полученные комментарии)</span>
          <span>0 (лучшие ответы)</span>
        </div>
        <hr />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h5>Описание</h5>
        <span style={{ fontSize: '15px', fontStyle: 'italic' }}>{user.description}</span>
      </div>
    </>
  );
}