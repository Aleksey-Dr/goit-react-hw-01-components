// Create a Profile.jsx file in the "profile" folder

// Import PropTypes from package 'prop-types'
import PropTypes from 'prop-types';
import clsx from "clsx";
// Import a picture of avatar for a default value
// of the "avatar" prop of the arrow function "Profile"
import defaultAvatar from './avatar.png';
// Import css styles from the Profile.module.css
import css from './Profile.module.css';

// Create an arrow function "Profile" in the Profile.jsx file

const Profile = ({
    // Added props for the function "Profile"
    // Added default values for props
    username = 'username undefined',
    tag = 'tag undefined',
    location = 'location undefined',
    avatar = defaultAvatar,
    // avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats = {
        followers: 'undefined',
        views: 'undefined',
        likes: 'undefined',
    },
}) => {
    // Return the html markup from Template
    // Changed values of classNames by classes from Profile.module.css
    return (<div className={clsx(css.profile)}>
        <div className={clsx(css.description)}>
            <img
                //   src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                src={avatar}
                alt="User avatar"
                className={clsx(css.avatar)}
            />
            <p className={clsx(css.name)}>{username}</p>
            <p className={clsx(css.tag)}>{tag}</p>
            <p className={clsx(css.location)}>{location}</p>
        </div>

        <ul className={clsx(css.stats)}>
            <li>
                <span className={clsx(css.label)}>Followers</span>
                <span className={clsx(css.quantity)}>{stats.followers}</span>
            </li>
            <li>
                <span className={clsx(css.label)}>Views</span>
                <span className={clsx(css.quantity)}>{stats.views}</span>
            </li>
            <li>
                <span className={clsx(css.label)}>Likes</span>
                <span className={clsx(css.quantity)}>{stats.likes}</span>
            </li>
        </ul>
    </div>);
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};

export default Profile;