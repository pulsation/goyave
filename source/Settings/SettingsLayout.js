enyo.kind({
    name: "SettingsLayout",
    kind: "enyo.FittableRows",
    events: {
        "onShowDocumentPanel": ""
    },

    published: {
        settings: null
    },

    components: [
        { kind: "onyx.Toolbar", content: "Settings" },
        { kind: "enyo.Scroller", fit: true, components: [
            {
                kind: "onyx.Groupbox",
                components: [
    
                    { kind: "onyx.GroupboxHeader", content: "CouchDB database URL" },
                    {
                        kind: "onyx.InputDecorator",
                        components: [
                            { kind: "onyx.Input", placeholder: "URL", name: "couchDbUrl" }
                        ]
                    }
                ]
            }
        ]},
        {
            kind: "onyx.Toolbar",
            components: [
                { kind: "onyx.Button", content: "Save", ontap: "saveTap" }
            ]
        }
    ],

    settingsChanged: function (/* inOldValue */) {
        this.$.couchDbUrl.setValue(this.settings.couchDbUrl);
    },

    saveTap: function (/* inSender, inEvent */) {

        this.doShowDocumentPanel();
    },
    create: function () {
        var that = this;

        this.inherited(arguments);

        // Fill form content

        // TODO: This is only a test.
        goyave.Settings.fetch().then(function (settings) {
            that.setSettings(settings);

        }).fail(function (err) {
            console.log("FIXME");
            console.log(err);
        });
    }
});
