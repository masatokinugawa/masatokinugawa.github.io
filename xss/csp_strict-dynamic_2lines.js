const s = document.createElement('script');
s.src = '/xss/csp_strict-dynamic_2lines_alert.js';
document.body.appendChild(s); // this is loaded

const s2 = document.createElement('script');
s2.src = 'data:text/javascript,alert(document.domain)';
document.body.appendChild(s2); // this is blocked even though it is a non-'parser-inserted' script due to 2-lines hack
