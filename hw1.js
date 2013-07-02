var fs = require('fs');
var outfile = "hw1.txt";

var out  = "[EN] A startup is a business built to grow rapidly.\n";
    out += "[ES] Una startup es un negocio que crece rapidamente\n";

fs.writeFileSync(outfile, out);  

console.log("Script: " + __filename + "\nWrote: \n" + out + "To: " + outfile);