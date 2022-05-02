import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import { useEffect, useState } from 'react';
import { axiosApi } from '../../network';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axiosApi.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  const handleChangeImg = async (file) => {
    if (file) {
      const data = new FormData();
      data.append('file', file);
      const updatedUserRes = await axiosApi.post(
        '/users/img/' + user._id,
        data
      );
      console.log(updatedUserRes.data);
      setUser(updatedUserRes.data);
      dispatch({ type: 'USER_CHANGE', payload: updatedUserRes.data });
    }
  };
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                className='profileCoverImg'
                src={
                  user.coverPicture ? user.coverPicture : PF + '/noCover.webp'
                }
                alt=''
              />
              <img
                className='profileUserImg'
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : PF + '/person/noAvatar.png'
                }
                alt=''
              />
            </div>

            <div className='profileInfo'>
              <h4 className='profileInfoName'>{user.username}</h4>
              <span className='profileInfoDesc'>{user.desc}</span>
              {user._id === currentUser._id && (
                <form className='chngImgForm'>
                  <label htmlFor='file'>
                    <span type='button' className='changeImg'>
                      Change profile image
                    </span>
                    <input
                      style={{ display: 'none' }}
                      type='file'
                      id='file'
                      accept='.png,.jepg,.jpg,.webp'
                      onChange={(e) => handleChangeImg(e.target.files[0])}
                    />
                  </label>
                </form>
              )}
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
