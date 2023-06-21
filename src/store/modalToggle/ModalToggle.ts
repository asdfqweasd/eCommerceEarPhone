export type ModalToggleAction = {
  readonly type: string;
};

const modalToggleReducer = (state = false, action: ModalToggleAction) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
};

export default modalToggleReducer;
