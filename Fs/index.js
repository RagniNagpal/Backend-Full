const fs=require("fs");

// console.log(__dirname + "/abc.txt")
// console.log(__dirname + "abc.txt")

/*
--------------------------------------------------
WRITE FILE
--------------------------------------------------
*/

// ✅ Sync (no callback)
const res = fs.writeFileSync(__dirname + "/abc.txt", "hello world");

// ✅ Async (with callback)
fs.writeFile(`${__dirname}/abc.txt`, "hello jiiii kaise hooo", function (err) {
  if (err) throw err;
  console.log("The file has been saved!");
});


//read file

// let data=fs.readFileSync(__dirname + "/abc.txt")

// console.log("1");
// const data="a".repeat(500*1024 *1024);
// fs.writeFile("abc.txt",data,(err)=>{
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("mamla done hai");
//   }
// })

// console.log("1")
// let data=fs.readFileSync("abc.txt",{encoding:"utf-8"})
// console.log(data);
// console.log(2)



/*
--------------------------------------------------
READ FILE
--------------------------------------------------
*/

// ✅ Sync Read
console.log("1");
let data = fs.readFileSync("abc.txt", { encoding: "utf-8" });
console.log(data);
console.log("2");

// ✅ Async Read
console.log("1");
fs.readFile("abc.txt", "utf-8", (err, data) => {
  if (err) throw err;
  else {
    console.log(data);
  }
});
console.log("2");



/*
--------------------------------------------------
DELETE FILE
--------------------------------------------------
*/

// ✅ Delete a file
fs.unlink("hello.js", (err) => {
  if (err) throw err;
  console.log("File deleted!");
});


/*
--------------------------------------------------
APPEND FILE
--------------------------------------------------
*/

// ✅ Append content to file
fs.appendFile("abc.txt", "hellllllllllllllllllllll", (err) => {
  if (err) throw err;
  else {
    console.log("Content appended successfully");
  }
});


/*
--------------------------------------------------
COPY FILE
--------------------------------------------------
*/

// ✅ Copy file from abc.txt → xyz.txt
fs.copyFile("abc.txt", "xyz.txt", (err) => {
  if (err) throw err;
  console.log("File copied!");
});


/*
--------------------------------------------------
MAKE DIRECTORY
--------------------------------------------------
*/

// ✅ Create directory (recursive true = nested folders allowed)
fs.mkdir("hello/anotherFolder", { recursive: true }, (err) => {
  if (err) throw err;
  console.log("Directory created!");
});


/*
--------------------------------------------------
REMOVE DIRECTORY
--------------------------------------------------
*/

// ✅ Remove empty directory
fs.rmdir("hello/anotherFolder", (err) => {
  if (err) throw err;
  console.log("Directory removed!");
});


/*
--------------------------------------------------
READ DIRECTORY
--------------------------------------------------
*/

// ✅ Read all files inside directory
fs.readdir(__dirname, (err, files) => {
  if (err) throw err;
  console.log("Files inside current directory:", files);
});


// 5️⃣ Rename File
fs.rename("xyz.txt", "xyz-renamed.txt", (err) => {
  if (err) throw err;
  console.log("File renamed successfully");
});


console.log(__dirname)
console.log(__dirname.replace("Fs","fs"))

fs.readdir(__dirname + "/ffg", {encoding:"utf-8",recursive:true},(err, files) => {
  if (err) throw err;
  console.log("Files inside current directory:", file);
});


const rexs=fs.readdir("ffg",()=>{
  setTimeout(()=>{
    console.log(file)
  },1000);
  
})
console.log(rezs)


fs.readdirSync


// ============================
// OS MODULE EXAMPLES
// ============================

console.log("----- OS MODULE EXAMPLES -----");

// System architecture
console.log("Architecture:", os.arch()); // x64, arm64, etc.

// Number of CPU cores
console.log("CPU cores:", os.cpus().length);




// 📒 Node.js FS & OS Module – Theory Notes
// 1️⃣ FS Module (File System)
// 1.1 writeFileSync

// Purpose: Synchronously write data to a file.

// Syntax: fs.writeFileSync(path, data)

// Characteristics:

// Blocks code execution until file is written.

// No callback allowed.

// Example:

// fs.writeFileSync(__dirname + "/abc.txt", "hello world");

// 1.2 writeFile

// Purpose: Asynchronously write data to a file.

// Syntax: fs.writeFile(path, data, callback)

// Characteristics:

// Non-blocking; uses a callback to handle completion or errors.

// Example:

// fs.writeFile(__dirname + "/abc.txt", "hello jiiii", function(err){
//   if(err) throw err;
//   console.log("The file has been saved!");
// });

// 1.3 readFileSync

// Purpose: Synchronously read content from a file.

// Syntax: fs.readFileSync(path, { encoding: "utf-8" })

// Notes:

// If encoding not specified → returns a Buffer.

// Blocks code until file is read.

// Example:

// let data = fs.readFileSync("abc.txt", { encoding: "utf-8" });
// console.log(data);

// 1.4 readFile

// Purpose: Asynchronously read content from a file.

// Syntax: fs.readFile(path, encoding, callback)

// Characteristics: Non-blocking; callback gives data or error.

// Example:

// fs.readFile("abc.txt", "utf-8", (err, data) => {
//   if(err) throw err;
//   console.log(data);
// });

// 1.5 appendFile

// Purpose: Add content at the end of a file.

// Syntax: fs.appendFile(path, data, callback)

// Example:

// fs.appendFile("abc.txt", " additional text", (err) => {
//   if(err) throw err;
//   console.log("Content appended successfully");
// });

// 1.6 copyFile

// Purpose: Copy content from one file to another.

// Syntax: fs.copyFile(src, dest, callback)

// Example:

// fs.copyFile("abc.txt", "xyz.txt", (err) => {
//   if(err) throw err;
//   console.log("File copied!");
// });

// 1.7 rename

// Purpose: Rename a file or move it to a different path.

// Syntax: fs.rename(oldPath, newPath, callback)

// Example:

// fs.rename("xyz.txt", "xyz-renamed.txt", (err) => {
//   if(err) throw err;
//   console.log("File renamed successfully");
// });

// 1.8 unlink

// Purpose: Delete a file.

// Syntax: fs.unlink(path, callback)

// Example:

// fs.unlink("hello.js", (err) => {
//   if(err) throw err;
//   console.log("File deleted!");
// });

// 1.9 mkdir

// Purpose: Create a new folder/directory.

// Syntax: fs.mkdir(path, { recursive: true }, callback)

// Notes:

// recursive: true → allows creation of nested folders.

// Example:

// fs.mkdir("hello/anotherFolder", { recursive: true }, (err) => {
//   if(err) throw err;
//   console.log("Directory created!");
// });

// 1.10 rmdir

// Purpose: Remove empty directory.

// Syntax: fs.rmdir(path, callback)

// Notes: Cannot delete non-empty folders. Use fs.rm(path, { recursive: true }) for non-empty.

// Example:

// fs.rmdir("hello/anotherFolder", (err) => {
//   if(err) throw err;
//   console.log("Directory removed!");
// });

// 1.11 readdir & readdirSync

// Purpose: List all files and folders inside a directory.

// Syntax (async): fs.readdir(path, { encoding }, callback)

// Syntax (sync): fs.readdirSync(path, { encoding })

// Example:

// fs.readdir(__dirname, { encoding: "utf-8" }, (err, files) => {
//   if(err) throw err;
//   console.log("Files inside current directory:", files);
// });

// 1.12 __dirname & String Replace

// __dirname → absolute path of the current directory.

// .replace("old", "new") → replace part of string.

// Example:

// console.log(__dirname); 
// console.log(__dirname.replace("Fs","fs"));

// 2️⃣ OS Module (System Information)
// const os = require("os");

// 2.1 os.arch()

// Returns system architecture.

// Example: 'x64', 'arm64'

// console.log("Architecture:", os.arch());

// 2.2 os.cpus()

// Returns array of CPU info objects.

// os.cpus().length → number of CPU cores.

// console.log("CPU cores:", os.cpus().length);

// 2.3 os.platform()

// Returns platform: 'win32', 'linux', 'darwin'

// console.log("Platform:", os.platform());

// 2.4 os.type()

// OS type: 'Windows_NT', 'Linux', 'Darwin'

// console.log("OS Type:", os.type());

// 2.5 os.totalmem() & os.freemem()

// Returns total and free memory in bytes.

// console.log("Total Memory:", os.totalmem());
// console.log("Free Memory:", os.freemem());

// 2.6 os.uptime()

// Returns system uptime in seconds.

// console.log("System Uptime (seconds):", os.uptime());

// ✅ Key Notes

// FS module = File operations (read/write/append/delete/copy/rename).

// OS module = System information (CPU, memory, architecture, platform).

// Always handle errors in async methods using callbacks.

// Sync methods block code execution; Async methods do not.

// readdir does not support recursive reading by default; use recursive logic if needed.

// __dirname is useful for absolute paths.