import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardHeader, CardImg, CardBody, CardFooter, CardTitle, CardText, Input, Alert } from 'reactstrap';
import { MdDateRange, MdVisibility, MdComment, MdOutlineFavorite, MdShare, MdFavorite } from "react-icons/md";
import { addOrRemoveLikePost, addViewPost, getPostById } from '../utils/PostApi';
import { createComment } from '../utils/CommentsApi';

import './ForumPost.css';
import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';


const ForumPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [displayAlertCopy, setDisplayAlertCopy] = useState(false);
  const [comments, setComments] = useState([]);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getPostById(id).then(post => {
      setComments(post.comments);
      setPost(post);
    })
    if (auth.authStatus !== false) {
      addViewPost(id);
    }
  }, [id]);

  const [comment, setComment] = useState('');
  const handleChangeComment = (e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;

    setComment(e.target.value);
  }

  const handleClickDiscardComment = () => {
    setComment('');
  };

  const handlePublicComment = () => {
    createComment(comment, post.id).then(comment => {
      setComments(prev => prev.concat([comment]));
      setComment('');
    })
  };

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setDisplayAlertCopy(true);
    setTimeout(() => {
      setDisplayAlertCopy(false);
    }, 2000)
  };

  const handleLike = (id) => {
    if (auth.authStatus === false) {
      navigate('/login', { replace: false });
      return;
    }
    addOrRemoveLikePost(id).then(flag => {
      if (flag) {
        setPost(prev => {
          return {
            ...prev,
            likes: prev.likes + 1,
            isCurrentUserLike: true
          }
        });
      } else {
        setPost(prev => {
          return {
            ...prev,
            likes: prev.likes - 1,
            isCurrentUserLike: false
          }
        });
      }
    });
  }

  if (post === null) {
    return <></>;
  }

  return (
    <div id='forum-post'>
      <Card>
        <CardHeader>
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
              src={post.author.avatarUri}
            />
            <div id='forum-post-author'>
              Автор {post.author.login}
            </div>
            <div id='forum-post-information' style={{
              marginLeft: 'auto',
              display: 'flex',
              gap: '1rem',
              fontSize: '0.85rem',
              cursor: 'default'
            }}>
              <div id='forum-post-views-count' style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                <MdVisibility />
                <div>
                  {post.views} <span className='views-text'>просмотров</span>
                </div>
              </div>
              <div id='forum-post-comments-count' style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                <MdComment />
                <div>
                  {post.comments.length} <span className='comments-text'>комментариев</span>
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
          </div>
        </CardHeader>
        <CardBody>
          <CardTitle>
            <div style={{
              fontSize: '2.5rem',
              padding: '0.75rem',
              textAlign: 'center'
            }}>
              {post.title}
            </div>
          </CardTitle>
          <CardText tag='div'>
            <div id='forum-content-inner' dangerouslySetInnerHTML={{ __html: post.text }} style={{
              padding: '0.75rem',
            }}>
            </div>
          </CardText>
        </CardBody>
        <CardFooter>
          <div style={{
            display: 'flex',
            gap: '1rem',
          }}>
            <Button outline style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: 'none'
            }} onClick={() => handleLike(post.id)}>
              <MdFavorite className={`${post.isCurrentUserLike ? 'text-danger' : ''}`} />
              <div>Лайк</div>
            </Button>
            <Button outline
              onClick={copyShareLink}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: 'none'
              }}>
              <MdShare />
              <div>Поделиться</div>
            </Button>
            <div style={{
              position: 'relative'
            }}>
              {
                displayAlertCopy
                  ? <Alert color="primary" style={{
                    width: '300px',
                    position: 'absolute',
                    left: 0,
                    bottom: '-50%'
                  }}>
                    Ссылка на пост скопирована в бутер обмена.
                  </Alert>
                  : <></>
              }
            </div>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              marginLeft: 'auto',
              alignItems: 'center'
            }}>
              <MdFavorite className='text-danger' />
              <div style={{
                fontSize: '0.85rem',
                cursor: 'default'
              }}>{post.likes}</div>
            </div>
          </div>
          <hr />
          <div id='forum-post-comments'>
            <CardTitle style={{
              marginBottom: '1rem'
            }}>
              <div>
                {post.comments.length} комментариев
              </div>
            </CardTitle>
            <div>
              <Input
                value={comment}
                placeholder='Ваш комментарий'
                type='textarea'
                rows='1'
                onChange={handleChangeComment}
                style={{
                  padding: '0.75rem',
                  // border: 'none',
                  overflow: 'hidden',
                  resize: 'none',
                  boxShadow: 'none'
                }}
              />
              <div style={{
                display: 'flex',
                gap: '1rem',
                padding: '1rem 0',
                justifyContent: 'end'
              }}>
                <Button outline size='sm' color='danger' onClick={handleClickDiscardComment}>
                  Сбросить
                </Button>
                <Button size='sm' color='success' onClick={handlePublicComment}>
                  Опубликовать
                </Button>
              </div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            {
              comments.map((comment, index) => {
                return (
                  <ForumComment key={comment.id} comment={comment} last={index === post.comments.length - 1} />
                );
              })
            }
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

const ForumComment = ({ comment, last }) => {
  return (
    <div id='forum-comment'>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <CardImg style={{
          borderRadius: '50%',
          height: '2rem',
          width: '2rem',
        }}
          alt=''
          src={comment.author.avatarUri}
        />
        <div>{comment.author.login}</div>
        <div style={{
          marginLeft: 'auto',
          fontSize: '0.85rem'
        }}>
          {new Date(comment.createdAt).toLocaleDateString()}
        </div>
      </div>
      <div className='text-secondary' style={{
        marginTop: '0.5rem',
        marginLeft: '2.5rem',
      }}>
        {comment.text}
      </div>
      {
        !last ? <hr /> : <></>
      }
    </div>
  );
};


export default ForumPost;