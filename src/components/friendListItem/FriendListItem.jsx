// Import PropTypes from package 'prop-types'
import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './FriendListItem.module.css'

const FriendListItem = ({
    avatar='https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    name = 'friend name',
    isOnline,
    id,
}) => {
    return <li key={id} className={clsx(css.item)}>
        <span className={`${clsx(css.status)} ${isOnline && clsx(css.isOnline)}`}>{isOnline}</span>
        <img className={clsx(css.avatar)} src={avatar} alt="User avatar" width="48" />
        <p className={clsx(css.name)}>{name}</p>
    </li>;
}

// Added a cheks by the PropTypes for types of the props of the arrow function "FriendListItem".
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;