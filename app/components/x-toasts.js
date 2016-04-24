import Ember from 'ember';

const { inject, computed, Component } = Ember;

export default Component.extend({
  flashMessages: inject.service(),
  reversedFlashQueue: computed('flashMessages.arrangedQueue.[]', function() {
    return this.get('flashMessages.arrangedQueue').reverse();
  })
});
