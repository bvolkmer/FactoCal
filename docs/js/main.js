requirejs.config({
    paths: {
        kotlin: 'lib/kotlin',
        "kotlinx-html-js": 'lib/kotlinx-html-js',
        factocal: 'lib/factocal'
    }
});
var factoCal;
var gui;

requirejs(["factocal"], function (factocal) {
    factoCal = new factocal.FactoCal();
    gui = new factocal.Gui(factoCal);
    gui.initialize();
});

document.getElementById("configOutput").value = "";

function loadConfig() {
    var file = document.getElementById("configInput").files[0]; // FileList object
    var reader = new FileReader();

    // files is a FileList of File objects. List some properties.
    reader.onload = (function () {
        return function (e) {
            var value = e.target.result;
            console.log(value);
            gui.loadConfig(value);
        };
    })(file);

    // Read in the image file as a data URL.
    reader.readAsText(file);
}