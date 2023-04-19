import React from 'react';
import { Table } from 'reactstrap';

export function BoyleBaits({baits}) {
  return (
    <Table bordered>
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
            Маленькие
          </th>
          <th>
            Средние
          </th>
          <th>
            Большие
          </th>
          <th>
            Огромные
          </th>
          <th>
            Растворим
          </th>
        </tr>
      </thead>
      <tbody>
        {
          baits.map(bait => {
            if (bait.type === 'Boyle') {
              return <tr>
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
                  {bait.small}
                </td>
                <td>
                  {bait.medium}
                </td>
                <td>
                  {bait.big}
                </td>
                <td>
                  {bait.huge}
                </td>
                <td>
                  {bait.soluble}
                </td>
              </tr>
            }
          })
        }
      </tbody>
    </Table>
  );
}