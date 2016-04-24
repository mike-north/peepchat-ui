import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { Route, inject } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  flashMessages: inject.service(),
  actions: {
    logout() {
      this.get('session').invalidate();
      this.get('flashMessages').success('Logged out');
    }
  }
});
