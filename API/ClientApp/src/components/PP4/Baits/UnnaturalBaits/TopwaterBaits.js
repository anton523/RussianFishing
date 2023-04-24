import React from 'react';
import { Table } from 'reactstrap';

export function TopwaterBaits({ baits }) {
  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th>
            Название
          </th>
          <th>
            Магазин
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
          baits.map(bait => {
            if (bait.type === 'TopWater') {
              return <tr key={bait.id}>
                <td>
                  {bait.name}
                </td>
                <td>
                  {bait.shop}
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
  );
}