import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { CoilsCategories } from '../../../addons/Gears/CoilsCategories';
import { InertialessCoils } from './CoilsGear/InertialessCoils';
import { getAllCoils } from '../../../utils/GearsApi';
import { BytecastingCoils } from './CoilsGear/BytecastingCoils';
import { LowprofileCoils } from './CoilsGear/LowprofileCoils';
import { PowerCoils } from './CoilsGear/PowerCoils';
import '../PP4.css';

export function CoilsGear() {
  const [selected, setSelected] = useState(CoilsCategories[0].name);
  const [coils, setCoils] = useState(null);

  useEffect(() => {
    getAllCoils().then(coils => {
      setCoils(coils);
    })
  }, []);

  function render() {
    if (selected === CoilsCategories[0].name) {
      return <InertialessCoils coils={coils.filter(x => x.coilType === 'Inertialess')} />
    }
    if (selected === CoilsCategories[1].name) {
      return <BytecastingCoils coils={coils.filter(x => x.coilType === 'Bytecasting')} />
    }
    if (selected === CoilsCategories[2].name) {
      return <LowprofileCoils coils={coils.filter(x => x.coilType === 'Lowprofile')} />
    }
    if (selected === CoilsCategories[3].name) {
      return <PowerCoils coils={coils.filter(x => x.coilType === 'Power')} />
    }
  }

  if (coils === null) {
    return <></>;
  }

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
      <div style={{ margin: 'auto' }}>
        <ButtonGroup className='button-container'>
          {
            CoilsCategories.map(category => {
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
            CoilsCategories.map(category => {
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