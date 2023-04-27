import React, { useState, useEffect } from 'react';
import { Table, Input } from 'reactstrap';
import { getAllFishingLines } from '../../../utils/HooksApi';

export function FishingLineHooks() {
  const [fishingLines, setfishingLines] = useState([]);

  useEffect(() => {
    getAllFishingLines().then(fishingLines => {
      setfishingLines(fishingLines);
    })
  }, [])

  const [items, setItems] = useState(fishingLines);

  const handleChange = (event) => {
    const { value } = event.target;

    setItems(fishingLines.filter(x => x.name.toLowerCase().startsWith(value)));
  }

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
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
                Прочность
              </th>
              <th>
                Толщина
              </th>
              <th>
                Длина мотка
              </th>
              <th>
                Цена
              </th>
              <th>
                100-120 м.
              </th>
              <th>
                Цена
              </th>
              <th>
                300-500 м.
              </th>
              <th>
                Цена
              </th>
              <th>
                1000 м.
              </th>
              <th>
                Цена
              </th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(fishingLine => {
                return <tr key={fishingLine.id}>
                  <td>
                    {fishingLine.name}
                  </td>
                  <td>
                    {fishingLine.sort}
                  </td>
                  <td>
                    {fishingLine.hardness}
                  </td>
                  <td>
                    {fishingLine.thickness}
                  </td>
                  <td>
                    {fishingLine.length1}
                  </td>
                  <td>
                    {fishingLine.price1}
                  </td>
                  <td>
                    {fishingLine.length2}
                  </td>
                  <td>
                    {fishingLine.price2}
                  </td>
                  <td>
                    {fishingLine.length3}
                  </td>
                  <td>
                    {fishingLine.price3}
                  </td>
                  <td>
                    {fishingLine.length4}
                  </td>
                  <td>
                    {fishingLine.price4}
                  </td>
                </tr>
              })
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
}