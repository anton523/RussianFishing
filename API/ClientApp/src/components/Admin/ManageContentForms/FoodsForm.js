import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, FormGroup, Label, Input } from 'reactstrap';
import { AlcoholForm } from './FoodsForms/AlcoholForm';
import { getAllAlcohol } from '../../../utils/FoodsApi';

const items = ["Алкоголь", "Еда"]
const formGroups = ['AddAlcohol', 'AddFood', 'UpdateAlcohol', 'UpdateFood'];

const defaultAlcoholFormData = {
  Id: '',
  Name: '',
  Shop: '',
  Pond: '',
  Skill: 0,
  Max: 0,
  Hours: 0,
  Portions: 0,
  Ostrog: 0,
  Portion: 0,
  Full: 0,
  PerOnePercent: 0,
  PerOnePercent2: 0
}

const defaultFoodFormData = {

}

export function FoodsForm() {
  const [alocholsFormData, setAlocholsFormData] = useState(defaultAlcoholFormData);
  const [foodsFormData, setFoodsFormData] = useState(defaultFoodFormData);
  const [selected, setSelected] = useState(items[0]);
  const [alochols, setAlochols] = useState([]);
  const [foods, setFoods] = useState([]);
  const [formGroup, setFormGroup] = useState(formGroups[0]);

  useEffect(() => {
    getAllAlcohol().then(obj => {
      setAlochols(obj);
    })
    // getAllFoods().then(obj => {
    //   setFoods(obj);
    // })
  }, []);

  const handleSelected = (item) => {
    setFormGroup(formGroups[items.indexOf(item)]);
    setSelected(item);
    if (item === items[0]) {
      setAlocholsFormData(defaultAlcoholFormData);
    } else {
      setFoodsFormData(defaultFoodFormData);
    }
  }

  const handleClickAlcohol = async (object) => {
    setAlocholsFormData({
      Id: object.id,
      Name: object.name,
      Shop: object.shop,
      Pond: object.pond,
      Skill: object.skill,
      Max: object.max,
      Hours: object.hours,
      Portions: object.portions,
      Ostrog: object.ostrog,
      Portion: object.portion,
      Full: object.full,
      PerOnePercent: object.perOnePercent,
      PerOnePercent2: object.perOnePercent2
    });

    setFormGroup(formGroups[2]);
  };

  const handleClickFood = async (object) => {
    // TODO

    setFormGroup(formGroups[3]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
      <div>
        <ListGroup>
          <ListGroupItem action tag="button" color={selected === items[0] ? 'primary' : 'secondary'} onClick={() => handleSelected(items[0])}>
            Добавить алкоголь
          </ListGroupItem>
          <ListGroupItem disabled action tag="button" color={selected === items[1] ? 'primary' : 'secondary'} onClick={() => handleSelected(items[1])}>
            Добавить еду
          </ListGroupItem>
          {
            (formGroup === formGroups[0] || formGroup === formGroups[2]) && alochols.map(bait => {
              return <ListGroupItem onClick={() => handleClickAlcohol(bait)} action tag="button">{bait.name}</ListGroupItem>
            })
          }
          {
            (formGroup === formGroups[1] || formGroup === formGroups[3]) && foods.map(bait => {
              return <ListGroupItem onClick={() => handleClickFood(bait)} action tag="button">{bait.name}</ListGroupItem>
            })
          }
        </ListGroup>
      </div>
      {
        selected === items[0] ? <AlcoholForm
          formData={alocholsFormData}
          setFormData={setAlocholsFormData}
          formGroup={formGroup}
          formGroups={formGroups}
          setFormGroup={setFormGroup}
          setObj={setAlochols}
          defaultFormData={defaultAlcoholFormData}
        /> : <AlcoholForm
          formData={alocholsFormData}
          setFormData={setAlocholsFormData}
          formGroup={formGroup}
          formGroups={formGroups}
          setFormGroup={setFormGroup}
          setObj={setAlochols}
          defaultFormData={defaultAlcoholFormData}
        />
      }
    </div>
  );
}