// Original code adapted from Robert Kieffer.
!function(){var _,S,E=this;_=function(_){for(var S,S,E=new Buffer(_),O=0;_>O;O++)0==(3&O)&&(S=4294967296*Math.random()),E[O]=S>>>((3&O)<<3)&255;return E},E.crypto&&crypto.getRandomValues&&(S=function(_){var S=new Buffer(_);return crypto.getRandomValues(S),S}),module.exports=S||_}();