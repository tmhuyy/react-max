const initialUser = [
  // {
  //   id: "",
  //   username: "",
  //   age: "",
  // },
];

export default function userReducer(state = initialUser, action) {
  switch (action.type) {
    case "SUBMIT_NEW_USER":
      const newState = [...state]
      newState.push(action.payload)
      return newState;

    default:
      return state;
  }
}
