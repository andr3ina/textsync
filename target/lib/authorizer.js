"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULT_PAYLOAD = { grant_type: 'client_credentials' };
var Authorizer = /** @class */ (function () {
    function Authorizer(instance) {
        this.instance = instance;
    }
    Authorizer.prototype.buildServiceClaims = function (documentId, permissions) {
        return { textsync: { documentId: documentId, permissions: permissions } };
    };
    Authorizer.prototype.authorize = function (documentId, permissions, options) {
        var serviceClaims = this.buildServiceClaims(documentId, permissions);
        var authenticateOptions = { serviceClaims: serviceClaims };
        if (options.tokenExpiry) {
            authenticateOptions['tokenExpiry'] = options.tokenExpiry;
        }
        return this.instance.authenticate(DEFAULT_PAYLOAD, authenticateOptions);
    };
    return Authorizer;
}());
exports.default = Authorizer;
