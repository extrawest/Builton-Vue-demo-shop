import {$post} from '~/plugins/http'

export function state() {
  return {

  }
}

export const getters = {

};

export const mutations = {

};

export const actions = {
  authAction({commit}, {email, password, loginMode}) {
    const path = loginMode ? 'api/login' : 'api/auth';

    $post(path, {email, password}).then(console.log);
  }
};
