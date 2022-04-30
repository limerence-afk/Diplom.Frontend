import './message.css';
import { format } from 'timeago.js';

export default function Message({ message, own }) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className='messageTop'>
        <img
          className='messageImg'
          src='https://firebasestorage.googleapis.com/v0/b/diplom-3bd32.appspot.com/o/posts%2F3a91a7e6-389e-452c-8e51-3a5f7a68b8f6.jpg?alt=media&token=e2a68571-ce05-494c-805d-fdf337ae2d54'
          alt=''
        />
        <p className='messageText'>{message.text}</p>
      </div>
      <div className='messageBottom'>{format(message.createdAt)}</div>
    </div>
  );
}
