import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

const list = {
  html: `
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
`};

const HomeScreen = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {/* <Container style={{ display: 'flex', height: "50px", justifyContent: 'center' }} className='border box-shadow mb-3'>
            <NavLink tag={Link} to='/forum' style={{ display: 'flex', alignItems: 'center', color: '#5A5A5A', fontSize: '25px', fontWeight: '700' }}>Форум</NavLink>
          </Container> */}
      <View style={styles.container}>
        {/* <div style={{ display: "flex", gap: "25px" }}>
              <CustomCarousel items={items} />
              <CustomCarousel items={items2} />
            </div> */}

        <Text h2 style={styles.h1}>Норвежское море в Русской Рыбалке 4</Text>
        <RenderHtml
          contentWidth={width}
          source={list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  container: {
    display: 'flex',
  },
  h1: {
    fontWeight: 'bold',
    paddingTop: 25
  }
})

export default HomeScreen;