import React from 'react';
import { Table } from 'reactstrap';

export function PowerCoils({ coils }) {
  return (
    <Table bordered>
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
          coils.map(coil => {
            if (coil.coilType === 'Power') {
              return <tr>
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
            }
          })
        }
      </tbody>
    </Table>
  );
}