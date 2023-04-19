import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader, CardFooter, CardLink } from 'reactstrap';
import { MdFavorite, MdComment, MdVisibility, MdDateRange } from "react-icons/md";
import { Link } from 'react-router-dom';

function ShortPost({ post }) {
  const [titleImg, setTitleImg] = useState('');
  const [text, setText] = useState('');

  const handlePostText = useCallback(() => {
    var htmlObject = document.createElement('div');
    htmlObject.innerHTML = post.text;

    const imgs = htmlObject.querySelectorAll('img');
    if (imgs.length !== 0) {
      setTitleImg(imgs[0].src);
    }

    for (const img of imgs) {
      img.remove();
    }

    setText(htmlObject.innerHTML);

  }, [post]);

  useEffect(() => {
    handlePostText();
  }, [handlePostText]);

  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
      <CardHeader>
        <CardTitle tag="h5" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0.25rem'
        }}>
          <CardLink tag={Link} to={`forum/${post.id}`} className='text-dark' style={{
            textDecoration: 'none',
            wordBreak: 'break-all'
          }}>
            {post.title}
          </CardLink>
        </CardTitle>
        <CardSubtitle className='text-secondary' style={{
          fontSize: '0.85rem',
          cursor: 'default'
        }}>
          от {post.author.login}
        </CardSubtitle>
      </CardHeader>
      {
        titleImg !== ''
          ? <img
            alt="Card cap"
            src={titleImg}
            width="100%"
          />
          : <></>
      }
      <CardBody>
        <CardText className='text-dark' style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: '4',
          overflow: 'hidden',
          whiteSpace: 'normal',
          textOverflow: 'ellipsis',
          wordWrap: 'break-word',
          wordBreak: 'break-all',
          textAlign: 'left'
        }}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </CardText>
      </CardBody>
      <CardFooter>
        <div id='forum-short-post-information' style={{
          marginLeft: 'auto',
          display: 'flex',
          gap: '1rem',
          fontSize: '0.85rem',
          cursor: 'default',
          justifyContent: 'space-between'
        }}>
          <div id='forum-post-views-count' style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}>
            <MdVisibility />
            <div>
              {post.views}
            </div>
          </div>
          <div id='forum-post-comments-count' style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}>
            <MdComment />
            <div>
              {post.comments.length}
            </div>
          </div>
          <div id='forum-post-date' style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}>
            <MdFavorite />
            <div>
              {post.likes}
            </div>
          </div>
          <div id='forum-post-date' style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}>
            <MdDateRange />
            <div>
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ShortPost;