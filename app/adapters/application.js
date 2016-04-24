import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {

  host: config.DS.host,
  namespace: config.DS.namespace,
  authorizer: 'authorizer:oauth2',

  urlForCreateRecord(modelName/*, snapshot*/) {
    switch(modelName) {
      case 'user':
      case 'users':
        return this._super.apply(this, arguments).replace('users', 'register');
      default:
        return this._super(...arguments);
    }
  }
});
