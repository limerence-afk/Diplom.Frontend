import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RoomIcon from '@mui/icons-material/Room';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { axiosApi } from '../../network';

export default function Share({ addPost }) {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      data.append('file', file);
      const uploadedFileRes = await axiosApi.post('/posts/upload', data);
      newPost.img = uploadedFileRes.data.url;
    }
    try {
      const newPostRes = await axiosApi.post('/posts', newPost);
      addPost(newPostRes.data);
    } catch (err) {}
  };

  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img
            className='shareProfileImg'
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + 'person/noAvatar.png'
            }
            alt=''
          />
          <input
            placeholder={'Share the news ' + user.username}
            className='shareInput'
            ref={desc}
          />
        </div>
        <hr className='shareHr' />
        <form className='shareBottom' onSubmit={submitHandler}>
          <div className='shareOptions'>
            <label htmlFor='file' className='shareOption'>
              <PermMediaIcon htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Photo or Video</span>
              <input
                style={{ display: 'none' }}
                type='file'
                id='file'
                accept='.png,.jepg,.jpg,.webp'
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className='shareOption'>
              <LabelIcon htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className='shareOption'>
              <RoomIcon htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>
            <div className='shareOption'>
              <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon' />
              <span className='shareOptionText'>Emoji</span>
            </div>
            <button className='shareButton' type='submit'>
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
