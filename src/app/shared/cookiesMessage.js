import angular from "angular";
import { StorageManager } from "transversal/services/StorageManager/StorageManager";

import { cookiesMessageController } from "./cookiesMessageCode";
import { CookiesConfigModal } from "specific/services/CookiesConfigModal/cookiesConfigModal";

const moduleName = "cookiesMessage";
const moduleData = { name: moduleName };
export { moduleData as cookiesMessage };

/**
 * @ngdoc directive
 * @module common
 * @name common.directive:cookiesMessage
 * @restrict A
 * @element div
 * @requires StorageManager
 *
 * @description
 * Directive used to show and hide cookies message div. This directive will check into
 * localstorage, and if item 'cookies-accepted' exists, then directive will do nothing. If
 * this item doesn't exists, then directive will take his element and prepend to body, and
 * after this will show it.
 * Directive will set handlers to close message when close button is pressed. When message
 * is closed, directive will store 'cookies-accepted' into localstorage.
 * Directive will also set events on scroll or when clicking a, button or input tags. When this
 * events occurs, we will store 'cookies-accepted' into localstorage but message will not close.
 *
 * @usage
 *  <div id="cookies-message" class="hidden" cookies-message>
 *      ...
 *  </div>
 *
 * @example
    Commong soon...
 */
angular.module("common").directive(moduleName, [
  StorageManager.name,
  "$window",
  "$translate",
  CookiesConfigModal.name,
  function(StorageManager, $window, $translate, CookiesConfigModal) {
    return {
      restrict: "A",
      link: (scope, $element, attr) => {
        new cookiesMessageController(
          scope,
          $element,
          attr,
          StorageManager,
          $translate,
          CookiesConfigModal
        );
      }
    };
  }
]);
