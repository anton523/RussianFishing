import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { CoilsCategories } from '../../../addons/Gears/CoilsCategories';
import { InertialessCoils } from './CoilsGear/InertialessCoils';
import { getAllCoils } from '../../../utils/GearsApi';
import { BytecastingCoils } from './CoilsGear/BytecastingCoils';
import { LowprofileCoils } from './CoilsGear/LowprofileCoils';
import { PowerCoils } from './CoilsGear/PowerCoils';

export function CoilsGear(){
  const [selected, setSelected] = useState(CoilsCategories[0].name);
  const [coils, setCoils] = useState(null);

  useEffect(() => {
    getAllCoils().then(coils => {
      setCoils(coils);
    })
  }, [])

  function render() {
    if (selected === CoilsCategories[0].name) {
      return <InertialessCoils coils={coils} />
    }
    if (selected === CoilsCategories[1].name) {
      return <BytecastingCoils coils={coils} />
    }
    if (selected === CoilsCategories[2].name) {
      return <LowprofileCoils coils={coils} />
    }
    if (selected === CoilsCategories[3].name) {
      return <PowerCoils coils={coils} />
    }
  }

  if (coils === null) {
    return <></>;
  }

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
      <div style={{ margin: 'auto' }}>
        <ButtonGroup>
          <ButtonGroup>
            {
              CoilsCategories.map(category => {
                return <Button color='primary' active={selected === category.name} onClick={() => setSelected(category.name)}>{category.name}</Button>
              })
            }
          </ButtonGroup>
        </ButtonGroup>
      </div>
      {render()}
    </div>
  );
}