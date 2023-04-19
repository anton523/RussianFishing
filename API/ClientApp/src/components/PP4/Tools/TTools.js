import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Row, Col, Card, CardImg, CardImgOverlay, CardTitle, Container, Table } from 'reactstrap';
import { getAllTools } from "../../../utils/ToolsApi";
import { Loading } from "../../../addons/Loading";

export function TTools() {
  const [selectedTool, setSelectedTool] = useState(null);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    getAllTools().then(tools => {
      setSelectedTool(tools[0]);
      setTools(tools);
    })
  }, [])

  if (selectedTool === null) {
    return <Loading></Loading>
  }

  if (tools.length === 0) {
    return <></>;
  }

  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      <div style={{ minWidth: 'min-content', flexShrink: '0' }} >
        <ListGroup>
          {tools.map(tool => {
            return <ListGroupItem action tag="button" active={selectedTool.name === tool.name} onClick={() => setSelectedTool(tool)}>
              {tool.name}
            </ListGroupItem>
          })}
        </ListGroup>
      </div>
      <Card style={{ height: '100%', width: '100%', minWidth: '700px' }}>
        <CardImg
          alt={selectedTool.name}
          src={new URL(selectedTool.image, 'https://localhost:44490').href}
          style={{
            height: '300px',
            padding: '10px',
            paddingTop: '25px',
            width: '300px'
          }}
        />
        <CardImgOverlay>
          <CardTitle tag="h5" style={{ textAlign: 'center', color: 'white' }} className='bg-secondary p-1'>
            {selectedTool.name}
          </CardTitle>
          <div style={{ display: 'flex', justifyContent: 'right', height: '90%' }}>
            <div style={{ width: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h5 style={{ color: '#5A5A5A', fontWeight: 'bold', textAlign: 'center' }} >ОПИСАНИЕ</h5>
                <h5 style={{ color: '#5A5A5A' }} >{selectedTool.description}</h5>
              </div>
              <div style={{ alignSelf: 'flex-end', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
                  <h5 style={{ fontWeight: 'bold' }} >{selectedTool.silverPrice}</h5>
                  <img src="imgs/SilverPrice.webp" style={{ width: '30px', height: '30px' }} />
                </div>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
                  <h5 style={{ fontWeight: 'bold' }}>{selectedTool.goldPrice}</h5>
                  <img src="imgs/GoldPrice.webp" style={{ width: '30px', height: '30px' }} />
                </div>
              </div>
            </div>
          </div>
        </CardImgOverlay>
      </Card>
    </div>
  );
}