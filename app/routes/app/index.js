import Ember from 'ember';

const { RSVP, inject } = Ember;

export default Ember.Route.extend({

  flashMessages: inject.service(),

  actions: {
    /* Create a new room */
    createRoom() {
      // Get the "new room" model
      let data = this.get('currentModel.newRoom');
      // Create an ember-data record
      let room = this.store.createRecord('room', {name: data.name});
      // Clear any existing error messages
      this.set('currentModel.newRoom.errors', []);

      room.save().then(() => { // Successful creation
        // Notification of success!
        this.get('flashMessages').success(`Created room: ${data.name}`);
        this.set('currentModel.newRoom.name', ''); // Clear the input
      }).catch((err) => { // Server-side error message
        // Remove the ember-data record from the Store
        this.store.unloadRecord(room);
        // Pass any error messages (i.e., server-side validation) into the UI
        this.set('currentModel.newRoom.errors', (err.errors || []).mapBy('detail'));
        // Notification of failure!
        this.get('flashMessages').danger(`Problem creating room: ${data.name}`);
      });
    },

    /* Delete a room */
    removeRoom(room) {
      if (window.confirm('Are you sure?')) { // Old school confirmation prompt
        room.destroyRecord().then(() => { // Successful destruction
          this.get('flashMessages').success(`Deleted room: ${room.get('name')}`);
        }).catch(() => { // Unsuccessful destruction
          this.get('flashMessages').danger(`Problem deleting room: ${room.get('name')}`);
        });
      }
    }
  },

  model() {
    return RSVP.hash({
      // Live array of all rooms
      rooms: this.store.findAll('room'),
      // Object to use for creating a new room
      newRoom: {name: '', errors: []}
    });
  }
});
