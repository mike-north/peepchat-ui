import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  session: inject.service(),
  actions: {
    doLogin() {
      const user = this.get('currentModel');
      this.get('session').authenticate('authenticator:peepchat',
        user.email,
        user.password);
    }
  },
  model() {
    return {
      email: '',
      password: ''
    };
  }
});
