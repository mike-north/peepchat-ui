import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { Route, inject } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  // Inject the flash messages service
  flashMessages: inject.service(),
  actions: {
    logout() {
      this.get('session').invalidate();
      // Generate a message
      this.get('flashMessages').success('Logged out');
    }
  }
});
