import React, { useState } from 'react';
import { Input, Table } from 'reactstrap';

export function BoyleBaits({ baits }) {
  const [items, setItems] = useState(baits);

  const handleChange = (event) => {
    const { value } = event.target;

    setItems(baits.filter(x => x.name.toLowerCase().startsWith(value)));
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input onChange={handleChange}/>
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
            items.map(bait => {
              if (bait.type === 'Boyle') {
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
    </div>
  );
}