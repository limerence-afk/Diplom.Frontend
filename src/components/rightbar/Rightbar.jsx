import './rightbar.css';

export default function Rightbar() {
  return (
    <div className='rightBar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='/assets/present.svg' alt='' />
          <span className='birthdayText'>
            <b>John Cena</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='/assets/ad.jpg' alt='' />
        <h4 className='rightbarTitle'>Friends Online</h4>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                className='rightbarProfileImg'
                src='/assets/person/3.jpg'
                alt=''
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Raia Mia</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
