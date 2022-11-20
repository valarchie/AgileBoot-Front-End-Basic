import hasRole from './permission/hasRole';
import hasPermission from './permission/hasPermission';
import copyText from './common/copyText';

export default function directive(app) {
  app.directive('hasRole', hasRole);
  app.directive('hasPermission', hasPermission);
  app.directive('copyText', copyText);
}
