import {
  require_interopRequireDefault
} from "./chunk-DTMFDZZF.js";
import {
  __commonJS
} from "./chunk-3EJPJMEH.js";

// node_modules/rc-pagination/lib/locale/en_US.js
var require_en_US = __commonJS({
  "node_modules/rc-pagination/lib/locale/en_US.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var locale = {
      // Options
      items_per_page: "/ page",
      jump_to: "Go to",
      jump_to_confirm: "confirm",
      page: "Page",
      // Pagination
      prev_page: "Previous Page",
      next_page: "Next Page",
      prev_5: "Previous 5 Pages",
      next_5: "Next 5 Pages",
      prev_3: "Previous 3 Pages",
      next_3: "Next 3 Pages",
      page_size: "Page Size"
    };
    var _default = exports.default = locale;
  }
});

// node_modules/rc-picker/lib/locale/en_US.js
var require_en_US2 = __commonJS({
  "node_modules/rc-picker/lib/locale/en_US.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var locale = {
      locale: "en_US",
      today: "Today",
      now: "Now",
      backToToday: "Back to today",
      ok: "OK",
      clear: "Clear",
      month: "Month",
      year: "Year",
      timeSelect: "select time",
      dateSelect: "select date",
      weekSelect: "Choose a week",
      monthSelect: "Choose a month",
      yearSelect: "Choose a year",
      decadeSelect: "Choose a decade",
      yearFormat: "YYYY",
      dateFormat: "M/D/YYYY",
      dayFormat: "D",
      dateTimeFormat: "M/D/YYYY HH:mm:ss",
      monthBeforeYear: true,
      previousMonth: "Previous month (PageUp)",
      nextMonth: "Next month (PageDown)",
      previousYear: "Last year (Control + left)",
      nextYear: "Next year (Control + right)",
      previousDecade: "Last decade",
      nextDecade: "Next decade",
      previousCentury: "Last century",
      nextCentury: "Next century"
    };
    var _default = exports.default = locale;
  }
});

// node_modules/antd/lib/time-picker/locale/en_US.js
var require_en_US3 = __commonJS({
  "node_modules/antd/lib/time-picker/locale/en_US.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var locale = {
      placeholder: "Select time",
      rangePlaceholder: ["Start time", "End time"]
    };
    var _default = exports.default = locale;
  }
});

// node_modules/antd/lib/date-picker/locale/en_US.js
var require_en_US4 = __commonJS({
  "node_modules/antd/lib/date-picker/locale/en_US.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _en_US = _interopRequireDefault(require_en_US2());
    var _en_US2 = _interopRequireDefault(require_en_US3());
    var locale = {
      lang: Object.assign({
        placeholder: "Select date",
        yearPlaceholder: "Select year",
        quarterPlaceholder: "Select quarter",
        monthPlaceholder: "Select month",
        weekPlaceholder: "Select week",
        rangePlaceholder: ["Start date", "End date"],
        rangeYearPlaceholder: ["Start year", "End year"],
        rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
        rangeMonthPlaceholder: ["Start month", "End month"],
        rangeWeekPlaceholder: ["Start week", "End week"]
      }, _en_US.default),
      timePickerLocale: Object.assign({}, _en_US2.default)
    };
    var _default = exports.default = locale;
  }
});

// node_modules/antd/lib/calendar/locale/en_US.js
var require_en_US5 = __commonJS({
  "node_modules/antd/lib/calendar/locale/en_US.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _en_US = _interopRequireDefault(require_en_US4());
    var _default = exports.default = _en_US.default;
  }
});

// node_modules/antd/lib/locale/en_US.js
var require_en_US6 = __commonJS({
  "node_modules/antd/lib/locale/en_US.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _en_US = _interopRequireDefault(require_en_US());
    var _en_US2 = _interopRequireDefault(require_en_US5());
    var _en_US3 = _interopRequireDefault(require_en_US4());
    var _en_US4 = _interopRequireDefault(require_en_US3());
    var typeTemplate = "${label} is not a valid ${type}";
    var localeValues = {
      locale: "en",
      Pagination: _en_US.default,
      DatePicker: _en_US3.default,
      TimePicker: _en_US4.default,
      Calendar: _en_US2.default,
      global: {
        placeholder: "Please select"
      },
      Table: {
        filterTitle: "Filter menu",
        filterConfirm: "OK",
        filterReset: "Reset",
        filterEmptyText: "No filters",
        filterCheckall: "Select all items",
        filterSearchPlaceholder: "Search in filters",
        emptyText: "No data",
        selectAll: "Select current page",
        selectInvert: "Invert current page",
        selectNone: "Clear all data",
        selectionAll: "Select all data",
        sortTitle: "Sort",
        expand: "Expand row",
        collapse: "Collapse row",
        triggerDesc: "Click to sort descending",
        triggerAsc: "Click to sort ascending",
        cancelSort: "Click to cancel sorting"
      },
      Tour: {
        Next: "Next",
        Previous: "Previous",
        Finish: "Finish"
      },
      Modal: {
        okText: "OK",
        cancelText: "Cancel",
        justOkText: "OK"
      },
      Popconfirm: {
        okText: "OK",
        cancelText: "Cancel"
      },
      Transfer: {
        titles: ["", ""],
        searchPlaceholder: "Search here",
        itemUnit: "item",
        itemsUnit: "items",
        remove: "Remove",
        selectCurrent: "Select current page",
        removeCurrent: "Remove current page",
        selectAll: "Select all data",
        removeAll: "Remove all data",
        selectInvert: "Invert current page"
      },
      Upload: {
        uploading: "Uploading...",
        removeFile: "Remove file",
        uploadError: "Upload error",
        previewFile: "Preview file",
        downloadFile: "Download file"
      },
      Empty: {
        description: "No data"
      },
      Icon: {
        icon: "icon"
      },
      Text: {
        edit: "Edit",
        copy: "Copy",
        copied: "Copied",
        expand: "Expand"
      },
      Form: {
        optional: "(optional)",
        defaultValidateMessages: {
          default: "Field validation error for ${label}",
          required: "Please enter ${label}",
          enum: "${label} must be one of [${enum}]",
          whitespace: "${label} cannot be a blank character",
          date: {
            format: "${label} date format is invalid",
            parse: "${label} cannot be converted to a date",
            invalid: "${label} is an invalid date"
          },
          types: {
            string: typeTemplate,
            method: typeTemplate,
            array: typeTemplate,
            object: typeTemplate,
            number: typeTemplate,
            date: typeTemplate,
            boolean: typeTemplate,
            integer: typeTemplate,
            float: typeTemplate,
            regexp: typeTemplate,
            email: typeTemplate,
            url: typeTemplate,
            hex: typeTemplate
          },
          string: {
            len: "${label} must be ${len} characters",
            min: "${label} must be at least ${min} characters",
            max: "${label} must be up to ${max} characters",
            range: "${label} must be between ${min}-${max} characters"
          },
          number: {
            len: "${label} must be equal to ${len}",
            min: "${label} must be minimum ${min}",
            max: "${label} must be maximum ${max}",
            range: "${label} must be between ${min}-${max}"
          },
          array: {
            len: "Must be ${len} ${label}",
            min: "At least ${min} ${label}",
            max: "At most ${max} ${label}",
            range: "The amount of ${label} must be between ${min}-${max}"
          },
          pattern: {
            mismatch: "${label} does not match the pattern ${pattern}"
          }
        }
      },
      Image: {
        preview: "Preview"
      },
      QRCode: {
        expired: "QR code expired",
        refresh: "Refresh",
        scanned: "Scanned"
      },
      ColorPicker: {
        presetEmpty: "Empty"
      }
    };
    var _default = exports.default = localeValues;
  }
});

// node_modules/antd/locale/en_US.js
var require_en_US7 = __commonJS({
  "node_modules/antd/locale/en_US.js"(exports, module) {
    module.exports = require_en_US6();
  }
});
export default require_en_US7();
//# sourceMappingURL=antd_locale_en_US.js.map
