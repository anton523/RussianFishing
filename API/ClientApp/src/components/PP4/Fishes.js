import React, { useEffect, useState } from 'react';
import { Container, ListGroup, ListGroupItem, Row, Col, Card, CardImg, CardImgOverlay, CardTitle, Table } from 'reactstrap';
import { getAllFishes } from '../../utils/FishApi';
import { Loading } from '../../addons/Loading';
import { baits } from '../../addons/Baits/Baits';
import { shuffle } from '../../addons/Functions/shuffle';
import { getRandomInt } from '../../addons/Functions/getRandomInt';

export function Fishes() {
  const [selectedFish, setSelectedFish] = useState(null);
  const [fishes, setFishes] = useState([]);
  const [amountColumns, setAmountColumns] = useState(2);

  useEffect(() => {
    calcColumns(window.innerWidth);
  }, [])

  window.onresize = e => {
    calcColumns(e.currentTarget.innerWidth);
  }

  useEffect(() => {
    getAllFishes().then(fishes => {
      setFishes(fishes);
      setSelectedFish(fishes[0]);
    });
  }, []);

  function calcColumns(width) {
    if (width <= 1050) {
      setAmountColumns(1);
    } else {
      setAmountColumns(2);
    }
  }

  function stars(count) {
    let s = "";
    for (var i = 0; i < count; i++) {
      s += String.fromCodePoint(parseInt("2B50", 16));
    }
    return s;
  }

  if (fishes.length === 0) {
    return <h3>No content</h3>
  }

  if (selectedFish === null) {
    return <Loading></Loading>;
  }

  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      <div style={{ flexShrink: '0' }} >
        <ListGroup >
          {fishes.map(fish => {
            return (
              <ListGroupItem
                action
                tag="button"
                key={fish.id}
                active={selectedFish.shortName === fish.shortName}
                onClick={() => setSelectedFish(fish)}>
                {fish.shortName}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
      <Row xs={amountColumns} className='gy-2'>
        <Col style={{ flex: '0 1 auto' }}>
          <Card inverse style={{ height: '100%' }}>
            <CardImg
              alt={selectedFish.name}
              src={selectedFish.image}
              style={{
                objectFit: 'contain',
                height: '100%'
              }}
              width="100%"
            />
            <CardImgOverlay>
              <CardTitle tag={amountColumns === 2 ? 'h5' : 'h6'} style={{ textAlign: 'center', borderRadius: '0.25rem' }} className='bg-secondary p-1'>
                {selectedFish.name}
              </CardTitle>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col style={{ flex: '0 1 auto' }}>
          <Row xs="3" className='gy-2 gx-2'>
            <Col className='col-12' >
              <Container className='border box-shadow rounded p-0'>
                <Table borderless className='m-0' style={{ textAlign: 'center' }}>
                  <thead>
                    <tr style={{ display: 'flex', justifyContent: 'space-around' }}>
                      <th>
                        <img alt='' src="/imgs/Зачёт 128.webp"></img>
                      </th>
                      <th>
                        <img alt='' src="/imgs/Трофей 128.webp"></img>
                      </th>
                      <th>
                        <img alt='' src="/imgs/Редкий трофей 128.webp"></img>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ border: '1px solid #dee2e6' }} />
                    <tr style={{ display: 'flex', justifyContent: 'space-around' }}>
                      <td>
                        <span tag={amountColumns === 2 ? 'h5' : 'h6'}>от {selectedFish.l1} кг</span>
                      </td>
                      <td>
                        <span tag={amountColumns === 2 ? 'h5' : 'h6'}>от {selectedFish.l2} кг</span>
                      </td>
                      <td>
                        <span tag={amountColumns === 2 ? 'h5' : 'h6'}>от {selectedFish.l3} кг</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
            </Col>
            {
              shuffle(baits).slice(0, 6).map(bait => {
                return (
                  <FishBait bait={bait} />
                );
              })
            }
            {/* <Col>
              <Container className='border box-shadow rounded'>
                <img
                  src='https://static.wixstatic.com/media/a10019_7fe0431f6943417581fb630305b9bd80~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_auto/Картофельный%20кубик.png'
                  alt=''
                  style={{
                    objectFit: 'contain',
                    width: '100%'
                  }} />
              </Container>
            </Col>
            <Col>
              <Container className='border box-shadow rounded'>
                <img
                  src='https://static.wixstatic.com/media/a10019_7fe0431f6943417581fb630305b9bd80~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_auto/Картофельный%20кубик.png'
                  alt=''
                  style={{
                    objectFit: 'cover',
                    width: '100%'
                  }} />
              </Container>
            </Col>
            <Col>
              <Container className='border box-shadow rounded'>
                <img
                  src='https://static.wixstatic.com/media/a10019_7fe0431f6943417581fb630305b9bd80~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_auto/Картофельный%20кубик.png'
                  alt=''
                  style={{
                    objectFit: 'cover',
                    width: '100%'
                  }} />
              </Container>
            </Col>
            <Col>
              <Container className='border box-shadow rounded'>
                <img
                  src='https://static.wixstatic.com/media/a10019_7fe0431f6943417581fb630305b9bd80~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_auto/Картофельный%20кубик.png'
                  alt=''
                  style={{
                    objectFit: 'cover',
                    width: '100%'
                  }}
                />
              </Container>
            </Col>
            <Col>
              <Container className='border box-shadow rounded'>
                <img
                  src='https://static.wixstatic.com/media/a10019_7fe0431f6943417581fb630305b9bd80~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_auto/Картофельный%20кубик.png'
                  alt=''
                  style={{
                    objectFit: 'cover',
                    width: '100%'
                  }} />
              </Container>
            </Col>
            <Col>
              <Container className='border box-shadow rounded'>
                <img
                  src='https://static.wixstatic.com/media/a10019_7fe0431f6943417581fb630305b9bd80~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_auto/Картофельный%20кубик.png'
                  alt=''
                  style={{
                    objectFit: 'cover',
                    width: '100%'
                  }} />
              </Container>
            </Col> */}
          </Row>
        </Col>
        <Col>
          <Card>
            <CardImg
              src={`/imgs/graphics/graphic${getRandomInt(1, 4)}.webp`}
              style={{
                width: '100%'
              }}
            />
          </Card>
        </Col>
        <Col style={{ flex: '0 1 auto' }}>
          <Container className='border box-shadow rounded p-0'>
            <Table hover className='m-0'>
              <tbody>
                <tr style={{ fontSize: `${amountColumns === 2 ? '1rem' : '0.8rem'}` }}>
                  <th scope="row" style={{ borderRight: '1px solid lightgray' }}>
                    ФАРМ
                  </th>
                  <td>
                    {stars(selectedFish.farm)}
                  </td>
                </tr>
                <tr style={{ fontSize: `${amountColumns === 2 ? '1rem' : '0.8rem'}` }}>
                  <th scope="row" style={{ borderRight: '1px solid lightgray' }}>
                    ОПЫТ
                  </th>
                  <td>
                    {stars(selectedFish.experience)}
                  </td>
                </tr>
                <tr style={{ fontSize: `${amountColumns === 2 ? '1rem' : '0.8rem'}` }}>
                  <th scope="row" style={{ borderRight: '1px solid lightgray' }}>
                    КЛЁВ
                  </th>
                  <td>
                    {stars(selectedFish.biting)}
                  </td>
                </tr>
                <tr style={{ fontSize: `${amountColumns === 2 ? '1rem' : '0.8rem'}` }}>
                  <th scope="row" style={{ borderRight: '1px solid lightgray' }}>
                    ТРОФ
                  </th>
                  <td>
                    {stars(selectedFish.trophy)}
                  </td>
                </tr>
              </tbody>
            </Table>
            <p className='p-2 m-0'
              style={{
                wordBreak: 'break-all'
              }}>
              {selectedFish.description}
            </p>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

const FishBait = ({ bait }) => {
  return (
    <Col>
      <Card>
        <CardImg
          alt={bait.name}
          src={bait.imgSrc}
          style={{
            width: '100%'
          }}
        />
      </Card>
    </Col>
  );
}