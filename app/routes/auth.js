import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  session: inject.service(),
  beforeModel() {
    if(this.get('session').get('isAuthenticated')) {
      this.transitionTo('app.index');
    }
  }
});
