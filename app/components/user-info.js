import Ember from 'ember';

const { Component, inject } = Ember;

export default Component.extend({
  tagName: 'b',
  session: inject.service()
});
