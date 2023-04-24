import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import Masonry from 'react-responsive-masonry';
import MapApi from '../utils/MapsApi';


const MapsPage = () => {
  const [maps, setMaps] = useState([]);
  const [countColumns, setCountColumns] = useState(4);

  const calculateCountColumns = useCallback((width) => {
    if (width <= 400) {
      setCountColumns(2);
    } else if (width <= 800) {
      setCountColumns(3);
    } else {
      setCountColumns(4);
    }
  }, []);

  useEffect(() => {
    MapApi.GetAll().then(maps => {
      setMaps(maps);
    });
  }, []);

  useEffect(() => {
    calculateCountColumns(window.innerWidth);
  }, [calculateCountColumns]);

  window.onresize = (e) => {
    calculateCountColumns(e.currentTarget.innerWidth)
  };

  return (
    <Card style={{
      border: 'none'
    }}>
      <CardBody style={{
        minWidth: '200px'
      }}>
        <Masonry columnsCount={countColumns} gutter='1rem'>
          {
            maps.map(map => {
              return (
                <Map key={map.id} map={map} />
              );
            })
          }
        </Masonry>
      </CardBody>
    </Card>
  );
};

const Map = ({ map }) => {
  return (
    <Link to={`/maps/${map.id}`} style={{
      position: 'relative',
      width: '100%',
      minWidth: '80px',
    }}>
      <div>
        <img src={map.titleImage} alt='' style={{
          width: '100%',
          borderRadius: '0.25rem',
          boxShadow: '0 0 0.25rem gray'
        }} />
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: '0 0.25rem',
        color: 'whitesmoke',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        textShadow: '0 0 5px black'
      }}>
        {map.name}
      </div>
    </Link>
  );
};


export default MapsPage;