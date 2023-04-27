import React, { useState, useEffect } from 'react';
import { Form, Col, FormGroup, Label, Input, ListGroup, ListGroupItem, FormText, Button } from 'reactstrap';
import { NaturalBaitsForm } from './BaitsForms/NaturalBaitsForm';
import { UnnaturalBaitsForm } from './BaitsForms/UnnaturalBaitsForm';
import { createNaturalBait, getAllNaturalBaits, getAllUnaturalBaits } from '../../../utils/BaitsApi';
import { urlToObject } from '../../../addons/Functions/UrlToObject';

const items = ["Наживка", "Приманка"]
const formGroups = ['AddNatural', 'AddUnnatural', 'UpdateNatural', 'UpdateUnnatural'];

const defaultNaturalFormData = {
  Type: 0,
  Name: '',
  Sort: '',
  SilverPrice: 0,
  GoldPrice: 0,
  Skill: 0,
  Weight: 0,
  Bait: '',
  Manufacturer: '',
  Small: 0,
  Medium: 0,
  Big: 0,
  Huge: 0,
  Soluble: false,
  Amount: 1,
  Image: ''
};

const defaultUnnaturalFormData = {
  Type: 0,
  Name: '',
  Weight: 0,
  Manufacturer: '',
  Size: '',
  Floatation: '',
  Tees: '',
  Variants: 0,
  Price: 0,
  Brand: '',
  Sort: '',
  Shop: '',
  Image: ''
}

export function BaitsForm() {
  const [naturalFormData, setNaturalFormData] = useState(defaultNaturalFormData);
  const [unnaturalFormData, setUnnaturalFormData] = useState(defaultUnnaturalFormData);
  const [selected, setSelected] = useState(items[0]);
  const [naturalBaits, setNaturalBaits] = useState([]);
  const [unnaturalBaits, setUnnaturalBaits] = useState([]);
  const [formGroup, setFormGroup] = useState(formGroups[0]);

  useEffect(() => {
    getAllUnaturalBaits().then(baits => {
      setUnnaturalBaits(baits);
    })
    getAllNaturalBaits().then(baits => {
      setNaturalBaits(baits);
    })
  }, []);

  const handleSelected = (item) => {
    setFormGroup(formGroups[items.indexOf(item)]);
    setSelected(item);
    if (item === items[0]) {
      setNaturalFormData(defaultNaturalFormData);
    } else {
      setUnnaturalFormData(defaultUnnaturalFormData);
    }
  }

  const handleClickNaturalBait = async (object) => {
    setNaturalFormData({
      Id: object.id,
      Type: object.type,
      Name: object.name,
      Sort: object.sort,
      SilverPrice: object.silverPrice,
      GoldPrice: object.goldPrice,
      Skill: object.skill,
      Weight: object.weight,
      Bait: object.bait,
      Manufacturer: object.manufacturer,
      Small: object.small,
      Medium: object.medium,
      Big: object.big,
      Huge: object.huge,
      Soluble: object.soluble,
      Amount: object.amount,
      Image: await urlToObject(object.image)
    });

    setFormGroup(formGroups[2]);
  };

  const handleClickUnnaturalBait = async (object) => {
    setUnnaturalFormData({
      Id: object.id,
      Type: object.type,
      Name: object.name,
      Weight: object.weight,
      Manufacturer: object.manufacturer,
      Size: object.size,
      Floatation: object.floatation,
      Tees: object.tees,
      Variants:object.variants,
      Price: object.price,
      Brand: object.brand,
      Sort: object.sort,
      Shop: object.shop,
      Image: await urlToObject(object.image)
    })

    setFormGroup(formGroups[3]);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
      <div>
        <ListGroup>
          <ListGroupItem action tag="button" color={selected === items[0] ? 'primary' : 'secondary'} onClick={() => handleSelected(items[0])}>
            Добавить наживку
          </ListGroupItem>
          <ListGroupItem action tag="button" color={selected === items[1] ? 'primary' : 'secondary'} onClick={() => handleSelected(items[1])}>
            Добавить приманку
          </ListGroupItem>
          {
            (formGroup === formGroups[0] || formGroup === formGroups[2]) && naturalBaits.map(bait => {
              return <ListGroupItem onClick={() => handleClickNaturalBait(bait)} action tag="button">{bait.name}</ListGroupItem>
            })
          }
          {
            (formGroup === formGroups[1] || formGroup === formGroups[3]) && unnaturalBaits.map(bait => {
              return <ListGroupItem onClick={() => handleClickUnnaturalBait(bait)} action tag="button">{bait.name}</ListGroupItem>
            })
          }
        </ListGroup>
      </div>
      {
        selected === items[0]
          ? <NaturalBaitsForm 
          formData={naturalFormData} 
          setFormData={setNaturalFormData} 
          formGroup={formGroup} 
          formGroups={formGroups} 
          setFormGroup={setFormGroup} 
          setNaturalBaits={setNaturalBaits} 
          defaultFormData={defaultNaturalFormData} />
          : <UnnaturalBaitsForm 
          formData={unnaturalFormData} 
          setFormData={setUnnaturalFormData} 
          formGroup={formGroup} 
          formGroups={formGroups} 
          setFormGroup={setFormGroup} 
          setUnnaturalBaits={setUnnaturalBaits} 
          defaultFormData={defaultUnnaturalFormData} />
      }
    </div>
  );
}