webpackJsonp([12],{"JG5/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("irdN"),r=a.n(n),s=a("zIwb"),c=a.n(s);t.default={namespace:"example",state:{count:1},subscriptions:{setup:function(e){e.dispatch,e.history}},effects:{fetch:c.a.mark(function e(t,a){var n,r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,e.next=4,s({type:"save"});case 4:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return r()({},e,t.payload)}}}}});