import './chatOnline.css';

export default function ChatOnline() {
  return (
    <div className='chatOnline'>
      <div className='chatOnlineFriend'>
        <div className='chatOnlineImgContainer'>
          <img
            className='chatOnlineImg'
            src='https://firebasestorage.googleapis.com/v0/b/diplom-3bd32.appspot.com/o/posts%2F3a91a7e6-389e-452c-8e51-3a5f7a68b8f6.jpg?alt=media&token=e2a68571-ce05-494c-805d-fdf337ae2d54'
            alt=''
          />
          <div className='chatOnlineBadge'></div>
        </div>
        <span className='chatOnlineName'>Kekw</span>
      </div>
    </div>
  );
}
