import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Post() {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img className='postProfileImg' src='/assets/person/1.jpg' alt='' />
            <span className='postUserName'>Maxim Bogdan</span>
            <span className='postDate'>5 min ago</span>
          </div>
          <div className='postTopRight'>
            <MoreVertIcon className='postMoreIcon' />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>my first post</span>
          <img className='postImage' src='assets/post/3.webp' alt='' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src='assets/like.svg' alt='' />
            <img className='likeIcon' src='assets/heart2.svg' alt='' />
            <span className='postLikeCounter'>32</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
