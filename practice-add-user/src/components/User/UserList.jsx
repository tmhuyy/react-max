import { useSelector, useDispatch } from "react-redux";
import Card from "../UI/Card/Card";
import UserItem from "./UserItem";
import styles from "./UserList.module.css";
const UserList = () => {
  const users = useSelector((state) => state.userReducer);
  return (
    <>
      {users.length > 0 && (
        <Card>
          <ul className={styles["list-container"]}>
            {users &&
              users.map((user) => {
                return <UserItem key={user.id} user={user} />;
              })}
          </ul>
        </Card>
      )}
    </>
  );
};

export default UserList;
