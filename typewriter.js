const sentence = "ground control to major tom\n";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 250);
}

