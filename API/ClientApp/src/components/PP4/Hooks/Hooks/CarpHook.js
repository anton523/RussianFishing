import React, { useState } from 'react';
import { Table, Input } from 'reactstrap';

export function CarpHook({ hooks }) {
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
            {
              [...Array(18).keys()].reverse().map(x => {
                return <th key={x + 1}>{x + 1}</th>
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
            items.map(x => {
              if (x.type === 'Carp') {
                return <tr key={x.id}>
                  <td>
                    {x.name}
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
    </div>
  );
}