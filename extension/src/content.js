import googleshopping from "./reviews/googleshopping";
import googlesearch from "./reviews/googlesearch";
import googleMaps from "./reviews/maps";

// const head = `
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
//     />
//     <link rel="preconnect" href="https://fonts.googleapis.com" />
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//     <link
//       href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
//       rel="stylesheet"
//     />
    
//     <script src="popup.js" defer></script>
//     <style>
//       body, html {
//         font-family: "Inter", 'sans-serif';
//         border: none;
//         outline: none;
//         background-color: #0000;
//       }
//       *, ::before, ::after {
//         --tw-border-spacing-x: 0;
//         --tw-border-spacing-y: 0;
//         --tw-translate-x: 0;
//         --tw-translate-y: 0;
//         --tw-rotate: 0;
//         --tw-skew-x: 0;
//         --tw-skew-y: 0;
//         --tw-scale-x: 1;
//         --tw-scale-y: 1;
//         --tw-pan-x:  ;
//         --tw-pan-y:  ;
//         --tw-pinch-zoom:  ;
//         --tw-scroll-snap-strictness: proximity;
//         --tw-gradient-from-position:  ;
//         --tw-gradient-via-position:  ;
//         --tw-gradient-to-position:  ;
//         --tw-ordinal:  ;
//         --tw-slashed-zero:  ;
//         --tw-numeric-figure:  ;
//         --tw-numeric-spacing:  ;
//         --tw-numeric-fraction:  ;
//         --tw-ring-inset:  ;
//         --tw-ring-offset-width: 0px;
//         --tw-ring-offset-color: #fff;
//         --tw-ring-color: rgb(59 130 246 / 0.5);
//         --tw-ring-offset-shadow: 0 0 #0000;
//         --tw-ring-shadow: 0 0 #0000;
//         --tw-shadow: 0 0 #0000;
//         --tw-shadow-colored: 0 0 #0000;
//         --tw-blur:  ;
//         --tw-brightness:  ;
//         --tw-contrast:  ;
//         --tw-grayscale:  ;
//         --tw-hue-rotate:  ;
//         --tw-invert:  ;
//         --tw-saturate:  ;
//         --tw-sepia:  ;
//         --tw-drop-shadow:  ;
//         --tw-backdrop-blur:  ;
//         --tw-backdrop-brightness:  ;
//         --tw-backdrop-contrast:  ;
//         --tw-backdrop-grayscale:  ;
//         --tw-backdrop-hue-rotate:  ;
//         --tw-backdrop-invert:  ;
//         --tw-backdrop-opacity:  ;
//         --tw-backdrop-saturate:  ;
//         --tw-backdrop-sepia:  ;
//         --tw-contain-size:  ;
//         --tw-contain-layout:  ;
//         --tw-contain-paint:  ;
//         --tw-contain-style:  ;
//       }
      
//       ::backdrop {
//         --tw-border-spacing-x: 0;
//         --tw-border-spacing-y: 0;
//         --tw-translate-x: 0;
//         --tw-translate-y: 0;
//         --tw-rotate: 0;
//         --tw-skew-x: 0;
//         --tw-skew-y: 0;
//         --tw-scale-x: 1;
//         --tw-scale-y: 1;
//         --tw-pan-x:  ;
//         --tw-pan-y:  ;
//         --tw-pinch-zoom:  ;
//         --tw-scroll-snap-strictness: proximity;
//         --tw-gradient-from-position:  ;
//         --tw-gradient-via-position:  ;
//         --tw-gradient-to-position:  ;
//         --tw-ordinal:  ;
//         --tw-slashed-zero:  ;
//         --tw-numeric-figure:  ;
//         --tw-numeric-spacing:  ;
//         --tw-numeric-fraction:  ;
//         --tw-ring-inset:  ;
//         --tw-ring-offset-width: 0px;
//         --tw-ring-offset-color: #fff;
//         --tw-ring-color: rgb(59 130 246 / 0.5);
//         --tw-ring-offset-shadow: 0 0 #0000;
//         --tw-ring-shadow: 0 0 #0000;
//         --tw-shadow: 0 0 #0000;
//         --tw-shadow-colored: 0 0 #0000;
//         --tw-blur:  ;
//         --tw-brightness:  ;
//         --tw-contrast:  ;
//         --tw-grayscale:  ;
//         --tw-hue-rotate:  ;
//         --tw-invert:  ;
//         --tw-saturate:  ;
//         --tw-sepia:  ;
//         --tw-drop-shadow:  ;
//         --tw-backdrop-blur:  ;
//         --tw-backdrop-brightness:  ;
//         --tw-backdrop-contrast:  ;
//         --tw-backdrop-grayscale:  ;
//         --tw-backdrop-hue-rotate:  ;
//         --tw-backdrop-invert:  ;
//         --tw-backdrop-opacity:  ;
//         --tw-backdrop-saturate:  ;
//         --tw-backdrop-sepia:  ;
//         --tw-contain-size:  ;
//         --tw-contain-layout:  ;
//         --tw-contain-paint:  ;
//         --tw-contain-style:  ;
//       }
      
//       /*
//       ! tailwindcss v3.4.16 | MIT License | https://tailwindcss.com
//       */
      
//       /*
//       1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
//       2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
//       */
      
//       *,
//       ::before,
//       ::after {
//         box-sizing: border-box;
//         /* 1 */
//         border-width: 0;
//         /* 2 */
//         border-style: solid;
//         /* 2 */
//         border-color: #e5e7eb;
//         /* 2 */
//       }
      
//       ::before,
//       ::after {
//         --tw-content: '';
//       }
      
//       /*
//       1. Use a consistent sensible line-height in all browsers.
//       2. Prevent adjustments of font size after orientation changes in iOS.
//       3. Use a more readable tab size.

//       html,
//       :host {
//         line-height: 1.5;
//         /* 1 */
//         -webkit-text-size-adjust: 100%;
//         /* 2 */
//         -moz-tab-size: 4;
//         /* 3 */
//         -o-tab-size: 4;
//            tab-size: 4;
//         /* 3 */
//         font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
//         /* 4 */
//         font-feature-settings: normal;
//         /* 5 */
//         font-variation-settings: normal;
//         /* 6 */
//         -webkit-tap-highlight-color: transparent;
//         /* 7 */
//       }
      
//       body {
//         margin: 0;
//         /* 1 */
//         line-height: inherit;
//         /* 2 */
//       }
      
//       /*
//       1. Add the correct height in Firefox.
//       2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
//       3. Ensure horizontal rules are visible by default.
//       */
      
//       hr {
//         height: 0;
//         /* 1 */
//         color: inherit;
//         /* 2 */
//         border-top-width: 1px;
//         /* 3 */
//       }
      
//       /*
//       Add the correct text decoration in Chrome, Edge, and Safari.
//       */
      
//       abbr:where([title]) {
//         -webkit-text-decoration: underline dotted;
//                 text-decoration: underline dotted;
//       }
      
//       /*
//       Remove the default font size and weight for headings.
//       */
      
//       h1,
//       h2,
//       h3,
//       h4,
//       h5,
//       h6 {
//         font-size: inherit;
//         font-weight: inherit;
//       }
      
//       /*
//       Reset links to optimize for opt-in styling instead of opt-out.
//       */
      
//       a {
//         color: inherit;
//         text-decoration: inherit;
//       }
      
//       /*
//       Add the correct font weight in Edge and Safari.
//       */
      
//       b,
//       strong {
//         font-weight: bolder;
//       }
    
//       code,
//       kbd,
//       samp,
//       pre {
//         font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
//         /* 1 */
//         font-feature-settings: normal;
//         /* 2 */
//         font-variation-settings: normal;
//         /* 3 */
//         font-size: 1em;
//         /* 4 */
//       }
      
//       /*
//       Add the correct font size in all browsers.
//       */
      
//       small {
//         font-size: 80%;
//       }
      
//       /*
//       Prevent sub and sup elements from affecting the line height in all browsers.
//       */
      
//       sub,
//       sup {
//         font-size: 75%;
//         line-height: 0;
//         position: relative;
//         vertical-align: baseline;
//       }
      
//       sub {
//         bottom: -0.25em;
//       }
      
//       sup {
//         top: -0.5em;
//       }
      
//       /*
//       1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
//       2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
//       3. Remove gaps between table borders by default.
//       */
      
//       table {
//         text-indent: 0;
//         /* 1 */
//         border-color: inherit;
//         /* 2 */
//         border-collapse: collapse;
//         /* 3 */
//       }
      
//       /*
//       1. Change the font styles in all browsers.
//       2. Remove the margin in Firefox and Safari.
//       3. Remove default padding in all browsers.
//       */
      
//       button,
//       input,
//       optgroup,
//       select,
//       textarea {
//         font-family: inherit;
//         /* 1 */
//         font-feature-settings: inherit;
//         /* 1 */
//         font-variation-settings: inherit;
//         /* 1 */
//         font-size: 100%;
//         /* 1 */
//         font-weight: inherit;
//         /* 1 */
//         line-height: inherit;
//         /* 1 */
//         letter-spacing: inherit;
//         /* 1 */
//         color: inherit;
//         /* 1 */
//         margin: 0;
//         /* 2 */
//         padding: 0;
//         /* 3 */
//       }
      
//       /*
//       Remove the inheritance of text transform in Edge and Firefox.
//       */
      
//       button,
//       select {
//         text-transform: none;
//       }
      
//       /*
//       1. Correct the inability to style clickable types in iOS and Safari.
//       2. Remove default button styles.
//       */
      
//       button,
//       input:where([type='button']),
//       input:where([type='reset']),
//       input:where([type='submit']) {
//         -webkit-appearance: button;
//         /* 1 */
//         background-color: transparent;
//         /* 2 */
//         background-image: none;
//         /* 2 */
//       }
      
//       /*
//       Use the modern Firefox focus style for all focusable elements.
//       */
      
//       :-moz-focusring {
//         outline: auto;
//       }
      
//       /*
//       Remove the additional :invalid styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
//       */
      
//       :-moz-ui-invalid {
//         box-shadow: none;
//       }
      
//       /*
//       Add the correct vertical alignment in Chrome and Firefox.
//       */
      
//       progress {
//         vertical-align: baseline;
//       }
      
//       /*
//       Correct the cursor style of increment and decrement buttons in Safari.
//       */
      
//       ::-webkit-inner-spin-button,
//       ::-webkit-outer-spin-button {
//         height: auto;
//       }
      
//       /*
//       1. Correct the odd appearance in Chrome and Safari.
//       2. Correct the outline style in Safari.
//       */
      
//       [type='search'] {
//         -webkit-appearance: textfield;
//         /* 1 */
//         outline-offset: -2px;
//         /* 2 */
//       }
      
//       /*
//       Remove the inner padding in Chrome and Safari on macOS.
//       */
      
//       ::-webkit-search-decoration {
//         -webkit-appearance: none;
//       }
      
//       /*
//       1. Correct the inability to style clickable types in iOS and Safari.
//       2. Change font properties to inherit in Safari.
//       */
      
//       ::-webkit-file-upload-button {
//         -webkit-appearance: button;
//         /* 1 */
//         font: inherit;
//         /* 2 */
//       }
      
//       /*
//       Add the correct display in Chrome and Safari.
//       */
      
//       summary {
//         display: list-item;
//       }
      
//       /*
//       Removes the default spacing and border for appropriate elements.
//       */
      
//       blockquote,
//       dl,
//       dd,
//       h1,
//       h2,
//       h3,
//       h4,
//       h5,
//       h6,
//       hr,
//       figure,
//       p,
//       pre {
//         margin: 0;
//       }
      
//       fieldset {
//         margin: 0;
//         padding: 0;
//       }
      
//       legend {
//         padding: 0;
//       }
      
//       ol,
//       ul,
//       menu {
//         list-style: none;
//         margin: 0;
//         padding: 0;
//       }
      
//       /*
//       Reset default styling for dialogs.
//       */
      
//       dialog {
//         padding: 0;
//       }
      
//       /*
//       Prevent resizing textareas horizontally by default.
//       */
      
//       textarea {
//         resize: vertical;
//       }
      
//       /*
//       1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
//       2. Set the default placeholder color to the user's configured gray 400 color.
//       */
      
//       input::-moz-placeholder, textarea::-moz-placeholder {
//         opacity: 1;
//         /* 1 */
//         color: #9ca3af;
//         /* 2 */
//       }
      
//       input::placeholder,
//       textarea::placeholder {
//         opacity: 1;
//         /* 1 */
//         color: #9ca3af;
//         /* 2 */
//       }
      
//       /*
//       Set the default cursor for buttons.
//       */
      
//       button,
//       [role="button"] {
//         cursor: pointer;
//       }
      
//       /*
//       Make sure disabled buttons don't get the pointer cursor.
//       */
      
//       :disabled {
//         cursor: default;
//       }
      
//       /*
//       1. Make replaced elements display: block by default. (https://github.com/mozdevs/cssremedy/issues/14)
//       2. Add vertical-align: middle to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
//          This can trigger a poorly considered lint error in some tools but is included by design.
//       */
      
//       img,
//       svg,
//       video,
//       canvas,
//       audio,
//       iframe,
//       embed,
//       object {
//         display: block;
//         /* 1 */
//         vertical-align: middle;
//         /* 2 */
//       }
      
//       /*
//       Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
//       */
      
//       img,
//       video {
//         max-width: 100%;
//         height: auto;
//       }
      
//       /* Make elements with the HTML hidden attribute stay hidden by default */
      
//       [hidden]:where(:not([hidden="until-found"])) {
//         display: none;
//       }
      
//       .visible {
//         visibility: visible;
//       }
      
//       .collapse {
//         visibility: collapse;
//       }
      
//       .relative {
//         position: relative;
//       }
      
//       .block {
//         display: block;
//       }
      
//       .flex {
//         display: flex;
//       }
      
//       .table {
//         display: table;
//       }
      
//       .contents {
//         display: contents;
//       }
      
//       .hidden {
//         display: none;
//       }
      
//       .h-max {
//         height: -moz-max-content;
//         height: max-content;
//       }
      
//       .w-\[30rem\] {
//         width: 30rem;
//       }
      
//       .w-full {
//         width: 100%;
//       }
      
//       .max-w-md {
//         max-width: 28rem;
//       }
      
//       .border-collapse {
//         border-collapse: collapse;
//       }
      
//       .transform {
//         transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
//       }
      
//       .resize {
//         resize: both;
//       }
      
//       .flex-col {
//         flex-direction: column;
//       }
      
//       .gap-y-6 {
//         row-gap: 1.5rem;
//       }
      
//       .rounded-lg {
//         border-radius: 0.5rem;
//       }
      
//       .rounded-xl {
//         border-radius: 0.75rem;
//       }
      
//       .border {
//         border-width: 1px;
//       }
      
//       .border-none {
//         border-style: none;
//       }
      
//       .bg-transparent {
//         background-color: transparent;
//       }
      
//       .bg-violet-600 {
//         --tw-bg-opacity: 1;
//         background-color: rgb(124 58 237 / var(--tw-bg-opacity, 1));
//       }
      
//       .bg-white {
//         --tw-bg-opacity: 1;
//         background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
//       }
      
//       .bg-gradient-to-b {
//         background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
//       }
      
//       .from-violet-600 {
//         --tw-gradient-from: #7c3aed var(--tw-gradient-from-position);
//         --tw-gradient-to: rgb(124 58 237 / 0) var(--tw-gradient-to-position);
//         --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
//       }
      
//       .to-violet-900 {
//         --tw-gradient-to: #4c1d95 var(--tw-gradient-to-position);
//       }
      
//       .bg-clip-text {
//         -webkit-background-clip: text;
//                 background-clip: text;
//       }
      
//       .p-3 {
//         padding: 0.75rem;
//       }
      
//       .py-2 {
//         padding-top: 0.5rem;
//         padding-bottom: 0.5rem;
//       }
      
//       .py-2\.5 {
//         padding-top: 0.625rem;
//         padding-bottom: 0.625rem;
//       }
      
//       .py-8 {
//         padding-top: 2rem;
//         padding-bottom: 2rem;
//       }
      
//       .text-center {
//         text-align: center;
//       }
      
//       .text-3xl {
//         font-size: 1.875rem;
//         line-height: 2.25rem;
//       }
      
//       .font-medium {
//         font-weight: 500;
//       }
      
//       .font-semibold {
//         font-weight: 600;
//       }
      
//       .text-neutral-600 {
//         --tw-text-opacity: 1;
//         color: rgb(82 82 82 / var(--tw-text-opacity, 1));
//       }
      
//       .text-transparent {
//         color: transparent;
//       }
      
//       .text-white {
//         --tw-text-opacity: 1;
//         color: rgb(255 255 255 / var(--tw-text-opacity, 1));
//       }
      
//       .underline {
//         text-decoration-line: underline;
//       }
      
//       .shadow {
//         --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
//         --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
//         box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
//       }
      
//       .outline {
//         outline-style: solid;
//       }
      
//       .transition-colors {
//         transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
//         transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//         transition-duration: 150ms;
//       }
      
//       .hover\:bg-violet-700:hover {
//         --tw-bg-opacity: 1;
//         background-color: rgb(109 40 217 / var(--tw-bg-opacity, 1));
//       }
      
//       .active\:bg-violet-800:active {
//         --tw-bg-opacity: 1;
//         background-color: rgb(91 33 182 / var(--tw-bg-opacity, 1));
//       }
      
//       .disabled\:opacity-80:disabled {
//         opacity: 0.8;
//       }
//     </style>
// `

// const body = `
// <div class="py-8 bg-transparent border-none h-max w-[30rem]">
//     <div class="p-3 bg-white shadow rounded-xl border flex flex-col gap-y-6">
//       <h1 class="text-center text-3xl font-semibold bg-gradient-to-b text-transparent bg-clip-text from-violet-600 to-violet-900">Google Reviews Analyzer</h1>
//       <p class="text-center font- text-neutral-600">
//         Analyze the sentiment of Google reviews to gain information about the authenticity of reviews.
//       </p>
//       <button
//         class="bg-violet-600 hover:bg-violet-700 active:bg-violet-800 disabled:opacity-80 transition-colors text-white w-full py-2.5 shadow rounded-lg font-medium"
//       >
//         Start Analysis
//       </button>
//     </div>
//   </div>
// `

(async function () {
  if (document.querySelector(".x38CKc")) {
    try {
      await googleshopping();
    } catch (error) {
      console.error("An error occurred during scraping:", error);
    }
  } else if (document.querySelector(".sh-rol__reviews-cont")) {
    try {
      await googlesearch();
    } catch (error) {
      console.error("An error occurred during scraping:", error);
    }
  } else if (document.querySelector(".m6QErb")) {
    try {
      await googleMaps();
    } catch (error) {
      console.error("An error occurred during scraping:", error);
    }
  }
})();
