import Avatar from '../shared/UIElements/Avatar.jsx'
import './UserItem.css'
import {Link} from "react-router";
import Card from "~/shared/UIElements/Card";

export const UserItem = ({userDetail}: { userDetail: UserType }) => {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${userDetail.id}/places`}>
                    <div className="user-item__image">
                        <Avatar image={userDetail.image} alt={userDetail.name}></Avatar>
                    </div>
                    <div className="user-item__info">
                        <h2>{userDetail.name}</h2>
                        <h3>{userDetail.placeCount} {userDetail.placeCount > 1 ? "places" : "place"}</h3>
                    </div>
                </Link>
            </Card>
        </li>
    );
};