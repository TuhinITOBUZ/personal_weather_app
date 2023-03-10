import process from "process";
import path from "path";
import { createFile, deleteFile, read, write } from "./fileOperations.mjs";
import { mkDir, readDir, delDir, renameDir } from "./folderOperations.mjs";


var args = process.argv;
let address = path.dirname(args[1]) + "/root/";
let task = args[2];
let name = args[3];
let text = args[4];

function showList() {
  console.log("Enter 1 to create a file");
  console.log("Enter 2 to delete a file");
  console.log("Enter 3 to read a file");
  console.log("Enter 4 to write a file");
  console.log("Enter 5 to make a directory");
  console.log("Enter 6 to delete a directory");
  console.log("Enter 7 to read the content of a directory");
  console.log("Enter 8 to rename a directory");
}

function main() {
  if (task === "list") {
    showList();
  } else if (task === "1") {
    console.log(
      "Enter 'createFile' followed by /path/file-name.extension and text to create the file."
    );
  } else if (task === "2") {
    console.log(
      "Enter 'deleteFile' followed by /path/file-name.extension to delete the file."
    );
  } else if (task === "3") {
    console.log(
      "Enter 'read' followed by /path/file-name.extension to read the file."
    );
  } else if (task === "4") {
    console.log(
      "Enter 'write' followed by /path/file-name.extension and the text to write the file."
    );
  } else if (task === "5") {
    console.log(
      "Enter 'mkDir' followed by /path/folder-name to create the directory."
    );
  } else if (task === "6") {
    console.log(
      "Enter 'delDir' followed by /relative-path of the folder to delete the directory."
    );
  } else if (task === "7") {
    console.log(
      "Enter 'readDir' followed by /relative-path to read the content of the directory."
    );
  } else if (task === "8") {
    console.log(
      "Enter 'renameDir' followed by /path/existing-name then /path/new-name to rename a folder"
    );
  } else if (task === "createFile") {
    createFile(address, name);
  } else if (task === "deleteFile") {
    deleteFile(address, name);
  } else if (task === "read") {
    read(address, name);
  } else if (task === "write") {
    write(address, name, text);
  } else if (task === "readDir") {
    readDir(address, name);
  } else if (task === "mkDir") {
    mkDir(address, name);
  } else if (task === "delDir") {
    delDir(address, name);
  } else if (task === "renameDir") {
    renameDir(address, name, text);
  }
}

main();
