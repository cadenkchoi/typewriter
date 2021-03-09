const sentence = "hello there from lighthouse labs \n";

// the first letter should appear at 0
let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    // instead of placing a number, we want the time to be 0 in order to increment by 50ms(next line)
  }, time);
  time +=50
}