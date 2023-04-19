import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { Categories } from '../../addons/Categories';
import { FishesForm } from './ManageContentForms/FishesForm';
import { GearsForm } from './ManageContentForms/GearsForm';
import { BaitsForm } from './ManageContentForms/BaitsForm';
import { FishhooksForm } from './ManageContentForms/FishhooksForm';
import { ToolsForm } from './ManageContentForms/ToolsForm';
import { HelpForm } from './ManageContentForms/HelpForm';
import { FoodsForm } from './ManageContentForms/FoodsForm';

export function ManageContent() {
  const [selected, setSelected] = useState(Categories[0].name);

  function render() {
    if (selected === Categories[0].name){
      return <FishesForm></FishesForm>
    }
    if (selected === Categories[1].name){
      return <GearsForm></GearsForm>
    }
    if (selected === Categories[2].name){
      return <BaitsForm></BaitsForm>
    }
    if (selected === Categories[3].name){
      return <FishhooksForm></FishhooksForm>
    }
    if (selected === Categories[4].name){
      return <ToolsForm></ToolsForm>
    }
    if (selected === Categories[5].name){
      return <FoodsForm></FoodsForm>
    }
    // if (selected === Categories[6].name){
    //   return <HelpForm></HelpForm>
    // }
  } 

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
      <div style={{ margin: 'auto' }}>
        <ButtonGroup>
          {
            Categories.map(category => {
              return <Button key={category.name} color='primary' active={selected === category.name} onClick={() => setSelected(category.name)}>{category.name}</Button>
            })
          }
        </ButtonGroup>
        <div style={{ textAlign: 'center', paddingTop: '5px' }}><i>Все поля обязательны для заполнения! Если отсутствует, заполняем "0".</i></div>
      </div>
      {
        render()
      }
    </div>
  );
}