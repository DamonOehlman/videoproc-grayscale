# videoproc-grayscale

A simple grayscale filter for use with the
[videoproc](https://github.com/DamonOehlman/videoproc) module.


[![NPM](https://nodei.co/npm/videoproc-grayscale.png)](https://nodei.co/npm/videoproc-grayscale/)



## Example Usage

The following example can be run using
[beefy](https://github.com/chrisdickinson/beefy) (`beefy example.js`):

```js
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
      require('videoproc-grayscale/')
    ]
  });
});

document.body.appendChild(canvas);

```

## License(s)

### ISC

Copyright (c) 2015, National ICT Australia Limited (NICTA)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
