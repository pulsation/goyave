enyo.kind({
    name: "DocumentPanels",
    kind: "enyo.Panels",
    fit: true,
    arrangerKind: "CollapsingArranger",
    components: [
        { kind: "DocumentListLayout" },
        { kind: "RevisionListLayout" },
        { kind: "DocumentDetails" }
    ]
});
