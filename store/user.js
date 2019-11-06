import {$post} from '~/plugins/http'

export function state() {
  return {
    user: null,
    authError: ''
  }
}

export const getters = {
  getUser: state => state.user,
  getAuthError: state => state.authError
};

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_AUTH_ERROR(state, payload) {
    state.authError = payload;
  }
};

export const actions = {
  authAction({commit}, {name, email, password, loginMode}) {
    const path = loginMode ? 'api/login' : 'api/auth';
    const user = loginMode ? {email, password} : {email, password, name};

    $post(path, user)
      .then(user => commit('SET_USER', user))
      .catch(({message}) => commit('SET_AUTH_ERROR', message));
  }
};
