var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  path = require('path'),
  io = require('socket.io').listen(server),
  omx = require('omxcontrol'),
  spawn = require('child_process').spawn,
  exec = require('child_process').exec;

app.set('port', process.env.TEST_PORT || 4444);
//app.use(omx());


function run_shell(cmd, args, cb, end) {
  var spawn = require('child_process').spawn,
    child_omx = spawn(cmd, args);
  /*		me = this;
      child.stdout.on('data',function(buffer){
      console.log(buffer.toString());
      //cb(me,buffer);
      });*/
  child_omx.stdout.on('data', test);
  child_omx.stdout.on('end', end);
}
function test() {
  console.log('test');
}

io.sockets.on('connection', (socket) => {
  socket.on('video', (id) => {
    url = 'https://www.youtube.com/watch?v=' + id;
    const child = new spawn('youtube-dl', ['-g', '-f', '22/18', url]);
    const omx_url = '';

    child.stdout.on('data', (data) => {
      console.log(data.toString());
      var spawn = require('child_process').spawn;
      var exec = require('child_process').exec;
      omxurl = data.toString().trim();
      //omx.start(omx_url);
    });
    child.stdout.on('end', () => {
      var child1 = new spawn('omxplayer', ['-o', 'local', omxurl]);
      child1.stdout.on('data', (buff) => { console.log('omx', buff.toString()) });
    });
    console.log(id);
  })
  socket.on('key', (key) => {
    key = key.toString().trim();
    console.log('log', key);
    var c = new exec(key);
  })
})

server.listen(app.get('port'), () => {
  console.log('Picast running on port ' + app.get('port'));
})