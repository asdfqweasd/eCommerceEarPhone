export type SuccessToggleAction = {
  readonly type: string;
};

const successToggleReducer = (state = false, action: SuccessToggleAction) => {
  switch (action.type) {
    case "SUCCESS":
      return !state;
    default:
      return state;
  }
};

export default successToggleReducer;
