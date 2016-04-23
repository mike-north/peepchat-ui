import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doLogin() {
      alert('login attempted');
    }
  }
});
