var server     = require('node-http-server');
var v4l2camera = require("v4l2camera");
var dispatcher = require('httpdispatcher');

var response
//var cam = new v4l2camera.Camera("/dev/video0"); //Should we try to find it? What if it's on /dev/video1? What if we have multiple cameras?

// camera memes

//if (cam.configGet().formatName !== "MJPG") {
    console.log("NOTICE: MJPG camera required");
//    process.exit(1);
//}
//cam.start();

// end camera memes

server.deploy({
    port : 8081,
    root : 'imports/'
});


dispatcher.setStatic('imports');


dispatcher.onGet("/mars", function(req, res) {
  switcher("mars");

});

dispatcher.onGet("/earth", function(req, res) {
  switcher("earth")

});

    function switcher(mode) {
        switch (mode) {
            case "mars":  // settings values for mars mode
                console.log("There is so much sand here");
                /*
                cam.controlSet(id, value)
                cam.controlSet(id, value)
                cam.controlSet(id, value)
                cam.controlSet(id, value)
                cam.controlSet(id, value)
                cam.controlSet(id, value)
                */
                break;
            case "earth": // settings values for earth mode
                console.log("We are back on earth");
                /*
                cam.controlSet(id, value)
                cam.controlSet(id, value)
                cam.controlSet(id, value)
                cam.controlSet(id, value)
                cam.controlSet(id, value)
                cam.controlSet(id, value)
                */
                break;
            default:
                console.log("idk wut u say");
                break;
        }
}
