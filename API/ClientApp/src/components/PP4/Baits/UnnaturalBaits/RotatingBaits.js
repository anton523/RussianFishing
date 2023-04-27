import React, { useState } from 'react';
import { Table, Input } from 'reactstrap';

export function RotatingBaits({ baits }) {
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
              Бренд
            </th>
            <th>
              Вес
            </th>
            <th>
              Размер
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
              if (bait.type === 'Rotating') {
                return <tr key={bait.id}>
                  <td>
                    {bait.name}
                  </td>
                  <td>
                    {bait.brand}
                  </td>
                  <td>
                    {bait.weight}
                  </td>
                  <td>
                    {bait.size}
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