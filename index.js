const path = require('path');
const fs = require('fs');
const media = fs.readFileSync('./media.txt');
const paths = media.toString().trim().split("\n");
const playList = [];
playList.push("#EXTM3U");
paths.map(file => {
  const songName = "#EXTINF:0, " + path.parse(file).ext + " - "+ path.parse(file).name;
  playList.push(songName);
  playList.push(file);
});
const m3ufile = fs.createWriteStream('playlist.m3u');
m3ufile.on('error', function(err) {
  console.log("error "+ err);
});
m3ufile.write(playList.join("\n"));
m3ufile.end();
