import React, { useEffect, useState } from 'react';
import { Container, ListGroup, ListGroupItem, Row, Col, Card, CardImg, CardImgOverlay, CardTitle, Table, Spinner } from 'reactstrap';
import { getAllFishes } from '../../utils/FishApi';
import { Loading } from '../../addons/Loading';

export function Fishes() {
  const [selectedFish, setSelectedFish] = useState(null);
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    getAllFishes().then(fishes => {
      setFishes(fishes);
      setSelectedFish(fishes[0]);
    });
  }, []);

  function stars(count) {
    let s = "";
    for(var i = 0; i < count; i++){
      s += String.fromCodePoint(parseInt("2B50", 16));
    }
    return s;
  }

  if (selectedFish === null || fishes.length === 0){
    return <Loading></Loading>;
  }

  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      <div style={{ minWidth: 'min-content', flexShrink: '0' }} >
        <ListGroup>
          {fishes.map(fish => {
            return <ListGroupItem action tag="button" active={selectedFish.shortName === fish.shortName} onClick={() => setSelectedFish(fish)}>
              {fish.shortName}
            </ListGroupItem>
          })}
        </ListGroup>
      </div>
      <Row xs='2' className='gy-2' style={{ maxHeight: '300px' }}>
        <Col>
          <Card inverse style={{ height: '100%' }}>
            <CardImg
              alt={selectedFish.name}
              src={new URL(selectedFish.image, 'https://localhost:44490').href}
              style={{
                height: '300px',
                padding: '10px',
                paddingTop: '25px',
              }}
              width="100%"
            />
            <CardImgOverlay>
              <CardTitle tag="h5" style={{ textAlign: 'center' }} className='bg-secondary p-1'>
                {selectedFish.name}
              </CardTitle>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col>
          <Row xs="3" className='gy-2 gx-2'>
            <Col className='col-12' >
              <Container className='border box-shadow rounded p-0'>
                <Table className='m-0' style={{ textAlign: 'center' }}>
                  <thead>
                    <tr>
                      <th>
                        <img src="/imgs/Зачёт 128.webp"></img>
                      </th>
                      <th>
                        <img src="/imgs/Трофей 128.webp"></img>
                      </th>
                      <th>
                        <img src="/imgs/Редкий трофей 128.webp"></img>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h5>от {selectedFish.l1} кг</h5>
                      </td>
                      <td>
                        <h5>от {selectedFish.l2} кг</h5>
                      </td>
                      <td>
                        <h5>от {selectedFish.l3} кг</h5>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
            </Col>
            <Col>
              <Container className='border box-shadow rounded'>
                <img style={{ objectFit: 'cover', width: '100%', width: '100%' }} src='https://static.wixstatic.com/media/a10019_7fe0431f6943417581fb630305b9bd80~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_auto/Картофельный%20кубик.png' />
              </Container>
            </Col>
            <Col>
              <Container className='border box-shadow rounded'>
                <img style={{ objectFit: 'cover', width: '100%', width: '100%' }} src='https://static.wixstatic.com/media/a10019_7fe0431f6943417581fb630305b9bd80~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_auto/Картофельный%20кубик.png' />
              </Container>
            </Col>
            <Col>
              <Container className='border box-shadow rounded'>
                <img style={{ objectFit: 'cover', width: '100%', width: '100%' }} src='https://static.wixstatic.com/media/a10019_7fe0431f6943417581fb630305b9bd80~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_auto/Картофельный%20кубик.png' />
              </Container>
            </Col>
            <Col>
              <Container className='border box-shadow rounded'>
                <img style={{ objectFit: 'cover', width: '100%', width: '100%' }} src='https://static.wixstatic.com/media/a10019_7fe0431f6943417581fb630305b9bd80~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_auto/Картофельный%20кубик.png' />
              </Container>
            </Col>
            <Col>
              <Container className='border box-shadow rounded'>
                <img style={{ objectFit: 'cover', width: '100%', width: '100%' }} src='https://static.wixstatic.com/media/a10019_7fe0431f6943417581fb630305b9bd80~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_auto/Картофельный%20кубик.png' />
              </Container>
            </Col>
            <Col>
              <Container className='border box-shadow rounded'>
                <img style={{ objectFit: 'cover', width: '100%', width: '100%' }} src='https://static.wixstatic.com/media/a10019_7fe0431f6943417581fb630305b9bd80~mv2.png/v1/fill/w_500,h_500,al_c,q_85,enc_auto/Картофельный%20кубик.png' />
              </Container>
            </Col>
          </Row>
        </Col>
        <Col>
          <Container className='border box-shadow rounded p-0'>
            <Table hover className='m-0'>
              <tbody>
                <tr>
                  <th scope="row" style={{ borderRight: '1px solid lightgray' }}>
                    ФАРМ
                  </th>
                  <td>
                    {stars(selectedFish.farm)}
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ borderRight: '1px solid lightgray' }}>
                    ОПЫТ
                  </th>
                  <td>
                  {stars(selectedFish.experience)}
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ borderRight: '1px solid lightgray' }}>
                    КЛЁВ
                  </th>
                  <td>
                  {stars(selectedFish.biting)}
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ borderRight: '1px solid lightgray' }}>
                    ТРОФ
                  </th>
                  <td>
                  {stars(selectedFish.trophy)}
                  </td>
                </tr>
              </tbody>
            </Table>
            <p className='p-2 m-0'>{selectedFish.description}</p>
          </Container>
        </Col>
      </Row>
    </div>
  );
}