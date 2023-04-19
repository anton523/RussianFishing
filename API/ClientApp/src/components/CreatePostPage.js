import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle, Input, Spinner } from 'reactstrap';
import { UserContext } from '../contexts/User';
import TextEditor from './TextEditor';
import 'draft-js/dist/Draft.css';
import { createPost } from '../utils/PostApi';


const AVAILABLE_SYMBOLS_TITLE = 128;

const CreatePostPage = () => {
  const navigate = useNavigate();
  const { user, changeUser } = useContext(UserContext);
  const [titleValue, setTitleValue] = useState('');
  const [availableSymbolsTitle, setAvailableSymbolsTitle] = useState(AVAILABLE_SYMBOLS_TITLE);
  const [convertedContent, setConvertedContent] = useState(null);

  const handleChangeTitle = (e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;

    if (AVAILABLE_SYMBOLS_TITLE - e.target.value.length >= 0) {
      setTitleValue(e.target.value);
      setAvailableSymbolsTitle(AVAILABLE_SYMBOLS_TITLE - e.target.value.length);
    }
  }

  const handlePublicPost = async () => {
    let success = await createPost(titleValue, convertedContent);

    if (success){
      alert('Добавлен')
    } else {
      alert('Не удалось')
    }
  };

  const handleClickBack = () => {
    navigate(-1);
  }

  if (user === null) {
    return (
      <Spinner>
        Loading...
      </Spinner>
    );
  }

  return (
    <Card id='create-post'>
      <CardHeader >
        <div style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem'
        }}>
          <CardImg style={{
            borderRadius: '50%',
            height: '1.75rem',
            width: '1.75rem'
          }}
            alt=''
            src={user.avatarUri}
          />
          <div>
            Автор {user.login}
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <CardTitle style={{
          margin: 0
        }}>
          <div id='post-title-container' style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <Input
              value={titleValue}
              placeholder='Название поста'
              type='textarea'
              rows='1'
              onChange={handleChangeTitle}
              style={{
                fontSize: '2.5rem',
                padding: '0.75rem',
                border: 'none',
                overflow: 'none',
                resize: 'none',
                boxShadow: 'none'
              }} />
            <div id='available-symbols-title' className='text-secondary' style={{
              cursor: 'default',
              fontSize: '0.85rem'
            }}>
              {availableSymbolsTitle}
            </div>
          </div>
        </CardTitle>
        <CardText tag='div'>
          <TextEditor setConvertedContent={setConvertedContent} />
        </CardText>
      </CardBody>
      <CardFooter style={{
        display: 'flex',
        justifyContent: 'end',
        gap: '1rem'
      }}>
        <Button outline color='success' onClick={handleClickBack}>
          Отменить
        </Button>
        <Button color='success' onClick={handlePublicPost}>
          Опубликовать
        </Button>
      </CardFooter>
    </Card>
  );
};


export default CreatePostPage;