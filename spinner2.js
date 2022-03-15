let symbolsArray = ["\r| ", "\r/ ", "\r- ", "\r\\ ", "\r| ", "\r/", "\r-", "\r\\", "\r| "]
let timer = 0;

for (const char of symbolsArray) {
  setTimeout(() => {
  process.stdout.write(char);  
  }, timer += 200)
}