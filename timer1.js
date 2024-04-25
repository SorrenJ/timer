const process = require('process');
let times = process.argv.slice(2);

for (const seconds of times) {
  const interval = Number(seconds); // checks if process.argv is a number

  if (interval > 0) { // checks if process.argv args are a positive integer or 0
    setTimeout(() => {
      process.stdout.write('\x07'); // chime noise
      console.log(interval);
    }, interval * 1000); //  convert secs to milliseconds
  }
}



/*

example usage:

node timer1.js 10 3 5 15 9


This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds

*/