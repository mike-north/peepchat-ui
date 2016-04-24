import Ember from 'ember';

const { inject, computed, Component } = Ember;

export default Component.extend({
  classNames: ['toasts'],
  // inject the flashMessages service
  flashMessages: inject.service(),

  // ember-cli-flash expects flash messages to be ordered
  // from top to bottom. Since toasts come up from the bottom,
  // we need to reverse the order so that the newest message
  // is on the bottom
  reversedFlashQueue: computed('flashMessages.arrangedQueue.[]', function() {
    return this.get('flashMessages.arrangedQueue').reverse();
  })
});
