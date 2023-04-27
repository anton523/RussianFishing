import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createUnaturalBait, deleteUnnaturalBait, updateUnnaturalBait } from '../../../../utils/BaitsApi';

const items = ["ВРАЩАЮЩИЕСЯ", "КОЛЕБЛЯЩИЕСЯ", "ДЖЕРКБЕЙТЫ", "ТОПВОТЕРЫ", "МЯГКИЕ"];

export function UnnaturalBaitsForm({ formData, setFormData, formGroup, formGroups, setUnnaturalBaits, setFormGroup, defaultFormData }) {
  const [selected, setSelected] = useState(items[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let success = formGroup === formGroups[1] ? await createUnaturalBait(formData) : await updateUnnaturalBait(formData.Id, formData);

    if (success) {
      alert('Удалось');
    } else {
      alert('Неудачно');
    }
  };

  const handleDelete = async (event) => {
    deleteUnnaturalBait(formData.Id).then(isDeleted => {
      if (isDeleted) {
        alert('Удалена');
        setUnnaturalBaits(prev => prev.filter(x => x.id !== formData.Id));
        setFormData(defaultFormData);
        setFormGroup(formGroups[0]);
      } else {
        alert('Не удалось');
      }
    })
  }

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    const { name } = event.target;
    setFormData({ ...formData, [name]: selectedFile })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'Type') {
      setSelected(value);
      setFormData({ ...formData, [name]: items.indexOf(value) });
      return;
    }

    if (name === 'Variants') {
      setFormData({ ...formData, [name]: parseInt(value) });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form style={{ width: '100%', paddingBottom: '50px' }} onSubmit={handleSubmit}>
      <FormGroup>
        <Label>
          Тип
        </Label>
        <Input
          id='type'
          name='Type'
          type="select"
          value={formData[formData.Type]}
          onChange={handleChange}
        >
          {
            items.map(item => {
              return <option key={item}>{item}</option>
            })
          }
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>
          Имя
        </Label>
        <Input
          id="name"
          name="Name"
          placeholder="Червь"
          type="text"
          value={formData.Name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Вес
        </Label>
        <Input
          id="weight"
          name="Weight"
          placeholder="2,50"
          type="number"
          value={formData.Weight}
          onChange={handleChange}
        />
      </FormGroup>
      {
        selected === items[0] || selected === items[1] ? <>
          <FormGroup>
            <Label>
              Бренд
            </Label>
            <Input
              id="brand1"
              name="Brand"
              placeholder="Express Fishing"
              type="text"
              value={formData.Brand}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Размер
            </Label>
            <Input
              id="size1"
              name="Size"
              placeholder="Средний"
              type="text"
              value={formData.Size}
              onChange={handleChange}
            />
          </FormGroup>
        </> : <></>
      }
      {
        selected === items[2] ? <>
          <FormGroup>
            <Label>
              Магазин
            </Label>
            <Input
              id="shop2"
              name="Shop"
              placeholder="Рыболовный"
              type="text"
              value={formData.Shop}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Производитель
            </Label>
            <Input
              id="manufacturer2"
              name="Manufacturer"
              placeholder="Express Fishing"
              type="text"
              value={formData.Manufacturer}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Размер
            </Label>
            <Input
              id="size2"
              name="Size"
              placeholder="Средний"
              type="text"
              value={formData.Size}
              onChange={handleChange}
            />
          </FormGroup>
        </> : <></>
      }
      {
        selected === items[3] ? <>
          <FormGroup>
            <Label>
              Производитель
            </Label>
            <Input
              id="manufacturer3"
              name="Manufacturer"
              placeholder="Express Fishing"
              type="text"
              value={formData.Manufacturer}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Размер
            </Label>
            <Input
              id="size3"
              name="Size"
              placeholder="Средний"
              type="text"
              value={formData.Size}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Плавучесть
            </Label>
            <Input
              id="floatation3"
              name="Floatation"
              placeholder="Тонущий"
              type="text"
              value={formData.Floatation}
              onChange={handleChange}
            />
          </FormGroup>
        </> : <></>
      }
      {
        selected === items[4] ? <>
          <FormGroup>
            <Label>
              Вид
            </Label>
            <Input
              id="sort4"
              name="Sort"
              placeholder="Тонущий бойл"
              type="text"
              value={formData.Sort}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Производитель
            </Label>
            <Input
              id="manufacturer4"
              name="Manufacturer"
              placeholder="Express Fishing"
              type="text"
              value={formData.Manufacturer}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Размер
            </Label>
            <Input
              id="size4"
              name="Size"
              placeholder="Средний"
              type="text"
              value={formData.Size}
              onChange={handleChange}
            />
          </FormGroup>
        </> : <></>
      }
      <FormGroup>
        <Label>
          Тройники
        </Label>
        <Input
          id="tees"
          name="Tees"
          placeholder="8 - 2/0"
          type="text"
          value={formData.Tees}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Вариантов
        </Label>
        <Input
          id="variants"
          name="Variants"
          placeholder="10"
          type="number"
          value={formData.Variants}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Цена
        </Label>
        <Input
          id="price"
          name="Price"
          placeholder="1,80"
          type="number"
          value={formData.Price}
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
        <Button type="submit">{formGroup === formGroups[1] ? 'Отправить' : 'Изменить'}</Button>
        {
          formGroup === formGroups[3] ? <Button onClick={handleDelete} style={{ marginLeft: 'auto' }} color='danger'>Удалить</Button> : <></>
        }
      </div>
    </Form>
  );
}