import React, { useState } from 'react';
import { Table, Input } from 'reactstrap';

export function LowprofileCoils({ coils }) {
  const [items, setItems] = useState(coils);

  const handleChange = (event) => {
    const { value } = event.target;

    setItems(coils.filter(x => x.name.toLowerCase().startsWith(value)));
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
              Размер
            </th>
            <th>
              Тест
            </th>
            <th>
              Передат.
            </th>
            <th>
              300 м. в мм.
            </th>
            <th>
              Скор.
            </th>
            <th>
              Фрик.
            </th>
            <th>
              Мех. кг.
            </th>
            <th>
              Ур.
            </th>
            <th>
              Цена сер.
            </th>
            <th>
              Цена зол.
            </th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(coil => {
              return (
                <tr key={coil.id}>
                  <td>
                    {coil.name}
                  </td>
                  <td>
                    {coil.size}
                  </td>
                  <td>
                    {coil.test}
                  </td>
                  <td>
                    {coil.peredat}
                  </td>
                  <td>
                    {coil.threeHundred}
                  </td>
                  <td>
                    {coil.speed}
                  </td>
                  <td>
                    {coil.freak}
                  </td>
                  <td>
                    {coil.mechKilo}
                  </td>
                  <td>
                    {coil.level}
                  </td>
                  <td>
                    {coil.silverPrice}
                  </td>
                  <td>
                    {coil.goldPrice}
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