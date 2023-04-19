import React from 'react';
import { Table } from 'reactstrap';

export function ClassicHook({ hooks }) {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>
            Название
          </th>
          <th>
            24
          </th>
          <th>
            22
          </th>
          {
            [...Array(20).keys()].reverse().map(x => {
              return <th>{x + 1}</th>
            })
          }
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
            if (x.type === 'Classic') {
              return <tr>
                <td>
                  {x.name}
                </td>
                <td>
                  {x.s24}
                </td>
                <td>
                  {x.s22}
                </td>
                <td>
                  {x.s20}
                </td>
                <td>
                  {x.s19}
                </td>
                <td>
                  {x.s18}
                </td>
                <td>
                  {x.s17}
                </td>
                <td>
                  {x.s16}
                </td>
                <td>
                  {x.s15}
                </td>
                <td>
                  {x.s14}
                </td>
                <td>
                  {x.s13}
                </td>
                <td>
                  {x.s12}
                </td>
                <td>
                  {x.s11}
                </td>
                <td>
                  {x.s10}
                </td>
                <td>
                  {x.s9}
                </td>
                <td>
                  {x.s8}
                </td>
                <td>
                  {x.s7}
                </td>
                <td>
                  {x.s6}
                </td>
                <td>
                  {x.s5}
                </td>
                <td>
                  {x.s4}
                </td>
                <td>
                  {x.s3}
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