enyo.kind({
    name: "RevisionListLayout",
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
});

