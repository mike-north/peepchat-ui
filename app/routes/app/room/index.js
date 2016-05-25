import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let roomRouteModel = this.modelFor('app.room');
    return roomRouteModel.room.get('messages');
  }
});
