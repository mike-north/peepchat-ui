import Ember from 'ember';

const { computed: { readOnly }, getWithDefault, run: { next, cancel }, Component } = Ember;

export default Component.extend({
  classNames: ['material-toast', 'toast'],
  classNameBindings: ['active', 'exiting'],
  active: false,
  exiting: readOnly('content.exiting'),
  _destroyFlashMessage() {
    const flash = getWithDefault(this, 'content', false);
    if (flash) {
      flash.destroyMessage();
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this._applyActiveClass = next(() => {
      this.set('active', true);
    });
  },

  willDestroyElement() {
    this._super();
    this._destroyFlashMessage();
    if (this._applyActiveClass) {
      cancel(this._applyActiveClass);
    }
  }
});
