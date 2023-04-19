import React from 'react';
import { NavMenu } from './NavMenu';
import './Layout.css';
import ForumActivity from './ForumActivity';

export function Layout(props) {
  return (
    <div>
      <NavMenu />
      <div className='main' tag='main' style={{ display: 'flex' }}>
        {
          props.needAside ?
            <div className='left-side' style={{ width: '25%' }}>
            </div> : <></>
        }
        <div className='content' style={{ width: `${props.needAside ? '50%' : '100%'}` }}>
          {props.children}
        </div>
        {
          props.needAside ?
            <div className='right-side' style={{ width: '25%' }}>
              {
                props.needForumActivity ? <ForumActivity /> : <></>
              }
            </div> : <></>
        }
      </div>
    </div>
  );
}
