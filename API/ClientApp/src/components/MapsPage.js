import React from 'react';
import { Link } from 'react-router-dom';
import { Maps } from '../addons/Maps';
import { Card, CardBody } from 'reactstrap';


const MapsPage = () => {
  return (
    <Card style={{
      border: 'none'
    }}>
      <CardBody style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        gap: '1rem'
      }}>
        {
          Maps.map(map => {
            return (
              <Map map={map} />
            );
          })
        }
      </CardBody>
    </Card>
  );
};

const Map = ({ map }) => {
  return (
    <Link to={map.path} style={{
      position: 'relative',
      width: '23%',
      minWidth: '140px',
    }}>
      <div>
        <img src={map.img} alt='' style={{
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