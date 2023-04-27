import React, { useState, useEffect } from 'react';
import { Form, Col, FormGroup, Label, Input, ListGroup, ListGroupItem, Button, Container, Row } from 'reactstrap';
import { getAllFishes } from '../../../utils/FishApi';
import InputAuto from '../../../addons/InputAuto';
import MapApi from '../../../utils/MapsApi';
import { urlToObject } from '../../../addons/Functions/UrlToObject';

const defaultFormData = {
  Id: '',
  Name: '',
  Description: '',
  TitleImage: '',
  MapImage: ''
};

const formGroups = ['Add', 'Update'];

const MapsForm = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [fishes, setFishes] = useState([]);
  const [maps, setMaps] = useState([]);
  const [selectedFishes, setSelectedFishes] = useState([]);
  const [autoinputData, setAutoinputData] = useState([]);
  const [formGroup, setFormGroup] = useState(formGroups[0]);

  useEffect(() => {
    getAllFishes().then(data => {
      setFishes(data);
      setAutoinputData(data.map(x => x.shortName));
    });
    MapApi.GetAll().then(data => {
      setMaps(data);
    })
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let idFishes = [];

    for (var i = 0; i < selectedFishes.length; i++) {
      let id = fishes.filter(fish => fish.shortName === selectedFishes[i])[0].id;
      idFishes.push(id);
    }

    let success = formGroup === formGroups[0]
      ? await MapApi.Create(formData.Name, formData.Description, formData.TitleImage, formData.MapImage, idFishes)
      : await MapApi.Update(formData.Id, formData.Name, formData.Description, formData.TitleImage, formData.MapImage, idFishes);

    if (success) {
      alert('Удалось');
    } else {
      alert('Неудачно');
    }
  };

  const handleClickMap = async (obj) => {
    setFormData({
      Id: obj.id,
      Name: obj.name,
      Description: obj.description,
      TitleImage: await urlToObject(obj.titleImage),
      MapImage: await urlToObject(obj.mapImage)
    });

    setFormGroup(formGroups[1]);
  };

  const handleDelete = async (event) => {
    MapApi.Delete(formData.Id).then(isDeleted => {
      if (isDeleted) {
        alert('Удалена');
        setMaps(prev => prev.filter(x => x.id !== formData.Id));
        setFormData(defaultFormData);
        setFormGroup(formGroups[0]);
      } else {
        alert('Не удалось');
      }
    })
  }

  const handleRemove = (value) => {
    setSelectedFishes(fishes => fishes.filter(fish => fish !== value));
    setAutoinputData(prev => prev.concat(value));
  }

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    const { name } = event.target;
    setFormData({ ...formData, [name]: selectedFile })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
      <div>
        <ListGroup>
          <ListGroupItem action tag="button" color='primary'>
            Добавить карту
          </ListGroupItem>
          {
            maps.map(map => {
              return (
                <ListGroupItem
                  action
                  key={map.id}
                  tag="button"
                  onClick={() => handleClickMap(map)}>
                  {map.name}
                </ListGroupItem>
              );
            })
          }
        </ListGroup>
      </div>
      <Form style={{ width: '100%', paddingBottom: '50px' }} onSubmit={handleSubmit}>
        <FormGroup>
          <Label>
            Название
          </Label>
          <Input
            id="name"
            name="Name"
            placeholder="оз. Комариное"
            type="text"
            value={formData.Name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Описание
          </Label>
          <Input
            id="description"
            name="Description"
            placeholder="Здесь водится щука"
            type="textarea"
            value={formData.Description}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Превью фото
          </Label>
          <Input
            id="titleImage"
            name="TitleImage"
            type="file"
            onChange={handleImageUpload}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Фото карты
          </Label>
          <Input
            id="mapImage"
            name="MapImage"
            type="file"
            onChange={handleImageUpload}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Добавить рыб
          </Label>
          <div style={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
            <div>
              <InputAuto
                pholder="Буффало"
                data={autoinputData}
                setData={setAutoinputData}
                onSelected={value => setSelectedFishes(fishes => fishes.concat(value))}
              />
            </div>
            <Container className='border box-shadow rounded p-1'>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', textAlign: 'center' }}>
                {
                  selectedFishes.map((fish, i) => {
                    return <div className='p-2 bg-secondary' style={{ cursor: 'pointer', borderRadius: '0.25rem' }} onClick={() => handleRemove(fish)} key={i}>{fish}</div>
                  })
                }
              </div>
            </Container>
          </div>
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

export default MapsForm;