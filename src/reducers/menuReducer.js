const menuReducer = (state, action) => {
  if (action.type === "MENU_TOGGLE") {
    return { ...state, menu: !state.menu };
  }
  if (action.type === "CHANGE_ACTIVE_SECTION") {
    if (window.innerWidth <= 992) {
      return { ...state, menu: false };
    }
    return { ...state };
  }
  if (action.type === "MENU_OFF") {
    return { ...state, menu: false };
  }

  return state;
};

export default menuReducer;
