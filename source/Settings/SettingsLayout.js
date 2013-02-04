enyo.kind({
    name: "SettingsLayout",
    kind: "enyo.FittableRows",
    events: {
        "onShowDocumentPanel": ""
    },
    components: [
        { kind: "onyx.Toolbar", content: "Settings" },
        { content: "TODO", fit: true },
        {
            kind: "onyx.Toolbar",
            components: [
                { kind: "onyx.Button", content: "Save", ontap: "saveTap" }
            ]
        }
    ],
    saveTap: function (inSender, inEvent) {
        this.doShowDocumentPanel();
    }
});
