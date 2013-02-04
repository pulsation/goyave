enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
    handlers: {
        "onSettingsPanel": "toSettingsPanel"
    },
	components: [
        {kind: "Signals", ondeviceready: "deviceready"},
        {
            kind: "enyo.Panels",
            fit: true,
            components: [
                { kind: "DocumentPanels" },
                { kind: "SettingsLayout" }
	        ]
        }
    ],
    toSettingsPanel: function (inSender, inEvent) {
        this.$.panels.next();
    }
});
