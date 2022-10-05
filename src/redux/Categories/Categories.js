const initalState = '';

const CHECKING_STATUS = 'bookstore/components/categories/CHECKING_STATUS';

const status = () => 'Under construction';

const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case CHECKING_STATUS: return status();
    default: return state;
  }
};

const checkStatus = () => ({ type: CHECKING_STATUS });

export default reducer;
export { checkStatus };
