import initUser from '../init_user.json';

const INITUSER = 'INITUSER';
const ISLOGIN = 'ISLOGIN';

const setLogin = (isLogin) => ({
  type: ISLOGIN,
  payload: isLogin,
});

const setUser = (user) => ({
  type: INITUSER,
  payload: user,
});

function userReducer(user, action) {
  const userData = user === undefined ? initUser : user;
  switch (action.type) {
    case INITUSER:
      return action.payload;
    default:
      return userData;
  }
}

function loginReducer(isLogin, action) {
  const login = isLogin === undefined ? 'false' : isLogin;
  switch (action.type) {
    case ISLOGIN:
      return action.payload;
    default:
      return login;
  }
}

export default userReducer;
export {
  userReducer, loginReducer, setLogin, setUser,
};
