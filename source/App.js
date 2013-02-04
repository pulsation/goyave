enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components: [
        {kind: "Signals", ondeviceready: "deviceready"},
		{
            kind: "enyo.Panels",
            fit: true,
            arrangerKind: "CollapsingArranger",
            components: [
                {
                    kind: "enyo.FittableRows",
                    components: [
                        {kind: "onyx.Toolbar", layoutKind: "FittableColumnsLayout", components: [
                            {content: "Documents", fit: true},
                            {kind: "onyx.Button", content: "Setup", ontap: "setupTap"}
                        ]},
                        {name: "documentList", kind: "enyo.List", fit: true},
                        {kind: "onyx.Toolbar", components: [
                            {kind: "onyx.Button", content: "Sync", ontap: "SyncDocumentsTap"},
                            {kind: "onyx.Button", content: "Add", ontap: "addDocumentTap"},
                            {kind: "onyx.Button", content: "Delete", ontap: "deleteDocumentTap"}
                        ]}
                    ]
                },
                {
                    kind: "enyo.FittableRows",
                    components: [
                        {kind: "onyx.Toolbar", components: [
                            {kind: "onyx.Grabber"},
                            {content: "Revisions"},
                        ]},
                        {name: "revisionList", kind: "enyo.List", fit: true},
                        {
                            kind: "onyx.Toolbar",
                            components: [
                                /*{kind: "onyx.Button", content: "Fetch", ontap: "fetchRevisionsTap"},*/
                            ]
                        }
                    ]
                },
                {
                    kind: "enyo.FittableRows",
                    components: [
                        {kind: "onyx.Toolbar", components: [
                            {kind: "onyx.Grabber"},
                            {content: "Document"}]},
                        {name: "documentDetails", content: "TODO", fit: true},
                        {kind: "onyx.Toolbar", components: [
                            {kind: "onyx.Button", content: "Save", ontap: "saveDocumentTap"},
                            {kind: "onyx.Button", content: "Commit", ontap: "commitDocumentTap"}
                        ]}
                    ]
                }
		    ]
        }
	],
	addDocumentTap: function (inSender, inEvent) {
        console.log("TODO");
	},
	deleteDocumentTap: function (inSender, inEvent) {
        console.log("TODO");
	}
});
