import { UserItem } from "./UserItem";
import "./UserList.css";
import Card from "~/shared/UIElements/Card";

type UserType = {
  id: string;
  name: string;
  image: string;
  placeCount: number;
};

export const UserList = ({ items }: { items: UserType[] }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>User is not found!</h2>
        </Card>
      </div>
    );
  }
  return (
    <div className="center">
      <ul className="users-list">
        {items.map((item) => (
          <UserItem key={item.id} userDetail={item} />
        ))}
      </ul>
    </div>
  );
};
