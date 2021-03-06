import PropTypes from 'prop-types';
import css from './Profile.module.css'

const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return <div className={css.profile}>
  <div className="description">
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className="name">{username}</p>
            <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
        <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
}
export default Profile;

Profile.propTypes = {
    username:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers:PropTypes.number.isRequired,
    views:PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
    
}