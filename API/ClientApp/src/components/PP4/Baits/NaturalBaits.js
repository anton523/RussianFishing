import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { NaturalBaitsCategories } from '../../../addons/Baits/NaturalBaitsCategories';
import { NNaturalBaits } from './NaturalBaits/NNaturalBaits';
import { BoyleBaits } from './NaturalBaits/BoyleBaits';
import { SeaBaits } from './NaturalBaits/SeaBaits';
import { getAllNaturalBaits } from '../../../utils/BaitsApi';
import '../PP4.css';

export function NaturalBaits() {
  const [selected, setSelected] = useState(NaturalBaitsCategories[0].name);
  const [baits, setBaits] = useState(null);

  useEffect(() => {
    getAllNaturalBaits().then(baits => {
      setBaits(baits);
    });
  }, []);

  if (baits === null) {
    return <></>;
  }

  function render() {
    if (selected === NaturalBaitsCategories[0].name) {
      return <NNaturalBaits baits={baits}></NNaturalBaits>
    }
    if (selected === NaturalBaitsCategories[1].name) {
      return <BoyleBaits baits={baits}></BoyleBaits>
    }
    if (selected === NaturalBaitsCategories[2].name) {
      return <SeaBaits baits={baits}></SeaBaits>
    }
  }

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
      <div style={{ margin: 'auto' }}>
        <ButtonGroup className='button-container'>
          {
            NaturalBaitsCategories.map(category => {
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
            NaturalBaitsCategories.map(category => {
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