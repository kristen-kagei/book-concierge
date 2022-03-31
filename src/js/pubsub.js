// A module for routing events through the app

var events = {};

var on = function(e, f) {
  console.log(`on function - event: ${e}`);
  if (!events[e]) events[e] = [];
  events[e].push(f);
  console.log(`on function - events: ${JSON.stringify(events)}`);
};

var off = function(e, f) {
  if (!events[e]) return;
  events[e] = events[e].filter(c => f != c);
};

var send = function(e, ...args) {
  // console.log(e, ...args);
  if (!events[e]) return;
  events[e].forEach(f => f(...args));
};

module.exports = { on, off, send };