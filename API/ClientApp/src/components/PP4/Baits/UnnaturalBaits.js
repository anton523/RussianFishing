import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { UnnaturalBaitsCategories } from '../../../addons/Baits/UnnaturalBaitsCategories';
import { RotatingBaits } from './UnnaturalBaits/RotatingBaits';
import { OscillatingBaits } from './UnnaturalBaits/OscillatingBaits';
import { TopwaterBaits } from './UnnaturalBaits/TopwaterBaits';
import { JerkBaits } from './UnnaturalBaits/JerkBaits';
import { SoftBaits } from './UnnaturalBaits/SoftBaits';
import { getAllUnaturalBaits } from '../../../utils/BaitsApi';
import '../PP4.css';

export function UnnaturalBaits() {
  const [selected, setSelected] = useState(UnnaturalBaitsCategories[0].name);
  const [baits, setBaits] = useState(null);

  useEffect(() => {
    getAllUnaturalBaits().then(baits => {
      setBaits(baits);
    });
  }, []);

  if (baits === null) {
    return <></>;
  }

  function render() {
    if (selected === UnnaturalBaitsCategories[0].name) {
      return <RotatingBaits baits={baits} />
    }
    if (selected === UnnaturalBaitsCategories[1].name) {
      return <OscillatingBaits baits={baits} />
    }
    if (selected === UnnaturalBaitsCategories[2].name) {
      return <TopwaterBaits baits={baits} />
    }
    if (selected === UnnaturalBaitsCategories[3].name) {
      return <JerkBaits baits={baits} />
    }
    if (selected === UnnaturalBaitsCategories[4].name) {
      return <SoftBaits baits={baits} />
    }
  }

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
      <div style={{ margin: 'auto' }}>
        <ButtonGroup className='button-container'>
          {
            UnnaturalBaitsCategories.map(category => {
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
            UnnaturalBaitsCategories.map(category => {
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
      {
        render()
      }
    </div>
  );
}