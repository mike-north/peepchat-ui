import Ember from 'ember';

const { inject, RSVP: { hash } } = Ember;

export default Ember.Route.extend({
  flashMessages: inject.service(),
  actions: {
    sendMessage() {
      let msg = this.get('currentModel.newMessage');
      let messageRecord = this.store.createRecord('message', {
        body: msg,
        room: this.get('currentModel.room')
      });
      messageRecord.save().then(() => {
        this.set('currentModel.newMessage', '');
      }).catch(() => {
        this.get('flashMessages').danger('problem posting message');
      });

    }
  },
  model() {
    return hash({
      room: this._super(...arguments),
      newMessage: ''
    });
  }
});
