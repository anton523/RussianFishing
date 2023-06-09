import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createNaturalBait, deleteNaturalBait, getAllNaturalBaits, getAllUnnaturalBaits, updateNaturalBait } from '../../../../utils/BaitsApi';

const items = ["НАТУРАЛЬНЫЕ", "БОЙЛЫ / ПЕЛЛЕТСЫ / ИК", "МОРСКИЕ"];

export function NaturalBaitsForm({ formData, setFormData, formGroup, formGroups, setNaturalBaits, setFormGroup, defaultFormData }) {
  const [selected, setSelected] = useState(items[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let success = formGroup === formGroups[0] ? await createNaturalBait(formData) : await updateNaturalBait(formData.Id, formData);

    if (success) {
      alert('Удалось');
    } else {
      alert('Неудачно');
    }
  };

  const handleDelete = async (event) => {
    deleteNaturalBait(formData.Id).then(isDeleted => {
      if (isDeleted){
        alert('Удалена');
        setNaturalBaits(prev => prev.filter(x => x.id !== formData.Id));
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

    if (name === 'Skill' || name === 'Small' || name === 'Medium' || name === 'Big' || name === 'Huge' || name === 'Amount') {
      setFormData({ ...formData, [name]: parseInt(value) });
      return;
    }

    if (name === 'Soluble') {
      setFormData({ ...formData, [name]: !formData.Soluble });
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
          Вид
        </Label>
        <Input
          id="sort"
          name="Sort"
          placeholder="Тонущий бойл"
          type="text"
          value={formData.Sort}
          onChange={handleChange}
        />
      </FormGroup>
      {
        selected === items[0] || selected === items[2] ?
          <>
            <FormGroup>
              <Label>
                Цена сер.
              </Label>
              <Input
                id="silver-price"
                name="SilverPrice"
                placeholder="2"
                type="number"
                value={formData.SilverPrice}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Цена зол.
              </Label>
              <Input
                id="gold-price"
                name="GoldPrice"
                placeholder="15"
                type="number"
                value={formData.GoldPrice}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                % Навыка
              </Label>
              <Input
                id="skill"
                name="Skill"
                placeholder="65"
                type="number"
                value={formData.Skill}
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
                placeholder="32"
                type="number"
                value={formData.Weight}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Крючок
              </Label>
              <Input
                id="bait"
                name="Bait"
                placeholder="24 - 4/0"
                type="text"
                value={formData.Bait}
                onChange={handleChange}
              />
            </FormGroup>
          </>
          : <></>
      }
      {
        selected === items[2] ?
          <FormGroup>
            <Label>
              Количество
            </Label>
            <Input
              id="amount"
              name="Amount"
              placeholder="1"
              type="text"
              value={formData.Amount}
              onChange={handleChange}
            />
          </FormGroup>
          : <></>
      }
      {
        selected === items[1] ?
          <>
            <FormGroup>
              <Label>
                Производитель
              </Label>
              <Input
                id="manufacturer"
                name="Manufacturer"
                placeholder="Helen Van Zandt"
                type="text"
                value={formData.Manufacturer}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Маленькие
              </Label>
              <Input
                id="small"
                name="Small"
                placeholder="32"
                type="number"
                value={formData.Small}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Средние
              </Label>
              <Input
                id="medium"
                name="Medium"
                placeholder="32"
                type="number"
                value={formData.Medium}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Большие
              </Label>
              <Input
                id="big"
                name="Big"
                placeholder="32"
                type="number"
                value={formData.Big}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Огромные
              </Label>
              <Input
                id="huge"
                name="Huge"
                placeholder="32"
                type="number"
                value={formData.Huge}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup check>
              <Input
                id='soluble'
                name='Soluble'
                type="checkbox"
                value={formData.Soluble}
                onChange={handleChange}
              />
              {' '}
              <Label check>
                Растворим?
              </Label>
            </FormGroup>
          </>
          : <></>
      }
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
          formGroup === formGroups[2] ? <Button onClick={handleDelete} style={{ marginLeft: 'auto' }} color='danger'>Удалить</Button> : <></>
        }
      </div>
    </Form>
  );
}