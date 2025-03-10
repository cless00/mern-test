import type UserDetail from "~/users/types/userType";

export const UserItem = ({userDetail}: { userDetail: UserDetail }) => {
    return (
        <h1>id={userDetail.id}</h1>
    );
};