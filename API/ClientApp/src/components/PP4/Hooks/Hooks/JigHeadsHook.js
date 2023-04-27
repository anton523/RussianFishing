import React, { useState } from 'react';
import { Table, Input } from 'reactstrap';

export function JigHeadHook({ hooks }) {
  const [items, setItems] = useState(hooks);

  const handleChange = (event) => {
    const { value } = event.target;

    setItems(hooks.filter(x => x.name.toLowerCase().startsWith(value)));
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input onChange={handleChange} />
      <Table bordered responsive>
        <thead>
          <tr>
            <th>
              Название
            </th>
            <th>
              10
            </th>
            <th>
              8
            </th>
            <th>
              7
            </th>
            <th>
              6
            </th>
            <th>
              5
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
            items.map(x => {
              if (x.type === 'JigHeads') {
                return <tr key={x.id}>
                  <td>
                    {x.name}
                  </td>
                  <td>
                    {x.s10}
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
    </div>
  );
}