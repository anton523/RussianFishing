import React from 'react';
import { Table } from 'reactstrap';

export function SeaHook({ hooks }) {
  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th>
            Название
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
          <th>
            5/0
          </th>
          <th>
            6/0
          </th>
          <th>
            8/0
          </th>
          <th>
            10/0
          </th>
          <th>
            12/0
          </th>
        </tr>
      </thead>
      <tbody>
        {
          hooks.map(x => {
            if (x.type === 'Sea') {
              return <tr key={x.id}>
                <td>
                  {x.name}
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
                <td>
                  {x.s5Zero}
                </td>
                <td>
                  {x.s6Zero}
                </td>
                <td>
                  {x.s8Zero}
                </td>
                <td>
                  {x.s10Zero}
                </td>
                <td>
                  {x.s12Zero}
                </td>
              </tr>
            }
          })
        }
      </tbody>
    </Table>
  );
}