/**
 * Google Analytics initialization
 *
 * Extracted from index.html inline script to comply with Content Security Policy.
 * CSP blocks inline scripts by default; moving GA init to an external file
 * allows script-src 'self' to cover it without needing 'unsafe-inline'.
 *
 * Replace 'UA-XXXXX-X' with your actual Google Analytics Tracking ID.
 */
/* jshint ignore:start */
!function(A,n,g,u,l,a,r){A.GoogleAnalyticsObject=l,A[l]=A[l]||function(){
(A[l].q=A[l].q||[]).push(arguments)},A[l].l=+new Date,a=n.createElement(g),
r=n.getElementsByTagName(g)[0],a.src=u,r.parentNode.insertBefore(a,r)
}(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-X');
ga('send', 'pageview');
/* jshint ignore:end */
