import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { Loading } from '../../../addons/Loading';
import { getAllSlingshots } from '../../../utils/ToolsApi';

export function SlingShotsTool() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    getAllSlingshots().then(tools => {
      setTools(tools);
    })
  }, [])

  return (
    <Table bordered>
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
          tools.map(tool => {
            return <tr>
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
  );
}