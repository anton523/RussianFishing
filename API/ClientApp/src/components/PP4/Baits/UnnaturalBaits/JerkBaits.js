import React from 'react';
import { Table } from 'reactstrap';

export function JerkBaits({ baits }) {
  return (
    <Table bordered>
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
          baits.map(bait => {
            if (bait.type === 'Jerk') {
              return <tr>
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
  );
}