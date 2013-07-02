var http = require('http');
var fs = require('fs');
var outfile = "prime.txt";

var out = "2";
var n = 3;
var i = 2;

while(n < 100) {
	for(i=2; i<n; i++) {
	if(n%i==0)
		break;
		}
	if(i==n) {
		out+=","+n.toString();
	}
	n++;
}
fs.writeFileSync(outfile, out); 
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

http.createServer(function (req, res) {	

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World\n');
  console.log(out);
//  console.log('Server running at http://127.0.0.1:1337/');

}).listen(1337, '127.0.0.1');