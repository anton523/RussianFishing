import { useEffect, useState } from 'react';
import { Table, Input } from 'reactstrap';
import { Loading } from '../../../addons/Loading';
import { getAllSlingshots } from '../../../utils/ToolsApi';

export function SlingShotsTool() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    getAllSlingshots().then(tools => {
      setTools(tools);
    })
  }, [])

  const [items, setItems] = useState(tools);

  const handleChange = (event) => {
    const { value } = event.target;

    setItems(tools.filter(x => x.name.toLowerCase().startsWith(value)));
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
              Прикормка
            </th>
            <th>
              Вид
            </th>
            <th>
              0 ОЧКОВ
            </th>
            <th>
              1 ОЧКО
            </th>
            <th>
              2 ОЧКА
            </th>
            <th>
              3 ОЧКА
            </th>
            <th>
              ЦЕНА
            </th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(tool => {
              return <tr key={tool.id}>
                <td>
                  {tool.name}
                </td>
                <td>
                  {tool.bait}
                </td>
                <td>
                  {tool.sort}
                </td>
                <td>
                  {tool.score0}
                </td>
                <td>
                  {tool.score1}
                </td>
                <td>
                  {tool.score2}
                </td>
                <td>
                  {tool.score3}
                </td>
                <td>
                  {tool.price}
                </td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </div>
  );
}