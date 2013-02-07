enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
    handlers: {
        "onShowSettingsPanel": "toSettingsPanel",
        "onShowDocumentPanel": "toDocumentPanel"
    },
	components: [
        {kind: "Signals", ondeviceready: "deviceready"},
        {
            kind: "enyo.Panels",
            fit: true,
            components: [
                { kind: "DocumentPanels" },
                { kind: "SettingsLayout" }
            ],
            indexes: {
                DOCUMENTS: 0,
                SETTINGS: 1
            }
        }
    ],
    toSettingsPanel: function (inSender, inEvent) {
        this.$.panels.setIndex(this.$.panels.indexes.SETTINGS);
    },
    toDocumentPanel: function (inSender, inEvent) {
        this.$.panels.setIndex(this.$.panels.indexes.DOCUMENTS);
    }
});
