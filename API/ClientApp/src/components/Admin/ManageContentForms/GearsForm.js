import React, { useState, useEffect } from 'react';
import { Form, Col, FormGroup, Label, Input, ListGroup, ListGroupItem, FormText, Button } from 'reactstrap';
import { NaturalBaitsForm } from './BaitsForms/NaturalBaitsForm';
import { UnnaturalBaitsForm } from './BaitsForms/UnnaturalBaitsForm';
import { CoilsForm } from './GearsForms.js/CoilsForm';
import { RodsForm } from './GearsForms.js/RodsForm';
import { getAllCoils, getAllRods } from '../../../utils/GearsApi';

const items = ["Катушки", "Удилища"]
const formGroups = ['AddCoil', 'AddRod', 'UpdateCoil', 'UpdateRod'];

const defaultCoilsFormData = {
  Id: 0,
  CoilType: 0,
  Name: '',
  Size: 0,
  Test: 0,
  Peredat: 0,
  ThreeHundred: 0,
  Speed: 0,
  Freak: 0,
  MechKilo: 0,
  Level: 0,
  SilverPrice: 0,
  GoldPrice: 0,
}

const defaultRodsFormData = {
  Id: 0,
  Type: 0,
  Name: '',
  Sort: '',
  Power: '',
  Test1: 0,
  Test2: 0,
  Length: 0,
  Feel: 0,
  Hardness: 0,
  Build: "",
  Bonus1: "",
  Bonus2: "",
  Bonus3: "",
  Durability: 0,
  Level: 0,
  SilverPrice: 0,
  GoldPrice: 0,
}

export function GearsForm() {
  const [coilsFormData, setCoilsFormData] = useState(defaultCoilsFormData);
  const [rodsFormData, setRodsFormData] = useState(defaultRodsFormData);
  const [selected, setSelected] = useState(items[0]);
  const [coils, setCoils] = useState([]);
  const [rods, setRods] = useState([]);
  const [formGroup, setFormGroup] = useState(formGroups[0]);

  useEffect(() => {
    getAllCoils().then(obj => {
      setCoils(obj);
    })
    getAllRods().then(obj => {
      setRods(obj);
    })
  }, []);

  const handleSelected = (item) => {
    setFormGroup(formGroups[items.indexOf(item)]);
    setSelected(item);
    if (item === items[0]) {
      setCoilsFormData(defaultCoilsFormData);
    } else {
      setRodsFormData(defaultRodsFormData);
    }
  }

  const handleClickCoil = async (object) => {
    setCoilsFormData({
      Id: object.id,
      CoilType: object.coilType,
      Name: object.name,
      Size: object.size,
      Test: object.test,
      Peredat: object.peredat,
      ThreeHundred: object.threeHundred,
      Speed: object.speed,
      Freak: object.freak,
      MechKilo: object.mechKilo,
      Level: object.level,
      SilverPrice: object.silverPrice,
      GoldPrice: object.goldPrice,
    });

    setFormGroup(formGroups[2]);
  };

  const handleClickRod = async (object) => {
    setRodsFormData({
      Id: object.id,
      Type: object.type,
      Name: object.name,
      Sort: object.sort,
      Power: object.power,
      Test1: object.test1,
      Test2: object.test2,
      Length: object.length,
      Feel: object.feel,
      Hardness: object.hardness,
      Build: object.build,
      Bonus1: object.bonus1,
      Bonus2: object.bonus2,
      Bonus3: object.bonus3,
      Durability: object.durability,
      Level: object.level,
      SilverPrice: object.silverPrice,
      GoldPrice: object.goldPrice,
    });

    setFormGroup(formGroups[3]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
      <div>
        <ListGroup>
          <ListGroupItem action tag="button" color={selected === items[0] ? 'primary' : 'secondary'} onClick={() => handleSelected(items[0])}>
            Добавить катушку
          </ListGroupItem>
          <ListGroupItem action tag="button" color={selected === items[1] ? 'primary' : 'secondary'} onClick={() => handleSelected(items[1])}>
            Добавить удилище
          </ListGroupItem>
          {
            (formGroup === formGroups[0] || formGroup === formGroups[2]) && coils.map(bait => {
              return <ListGroupItem onClick={() => handleClickCoil(bait)} action tag="button">{bait.name}</ListGroupItem>
            })
          }
          {
            (formGroup === formGroups[1] || formGroup === formGroups[3]) && rods.map(bait => {
              return <ListGroupItem onClick={() => handleClickRod(bait)} action tag="button">{bait.name}</ListGroupItem>
            })
          }
        </ListGroup>
      </div>
      {
        selected === items[0]
          ? <CoilsForm
            formData={coilsFormData}
            setFormData={setCoilsFormData}
            formGroup={formGroup}
            formGroups={formGroups}
            setFormGroup={setFormGroup}
            setCoils={setCoils}
            defaultFormData={defaultCoilsFormData} />
          : <RodsForm
            formData={rodsFormData}
            setFormData={setRodsFormData}
            formGroup={formGroup}
            formGroups={formGroups}
            setFormGroup={setFormGroup}
            setRods={setRods}
            defaultFormData={defaultRodsFormData}
          />
      }
    </div>
  );
}