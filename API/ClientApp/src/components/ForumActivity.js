import React, { useEffect, useState } from 'react';
import ShortPost from './ShortPost';
import { getAllPosts } from '../utils/PostApi';
import { filters } from '../addons/PostFilters';

function ForumActivity(args) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(posts => {
      setPosts(posts.sort(filters[0].compare));
    });
  }, []);

  if (posts.length === 0) {
    return <></>;
  }

  return (
    <div style={{
      textAlign: 'center',
      padding: '0 1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem'
    }}>
      <span style={{
        color: "#5A5A5A",
        fontSize: "16px",
        fontWeight: '700'
      }}>
        ПОСЛЕДНЯЯ АКТИВНОСТЬ НА ФОРУМЕ
      </span>
      <div id='activity-forum posts' style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        {
          posts.slice(0, 3).map(post => {
            return (
              <ShortPost post={post}/>
            );
          })
        }
      </div>
    </div>
  );
}

export default ForumActivity;