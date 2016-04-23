import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('register-card', 'Integration | Component | register card', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{register-card}}`);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''),
    'RegisterwithPeepchatUsernamePasswordConfirmPassword');
});
