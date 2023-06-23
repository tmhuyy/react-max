import styles from "./UserItem.module.css";
const UserItem = (props) => {
  return (
    <li className={styles.li}>
      {props.user.username} ({props.user.age} years old)
    </li>
  );
};

export default UserItem;
