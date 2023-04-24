import React from 'react';
import { StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { Container, Title, List, ListItem, Input, Text, Center, Heading, View } from 'native-base';

const HomeScreen = () => {
  const { width } = useWindowDimensions();

  return (
    <Center>
      <Container mt='2'>
        <Heading>
          <Text>Норвежское море в Русской Рыбалке 4</Text>
        </Heading>
        <Text mt="3">
          В скором времени, в игру будет введён новый водоём, Норвежское море, которое в доступном для игрока участке карты, будет более 200 метров в глубину, а в совокупности, с такими видами как:
        </Text>
        <Text mt="2" fontSize='xs' fontWeight='medium'> - Акула гигантская - предельный вес ≈4 000 кг.</Text>
        <Text fontSize='xs' fontWeight='medium'> - Акула  гренландская полярная - предельный вес ≈1 500 кг.</Text>
        <Text fontSize='xs' fontWeight='medium'> - Меч-рыба - предельный вес ≈650 кг.</Text>
        <Text fontSize='xs' fontWeight='medium'> - Палтус белокорый атлантический - предельный вес ≈320 кг.</Text>
        <Text fontSize='xs' fontWeight='medium'> - Сельдяной король - предельный вес ≈272 кг.</Text>
        <Text fontSize='xs' fontWeight='medium'> - Опах краснопёрый - предельный вес ≈270 кг.</Text>
        <Text fontSize='xs' fontWeight='medium'> - Акула сельдевая атлантическая - предельный вес ≈230 кг.</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginTop: 20, flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>
        <Text mt='2'>Норвежское море находится на границе Атлантического и Северного Ледовитого океанов, но благодаря теплому течению круглый год свободно ото льда. Непростые погодные условия и разнообразие морской фауны делают рыбалку в этих местах невероятно интересным, хоть и непростым занятием.</Text>
      </Container>
    </Center>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginLeft: 10,
    marginRight: 10
  },
  h1: {
    fontWeight: 'bold',
    paddingTop: 25
  }
})

export default HomeScreen;