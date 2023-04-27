import React, { useState } from 'react';
import { Table, Input } from 'reactstrap';

export function JerkBaits({ baits }) {
  const [items, setItems] = useState(baits);

  const handleChange = (event) => {
    const { value } = event.target;

    setItems(baits.filter(x => x.name.toLowerCase().startsWith(value)));
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input onChange={handleChange} />
      <Table bordered responsive>
        <thead>
          <tr>
            <th>
              Название
            </th>
            <th>
              Производитель
            </th>
            <th>
              Вес
            </th>
            <th>
              Размер
            </th>
            <th>
              Плавучесть
            </th>
            <th>
              Тройники
            </th>
            <th>
              Вариантов
            </th>
            <th>
              Цена
            </th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(bait => {
              if (bait.type === 'Jerk') {
                return <tr key={bait.id}>
                  <td>
                    {bait.name}
                  </td>
                  <td>
                    {bait.manufacturer}
                  </td>
                  <td>
                    {bait.weight}
                  </td>
                  <td>
                    {bait.size}
                  </td>
                  <td>
                    {bait.floatation}
                  </td>
                  <td>
                    {bait.tees}
                  </td>
                  <td>
                    {bait.variants}
                  </td>
                  <td>
                    {bait.price}
                  </td>
                </tr>
              }
            })
          }
        </tbody>
      </Table>
    </div>
  );
}