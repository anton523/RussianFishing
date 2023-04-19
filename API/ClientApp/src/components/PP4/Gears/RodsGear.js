import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { RodsCategories } from '../../../addons/Gears/RodsCategories';
import { FloatRods } from './RodsGear/FloatRods';
import { RacingRods } from './RodsGear/RacingRods';
import { SpinningRods } from './RodsGear/SpinningRods';
import { SeaRods } from './RodsGear/SeaRods';
import { getAllRods } from '../../../utils/GearsApi';

export function RodsGear() {
  const [selected, setSelected] = useState(RodsCategories[0].name);
  const [rods, setRods] = useState(null);

  useEffect(() => {
    getAllRods().then(rods => {
      setRods(rods);
    })
  }, [])

  function render() {
    if (selected === RodsCategories[0].name) {
      return <FloatRods rods={rods} />
    }
    if (selected === RodsCategories[1].name) {
      return <RacingRods rods={rods} />
    }
    if (selected === RodsCategories[2].name) {
      return <SpinningRods rods={rods} />
    }
    if (selected === RodsCategories[3].name) {
      return <SeaRods rods={rods} />
    }
  }

  if (rods === null) {
    return <></>;
  }

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
      <div style={{ margin: 'auto' }}>
        <ButtonGroup>
          <ButtonGroup>
            {
              RodsCategories.map(category => {
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