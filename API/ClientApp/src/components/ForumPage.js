import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  Button, Dropdown, DropdownMenu, DropdownItem,
  DropdownToggle, Card, CardBody, CardTitle,
  CardText, CardHeader, CardImg, CardFooter, CardDeck, CardLink
} from 'reactstrap';
import { MdFavorite, MdComment, MdVisibility, MdDateRange } from "react-icons/md";
import { useNavigate, Link } from 'react-router-dom';
import { addOrRemoveLikePost, getAllPosts } from '../utils/PostApi';
import { filters } from '../addons/PostFilters';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { AuthContext } from '../contexts/Auth';

import './ForumPage.css';

const ForumPage = (props) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [postsState, setPostsState] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [filterOpen, setFilterOpen] = useState(false);
  const toggleFilter = () => setFilterOpen((prev) => !prev);
  const handleCreatePost = () => {
    if (auth.authStatus === false) {
      navigate('/login', { replace: false });
      return;
    }
    navigate('create-post', { replace: false });
  };

  const handleSelectFilter = (filter) => {
    return () => {
      setSelectedFilter(filter);
      setPostsState(prev => prev.sort(filter.compare));
    };
  };

  useEffect(() => {
    getAllPosts().then(posts => {
      setPostsState(posts.sort(selectedFilter.compare))
    })
  }, [selectedFilter.compare]);

  return (
    <div id='forum-content' style={{
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column'
    }}>
      <div id='forum-header' className='p-2' style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        <Dropdown isOpen={filterOpen} toggle={toggleFilter} direction='down'>
          <DropdownToggle caret style={{
            height: '100%'
          }}>
            Фильтр: {selectedFilter.name}
          </DropdownToggle>
          <DropdownMenu>
            {
              filters.map(filter => {
                return (
                  <DropdownItem key={filter.name} onClick={handleSelectFilter(filter)}>
                    {filter.name}
                  </DropdownItem>
                );
              })
            }
          </DropdownMenu>
        </Dropdown>
        <Button color='success' className='p-2' onClick={handleCreatePost}>
          Создать пост
        </Button>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{
        400: 1,
        750: 2,
        1100: 3,
        1200: 2,
        1800: 3
      }}>
        <Masonry gutter='1rem'>
          {
            postsState === null ? <></> :
              postsState.map(post => {
                return (
                  <ForumShortPost key={post.id} post={post} />
                );
              })
          }
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

const ForumShortPost = ({ post }) => {
  const [titleImg, setTitleImg] = useState('');
  const [text, setText] = useState('');
  const [postState, setPostState] = useState(post);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

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

  const handleLike = (id) => {
    if (auth.authStatus === false) {
      navigate('/login', { replace: false });
      return;
    }
    addOrRemoveLikePost(id).then(flag => {
      if (flag) {
        setPostState(prev => {
          return {
            ...prev,
            likes: prev.likes + 1,
            isCurrentUserLike: true
          }
        });
      } else {
        setPostState(prev => {
          return {
            ...prev,
            likes: prev.likes - 1,
            isCurrentUserLike: false
          }
        });
      }
    });
  }

  useEffect(() => {
    handlePostText();
  }, [handlePostText]);

  return (
    <Card className='forum-short-post' style={{
      width: 300,
      alignSelf: 'center'
    }}>
      {
        titleImg !== ''
          ? <CardImg top
            alt="Card cap"
            src={titleImg}
            width="100%" />
          : <></>
      }
      <CardHeader>
        <CardTitle tag='h5' style={{
          textAlign: 'center'
        }}>
          <CardLink tag={Link} to={postState.id} className='text-dark' style={{
            textDecoration: 'none'
          }}>
            {postState.title}
          </CardLink>
        </CardTitle>
      </CardHeader>
      <CardBody className='pb-1' style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <CardText
          tag='div'
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: '4',
            whiteSpace: 'normal',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </CardText>
        <CardDeck style={{
          fontSize: '14px',
          display: 'flex',
          justifyContent: 'space-evenly',
          cursor: 'default'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}>
            <MdFavorite />
            <div>
              {postState.likes}
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}>
            <MdComment />
            <div>
              {postState.comments.length}
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}>
            <MdVisibility />
            <div>
              {postState.views}
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}>
            <MdDateRange />
            <div>
              {new Date(postState.createdAt).toLocaleDateString()}
            </div>
          </div>
        </CardDeck>
      </CardBody>
      <CardFooter style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Button outline onClick={() => handleLike(postState.id)} style={{
          boxShadow: 'none'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <MdFavorite className={`${postState.isCurrentUserLike ? 'text-danger' : ''}`} fontSize='20px' />
            <div>Лайк</div>
          </div>
        </Button>
        <Button outline>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <MdComment fontSize='20px' />
            <div>Комментарий</div>
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
};


export default ForumPage;