goyave = window.goyave || {};

goyave.Settings = (function () {
    
    var _defaultSettings = {
            _id: "settings",
            couchDbUrl : "http://localhost/pouch_test"
        },

        _oldSettings = {},

        _modified = false,

        _settings = null,

        _save = function (dfd, db) {
            db.put(_settings, function (err, response) {
                if (err !== null) {
                    dfd.reject(err);
                }
                _settings._rev = response.rev;
                return dfd.resolve(response);
            });
        },

        _fetch = function (dfd, db) {
            db.get("settings", function (err, response) {
                if (err !== null) {
                    if (err.reason === "missing") {
                        _settings = _defaultSettings;
                        _save(dfd, db);
                        return dfd.resolve(_settings);
                    }
                    dfd.reject(err);
                }
                _settings = response;
                return dfd.resolve(_that);
            });
        },

        _that = {
            spawnDB : function () {
                var dfd = _.Deferred();

                Pouch('websql://settings', function (err, db) {
                    return dfd.resolve(db);
                });
                return dfd.promise();
            },

            fetch : function () {
                // TODO: Should be refactored to get all values.
                var dfd = _.Deferred();

                this.spawnDB().then(function (db) {
                    return _fetch(dfd, db);
                });
                return dfd.promise();
            },

            save: function () {
                var dfd = _.Deferred();
                
                if (_modified) {
                    this.spawnDB().then(function (db) {
                        return _save(dfd, db);
                    });
                } else {
                    return dfd.resolve(null);
                }
                return dfd.promise();
            },

            get couchDbUrl() {
                return _settings.couchDbUrl;
            },

            set couchDbUrl(url) {
                if (url !== _settings.couchDbUrl) {
                    _settings.couchDbUrl = url;
                    _modified            = true;
                }
            }

        };

    return _that;
}());


