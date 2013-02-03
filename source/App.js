enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components: [
        {kind: "Signals", ondeviceready: "deviceready"},
        {kind: "onyx.Toolbar", content: "Documents"},
		{kind: "enyo.Panels", fit: true, components: [
            {
                kind: "enyo.FittableRows",
                components: [
			        {name: "documentList", content: "TODO", fit: true},
                    {kind: "onyx.Toolbar", components: [
                        {kind: "onyx.Button", content: "Add", ontap: "addDocumentTap"},
                        {kind: "onyx.Button", content: "Delete", ontap: "deleteDocumentTap"}
                    ]}
                ]
            },
            {
                kind: "enyo.FittableRows",
                components: [
			        {name: "revisionList", content: "TODO", fit: true},
                    {kind: "onyx.Toolbar", components: [
                    ]}
                ]
            }
		]}
	],
	addDocumentTap: function (inSender, inEvent) {
        console.log("TODO");
	},
	deleteDocumentTap: function (inSender, inEvent) {
        console.log("TODO");
	}
});
