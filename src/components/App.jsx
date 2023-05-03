import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendlist/FriendList';
import FriendListItem from './friendListItem/FriendListItem';
import TransactionHistory from './transactionHistory/TransactionHistory';
// Added import the user.json in an App.jsx
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import items from '../transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        // Pass arguments from the file user.json
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        // Pass arguments from the file data.json
        // title='Upload stats'
        stats={data}
      />

      <FriendList>
        {friends.map(friend => <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />)}
      </FriendList>

      <TransactionHistory
        // Pass arguments from the file transactions.json
        items={items}
      />
    </div>
  );
};