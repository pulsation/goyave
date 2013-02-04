enyo.depends(
	"$lib/layout",
	"$lib/onyx",	// To theme Onyx using Theme.less, change this line to $lib/onyx/source,
	"Theme.less",	// uncomment this line, and follow the steps described in Theme.less
    
    // External librairies
    "$lib/pouchdb/pouchdb-nightly.js",
    "$lib/underscore/underscore.js",
    "$lib/underscore/underscore.deferred.js",
    // Main application
	"App.css",
	"App.js",

    // Application components
    "Settings",
    "DocumentPanels",
    "DocumentList",
    "DocumentDetails",
    "RevisionList"
);
