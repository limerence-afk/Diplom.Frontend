import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { axiosApi } from '../../network';
import './chatOnline.css';

export default function ChatOnline({
  onlineUsers,
  currentId,
  setConversations,
}) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axiosApi.get('/users/friends/' + currentId);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const { user } = useContext(AuthContext);

  const handleClick = async (receiverId) => {
    try {
      const res = await axiosApi.post('/conversations', {
        senderId: user._id,
        receiverId: receiverId,
      });
      const newConversation = res.data;
      setConversations((state) => [...state, newConversation]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='chatOnline'>
      {onlineFriends.map((o) => (
        <div className='chatOnlineFriend' onClick={() => handleClick(o._id)}>
          <div className='chatOnlineImgContainer'>
            <img className='chatOnlineImg' src={o.profilePicture} alt='' />
            <div className='chatOnlineBadge'></div>
          </div>
          <span className='chatOnlineName'>{o.username}</span>
        </div>
      ))}
    </div>
  );
}
