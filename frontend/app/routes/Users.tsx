import { UserList, type UserType } from "~/users/UserList";

const Users = () => {
  const USER_LIST: UserType[] = [
    {
      id: "u1",
      name: "Scott",
      image:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      placeCount: 2,
    },
  ];

  return <UserList items={USER_LIST} />;
};

export default Users;
