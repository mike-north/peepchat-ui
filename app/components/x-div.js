import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    if (this.get('_parentComponent') &&
        this.get('_parentComponent')._setupChildComponent) {
      this.get('_parentComponent')._setupChildComponent(this);
    }
  }
});
