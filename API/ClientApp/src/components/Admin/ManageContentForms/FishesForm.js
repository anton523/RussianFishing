import React, { useEffect, useState } from 'react';
import { Form, Col, FormGroup, Label, Input, ListGroup, ListGroupItem, FormText, Button } from 'reactstrap';
import { createFish, deleteFish, getAllFishes, updateFish } from '../../../utils/FishApi';
import { urlToObject } from '../../../addons/Functions/UrlToObject';

const items = [
  {
    name: 'Фарм',
    formName: 'Farm'
  },
  {
    name: 'Опыт',
    formName: 'Experience'
  },
  {
    name: 'Клёв',
    formName: 'Biting'
  },
  {
    name: 'Троф',
    formName: 'Trophy'
  },
]

const defaultFormData = {
  Id: '',
  ShortName: '',
  Name: '',
  L1: 0,
  L2: 0,
  L3: 0,
  Farm: 1,
  Experience: 1,
  Biting: 1,
  Trophy: 1,
  Description: '',
  Image: ''
};

const formGroups = ['Add', 'Update'];

export function FishesForm() {
  const [formData, setFormData] = useState(defaultFormData);
  const [fishes, setFishes] = useState([]);
  const [formGroup, setFormGroup] = useState(formGroups[0]);

  useEffect(() => {
    getAllFishes().then(fishes => {
      setFishes(fishes);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let success = formGroup === formGroups[0] ? await createFish(formData) : await updateFish(formData.Id, formData);

    if (success) {
      alert('Удалось');
    } else {
      alert('Неудачно');
    }
  };

  const handleDelete = async (event) => {
    deleteFish(formData.Id).then(isDeleted => {
      if (isDeleted){
        alert('Удалена');
        setFishes(prev => prev.filter(x => x.id !== formData.Id));
        setFormData(defaultFormData);
        setFormGroup(formGroups[0]);
      } else {
        alert('Не удалось');
      }
    })
  }

  const handleClickFish = async (fish) => {
    setFormData({
      Id: fish.id,
      ShortName: fish.shortName,
      Name: fish.name,
      L1: fish.l1,
      L2: fish.l2,
      L3: fish.l3,
      Farm: fish.farm,
      Experience: fish.experience,
      Biting: fish.biting,
      Trophy: fish.trophy,
      Description: fish.description,
      Image: await urlToObject(fish.image)
    });

    setFormGroup(formGroups[1]);
  };

  const handleClickAddFish = () => {
    setFormData(defaultFormData);
    setFormGroup(formGroups[0]);
  }

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    const { name } = event.target;
    setFormData({ ...formData, [name]: selectedFile })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    let v = value;

    if (name === 'Farm' || name === 'Experience' || name === 'Biting' || name === 'Trophy') {
      v = parseInt(value);
    }

    setFormData({ ...formData, [name]: v });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
      <div>
        <ListGroup>
          <ListGroupItem
            onClick={handleClickAddFish}
            action
            tag="button"
            color='primary'>
            Добавить рыбу
          </ListGroupItem>
          {
            fishes.map(fish => {
              return (
                <ListGroupItem
                  action
                  key={fish.id}
                  tag="button"
                  onClick={() => handleClickFish(fish)}>
                  {fish.shortName}
                </ListGroupItem>
              );
            })
          }
        </ListGroup>
      </div>
      <Form style={{ width: '100%', paddingBottom: '50px' }} onSubmit={handleSubmit}>
        <FormGroup>
          <Label>
            Короткое имя
          </Label>
          <Input
            id="short-name"
            name="ShortName"
            placeholder="АКУЛА Г П"
            type="text"
            value={formData.ShortName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Полное имя
          </Label>
          <Input
            id="name"
            name="Name"
            placeholder="АКУЛА ГРЕНЛАНДСКАЯ ПОЛЯРНАЯ"
            type="text"
            value={formData.Name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Зачетная в кг
          </Label>
          <Input
            id="zachetnaya"
            name="L1"
            placeholder="0.15"
            type="number"
            value={formData.L1}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Трофей в кг
          </Label>
          <Input
            id="trophy"
            name="L2"
            placeholder="1.5"
            type="number"
            value={formData.L2}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Редкий трофей в кг
          </Label>
          <Input
            id="rare-trophy"
            name="L3"
            placeholder="65"
            type="number"
            value={formData.L3}
            onChange={handleChange}
          />
        </FormGroup>
        {
          items.map(item => {
            return <FormGroup key={item.name}>
              <Label>
                {item.name}
              </Label>
              <Input
                id={item.name}
                name={item.formName}
                type="select"
                value={formData[item.formName]}
                onChange={handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Input>
            </FormGroup>
          })
        }
        <FormGroup>
          <Label>
            Описание
          </Label>
          <Input
            id="description"
            name="Description"
            placeholder="Водится в озере..."
            type="textarea"
            value={formData.Description}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Фото
          </Label>
          <Input
            id="image"
            name="Image"
            type="file"
            onChange={handleImageUpload}
          />
        </FormGroup>
        <div style={{ display: 'flex' }}>
          <Button type="submit">{formGroup === formGroups[0] ? 'Отправить' : 'Изменить'}</Button>
          {
            formGroup === formGroups[1] ? <Button onClick={handleDelete} style={{ marginLeft: 'auto' }} color='danger'>Удалить</Button> : <></>
          }
        </div>
      </Form>
    </div>
  );
}