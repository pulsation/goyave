goyave = window.goyave || {};

goyave.Settings = (function () {
    var _that = {
        spawnDB : function () {
            var dfd = _.Deferred();

            Pouch('websql://settings', function (err, db) {
                return dfd.resolve(db);
            });
            return dfd.promise();
        },
        fetchCouchDBUrl : function () {
            // TODO: Should be refactored to get all values.
            var dfd = _.Deferred();

            this.spawnDB().then(function (that) {
                that.get("couchDBUrl", function (err, response) {
                    if (typeof err !== "undefined") {
                        console.log("DEBUG Error from database:");
                        console.log(err);
                        dfd.reject(err);
                    }
                    return dfd.resolve(response);
                });
            });

            return dfd.promise();
        }
    };

    return _that;
}());


