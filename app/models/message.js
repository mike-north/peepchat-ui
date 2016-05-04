import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  body: attr('string'),
  owner: belongsTo('user'),
  room: belongsTo('room'),
  insertedAt: attr('date'),
  updatedAt: attr('date')
});
