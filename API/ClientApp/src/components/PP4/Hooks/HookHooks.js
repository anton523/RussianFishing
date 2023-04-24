import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { getAllHooks } from '../../../utils/HooksApi';
import { ClassicHook } from './Hooks/ClassicHook';
import { HooksCategories } from '../../../addons/Hooks/HooksCategories';
import { CarpHook } from './Hooks/CarpHook';
import { ShippedHook } from './Hooks/ShippedHook';
import { TeesHook } from './Hooks/TeesHook';
import { JigHeadHook } from './Hooks/JigHeadsHook';
import { OffsetHook } from './Hooks/OffsetHook';
import { LiveBaitHook } from './Hooks/LiveBaitHook';
import { SeaHook } from './Hooks/SeaHook';

export function HookHooks() {
  const [selected, setSelected] = useState(HooksCategories[0].name);
  const [hooks, setHooks] = useState(null);

  useEffect(() => {
    getAllHooks().then(hooks => {
      setHooks(hooks);
    })
  }, [])

  function render() {
    if (selected === HooksCategories[0].name) {
      return <ClassicHook hooks={hooks} />
    }
    if (selected === HooksCategories[1].name) {
      return <CarpHook hooks={hooks} />
    }
    if (selected === HooksCategories[2].name) {
      return <ShippedHook hooks={hooks} />
    }
    if (selected === HooksCategories[3].name) {
      return <TeesHook hooks={hooks} />
    }
    if (selected === HooksCategories[4].name) {
      return <JigHeadHook hooks={hooks} />
    }
    if (selected === HooksCategories[5].name) {
      return <OffsetHook hooks={hooks} />
    }
    if (selected === HooksCategories[6].name) {
      return <LiveBaitHook hooks={hooks} />
    }
    if (selected === HooksCategories[7].name) {
      return <SeaHook hooks={hooks} />
    }
  }

  if (hooks === null) {
    return <></>;
  }

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
      <div style={{ margin: 'auto' }}>
        <ButtonGroup className='button-container'>
          {
            HooksCategories.map(category => {
              return (
                <Button
                  key={category.name}
                  color='primary'
                  active={selected === category.name}
                  onClick={() => setSelected(category.name)}>
                  {category.name}
                </Button>
              );
            })
          }
        </ButtonGroup>
        <ButtonGroup vertical className='button-container-vertical'>
          {
            HooksCategories.map(category => {
              return (
                <Button
                  key={category.name}
                  color='primary'
                  active={selected === category.name}
                  onClick={() => setSelected(category.name)}>
                  {category.name}
                </Button>
              );
            })
          }
        </ButtonGroup>
      </div>
      {render()}
    </div>
  );
}