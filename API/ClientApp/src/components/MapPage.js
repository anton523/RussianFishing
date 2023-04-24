import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import MapsApi from '../utils/MapsApi'
import { Loading } from '../addons/Loading';
import { Card, CardBody, CardDeck, CardFooter, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';


const MapPage = () => {
  const { id } = useParams();
  const [map, setMap] = useState(undefined);

  useEffect(() => {
    MapsApi.GetById(id).then(map => {
      setMap(map);
    });
  }, [id]);

  if (map === undefined) {
    return <Loading />
  }

  return (
    <MapPageContent map={map} />
  );
};

const MapPageContent = ({ map }) => {
  const mapImg = useRef(null);
  const [height, setHeight] = useState(undefined);
  const [selectedFish, setSelectedFish] = useState(map.fishes.length !== 0 ? map.fishes[0] : { id: '000' });

  useEffect(() => {
    setHeight(mapImg.current.clientHeight === 0 ? '100%' : mapImg.current.clientHeight);
  }, []);

  window.onresize = () => {
    if (mapImg.current !== null) {
      setHeight(mapImg.current.clientHeight);
    }
  };

  return (
    <Card style={{
      height: '100%',
      border: 'none'
    }}>
      <CardBody style={{
        display: 'flex',
        padding: 0,
        gap: '0.5rem',
        height: `${height}px`
      }}>
        <div style={{
          width: '70%',
          position: 'relative'
        }}>
          <img
            ref={mapImg}
            src={map.mapImage}
            alt=''
            style={{
              width: '100%',
              borderRadius: '0.25rem'
            }}
          />
          <img
            src={selectedFish.image}
            alt=''
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '50%',
              paddingLeft: '2rem',
              paddingBottom: '2rem'
            }}
          />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
        }}>
          <h4 style={{
            textAlign: 'center'
          }}>
            Кто водится:
          </h4>
          <CardDeck className='bg-light' style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            overflow: 'auto',
            height: '100%',
            padding: '0.5rem',
            borderTopLeftRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
            borderBottom: '1px solid rgba(0, 0, 0, 0.175)'
          }}>
            <ListGroup>
              {
                map.fishes.map(fish => {
                  return (
                    <ListGroupItem
                      key={fish.id}
                      action
                      active={fish.id === selectedFish.id}
                      tag="button"
                      onClick={() => setSelectedFish(fish)}
                    >
                      {fish.shortName}
                    </ListGroupItem>
                  );
                })
              }
            </ListGroup>
          </CardDeck>
        </div>
      </CardBody>
      <CardFooter style={{
        backgroundColor: 'white',
        border: 'none',
        display: 'flex',
        gap: '0.5rem',
        padding: 0
      }}>
        <div style={{
          width: '71%'
        }}>
          <div style={{
            padding: '0.5rem'
          }}>
            <CardTitle tag='h2'>
              {map.name}
            </CardTitle>
            <CardText className='text-secondary'>
              {map.description}
            </CardText>
          </div>
        </div>
        <div style={{
          width: '29%',
        }}>
          <div style={{
            padding: '0.5rem'
          }}>
            <CardTitle tag='h4'>
              {selectedFish.name}
            </CardTitle>
            <CardText className='text-secondary'>
              {selectedFish.description}
            </CardText>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};


export default MapPage