import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Card, CardImg, CardTitle, CardHeader, CardText, CardDeck } from 'reactstrap';
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
      <div style={{
        minWidth: 'min-content',
        flexShrink: '0'
      }} >
        <ListGroup>
          {tools.map(tool => {
            return (
              <ListGroupItem
                key={tool.id}
                action
                tag="button"
                active={selectedTool.name === tool.name}
                onClick={() => setSelectedTool(tool)}>
                {tool.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>

      <Card>
        <CardHeader>
          <CardTitle tag='h2' style={{
            textAlign: 'center',
            margin: 0
          }}>
            {selectedTool.name}
          </CardTitle>
        </CardHeader>

        <div className='tool-main' style={{
          display: 'flex',
        }}>
          <div className='tool-image-container' style={{
            width: '50%',
            padding: '1rem'
          }}>
            <CardImg
              alt={selectedTool.name}
              src={selectedTool.image}
              style={{
                width: '100%',
              }}
            />
          </div>
          <div className='tool-info-container' style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            padding: '1rem'
          }}>
            <CardTitle tag='h5' style={{
              textAlign: 'center'
            }}>
              ОПИСАНИЕ
            </CardTitle>
            <CardText tag='h6' style={{
              wordBreak: 'break-all'
            }}>
              {selectedTool.description}
            </CardText>
            <CardDeck style={{
              marginTop: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                <div style={{
                  fontWeight: 'bold',
                  fontSize: '1.25rem'
                }}>
                  {selectedTool.silverPrice}
                </div>
                <div>
                  <img alt='' src="imgs/SilverPrice.webp" />
                </div>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                <div style={{
                  fontWeight: 'bold',
                  fontSize: '1.25rem'
                }}>
                  {selectedTool.goldPrice}
                </div>
                <div>
                  <img alt='' src="imgs/GoldPrice.webp" />
                </div>
              </div>
            </CardDeck>
          </div>
        </div>
      </Card>
    </div>
  );
}