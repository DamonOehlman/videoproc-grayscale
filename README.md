# rtc-filter-grayscale

A simple grayscale filter for use with the
[rtc-videoproc](https://github.com/rtc-io/rtc-videoproc) module.


[![NPM](https://nodei.co/npm/rtc-filter-grayscale.png)](https://nodei.co/npm/rtc-filter-grayscale/)


## Example Usage

The following example can be run using
[beefy](https://github.com/chrisdickinson/beefy) (`beefy example.js`):

```js
var media = require('rtc-media');
var processor = require('rtc-videoproc');
var vid;

// capture media
media().render(vid = processor(document.body));

// handle draw events on the fake video
vid.pipeline.add(require('rtc-filter-grayscale'));
```

## License(s)

### Apache 2.0

Copyright 2014 National ICT Australia Limited (NICTA)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
