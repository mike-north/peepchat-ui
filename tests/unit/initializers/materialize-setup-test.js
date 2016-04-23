import Ember from 'ember';
import MaterializeSetupInitializer from 'peepchat/initializers/materialize-setup';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | materialize setup', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  MaterializeSetupInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
