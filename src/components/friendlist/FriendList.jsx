import clsx from "clsx";
import css from './FriendList.module.css'

const FriendList = ({ children }) => {
    return <ul className={clsx(css['friend-list'])}>
        {children}
    </ul>;
};

export default FriendList;