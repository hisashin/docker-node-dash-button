const dash_button = require('node-dash-button');
const execSync = require('child_process').execSync;
const https = require('https');
const http = require('http');
const url = require('url');

dash_button('aa:bb:cc:dd:ee:ff', null, null, 'all').on('detected', function() {
//  https_get('www.google.com', '/foo/bar');	// for example to GET https://www.google.com/foo/bar
//  http_get('www.google.com', '/foo/bar');	// for example to GET http://www.google.com/foo/bar
});

function https_get(host, path) {
  var options = {
    host: host,
    port: 443,
    path: path,
    method: 'GET'
  };
  https.request(options,function(res){
    //console.log(res);
    res.setEncoding('utf8');
    res.on('data',function(data){
      //console.log(data);
    });
  }).end();
}

function http_get(host, path) {
  var options = {
    host: host,
    port: 443,
    path: path,
    method: 'GET'
  };
  https.request(options,function(res){
    //console.log(res);
    res.setEncoding('utf8');
    res.on('data',function(data){
      //console.log(data);
    });
  }).end();
}

