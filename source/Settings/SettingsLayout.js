enyo.kind({
    name: "SettingsLayout",
    kind: "enyo.FittableRows",
    events: {
        "onShowDocumentPanel": ""
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
                            { kind: "onyx.Input", placeholder: "URL" }
                        ]
                    }
                ]
            }
        ]},
        {
            kind: "onyx.Toolbar",
            components: [
                { kind: "onyx.Button", content: "Save", ontap: "saveTap" }
            ],
        },
    ],
    saveTap: function (inSender, inEvent) {
        this.doShowDocumentPanel();
    }
});
