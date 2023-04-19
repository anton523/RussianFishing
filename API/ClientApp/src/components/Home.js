import React, { Component } from 'react';
import { Container, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import CustomCarousel from './CustomCarousel';

const items = [
  {
    src: 'https://static.wixstatic.com/media/a10019_469c15d28c3944269472daf12b178637~mv2.jpg/v1/fill/w_457,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a10019_469c15d28c3944269472daf12b178637~mv2.jpg',
    key: 1,
    link: 'https://www.youtube.com/watch?v=ylXs9EY5kpU'
  },
  {
    src: 'https://static.wixstatic.com/media/a10019_9f8703afda864c8cafa298e8b282b2d3~mv2.jpg/v1/fill/w_457,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a10019_9f8703afda864c8cafa298e8b282b2d3~mv2.jpg',
    key: 2,
    link: 'https://www.youtube.com/playlist?list=PL2N1PJHUikQ9zbdgVULd5kPEmeVT-kiGs'
  },
];

const items2 = [
  {
    src: 'https://static.wixstatic.com/media/a10019_afcc510bef2444b8b34fd70ff2d7ccd3~mv2.jpg/v1/fill/w_457,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a10019_afcc510bef2444b8b34fd70ff2d7ccd3~mv2.jpg',
    key: 1,
    link: 'https://www.youtube.com/watch?v=8iPbn1hzyR4'
  },
  {
    src: 'https://static.wixstatic.com/media/a10019_5c95ef7dae4e4df2b2d7b6004ee27448~mv2.jpg/v1/fill/w_457,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a10019_5c95ef7dae4e4df2b2d7b6004ee27448~mv2.jpg',
    key: 2,
    link: 'https://www.youtube.com/watch?v=ZqJVrsZpWqQ'
  },
  {
    src: 'https://static.wixstatic.com/media/a10019_8e251c13a08f491f874df8bbb27189e5~mv2.jpg/v1/fill/w_457,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a10019_8e251c13a08f491f874df8bbb27189e5~mv2.jpg',
    key: 3,
    link: 'https://www.youtube.com/playlist?list=PL2N1PJHUikQ_nUHYKIFxcUSO02wF5ORBp'
  }
];

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div>
          <Container style={{ display: 'flex', height: "50px", justifyContent: 'center' }} className='border box-shadow mb-3'>
            <NavLink tag={Link} to='/forum' style={{ display: 'flex', alignItems: 'center', color: '#5A5A5A', fontSize: '25px', fontWeight: '700' }}>Форум</NavLink>
          </Container>
          <div>
            <div style={{ display: "flex", gap: "25px" }}>
              <CustomCarousel items={items} />
              <CustomCarousel items={items2} />
            </div>

            <h2 style={{ fontWeight: "bold", paddingTop: "25px" }}>Норвежское море в Русской Рыбалке 4</h2>
            <p>В скором времени, в игру будет введён новый водоём, Норвежское море, которое в доступном для игрока участке карты, будет более 200 метров в глубину, а в совокупности, с такими видами как:</p>
            <ul>
              <li>Акула гигантская - предельный вес ≈4 000 кг</li>
              <li>Акула  гренландская полярная - предельный вес ≈1 500 кг.</li>
              <li>Меч-рыба - предельный вес ≈650 кг.</li>
              <li>Палтус белокорый атлантический - предельный вес ≈320 кг.</li>
              <li>Сельдяной король - предельный вес ≈272 кг.</li>
              <li>Опах краснопёрый - предельный вес ≈270 кг.</li>
              <li>Акула сельдевая атлантическая - предельный вес ≈230 кг.</li>
            </ul>
            <p>Норвежское море находится на границе Атлантического и Северного Ледовитого океанов, но благодаря теплому течению круглый год свободно ото льда. Непростые погодные условия и разнообразие морской фауны делают рыбалку в этих местах невероятно интересным, хоть и непростым занятием.</p>
            <hr />
            <p>«Русская Рыбалка 4» — долгожданное продолжение известной серии рыболовных симуляторов. Новая игра стала значительно динамичней и отличается тщательно проработанной физикой. В основе игрового процесса лежит идея полной свободы игрока. Исследуйте водоёмы в поисках рыбных мест. Используйте любые снасти, соответствующие вашему уровню и умениям. К вашим услугам впечатляющий арсенал рыболовного оборудования и предметов экипировки. Помимо этого, игровой мир «Русской Рыбалки 4» постоянно расширяется, а значит, в нём всегда есть место неизведанному.</p>
          </div>
        </div>
      </div>
    );
  }
}
