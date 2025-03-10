import {UserItem} from './userItem'

export const UserList = ({items}: { items: UserType[] }) => {
    if (items.length === 0) {
        return <h2>empty!</h2>
    }
    return (
        <>
            {items.map(item => <UserItem userDetail={item}/>)}
        </>
    );
};