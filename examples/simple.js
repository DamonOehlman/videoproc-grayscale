var getUserMedia = require('getusermedia');
var attachmedia = require('attachmediastream');
var videoproc = require('videoproc');
var crel = require('crel');
var canvas = crel('canvas');
var vid;

getUserMedia({ audio: true, video: true }, function(err, stream) {
  if (err) {
    return console.error('Could not capture media: ', err);
  }

  videoproc(attachmedia(stream, null, { muted: true }), canvas, {
    filters: [
      require('..')
    ]
  });
});

document.body.appendChild(canvas);
