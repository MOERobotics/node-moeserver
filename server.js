var server     = require('node-http-server');
var websock    = require("nodejs-websocket");
var v4l2camera = require("v4l2camera");

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


var server = websock.createServer( function (conn) {
	console.log("New connection")
	conn.on("text", function (str) {
		console.log("Received "+str)
        response = JSON.parse(str)
        switch (response.gripcam) {
            case true:  // settings values for mars mode
            /*
                cam.controlSet(id, value)
                cam.controlSet(id, value)
                cam.controlSet(id, value)
                cam.controlSet(id, value)
                cam.controlSet(id, value)
                cam.controlSet(id, value)
            */
                break
            case false: // settings values for earth mode
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
    }); //</ontext>
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
	})
}).listen(8001)
