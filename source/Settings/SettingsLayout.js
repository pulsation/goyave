enyo.kind({
    name: "SettingsLayout",
    kind: "enyo.FittableRows",
    components: [
        { kind: "onyx.Toolbar", content: "Settings" },
        { content: "TODO", fit: true },
        {
            kind: "onyx.Toolbar",
            components: [
                { kind: "onyx.Button", content: "Save" }
            ]
        }
    ]
});
