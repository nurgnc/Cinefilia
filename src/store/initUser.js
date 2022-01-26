import initUser from '../init_user.json';

const INITUSER = 'INITUSER';

const setUser = (user) => ({
  type: INITUSER,
  payload: user,
});

function userReducer(user, action) {
  const userData = user === undefined ? initUser : user;

  switch (action.type) {
    case INITUSER:
      return [action.payload, ...userData];
    default:
      return userData;
  }
}

export default userReducer;
export { setUser };
