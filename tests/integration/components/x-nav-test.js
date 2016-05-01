import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-nav', 'Integration | Component | x nav', {
  integration: true
});

test('it renders', function(assert) {

  // Template block usage:
  this.render(hbs`
    {{#x-nav}}
      template block text
    {{/x-nav}}
  `);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), 'menutemplateblocktext');
});
