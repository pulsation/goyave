enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components: [
        {kind: "Signals", ondeviceready: "deviceready"},
        {
            kind: "enyo.Panels",
            fit: true,
            components: [
                { kind: "DocumentPanels" }
	        ]
        }],
	addDocumentTap: function (inSender, inEvent) {
        console.log("TODO");
	},
	deleteDocumentTap: function (inSender, inEvent) {
        console.log("TODO");
	}
});
