import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['navbar-fixed', 'x-nav'],
  didInsertElement() {
    this._super(...arguments);
    this.$('a.button-collapse').attr('data-activates', this.get('_sideNavId'));
    this.$(".button-collapse").sideNav({
      closeOnClick: true
    });
    this.$(".dropdown-button").dropdown();
  },
  _setupChildComponent(childComponent) {
    if (childComponent.classNames.includes('side-nav')) {
      this.set('_sideNavId', childComponent.elementId);
    }
  }
});
