import React, { useState } from 'react';
import { Table, Input } from 'reactstrap';

export function SoftBaits({ baits }) {
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
              Вид
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
              if (bait.type === 'Soft') {
                return <tr key={bait.id}>
                  <td>
                    {bait.name}
                  </td>
                  <td>
                    {bait.sort}
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