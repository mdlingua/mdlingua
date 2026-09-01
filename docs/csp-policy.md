# Content Security Policy (CSP)

## Overview

This application enforces a Content Security Policy via the `<meta http-equiv="Content-Security-Policy">` tag in `app/index.html`.

## Policy Breakdown

| Directive | Value | Reason |
|---|---|---|
| `default-src` | `'self'` | Catch-all fallback; only load resources from the same origin |
| `script-src` | `'self' https://www.google-analytics.com` | Allow local scripts and Google Analytics |
| `style-src` | `'self' 'unsafe-inline'` | Allow local CSS; `unsafe-inline` needed for AngularJS runtime class manipulation |
| `img-src` | `'self' data: https://www.google-analytics.com` | Local images, data URIs, and GA beacon pixel |
| `connect-src` | `'self' https://www.google-analytics.com https://stats.g.doubleclick.net` | XHR/fetch allowed to self and GA tracking endpoints |
| `font-src` | `'self'` | Only self-hosted fonts |
| `object-src` | `'none'` | Block all Flash/plugin content |
| `media-src` | `'self'` | Local audio only (TTS uses browser-native SpeechSynthesis API) |
| `frame-src` | `'none'` | No iframes allowed |
| `base-uri` | `'self'` | Prevent `<base>` tag hijacking attacks |
| `form-action` | `'self'` | Prevent form submissions to external domains |

## AngularJS CSP Compatibility (`ng-csp`)

The `ng-csp` attribute is added to `<body>` to enable AngularJS CSP-compatible mode.

**What it disables in Angular:**
- `eval()` and `new Function()` calls in expression parsing
- CSS animation feature detection via events (uses `setTimeout` fallback instead)

**Why this matters:**
Without `ng-csp`, AngularJS uses `eval()` internally, which would require adding `'unsafe-eval'` to `script-src` — a significant security weakening that allows arbitrary code execution from strings.

## Google Analytics Compliance

The original inline `<script>` GA initializer was extracted to `app/scripts/analytics.js`.

**Why:** CSP blocks inline scripts by default. Rather than weakening the policy with `'unsafe-inline'`, the GA initialization was moved to an external file, covered by `script-src 'self'`.

## Future Hardening Recommendations

1. **Remove `style-src 'unsafe-inline'`** — Audit all views for `ng-style` usage; replace with CSS classes where possible.
2. **Migrate to GA4 / gtag.js** — Modern GA setup supports `connect-src` tracking without inline scripts.
3. **Add `upgrade-insecure-requests`** — Force HTTP → HTTPS upgrades when deployed over HTTPS.
4. **Server-side CSP header** — When adding a backend (Express/Nginx), move CSP to HTTP response headers for stronger enforcement (meta tags can be bypassed if HTML is injected).
5. **CSP Reporting** — Add `report-uri` or `report-to` directive to receive violation reports in production.
