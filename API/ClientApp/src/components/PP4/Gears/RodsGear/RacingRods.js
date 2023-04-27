import React, { useState } from 'react';
import { Table, Input } from 'reactstrap';

export function RacingRods({ rods }) {
  const [items, setItems] = useState(rods);

  const handleChange = (event) => {
    const { value } = event.target;

    setItems(rods.filter(x => x.name.toLowerCase().startsWith(value)));
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: 'auto' }}>
      <Input onChange={handleChange} />
      <Table bordered responsive>
        <thead>
          <tr>
            <th>
              Название
            </th>
            <th>
              Тип
            </th>
            <th>
              Тест
            </th>
            <th>
              Тест
            </th>
            <th>
              Длина
            </th>
            <th>
              Чув.
            </th>
            <th>
              Жёс.
            </th>
            <th>
              Строй
            </th>
            <th>
              Бонус 1
            </th>
            <th>
              Бонус 2
            </th>
            <th>
              Бонус 3
            </th>
            <th>
              Проч.
            </th>
            <th>
              Ур.
            </th>
            <th>
              За серебро
            </th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(rod => {
              return (
                <tr key={rod.id}>
                  <td>
                    {rod.name}
                  </td>
                  <td>
                    {rod.sort}
                  </td>
                  <td>
                    {rod.test1}
                  </td>
                  <td>
                    {rod.test2}
                  </td>
                  <td>
                    {rod.length}
                  </td>
                  <td>
                    {rod.feel}
                  </td>
                  <td>
                    {rod.hardness}
                  </td>
                  <td>
                    {rod.build}
                  </td>
                  <td>
                    {rod.bonus1}
                  </td>
                  <td>
                    {rod.bonus2}
                  </td>
                  <td>
                    {rod.bonus3}
                  </td>
                  <td>
                    {rod.durability}
                  </td>
                  <td>
                    {rod.level}
                  </td>
                  <td>
                    {rod.silverPrice}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );
}