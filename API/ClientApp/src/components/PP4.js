import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';


const PP4 = () => {
  return (
    <Card style={{
      border: 'none'
    }}>
      <CardBody>
        <CardImg src='https://rf4game.ru/wp-content/themes/rf4/img/fb_link_img_1200x630.jpg' alt=''
          style={{
            marginBottom: '1rem'
          }} />
        <CardTitle tag='h2'>
          Об игре
        </CardTitle>
        <CardText>
          <a
            href='https://rf4game.ru/'
            style={{
              textDecoration: 'none'
            }}>
            «Русская Рыбалка 4»
          </a> — долгожданное продолжение известной серии рыболовных симуляторов. Новая игра стала значительно динамичней и отличается тщательно проработанной физикой. В основе игрового процесса лежит идея полной свободы игрока. Исследуйте водоёмы в поисках рыбных мест. Используйте любые снасти, соответствующие вашему уровню и умениям. К вашим услугам впечатляющий арсенал рыболовного оборудования и предметов экипировки. Помимо этого, игровой мир «Русской Рыбалки 4» постоянно расширяется, а значит, в нём всегда есть место неизведанному.
        </CardText>
      </CardBody>
    </Card>
  );
};


export default PP4;