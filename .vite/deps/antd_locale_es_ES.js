import {
  require_interopRequireDefault
} from "./chunk-DTMFDZZF.js";
import {
  __commonJS
} from "./chunk-3EJPJMEH.js";

// node_modules/rc-pagination/lib/locale/es_ES.js
var require_es_ES = __commonJS({
  "node_modules/rc-pagination/lib/locale/es_ES.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var locale = {
      // Options
      items_per_page: "/ página",
      jump_to: "Ir a",
      jump_to_confirm: "confirmar",
      page: "Página",
      // Pagination
      prev_page: "Página anterior",
      next_page: "Página siguiente",
      prev_5: "5 páginas previas",
      next_5: "5 páginas siguientes",
      prev_3: "3 páginas previas",
      next_3: "3 páginas siguientes",
      page_size: "tamaño de página"
    };
    var _default = exports.default = locale;
  }
});

// node_modules/rc-picker/lib/locale/es_ES.js
var require_es_ES2 = __commonJS({
  "node_modules/rc-picker/lib/locale/es_ES.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var locale = {
      locale: "es_ES",
      today: "Hoy",
      now: "Ahora",
      backToToday: "Volver a hoy",
      ok: "Aceptar",
      clear: "Limpiar",
      month: "Mes",
      year: "Año",
      timeSelect: "Seleccionar hora",
      dateSelect: "Seleccionar fecha",
      monthSelect: "Elegir un mes",
      yearSelect: "Elegir un año",
      decadeSelect: "Elegir una década",
      yearFormat: "YYYY",
      dateFormat: "D/M/YYYY",
      dayFormat: "D",
      dateTimeFormat: "D/M/YYYY HH:mm:ss",
      monthBeforeYear: true,
      previousMonth: "Mes anterior (PageUp)",
      nextMonth: "Mes siguiente (PageDown)",
      previousYear: "Año anterior (Control + left)",
      nextYear: "Año siguiente (Control + right)",
      previousDecade: "Década anterior",
      nextDecade: "Década siguiente",
      previousCentury: "Siglo anterior",
      nextCentury: "Siglo siguiente"
    };
    var _default = exports.default = locale;
  }
});

// node_modules/antd/lib/time-picker/locale/es_ES.js
var require_es_ES3 = __commonJS({
  "node_modules/antd/lib/time-picker/locale/es_ES.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var locale = {
      placeholder: "Seleccionar hora"
    };
    var _default = exports.default = locale;
  }
});

// node_modules/antd/lib/date-picker/locale/es_ES.js
var require_es_ES4 = __commonJS({
  "node_modules/antd/lib/date-picker/locale/es_ES.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _es_ES = _interopRequireDefault(require_es_ES2());
    var _es_ES2 = _interopRequireDefault(require_es_ES3());
    var locale = {
      lang: Object.assign({
        placeholder: "Seleccionar fecha",
        rangePlaceholder: ["Fecha inicial", "Fecha final"]
      }, _es_ES.default),
      timePickerLocale: Object.assign({}, _es_ES2.default)
    };
    var _default = exports.default = locale;
  }
});

// node_modules/antd/lib/calendar/locale/es_ES.js
var require_es_ES5 = __commonJS({
  "node_modules/antd/lib/calendar/locale/es_ES.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _es_ES = _interopRequireDefault(require_es_ES4());
    var _default = exports.default = _es_ES.default;
  }
});

// node_modules/antd/lib/locale/es_ES.js
var require_es_ES6 = __commonJS({
  "node_modules/antd/lib/locale/es_ES.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _es_ES = _interopRequireDefault(require_es_ES());
    var _es_ES2 = _interopRequireDefault(require_es_ES5());
    var _es_ES3 = _interopRequireDefault(require_es_ES4());
    var _es_ES4 = _interopRequireDefault(require_es_ES3());
    var typeTemplate = "${label} no es un ${type} válido";
    var localeValues = {
      locale: "es",
      Pagination: _es_ES.default,
      DatePicker: _es_ES3.default,
      TimePicker: _es_ES4.default,
      Calendar: _es_ES2.default,
      global: {
        placeholder: "Seleccione"
      },
      Table: {
        filterTitle: "Filtrar menú",
        filterConfirm: "Aceptar",
        filterReset: "Reiniciar",
        filterEmptyText: "Sin filtros",
        filterCheckall: "Seleccionar todo",
        filterSearchPlaceholder: "Buscar en filtros",
        emptyText: "Sin datos",
        selectAll: "Seleccionar todo",
        selectInvert: "Invertir selección",
        selectNone: "Vacíe todo",
        selectionAll: "Seleccionar todos los datos",
        sortTitle: "Ordenar",
        expand: "Expandir fila",
        collapse: "Colapsar fila",
        triggerDesc: "Click para ordenar en orden descendente",
        triggerAsc: "Click para ordenar en orden ascendente",
        cancelSort: "Click para cancelar ordenamiento"
      },
      Modal: {
        okText: "Aceptar",
        cancelText: "Cancelar",
        justOkText: "Aceptar"
      },
      Popconfirm: {
        okText: "Aceptar",
        cancelText: "Cancelar"
      },
      Transfer: {
        titles: ["", ""],
        searchPlaceholder: "Buscar aquí",
        itemUnit: "elemento",
        itemsUnit: "elementos",
        remove: "Eliminar",
        selectCurrent: "Seleccionar página actual",
        removeCurrent: "Remover página actual",
        selectAll: "Seleccionar todos los datos",
        removeAll: "Eliminar todos los datos",
        selectInvert: "Invertir página actual"
      },
      Upload: {
        uploading: "Subiendo...",
        removeFile: "Eliminar archivo",
        uploadError: "Error al subir el archivo",
        previewFile: "Vista previa",
        downloadFile: "Descargar archivo"
      },
      Empty: {
        description: "No hay datos"
      },
      Icon: {
        icon: "ícono"
      },
      Text: {
        edit: "Editar",
        copy: "Copiar",
        copied: "Copiado",
        expand: "Expandir"
      },
      Form: {
        optional: "(opcional)",
        defaultValidateMessages: {
          default: "Error de validación del campo ${label}",
          required: "Por favor ingresar ${label}",
          enum: "${label} debe ser uno de [${enum}]",
          whitespace: "${label} no puede ser un carácter en blanco",
          date: {
            format: "El formato de fecha de ${label} es inválido",
            parse: "${label} no se puede convertir a una fecha",
            invalid: "${label} es una fecha inválida"
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
            len: "${label} debe tener ${len} caracteres",
            min: "${label} debe tener al menos ${min} caracteres",
            max: "${label} debe tener hasta ${max} caracteres",
            range: "${label} debe tener entre ${min}-${max} caracteres"
          },
          number: {
            len: "${label} debe ser igual a ${len}",
            min: "${label} valor mínimo es ${min}",
            max: "${label} valor máximo es ${max}",
            range: "${label} debe estar entre ${min}-${max}"
          },
          array: {
            len: "Debe ser ${len} ${label}",
            min: "Al menos ${min} ${label}",
            max: "A lo mucho ${max} ${label}",
            range: "El monto de ${label} debe estar entre ${min}-${max}"
          },
          pattern: {
            mismatch: "${label} no coincide con el patrón ${pattern}"
          }
        }
      },
      Image: {
        preview: "Previsualización"
      }
    };
    var _default = exports.default = localeValues;
  }
});

// node_modules/antd/locale/es_ES.js
var require_es_ES7 = __commonJS({
  "node_modules/antd/locale/es_ES.js"(exports, module) {
    module.exports = require_es_ES6();
  }
});
export default require_es_ES7();
//# sourceMappingURL=antd_locale_es_ES.js.map
