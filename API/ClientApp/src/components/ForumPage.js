import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  Button, Dropdown, DropdownMenu, DropdownItem,
  DropdownToggle, Card, CardBody, CardTitle,
  CardText, CardHeader, CardImg, CardFooter, CardDeck, CardLink
} from 'reactstrap';
import { MdFavorite, MdComment, MdVisibility, MdDateRange } from "react-icons/md";
import { useNavigate, Link } from 'react-router-dom';
import { getAllPosts } from '../utils/PostApi';
import { filters } from '../addons/PostFilters';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { AuthContext } from '../contexts/Auth';

// const posts = [
//   {
//     id: '321355642',
//     user: {
//       name: 'Maksim Rakitin'
//     },
//     title: 'Шансы закрыть трофея (ценность трофея)',
//     reactions: 100,
//     comments: 1,
//     views: 8,
//     date: '21.02.2022',
//     content: 'lorem xyem ja;ksjd hasjfhhkj hlfghufg gkdfhggy gjewgfrf ddffdgkjg kdgfkhgfdfhd'
//   },
//   {
//     id: '57945654',
//     user: {
//       name: 'Maksim Rakitin'
//     },
//     title: 'Шансы закрыть трофея (ценность трофея)',
//     reactions: 34,
//     comments: 56,
//     views: 478,
//     date: '23.02.2023',
//     content: 'lorem xyem ja;ksjd hasjfhhkj hlfghufg gkdfhggy gjewgfrf ddffdgkjg kdgfkhgfdfhd'
//   },
//   {
//     id: '75463536786',
//     user: {
//       name: 'Maksim Rakitin'
//     },
//     title: 'Шансы закрыть трофея (ценность трофея)',
//     reactions: 9,
//     comments: 7,
//     views: 777,
//     date: '22.02.2023',
//     content: 'lorem xyem ja;ksjd hasjfhhkj hlfghufg gkdfhggy gjewgfrf ddffdgkjg kdgfkhgfdfhd'
//   },
// ];

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
        width: '100%',
      }}>
        <Dropdown isOpen={filterOpen} toggle={toggleFilter} direction='down'>
          <DropdownToggle caret>Фильтр: {selectedFilter.name}</DropdownToggle>
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
        600: 1,
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
      {/* <div id='forum-posts' style={{
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        {
          postsState === null ? <></> :
            postsState.map(post => {
              return (
                <ForumShortPost key={post.id} post={post} />
              );
            })
        }
      </div> */}
    </div>
  );
};

const ForumShortPost = ({ post }) => {
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
    <Card style={{
      width: 300,
      minWidth: 300,
      maxWidth: 300,
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
          <CardLink tag={Link} to={post.id} className='text-dark' style={{
            textDecoration: 'none'
          }}>
            {post.title}
          </CardLink>
        </CardTitle>
      </CardHeader>
      <CardBody className='pb-1' style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <CardText style={{
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
              {post.likes}
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}>
            <MdComment />
            <div>
              {post.comments.length}
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}>
            <MdVisibility />
            <div>
              {post.views}
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}>
            <MdDateRange />
            <div>
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
          </div>
        </CardDeck>
      </CardBody>
      <CardFooter style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Button outline>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <MdFavorite fontSize='20px' />
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