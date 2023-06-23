const initialValue = {
  isValid: true,
  message: "",
};

export default function modalReducer(state = initialValue, action) {
  switch (action.type) {
    case "SHOW_MODAL":
      return { isValid: false, message: action.payload };
    case "CLOSE_MODAL":
      return {
        isValid: true,
        message: "",
      };
    default:
      return state;
  }
}
