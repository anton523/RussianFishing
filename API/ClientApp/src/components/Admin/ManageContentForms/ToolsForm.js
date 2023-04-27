import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, FormGroup, Label, Input } from 'reactstrap';
import { SlingshotForm } from './ToolsForms.js/SlingshotForm';
import { TToolForm } from './ToolsForms.js/TToolForm';
import { getAllSlingshots, getAllTools } from '../../../utils/ToolsApi';
import { urlToObject } from '../../../addons/Functions/UrlToObject';

const items = ["Кобры / Рогатки", "Инструменты"]
const formGroups = ['AddSlingshot', 'AddTool', 'UpdateSlingshot', 'UpdateTool'];

const defaultSlingshotFormData = {
  Id: '',
  Name: '',
  Bait: '',
  Sort: '',
  Score0: 0,
  Score1: 0,
  Score2: 0,
  Score3: 0,
  Price: 0,
}

const defaultToolFormData = {
  Id: '',
  Name: '',
  Description: '',
  SilverPrice: 0,
  GoldPrice: 0,
  Image: ''
}

export function ToolsForm() {
  const [slingshotsFormData, setSlingshotFormData] = useState(defaultSlingshotFormData);
  const [toolsFormData, setToolsFormData] = useState(defaultToolFormData);
  const [selected, setSelected] = useState(items[0]);
  const [slingshots, setSlingshots] = useState([]);
  const [tools, setTools] = useState([]);
  const [formGroup, setFormGroup] = useState(formGroups[0]);

  useEffect(() => {
    getAllTools().then(obj => {
      setTools(obj);
    })
    getAllSlingshots().then(obj => {
      setSlingshots(obj);
    })
  }, []);

  const handleSelected = (item) => {
    setFormGroup(formGroups[items.indexOf(item)]);
    setSelected(item);
    if (item === items[0]) {
      setSlingshotFormData(defaultSlingshotFormData);
    } else {
      setToolsFormData(defaultToolFormData);
    }
  }

  const handleClickSlingshot = (object) => {
    setSlingshotFormData({
      Id: object.id,
      Name: object.name,
      Bait: object.bait,
      Sort: object.sort,
      Score0: object.score0,
      Score1: object.score1,
      Score2: object.score2,
      Score3: object.score3,
      Price: object.price,
    });

    setFormGroup(formGroups[2]);
  }

  const handleClickTool = async (object) => {
    setToolsFormData({
      Id: object.id,
      Name: object.name,
      Description: object.description,
      SilverPrice: object.silverPrice,
      GoldPrice: object.goldPrice,
      Image: await urlToObject(object.image)
    });

    setFormGroup(formGroups[3]);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
      <div>
        <ListGroup>
          <ListGroupItem action tag="button" color={selected === items[0] ? 'primary' : 'secondary'} onClick={() => handleSelected(items[0])}>
            Добавить рогатку / кобру
          </ListGroupItem>
          <ListGroupItem action tag="button" color={selected === items[1] ? 'primary' : 'secondary'} onClick={() => handleSelected(items[1])}>
            Добавить инструмент
          </ListGroupItem>
          {
            (formGroup === formGroups[0] || formGroup === formGroups[2]) && slingshots.map(bait => {
              return <ListGroupItem onClick={() => handleClickSlingshot(bait)} action tag="button">{bait.name}</ListGroupItem>
            })
          }
          {
            (formGroup === formGroups[1] || formGroup === formGroups[3]) && tools.map(bait => {
              return <ListGroupItem onClick={() => handleClickTool(bait)} action tag="button">{bait.name}</ListGroupItem>
            })
          }
        </ListGroup>
      </div>
      {
        selected === items[0] ? <SlingshotForm
          formData={slingshotsFormData}
          setFormData={setSlingshotFormData}
          formGroup={formGroup}
          formGroups={formGroups}
          setFormGroup={setFormGroup}
          setObj={setSlingshots}
          defaultFormData={defaultSlingshotFormData}
        />
          : <TToolForm
            formData={toolsFormData}
            setFormData={setToolsFormData}
            formGroup={formGroup}
            formGroups={formGroups}
            setFormGroup={setFormGroup}
            setObj={setTools}
            defaultFormData={defaultToolFormData}
          />
      }
    </div>
  );
}