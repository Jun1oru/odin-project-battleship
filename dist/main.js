!function(){"use strict";var n={365:function(n,e,t){t.d(e,{A:function(){return s}});var r=t(354),i=t.n(r),o=t(314),a=t.n(o)()(i());a.push([n.id,'*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    background-color: rgb(13, 115, 199);\n    color: whitesmoke;\n    font-size: 10px;\n}\n\n@media only screen and (min-width: 35.5em) {\n    html {\n        font-size: 12px;\n    }\n}\n\n@media only screen and (min-width: 48em) {\n    html {\n        font-size: 14px;\n    }\n}\n\n@media only screen and (min-width: 64em) {\n    html {\n        font-size: 16px;\n    }\n}\n\n@media only screen and (min-width: 80em) {\n    html {\n        font-size: 18px;\n    }\n}\n\n@media only screen and (min-width: 120em) {\n    html {\n        font-size: 20px;\n    }\n}\n\n@media only screen and (min-width: 160em) {\n    html {\n        font-size: 22px;\n    }\n}\n\n@media only screen and (min-width: 240em) {\n    html {\n        font-size: 24px;\n    }\n}\n\nbody {\n    height: 100vh;\n}\n\n#game-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr;\n\n    width: 100%;\n    height: 100%;\n}\n\n.game-title {\n    grid-column: span 2;\n    padding: 1rem;\n    justify-self: center;\n}\n\n.player-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n    font-size: 0.8rem;\n}\n\n.board-container {\n    display: grid;\n}\n\n.cell {\n    border: 1px solid black;\n    background-color: rgb(58, 248, 255);\n}\n\n.board-container[data-active="true"] .cell:hover {\n    filter: brightness(0.8);\n}\n\n.board-container[data-active="true"] .cell:active {\n    transform: scale(1.2);\n}\n\n.board-container[data-active="false"] .ship {\n    background-color: blue;\n}\n\n.miss {\n    background-color: black;\n}\n\n.hit {\n    background-color: red;\n}\n\n@keyframes fadein {\n    0%{\n        opacity: 0;\n        top: -10rem;\n    }\n    100% {\n        opacity: 1;\n        top: 0;\n    }\n}\n\ndialog {\n    width: 100%;\n    height: 100%;\n    background-color: rgb(13, 115, 199);\n    color: whitesmoke;\n}\n\ndialog[open] {\n    animation: fadein 1s ease-in forwards;\n}\n\n#gameOverDiv {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding: 4rem;\n}\n\n#playAgainButton {\n    justify-self: center;\n    width: 10rem;\n    border-radius: 2rem;\n    padding: 1rem;\n    background-color: rgba(30, 185, 30, 0.747);\n    color: whitesmoke;\n}\n\n#gameOverTitle {\n    -webkit-text-stroke-width: 1px;\n    -webkit-text-stroke-color: black;\n}',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,mCAAmC;IACnC,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;;IAE5B,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,mCAAmC;AACvC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,UAAU;QACV,MAAM;IACV;AACJ;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,4BAA4B;IAC5B,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,0CAA0C;IAC1C,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,gCAAgC;AACpC",sourcesContent:['*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    background-color: rgb(13, 115, 199);\r\n    color: whitesmoke;\r\n    font-size: 10px;\r\n}\r\n\r\n@media only screen and (min-width: 35.5em) {\r\n    html {\r\n        font-size: 12px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 48em) {\r\n    html {\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 64em) {\r\n    html {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 80em) {\r\n    html {\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 120em) {\r\n    html {\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 160em) {\r\n    html {\r\n        font-size: 22px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 240em) {\r\n    html {\r\n        font-size: 24px;\r\n    }\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n}\r\n\r\n#game-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: auto 1fr;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.game-title {\r\n    grid-column: span 2;\r\n    padding: 1rem;\r\n    justify-self: center;\r\n}\r\n\r\n.player-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.board-container {\r\n    display: grid;\r\n}\r\n\r\n.cell {\r\n    border: 1px solid black;\r\n    background-color: rgb(58, 248, 255);\r\n}\r\n\r\n.board-container[data-active="true"] .cell:hover {\r\n    filter: brightness(0.8);\r\n}\r\n\r\n.board-container[data-active="true"] .cell:active {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.board-container[data-active="false"] .ship {\r\n    background-color: blue;\r\n}\r\n\r\n.miss {\r\n    background-color: black;\r\n}\r\n\r\n.hit {\r\n    background-color: red;\r\n}\r\n\r\n@keyframes fadein {\r\n    0%{\r\n        opacity: 0;\r\n        top: -10rem;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        top: 0;\r\n    }\r\n}\r\n\r\ndialog {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgb(13, 115, 199);\r\n    color: whitesmoke;\r\n}\r\n\r\ndialog[open] {\r\n    animation: fadein 1s ease-in forwards;\r\n}\r\n\r\n#gameOverDiv {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: auto 1fr;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    padding: 4rem;\r\n}\r\n\r\n#playAgainButton {\r\n    justify-self: center;\r\n    width: 10rem;\r\n    border-radius: 2rem;\r\n    padding: 1rem;\r\n    background-color: rgba(30, 185, 30, 0.747);\r\n    color: whitesmoke;\r\n}\r\n\r\n#gameOverTitle {\r\n    -webkit-text-stroke-width: 1px;\r\n    -webkit-text-stroke-color: black;\r\n}'],sourceRoot:""}]);const s=a},314:function(n){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},354:function(n){n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(i," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},72:function(n){var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,A="".concat(d," ").concat(l);o[d]=l+1;var u=t(A),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=i(h,r);r.byIndex=s,e.splice(s,0,{identifier:A,updater:f,references:1})}a.push(A)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var c=r(n,i),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},659:function(n){var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:function(n){n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:function(n,e,t){n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:function(n){n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:function(n){n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.nc=void 0,function(){class n{constructor(n){this.length=n,this.hitCounter=0,this.hitPositions=[],this.sunk=!1,this.position,this.orientation}hit(n){this.hitCounter!==this.length&&(this.hitCounter++,this.hitPositions.push(n))}isSunk(){return this.sunk=this.length===this.hitCounter,this.sunk}}class e{constructor(n,e,t){this.type=n,this.board=e,this.enemyBoard,this.name=t,this.active=!1,this.attack,this.container}receiveAttack(n){this.board.receiveAttack(n)}}class r{constructor(){this.boardSize=10,this.board=this.createGameBoard()}createGameBoard(){const n=[];for(let e=0;e<this.boardSize;e++){const e=[];for(let n=0;n<this.boardSize;n++)e.push(0);n.push(e)}return n}isPositionOnBoard(n,e=null,t=null){let r=!1,i=!1,o=n[0],a=n[1];return null===e?(o>=0&&o<=9&&(r=!0),a>=0&&a<=9&&(i=!0)):"horizontal"===t?(o>=0&&o<=9&&(r=!0),a>=0&&a+e.length-1<=9&&(i=!0)):"vertical"===t&&(o>=0&&o+e.length-1<=9&&(r=!0),a>=0&&a<=9&&(i=!0)),r&&i}isAdjacentShip(e,t=null,r=null){let i=t;const o=(e,t)=>{if(null===i){if(e>0){if(this.board[e][t]instanceof n&&!0===this.board[e][t].isSunk())return"computerAvoid";if(t>0&&this.board[e-1][t-1]instanceof n&&!0===this.board[e-1][t-1].isSunk())return"computerAvoid";if(t<this.boardSize-1&&this.board[e-1][t+1]instanceof n&&!0===this.board[e-1][t+1].isSunk())return"computerAvoid"}return!1}if(e>0){if(this.board[e-1][t]instanceof n)return!0;if(t>0&&this.board[e-1][t-1]instanceof n)return!0;if(t<this.boardSize-1&&this.board[e-1][t+1]instanceof n)return!0}return!1},a=(e,t)=>{if(null===i){if(t<this.boardSize-1){if(this.board[e][t+1]instanceof n&&!0===this.board[e][t+1].isSunk())return"computerAvoid";if(e>0&&this.board[e-1][t+1]instanceof n&&!0===this.board[e-1][t+1].isSunk())return"computerAvoid";if(e<this.boardSize-1&&this.board[e+1][t+1]instanceof n&&!0===this.board[e+1][t+1].isSunk())return"computerAvoid"}return!1}if(t<this.boardSize-1){if(this.board[e][t+1]instanceof n)return!0;if(e>0&&this.board[e-1][t+1]instanceof n)return!0;if(e<this.boardSize-1&&this.board[e+1][t+1]instanceof n)return!0}return!1},s=(e,t)=>{if(null===i){if(e<this.boardSize-1){if(this.board[e+1][t]instanceof n&&!0===this.board[e+1][t].isSunk())return"computerAvoid";if(t<this.boardSize-1&&this.board[e+1][t+1]instanceof n&&!0===this.board[e+1][t+1].isSunk())return"computerAvoid";if(t>0&&this.board[e+1][t-1]instanceof n&&!0===this.board[e+1][t-1].isSunk())return"computerAvoid"}return!1}if(e<this.boardSize-1){if(this.board[e+1][t]instanceof n)return!0;if(t<this.boardSize-1&&this.board[e+1][t+1]instanceof n)return!0;if(t>0&&this.board[e+1][t-1]instanceof n)return!0}return!1},c=(e,t)=>{if(null===i){if(t>0){if(this.board[e][t-1]instanceof n&&!0===this.board[e][t-1].isSunk())return"computerAvoid";if(e>0&&this.board[e-1][t-1]instanceof n&&!0===this.board[e-1][t-1].isSunk())return"computerAvoid";if(e<this.boardSize-1&&this.board[e+1][t-1]instanceof n&&!0===this.board[e+1][t-1].isSunk())return"computerAvoid"}return!1}if(t>0){if(this.board[e][t-1]instanceof n)return!0;if(e>0&&this.board[e-1][t-1]instanceof n)return!0;if(e<this.boardSize-1&&this.board[e+1][t-1]instanceof n)return!0}return!1},d=e[0],l=e[1];let A=!1;if(null===i)return("computerAvoid"===o(d,l)||"computerAvoid"===a(d,l)||"computerAvoid"===s(d,l)||"computerAvoid"===c(d,l))&&(A="computerAvoid"),A;if("horizontal"===i){for(let n=l;n<=l+r-1;n++){if(!0===o(d,n)){A=!0;break}if(!0===a(d,n)){A=!0;break}if(!0===s(d,n)){A=!0;break}if(!0===c(d,n)){A=!0;break}}return A}if("vertical"===i){for(let n=d;n<=d+r-1;n++){if(!0===o(n,l)){A=!0;break}if(!0===a(n,l)){A=!0;break}if(!0===s(n,l)){A=!0;break}if(!0===c(n,l)){A=!0;break}}return A}return A}canPlaceShip(e,t,r,i){if("vertical"===i){if(t+e.length>this.boardSize)return!1;for(let o=0;o<e.length;o++){if(this.board[t+o][r]instanceof n)return!1;if(!0===this.isAdjacentShip([t,r],i,e.length))return!1}}else{if(r+e.length>this.boardSize)return!1;for(let o=0;o<e.length;o++){if(this.board[t][r+o]instanceof n)return!1;if(!0===this.isAdjacentShip([t,r],i,e.length))return!1}}return!0}place(n,e,t){let r=e[0],i=e[1];if(!1===this.isPositionOnBoard(e,n,t))return!1;if(!0===this.canPlaceShip(n,r,i,t)){for(let e=0;e<n.length;e++)"horizontal"===t?this.board[r][i+e]=n:this.board[r+e][i]=n;return n.position=e,n.orientation=t,!0}return"try again"}receiveAttack(e){if(this.isPositionOnBoard(e)){let t=e[0],r=e[1];return 0===this.board[t][r]?(this.board[t][r]="miss","miss"):!(this.board[t][r]instanceof n)||(!0===this.board[t][r].isSunk()?"sunk":this.board[t][r].hitPositions.some((n=>n.every(((n,t)=>n===e[t]))))?"alreadyHit":(this.board[t][r].hit(e),!0===this.allShipsSunk()?"over":"hit"))}return!1}allShipsSunk(){let e=!0;for(let t=0;t<this.boardSize;t++)for(let r=0;r<this.boardSize;r++)this.board[t][r]instanceof n&&!1===this.board[t][r].isSunk()&&(e=!1);return e}}class i{constructor(){this.controller=function(){const t=()=>{const n=[new r,new r],t=[new e("real",n[0],"Player One"),new e("computer",n[1],"Computer")];return t.forEach(((e,t)=>{const r=(t+1)%n.length;e.enemyBoard=n[r],e.attack=n=>e.enemyBoard.receiveAttack(n)})),t[0].active=!0,t};let i=t();const o=()=>{let n;return i.forEach((e=>{!0===e.active&&(n=e)})),n},a=(n,e)=>o().attack([n,e]);return{playRound:a,playComputerRound:n=>{let e=!0;const t=o(),r=t.board.boardSize,{previousMoves:s,targets:c,hits:d,initialHit:l,orientation:A}=n,u={horizontal:[[0,-1],[0,1]],vertical:[[-1,0],[1,0]],all:[[-1,0],[1,0],[0,-1],[0,1]]},h=(n,e,t)=>u[t].map((([t,r])=>[n+t,e+r])).filter((([n,e])=>n>=0&&e>=0&&n<r&&e<r&&!s.has(`${n}-${e}`))),f=()=>{let n,e;const i=t.enemyBoard;do{n=Math.floor(Math.random()*r),e=Math.floor(Math.random()*r)}while(s.has(`${n}-${e}`)||"computerAvoid"===i.isAdjacentShip([n,e]));return[n,e]};for(;"miss"!==e;){let t,r;if(c.length>0)[t,r]=c.shift();else if(d.length>0){const e=l||d[0];let i="all";if(A)i=A;else if(d.length>1){const e=d[0],t=d[1];e.x===t.x?n.orientation="vertical":e.y===t.y&&(n.orientation="horizontal"),n.initialHit=e,i=n.orientation||"all"}const o=h(e.x,e.y,i);o.length>0?([t,r]=o.shift(),c.push(...o)):[t,r]=f()}else[t,r]=f();if(s.add(`${t}-${r}`),e=a(t,r),"hit"===e){d.push({x:t,y:r});const e=h(t,r,n.orientation||"all");c.push(...e),!0===i[0].board.board[t][r].isSunk()&&(d.length=0,c.length=0,n.orientation=null,n.initialHit=null)}else"sunk"===e&&(d.length=0,c.length=0,n.orientation=null,n.initialHit=null);if("over"===e)return e}return e},getActivePlayer:o,switchPlayerTurn:()=>{i.forEach((n=>{n.active=!0!==n.active}))},definedGame:()=>{let e,t,r;e=new n(2),t=[0,0],r="horizontal",i[0].board.place(e,t,r),e=new n(3),t=[5,3],r="vertical",i[1].board.place(e,t,r)},randomGame:()=>{let e,t,r;const o={AircraftCarrier:{hp:4,count:1},Battleship:{hp:3,count:2},Cruiser:{hp:2,count:3},Submarine:{hp:1,count:4}},a=n=>({x:Math.floor(Math.random()*n),y:Math.floor(Math.random()*n),orientation:Math.random()<.5?"horizontal":"vertical"});i.forEach((i=>{let s,c={...o};const d=i.board,l=i.board.boardSize;for(const[i,o]of Object.entries(c))for(let i=0;i<o.count;i++){let i=!1;for(;!0!==i;)e=new n(o.hp),s=a(l),t=[s.x,s.y],r=s.orientation,i=d.place(e,t,r)}}))},players:i,init:t}}(),this.players=this.controller.players,this.activePlayer=this.controller.getActivePlayer()}}var o=t(72),a=t.n(o),s=t(825),c=t.n(s),d=t(659),l=t.n(d),A=t(56),u=t.n(A),h=t(540),f=t.n(h),m=t(113),p=t.n(m),b=t(365),C={};C.styleTagTransform=p(),C.setAttributes=u(),C.insert=l().bind(null,"head"),C.domAPI=c(),C.insertStyleElement=f(),a()(b.A,C),b.A&&b.A.locals&&b.A.locals,function e(){const t=document.querySelector("body");t.innerHTML="";const r=function(){const e=new i,t=e.controller;t.randomGame();const r=n=>{const e=document.createElement("div");e.classList.add("player-container"),e.dataset.player=`${n.name}`;const t=document.createElement("h1");t.textContent=`${n.name}'s board`,t.classList.add("player-container-title");const r=o(n);return e.appendChild(t),e.appendChild(r),e},o=n=>{const e=document.createElement("div");return e.classList.add("board-container"),n.container=e,e.style.gridTemplateColumns="repeat(10, 1.5rem)",e.style.gridTemplateRows="repeat(10, 1.5rem)",a(n,e),e},a=(e,t)=>{((n,e)=>{e.innerHTML="",e.dataset.active=!0===n.active?"false":"true"})(e,t),e.board.board.forEach(((r,i)=>{r.forEach(((r,o)=>{const a=10*i+o,s=document.createElement("div");if(s.classList.add("cell"),s.dataset.index=a,s.addEventListener("click",c),s.player=e,r instanceof n){const n=[i,o];r.hitPositions.some((e=>e.every(((e,t)=>e===n[t]))))?s.classList.add("hit"):s.classList.add("ship")}else"miss"===r?s.classList.add("miss"):s.classList.add("none");t.appendChild(s)}))}))},s={previousMoves:new Set,hits:[],targets:[],orientation:null,initialHit:null},c=n=>{const e=n.target,r=e.parentNode,i=document.querySelector("dialog"),o=document.getElementById("gameOverTitle");if("true"===r.dataset.active){const n=Math.floor(e.dataset.index/10),r=e.dataset.index%10,c=t.playRound(n,r);if("over"===c)return i.show(),o.textContent="Game over, you won!",void(o.style.color="green");if("miss"===c&&t.switchPlayerTurn(),"computer"===t.getActivePlayer().type){if("over"===t.playComputerRound(s))return i.show(),o.textContent="Game over, you lost!",void(o.style.color="red");t.switchPlayerTurn()}a(t.players[0],t.players[0].container),a(t.players[1],t.players[1].container)}};return{createGameContainer:(n,e)=>{const t=document.createElement("div");t.id="game-container";const i=(()=>{const n=document.createElement("dialog"),e=document.createElement("div");e.id="gameOverDiv";const t=document.createElement("h1");t.id="gameOverTitle",t.textContent="Game over, you won!";const r=document.createElement("button");return r.id="playAgainButton",r.textContent="Play Again!",e.appendChild(t),e.appendChild(r),n.appendChild(e),n})();i.close();const o=(()=>{const n=document.createElement("h1");return n.classList.add("game-title"),n.textContent="Battleship",n})(),a=r(n),s=r(e);return t.appendChild(i),t.appendChild(o),t.appendChild(a),t.appendChild(s),t},updatePlayerBoard:a,game:e}}(),o=r.game.players;t.appendChild(r.createGameContainer(o[0],o[1])),document.getElementById("playAgainButton").addEventListener("click",e)}()}()}();
//# sourceMappingURL=main.js.map