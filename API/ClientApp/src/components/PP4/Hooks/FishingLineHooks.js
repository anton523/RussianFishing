import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { getAllFishingLines } from '../../../utils/HooksApi';

export function FishingLineHooks() {
  const [fishingLines, setfishingLines] = useState(null);

  useEffect(() => {
    getAllFishingLines().then(fishingLines => {
      console.log(fishingLines)
      setfishingLines(fishingLines);
    })
  }, [])

  if (fishingLines === null) {
    return <></>;
  }

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
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
            fishingLines.map(fishingLine => {
              return <tr>
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
  );
}