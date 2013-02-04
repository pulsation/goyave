enyo.kind({
    name: "DocumentDetails",
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
});
