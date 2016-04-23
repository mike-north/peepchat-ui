import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-card', 'Integration | Component | login card', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{login-card}}`);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''),
    'LogintoPeepchatUsernamePassword');
});
