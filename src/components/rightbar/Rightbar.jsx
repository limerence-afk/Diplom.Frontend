import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='/assets/present.svg' alt='' />
          <span className='birthdayText'>
            <b>John Cena</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='/assets/ad.jpg' alt='' />
        <h4 className='rightbarTitle'>Friends Online</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>Cahul</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Country:</span>
            <span className='rightbarInfoValue'>Moldova</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>Complicated</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img
              className='rightbarFollowingImg'
              src='assets/person/1.jpg'
              alt=''
            />
            <span className='rightbarFollowingnName'>Oleg Kizaru</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              className='rightbarFollowingImg'
              src='assets/person/1.jpg'
              alt=''
            />
            <span className='rightbarFollowingnName'>Oleg Kizaru</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              className='rightbarFollowingImg'
              src='assets/person/2.jpg'
              alt=''
            />
            <span className='rightbarFollowingnName'>Oleg Kizaru</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              className='rightbarFollowingImg'
              src='assets/person/3.jpg'
              alt=''
            />
            <span className='rightbarFollowingnName'>Oleg Kizaru</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              className='rightbarFollowingImg'
              src='assets/person/2.jpg'
              alt=''
            />
            <span className='rightbarFollowingnName'>Oleg Kizaru</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              className='rightbarFollowingImg'
              src='assets/person/3.jpg'
              alt=''
            />
            <span className='rightbarFollowingnName'>Oleg Kizaru</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className='rightBar'>
      <div className='rightbarWrapper'>
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
