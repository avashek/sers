var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	path = require('path'),
	io = require('socket.io').listen(server),
	omx = require('omxcontrol'),
	spawn = require('child_process').spawn;

app.set('port',process.env.TEST_PORT || 4444);
//app.use(omx());


function run_shell(cmd,args,cb,end){
	var spawn = require('child_process').spawn,
		child = spawn(cmd,args),
		me = this;
		child.stdout.on('data',function(buffer){cb(me,buffer)});
		child.stdout.on('end',end);
}

io.sockets.on('connection',(socket) => {
	socket.on('id',(id)=>{
		//url = 'http://www.youtube.com/watch?v='+id;
		//const child = new spawn('youtube-dl',['-g','-f','22/18',data]);
		const child = new spawn('youtube-dl',['-g','-f','22/18',id]);
		child.stdout.on('data',(data) => {console.log(data.toString('utf8'))});
		//var runShell = new run_shell('youtube-dl',['-g','-f','22/18',data]);
		console.log(id);	
	})
	
})

server.listen(app.get('port'),() => {
	console.log('Picast running on port '+app.get('port'));
})