/**
 * Utilities for working with query strings
*/
var Query= function () {

    return {
        /**
         * Converts to matrix format
         * @param  {Object} qs Object to convert to query string
         * @return {String}    Matrix-format query parameters
         */
        toMatrixFormat: function(qs) {
            var returnArray = [];
            _.each(qs, function(value, key) {
                returnArray.push(key + '=' + value);
            });

            var mtrx = ';' + returnArray.join(';');
            return mtrx;
        },

        toQueryFormat: function(qs) {
            var returnArray = [];
            _.each(qs, function(value, key) {
                returnArray.push(key + '=' + value);
            });

            var mtrx = returnArray.join('&');
            return mtrx;
        }
    };
}();

if (!window.F) window.F = {};
if (!window.F.Utils) window.F.Utils = {};
F.Utils.Query = Query;