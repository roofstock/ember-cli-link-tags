import documentHead from '../../../utils/document-head';
import { module, test } from 'qunit';

module('Unit | Utility | document head');

test('it returns a DOM object', function(assert) {
  let result = documentHead;
  assert.ok(result);
});
