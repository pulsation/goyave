enyo.kind({
    kind: "enyo.FittableRows",
    name: "DocumentListLayout",
    events: {
        "onShowSettingsPanel": ""
    },
    components: [
        {kind: "onyx.Toolbar", layoutKind: "FittableColumnsLayout", components: [
            {content: "Documents", fit: true},
            {kind: "onyx.Button", content: "Settings", ontap: "settingsTap"}
        ]},
        {name: "documentList", kind: "enyo.List", fit: true},
        {kind: "onyx.Toolbar", components: [
            {kind: "onyx.Button", content: "Sync", ontap: "SyncDocumentsTap"},
            {kind: "onyx.Button", content: "Add", ontap: "addDocumentTap"},
            {kind: "onyx.Button", content: "Delete", ontap: "deleteDocumentTap"}
        ]}
    ],

    settingsTap: function (/* inSender, inEvent */) {
        this.doShowSettingsPanel();
    },

    addTap: function () {
        console.log("TODO");
    }
});
