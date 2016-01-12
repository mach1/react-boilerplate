export default function login(state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        login: true
      };
    default:
      return {};
  }
}
