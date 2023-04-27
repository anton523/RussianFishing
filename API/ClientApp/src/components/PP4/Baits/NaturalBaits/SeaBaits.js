import React, { useState } from 'react';
import { Table, Input } from 'reactstrap';

export function SeaBaits({ baits }) {
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
              Наживка
            </th>
            <th>
              Вид
            </th>
            <th>
              Цена сер.
            </th>
            <th>
              Цена зол.
            </th>
            <th>
              % Навыка
            </th>
            <th>
              Штук
            </th>
            <th>
              Вес
            </th>
            <th>
              Крючок
            </th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(bait => {
              if (bait.type === 'Sea') {
                return <tr key={bait.id}>
                  <td>
                    {bait.name}
                  </td>
                  <td>
                    {bait.sort}
                  </td>
                  <td>
                    {bait.silverPrice}
                  </td>
                  <td>
                    {bait.goldPrice}
                  </td>
                  <td>
                    {`${bait.skill}%`}
                  </td>
                  <td>
                    {bait.amount}
                  </td>
                  <td>
                    {bait.weight}
                  </td>
                  <td>
                    {bait.bait}
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