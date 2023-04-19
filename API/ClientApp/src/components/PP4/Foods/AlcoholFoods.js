import { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import { getAllAlcohol } from "../../../utils/FoodsApi";

export function AlcoholFoods() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getAllAlcohol().then(alcohols => {
      console.log(alcohols)
      setFoods(alcohols);
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
          foods.map(food => {
            return <tr>
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
  );
}