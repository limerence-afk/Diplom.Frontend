import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { useEffect, useState } from 'react';
import { axiosApi } from '../../network';

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axiosApi.get('posts/profile/' + username)
        : await axiosApi.get('posts/timeline/624ae6dfe7a8d2c325c0bc69');
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
