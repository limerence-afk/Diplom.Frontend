import { useEffect } from 'react';
import { useState } from 'react';
import { axiosApi } from '../../network';
import './conversation.css';

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axiosApi('/users?userId=' + friendId);

        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [conversation, currentUser]);

  return (
    <div className='conversation'>
      <img className='conversationImg' src={user?.profilePicture} alt='' />
      <span className='conversationName'>{user?.username}</span>
    </div>
  );
}
