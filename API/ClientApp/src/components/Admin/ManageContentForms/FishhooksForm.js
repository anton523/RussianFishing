import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, Col, FormGroup, Label, Input } from 'reactstrap';
import { HooksForm } from './FishhooksForms/HookForm';
import { FishingLinesForm } from './FishhooksForms/FishinglinesForm';
import { getAllFishingLines, getAllHooks } from '../../../utils/HooksApi';

const items = ["Крючки", "Лески"]
const formGroups = ['AddHook', 'AddFishingLine', 'UpdateHook', 'UpdateFishingLine'];

const defaultHookFormData = {
  Id: '',
  Type: 0,
  Name: '',
  Height: 0,
  S24: 0, S22: 0, S20: 0, S19: 0, S18: 0, S17: 0,
  S16: 0, S15: 0, S14: 0, S13: 0, S12: 0, S11: 0, S10: 0, S9: 0,
  S8: 0, S7: 0, S6: 0, S5: 0, S4: 0, S3: 0, S2: 0, S1: 0,
  S1Zero: 0, S2Zero: 0, S3Zero: 0,
  S4Zero: 0, S5Zero: 0, S6Zero: 0, S8Zero: 0, S10Zero: 0,
  S12Zero: 0
}

const defaultFishingLineFormData = {
  Id: '',
  Name: '',
  Sort: '',
  Hardness: 0,
  Thickness: 0,
  Length1: 0,
  Price1: 0,
  Length2: 0,
  Price2: 0,
  Length3: 0,
  Price3: 0,
  Length4: 0,
  Price4: 0,
}

export function FishhooksForm() {
  const [hooksFormData, setHooksFormData] = useState(defaultHookFormData);
  const [fishingLineFormData, setFishingLineFormData] = useState(defaultFishingLineFormData);
  const [selected, setSelected] = useState(items[0]);
  const [hooks, setHooks] = useState([]);
  const [fishingLines, setFishingLines] = useState([]);
  const [formGroup, setFormGroup] = useState(formGroups[0]);

  useEffect(() => {
    getAllHooks().then(obj => {
      setHooks(obj);
    })
    getAllFishingLines().then(obj => {
      setFishingLines(obj);
    })
  }, []);

  const handleSelected = (item) => {
    setFormGroup(formGroups[items.indexOf(item)]);
    setSelected(item);
    if (item === items[0]) {
      setHooksFormData(defaultHookFormData);
    } else {
      setFishingLineFormData(defaultFishingLineFormData);
    }
  }

  const handleClickHook = async (object) => {
    setHooksFormData({
      Id: object.id,
      Type: object.type,
      Name: object.name,
      Height: object.height,
      S24: object.s24, S22: object.s22, S20: object.s20, S19: object.s19, S18: object.s18, S17: object.s17,
      S16: object.s16, S15: object.s15, S14: object.s14, S13: object.s13, S12: object.s12, S11: object.s11, S10: object.s10, S9: object.s9,
      S8: object.s8, S7: object.s7, S6: object.s6, S5: object.s5, S4: object.s4, S3: object.s3, S2: object.s2, S1: object.s1,
      S1Zero: object.s1Zero, S2Zero: object.s2Zero, S3Zero: object.s3Zero,
      S4Zero: object.s4Zero, S5Zero: object.s5Zero, S6Zero: object.s6Zero, S8Zero: object.s8Zero, S10Zero: object.s10Zero,
      S12Zero: object.s12Zero
    });

    setFormGroup(formGroups[2]);
  };

  const handleClickFishingLine = async (object) => {
    setFishingLineFormData({
      Id: object.id,
      Name: object.name,
      Sort: object.sort,
      Hardness: object.hardness,
      Thickness: object.thickness,
      Length1: object.length1,
      Price1: object.price1,
      Length2: object.length2,
      Price2: object.price2,
      Length3: object.length3,
      Price3: object.price3,
      Length4: object.length4,
      Price4: object.price4,
    });

    setFormGroup(formGroups[3]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
      <div>
        <ListGroup>
          <ListGroupItem action tag="button" color={selected === items[0] ? 'primary' : 'secondary'} onClick={() => handleSelected(items[0])}>
            Добавить крючок
          </ListGroupItem>
          <ListGroupItem action tag="button" color={selected === items[1] ? 'primary' : 'secondary'} onClick={() => handleSelected(items[1])}>
            Добавить леску
          </ListGroupItem>
          {
            (formGroup === formGroups[0] || formGroup === formGroups[2]) && hooks.map(bait => {
              return <ListGroupItem onClick={() => handleClickHook(bait)} action tag="button">{bait.name}</ListGroupItem>
            })
          }
          {
            (formGroup === formGroups[1] || formGroup === formGroups[3]) && fishingLines.map(bait => {
              return <ListGroupItem onClick={() => handleClickFishingLine(bait)} action tag="button">{bait.name}</ListGroupItem>
            })
          }
        </ListGroup>
      </div>
      {
        selected === items[0]
          ? <HooksForm
            formData={hooksFormData}
            setFormData={setHooksFormData}
            formGroup={formGroup}
            formGroups={formGroups}
            setFormGroup={setFormGroup}
            setObj={setHooks}
            defaultFormData={defaultHookFormData}
          />
          : <FishingLinesForm
            formData={fishingLineFormData}
            setFormData={setFishingLineFormData}
            formGroup={formGroup}
            formGroups={formGroups}
            setFormGroup={setFormGroup}
            setObj={setFishingLines}
            defaultFormData={defaultFishingLineFormData}
          />
      }
    </div>
  );
}