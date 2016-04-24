import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  session: inject.service(),
  flashMessages: inject.service(),
  actions: {
    doLogin() {
      const user = this.get('currentModel');
      this.get('session').authenticate(
        'authenticator:peepchat',
        user.email,
        user.password
      ).then(() => {
        this.get('flashMessages')
          .success('Logged in!');
      });
    }
  },
  model() {
    return {
      email: '',
      password: ''
    };
  }
});
