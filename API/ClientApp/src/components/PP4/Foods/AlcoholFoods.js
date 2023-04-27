import { useEffect, useState } from "react";
import { Table, Input } from 'reactstrap';
import { getAllAlcohol } from "../../../utils/FoodsApi";

export function AlcoholFoods() {
  const [foods, setFoods] = useState([]);
  const [items, setItems] = useState(foods);

  useEffect(() => {
    getAllAlcohol().then(alcohols => {
      setFoods(alcohols);
    })
  }, [])

  const handleChange = (event) => {
    const { value } = event.target;

    setItems(foods.filter(x => x.name.toLowerCase().startsWith(value)));
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
              Магазин
            </th>
            <th>
              Водоём
            </th>
            <th>
              Опыт %
            </th>
            <th>
              Max %
            </th>
            <th>
              Часов
            </th>
            <th>
              Порций
            </th>
            <th>
              Цена
            </th>
            <th>
              Острог
            </th>
            <th>
              Порция
            </th>
            <th>
              Full СЧ
            </th>
            <th>
              За 1%
            </th>
            <th>
              За 1% на СЧ
            </th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(food => {
              return <tr key={food.id}>
                <td>
                  {food.name}
                </td>
                <td>
                  {food.shop}
                </td>
                <td>
                  {food.pond}
                </td>
                <td>
                  {food.skill}
                </td>
                <td>
                  {food.max}
                </td>
                <td>
                  {food.hours}
                </td>
                <td>
                  {food.portions}
                </td>
                <td>
                  {food.price}
                </td>
                <td>
                  {food.ostrog}
                </td>
                <td>
                  {food.portion}
                </td>
                <td>
                  {food.full}
                </td>
                <td>
                  {food.perOnePercent}
                </td>
                <td>
                  {food.perOnePercent2}
                </td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </div>
  );
}