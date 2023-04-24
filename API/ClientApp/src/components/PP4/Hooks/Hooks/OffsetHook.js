import React from 'react';
import { Table } from 'reactstrap';

export function OffsetHook({ hooks }) {
  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th>
            Название
          </th>
          <th>
            8
          </th>
          <th>
            6
          </th>
          <th>
            4
          </th>
          <th>
            2
          </th>
          <th>
            1
          </th>
          <th>
            1/0
          </th>
          <th>
            2/0
          </th>
          <th>
            3/0
          </th>
          <th>
            4/0
          </th>
        </tr>
      </thead>
      <tbody>
        {
          hooks.map(x => {
            if (x.type === 'Offset') {
              return <tr key={x.id}>
                <td>
                  {x.name}
                </td>
                <td>
                  {x.s8}
                </td>
                <td>
                  {x.s6}
                </td>
                <td>
                  {x.s4}
                </td>
                <td>
                  {x.s2}
                </td>
                <td>
                  {x.s1}
                </td>
                <td>
                  {x.s1Zero}
                </td>
                <td>
                  {x.s2Zero}
                </td>
                <td>
                  {x.s3Zero}
                </td>
                <td>
                  {x.s4Zero}
                </td>
              </tr>
            }
          })
        }
      </tbody>
    </Table>
  );
}