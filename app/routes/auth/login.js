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

        // Successful Login
        this.get('flashMessages').success('Logged in!');

      }).catch((response) => {

        const { errors } = response;

        // Check if any errors have a 401 code
        if (errors.mapBy('code').indexOf(401) >= 0) {

          // Unauthorized
          this.get('flashMessages')
            .danger('There was a problem with your username or password, please try again');

        } else {

          // All other API errors
          this.get('flashMessages').danger('Server Error');

        }
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
