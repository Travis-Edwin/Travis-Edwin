<!DOCTYPE html>
<!-- saved from url=(0043)https://codepen.io/Edwin-McCain/pen/raNxMWa -->
<html lang="en" data-theme="dark" class="pc chrome135 js"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

  

  

  <title>codestorm</title>

  

<style type="text/css">@font-face {font-family:Lato;font-style:normal;font-weight:400;src:url(/cf-fonts/s/lato/5.0.18/latin-ext/400/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Lato;font-style:normal;font-weight:400;src:url(/cf-fonts/s/lato/5.0.18/latin/400/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Lato;font-style:normal;font-weight:700;src:url(/cf-fonts/s/lato/5.0.18/latin-ext/700/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Lato;font-style:normal;font-weight:700;src:url(/cf-fonts/s/lato/5.0.18/latin/700/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Lato;font-style:normal;font-weight:900;src:url(/cf-fonts/s/lato/5.0.18/latin-ext/900/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Lato;font-style:normal;font-weight:900;src:url(/cf-fonts/s/lato/5.0.18/latin/900/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Lato;font-style:italic;font-weight:400;src:url(/cf-fonts/s/lato/5.0.18/latin/400/italic.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Lato;font-style:italic;font-weight:400;src:url(/cf-fonts/s/lato/5.0.18/latin-ext/400/italic.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Lato;font-style:italic;font-weight:700;src:url(/cf-fonts/s/lato/5.0.18/latin-ext/700/italic.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Lato;font-style:italic;font-weight:700;src:url(/cf-fonts/s/lato/5.0.18/latin/700/italic.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Lato;font-style:italic;font-weight:900;src:url(/cf-fonts/s/lato/5.0.18/latin/900/italic.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Lato;font-style:italic;font-weight:900;src:url(/cf-fonts/s/lato/5.0.18/latin-ext/900/italic.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}</style>
      <meta name="twitter:title" content="codestorm">
    <meta name="twitter:description" content="...">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="https://shots.codepen.io/username/pen/raNxMWa-800.jpg?version=1742907000">


    <meta property="og:image" content="https://shots.codepen.io/username/pen/raNxMWa-800.jpg?version=1742907000" itemprop="thumbnailUrl">
    <meta property="og:title" content="codestorm">
    <meta property="og:url" content="https://codepen.io/Edwin-McCain/details/raNxMWa">
    <meta property="og:description" content="...">


  <link rel="alternate" type="application/json+oembed" href="https://codepen.io/api/oembed?url=https%3A%2F%2Fcodepen.io%2FEdwin-McCain%2Fpen%2FraNxMWa&amp;format=json" title="codestorm">


  <link rel="stylesheet" href="./script_files/global-29e205b89fa5377a7d301848f69f23b6c1755f42509b9126b14f26ab3c9a2b95.css" media="all">
  <link rel="stylesheet" href="./script_files/everypage-e46cc382.css">
  <link rel="stylesheet" href="./script_files/editor-74e9b05132d1286c2791b1bfde8ed3c2f6517e22230829453b1c02fc6fe88b04.css" media="all">

  
  <meta name="description" content="...">

  


<link rel="stylesheet" href="./script_files/twilight-5624f2aa0a9e5ad3c27da1db150d791e788247e197af02b4cd6db6fbc40f7354.css" id="cm-theme">

<style id="cm-font-family" class="cm-font-family" nonce="">
  
  .CodeMirror,
  .console-logs .console-line,
  .console-command-line-input,
  .console-message,
  .CodeMirror-hint {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo,
  monospace;
  }
</style>

<style id="cm-font-size" nonce="">
  .CodeMirror,
  .console-logs .console-line,
  .console-command-line-input,
  .console-message,
  .CodeMirror-hint {
    font-size: 15px;
  }
</style>






  

    <link rel="apple-touch-icon" type="image/png" href="https://cpwebassets.codepen.io/assets/favicon/apple-touch-icon-5ae1a0698dcc2402e9712f7d01ed509a57814f994c660df9f7a952f3060705ee.png">

    <meta name="apple-mobile-web-app-title" content="CodePen">

    <link rel="icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico">

    <link rel="mask-icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/logo-pin-b4b4269c16397ad2f0f7a01bcdf513a1994f4c94b8af2f191c09eb0d601762b1.svg" color="#111">




  <meta name="csrf-param" content="authenticity_token">
<meta name="csrf-token" content="6Fxt5M2mph7KzbIEFrZInflCZjqxgXihvoqijI0lVjqmsIq-H-JximPL7xgWrcWpuG2tGPGAoWAdoRSuWcut2w">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="apple-mobile-web-app-capable" content="yes">
<style id="_goober"> @keyframes go2264125279{from{transform:scale(0) rotate(45deg);opacity:0;}to{transform:scale(1) rotate(45deg);opacity:1;}}@keyframes go3020080000{from{transform:scale(0);opacity:0;}to{transform:scale(1);opacity:1;}}@keyframes go463499852{from{transform:scale(0) rotate(90deg);opacity:0;}to{transform:scale(1) rotate(90deg);opacity:1;}}@keyframes go1268368563{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}@keyframes go1310225428{from{transform:scale(0) rotate(45deg);opacity:0;}to{transform:scale(1) rotate(45deg);opacity:1;}}@keyframes go651618207{0%{height:0;width:0;opacity:0;}40%{height:0;width:6px;opacity:1;}100%{opacity:1;height:10px;}}@keyframes go901347462{from{transform:scale(0.6);opacity:0.4;}to{transform:scale(1);opacity:1;}}.go4109123758{z-index:9999;}.go4109123758 > *{pointer-events:auto;}</style><script src="./script_files/CWYDP2QE.json"></script><script src="./script_files/KVHtLEVcgM.js.download" async=""></script></head>

<body class="room-editor editor state-htmlOn-cssOn-jsOn twilight   layout-top  logged-in unsaved">
  

  
<header class="main-header" id="main-header"><div class="EditorHeader-module_root-cpo0V header-wrap HeaderWrap-module_root-PsKVw"><div class="Logo-module_root-ojP5q" data-component="Logo" data-test-id="logo"><a href="https://codepen.io/" class="Logo-module_small-T4UEU"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4zm-8.6 0v20L27.1 44.8 12 34.8zM8.6 42.8 19.3 50 8.6 57.2zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50zm4.3 27.5v-20l18.6-12.5 15 10.1zm37.1-30.5L80.7 50l10.8-7.2z"></path></svg><span class="ScreenReaderText-module_root-jASUi">CodePen Home</span></a><a href="https://codepen.io/" class="Logo-module_large-J2pKy"><svg fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" viewBox="0 0 138 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path></svg><span class="ScreenReaderText-module_root-jASUi">CodePen Home</span></a></div><div class="ItemTitle-module_root-tJA+7" data-test-id="item-title-area"><div class="ItemTitle-module_text-PYYCs" data-view="pen"><h1 class="ItemTitle-module_title-6kJVb" id="item-title"><span class="ItemTitle-module_titleLink-1hRhU" id="editable-title-span">codestorm</span><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="ItemTitle-module_iconEdit-aYAZJ"><path d="M24.56 92.536 0 100l7.453-24.583c6.356-.244 17.322 10.792 17.107 17.119zM96.617 32.082l-.475.471L67.383 3.766l.472-.472c12.927-12.94 42.016 15.517 28.762 28.788zM61.64 9.516l28.758 28.785-46.303 46.345c-1.222 1.221-2.234.884-2.234.884l2.314-15.356-14.454.074.072-14.468-15.342 2.312s-.34-1.011.883-2.234z"></path></svg></h1><div class="ItemTitle-module_by-nYpg9"><a class="ItemTitle-module_ownerLink-CLyo7" href="https://codepen.io/Edwin-McCain">Edwin McCain </a></div></div></div><button title="Love" data-anon="false" data-view="pen" data-love-level="1" data-item="Pen" data-hashid="raNxMWa" class="Button-module_root-xw+9D EditorHeaderPen-module_loveButton-7F910 loves heart-button"><svg viewBox="-2 0 105 92" xmlns="http://www.w3.org/2000/svg" class="LoveButtonIcon-module_root-3tVfn" data-love-level="1"><path d="M85.24 2.67C72.29-3.08 55.75 2.67 50 14.9 44.25 2 27-3.8 14.76 2.67 1.1 9.14-5.37 25 5.42 44.38 13.33 58 27 68.11 50 86.81 73.73 68.11 87.39 58 94.58 44.38c10.79-18.7 4.32-35.24-9.34-41.71Z"></path></svg><span class="ScreenReaderText-module_root-jASUi">Love</span></button><div class="EditorHeaderPen-module_navigationWrap-4Dq5Z"><button aria-expanded="false" data-open="false" class="Button-module_root-xw+9D EditorHeaderPen-module_toggleActionsButton-E+eAn MobileNavButton-module_root-EApZk" data-size="mini" style="height: 35px; padding: 1px 3px 3px 7px; border-radius: 4px;"><div class="MobileNavButton-module_icon-uF4CA" aria-hidden="true"><span></span><svg viewBox="-122.9 121.1 105.9 61.9" xmlns="http://www.w3.org/2000/svg"><path d="m-63.2 180.3 43.5-43.5c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5-4-2.7-6.5-2.7-4.8 1-6.5 2.7L-69.9 161l-37.2-37.2c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.6c-1.9 1.8-2.8 4.2-2.8 6.6 0 2.3.9 4.6 2.6 6.5 11.4 11.5 41 41.2 43 43.3l.2.2c3.6 3.6 10.3 3.6 13.9 0z"></path></svg></div><span class="ScreenReaderText-module_root-jASUi">Pen Editor Menu</span></button><div aria-hidden="false" class="EditorHeaderPen-module_editorActions-76b6L" data-expanded="false"><button id="run" title="Com/Ctrl - Shift - 7 to Run" class="Button-module_root-xw+9D run" data-has-icon="true"><svg viewBox="0 0 20 20"><path d="M10.66 1.91a.833.833 0 0 1 1.18 0l2.5 2.5a.833.833 0 0 1 0 1.18l-2.5 2.5a.833.833 0 1 1-1.18-1.18l1.078-1.077h-1.321C7.46 5.833 5 8.293 5 11.25c0 2.956 2.46 5.417 5.417 5.417 2.956 0 5.416-2.46 5.416-5.417a.833.833 0 1 1 1.667 0c0 3.877-3.207 7.083-7.083 7.083-3.877 0-7.084-3.206-7.084-7.083s3.207-7.083 7.084-7.083h1.321l-1.077-1.078a.833.833 0 0 1 0-1.178z"></path></svg>Run</button><button data-test-id="save-button" id="update" class="Button-module_root-xw+9D EditorHeaderPenSaveButtonWithDropdown-module_mobileButton-qWD6-" data-has-icon="true" data-align="start"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M84.187 44.046c.084-.753.114-1.52.114-2.289 0-13.402-10.814-24.257-24.154-24.257-10.354 0-19.161 6.551-22.599 15.754-2.274-2.508-5.521-4.111-9.166-4.111-6.872 0-12.439 5.59-12.439 12.493 0 .816.084 1.606.239 2.38C7.014 45.534 0 53.472 0 63.095 0 73.824 8.648 82.5 19.323 82.5h61.354C91.351 82.5 100 73.824 100 63.095c0-9.505-6.823-17.38-15.813-19.049z"></path></svg> Save</button><span class="ButtonGroup-module_root-RfSlH EditorHeaderPenSaveButtonWithDropdown-module_root-LGUql"><button data-test-id="save-button" id="update" class="Button-module_root-xw+9D EditorHeaderPenSaveButtonWithDropdown-module_button-VHLNu" data-has-icon="true"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M84.187 44.046c.084-.753.114-1.52.114-2.289 0-13.402-10.814-24.257-24.154-24.257-10.354 0-19.161 6.551-22.599 15.754-2.274-2.508-5.521-4.111-9.166-4.111-6.872 0-12.439 5.59-12.439 12.493 0 .816.084 1.606.239 2.38C7.014 45.534 0 53.472 0 63.095 0 73.824 8.648 82.5 19.323 82.5h61.354C91.351 82.5 100 73.824 100 63.095c0-9.505-6.823-17.38-15.813-19.049z"></path></svg> Save</button><span class="DropdownControlled-module_root-3ewM0 ButtonWithDropdown-module_dropdown-FsFiR" data-direction="bottom left" data-open="false"><button aria-label="Save Options" aria-haspopup="menu" aria-expanded="false" aria-controls="oc-1742907154438" class="Button-module_root-xw+9D ButtonWithDropdownTrigger-module_root-QUiLE"><svg viewBox="-122.9 121.1 105.9 61.9" xmlns="http://www.w3.org/2000/svg" class="ButtonWithDropdownTrigger-module_icon-BjxRt DropdownArrowIcon-module_icon-w0Zif"><path d="m-63.2 180.3 43.5-43.5c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5-4-2.7-6.5-2.7-4.8 1-6.5 2.7L-69.9 161l-37.2-37.2c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.6c-1.9 1.8-2.8 4.2-2.8 6.6 0 2.3.9 4.6 2.6 6.5 11.4 11.5 41 41.2 43 43.3l.2.2c3.6 3.6 10.3 3.6 13.9 0z"></path></svg></button><div class="DropdownControlled-module_content-mxnG0" id="oc-1742907154438" role="menu" data-open="false" hidden="" data-direction="bottom left"></div></span></span><button data-test-id="edit-settings" id="edit-settings" title="Pen Settings" class="Button-module_root-xw+9D" data-has-icon="true"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M87.687 45.077c-.313-2.433-.816-4.807-1.542-7.079l8.145-11.73-5.827-7.515-.094-.123-5.824-7.514-12.955 5.577c-2.041-1.265-4.192-2.362-6.459-3.219L59.42 0H40.586l-3.709 13.474c-2.27.857-4.421 1.955-6.463 3.222l-12.957-5.577-5.825 7.514-.097.124-5.822 7.517 8.146 11.731a39.832 39.832 0 0 0-1.544 7.079L0 52.032l2.08 9.375.033.15 2.08 9.375 14.001.761a39.157 39.157 0 0 0 4.4 5.668l-2.396 14.227 8.416 4.173.138.067L37.169 100l9.309-10.796c1.161.109 2.335.173 3.524.173s2.358-.074 3.52-.184l9.317 10.804 8.415-4.173.141-.066 8.413-4.172-2.396-14.228a39.06 39.06 0 0 0 4.4-5.672l14-.759 2.078-9.375.035-.154L100 52.025zM50.003 34.51c8.435 0 15.272 7.035 15.272 15.719 0 8.679-6.839 15.717-15.272 15.717-8.436 0-15.272-7.038-15.272-15.717 0-8.684 6.838-15.719 15.272-15.719z"></path></svg>Settings</button><span class="DropdownControlled-module_root-3ewM0 EditorHeaderViewSwitcher_root-kz6-q" data-direction="bottom left" data-open="false"><button id="view-switcher-button" data-test-id="view-switcher-button" title="Change View" aria-haspopup="menu" aria-expanded="false" aria-controls="oc-1742907154439" class="Button-module_root-xw+9D"><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="EditorHeaderViewSwitcher_iconPen-jP26l"><path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 0 1 6 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 0 1 0 5.997zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0 1 13 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 0 1 7 5.997zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0 1 20 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0 1 14 5.997z"></path></svg></button><div class="DropdownControlled-module_content-mxnG0" id="oc-1742907154439" role="menu" data-open="false" hidden="" data-direction="bottom left"></div></span><div class="view-switcher EditorHeaderViewSwitcher_mobile-TM24l"><div class="EditorHeaderViewSwitcher_switch-thcS-"><nav class="EditorHeaderViewSwitcherLinks_linkList-b3AAG"><a class="EditorHeaderViewSwitcherLink_link-wYdA5 editor-link pen-link active" href="https://codepen.io/Edwin-McCain/pen/raNxMWa" id="pen-link">Editor View<span class="EditorHeaderViewSwitcherLink_linkMeta-rzMQe">/pen/<span data-href="https://blog.codepen.io/documentation/views/editor-view/" class="EditorHeaderViewSwitcherLink_learnMore-iaxpx"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="13" height="13"><path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path></svg></span></span></a><a class="EditorHeaderViewSwitcherLink_link-wYdA5 editor-link details-link" href="https://codepen.io/Edwin-McCain/details/raNxMWa" id="details-link">Details View<span class="EditorHeaderViewSwitcherLink_linkMeta-rzMQe">/details/<span data-href="https://blog.codepen.io/documentation/views/details-view/" class="EditorHeaderViewSwitcherLink_learnMore-iaxpx"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="13" height="13"><path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path></svg></span></span></a><a class="EditorHeaderViewSwitcherLink_link-wYdA5 editor-link full-link" href="https://codepen.io/Edwin-McCain/full/raNxMWa" id="full-link">Full Page View<span class="EditorHeaderViewSwitcherLink_linkMeta-rzMQe">/full/<span data-href="https://blog.codepen.io/documentation/views/full-page-view/" class="EditorHeaderViewSwitcherLink_learnMore-iaxpx"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="13" height="13"><path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path></svg></span></span></a><a class="EditorHeaderViewSwitcherLink_link-wYdA5 editor-link debug-link" href="https://codepen.io/pen/debug/raNxMWa" id="debug-link" target="_blank" rel="noopener">Debug mode<span class="EditorHeaderViewSwitcherLink_linkMeta-rzMQe">/debug/<span data-href="https://blog.codepen.io/documentation/views/debug-view/" class="EditorHeaderViewSwitcherLink_learnMore-iaxpx"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="13" height="13"><path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path></svg></span></span></a><a class="EditorHeaderViewSwitcherLink_link-wYdA5 editor-link live-link" href="https://codepen.io/Edwin-McCain/live/raNxMWa" id="live-link" target="_blank" rel="noopener"><span class="EditorHeaderViewSwitcherLink_badgePro-kVS91 BadgePro-module_root-EhalN BadgePro-module_svg-OztkH Badge-module_root-+zThw" title="PRO" data-test-id="pro-badge"><svg viewBox="0 0 32 16" xmlns="http://www.w3.org/2000/svg" style="width: 32px; height: 16px;"><rect fill="#ffdd40" height="16" rx="1.5" width="32"></rect><path d="M9.174 5.598c.834 0 1.214.44 1.214 1.113 0 .76-.422 1.113-1.182 1.113h-.56c-.094 0-.105-.011-.105-.11V5.708c0-.1.01-.11.106-.11zm.106 3.67c.76 0 1.404-.188 1.847-.563.56-.452.855-1.135.855-2.016 0-.893-.317-1.61-.887-2.039-.443-.33-.97-.507-1.857-.507H7.106c-.095 0-.106.011-.106.11v7.494c0 .099.01.11.106.11h1.33c.094 0 .105-.011.105-.11v-2.37c0-.099.01-.11.106-.11zM14.375 9.047c0-.077 0-.11.063-.11.053 0 .074.022.116.088l1.953 2.722c.074.099.084.11.18.11h1.635c.064 0 .095 0 .095-.022a.31.31 0 0 0-.053-.088c-.707-.96-1.425-1.885-2.132-2.854a.085.085 0 0 1-.02-.045c0-.022.01-.044.041-.055.95-.286 1.573-1.124 1.573-2.28 0-.96-.454-1.62-1.055-1.973-.539-.32-1.056-.397-1.943-.397H12.94c-.095 0-.105.011-.105.11v7.494c0 .099.02.11.116.11h1.32c.094 0 .105-.011.105-.11zm.654-3.515c.834 0 1.214.418 1.214 1.09 0 .76-.422 1.07-1.182 1.07h-.58c-.096 0-.106-.012-.106-.11v-1.94c0-.1.01-.11.105-.11zM26 8c0-2.182-1.636-4-3.726-4s-3.726 1.818-3.726 4 1.636 4 3.726 4S26 10.182 26 8zm-5.837 0c0-1.311.855-2.402 2.111-2.402 1.256 0 2.111 1.09 2.111 2.402 0 1.311-.855 2.402-2.11 2.402-1.257 0-2.112-1.09-2.112-2.402z"></path></svg></span>Live View<span class="EditorHeaderViewSwitcherLink_linkMeta-rzMQe">/live/<span data-href="http://blog.codepen.io/documentation/pro-features/live-view/" class="EditorHeaderViewSwitcherLink_learnMore-iaxpx"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="13" height="13"><path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path></svg></span></span></a><a class="EditorHeaderViewSwitcherLink_link-wYdA5 editor-link collab-link" href="https://codepen.io/Edwin-McCain/collab/raNxMWa" id="collab-link"><span class="EditorHeaderViewSwitcherLink_badgePro-kVS91 BadgePro-module_root-EhalN BadgePro-module_svg-OztkH Badge-module_root-+zThw" title="PRO" data-test-id="pro-badge"><svg viewBox="0 0 32 16" xmlns="http://www.w3.org/2000/svg" style="width: 32px; height: 16px;"><rect fill="#ffdd40" height="16" rx="1.5" width="32"></rect><path d="M9.174 5.598c.834 0 1.214.44 1.214 1.113 0 .76-.422 1.113-1.182 1.113h-.56c-.094 0-.105-.011-.105-.11V5.708c0-.1.01-.11.106-.11zm.106 3.67c.76 0 1.404-.188 1.847-.563.56-.452.855-1.135.855-2.016 0-.893-.317-1.61-.887-2.039-.443-.33-.97-.507-1.857-.507H7.106c-.095 0-.106.011-.106.11v7.494c0 .099.01.11.106.11h1.33c.094 0 .105-.011.105-.11v-2.37c0-.099.01-.11.106-.11zM14.375 9.047c0-.077 0-.11.063-.11.053 0 .074.022.116.088l1.953 2.722c.074.099.084.11.18.11h1.635c.064 0 .095 0 .095-.022a.31.31 0 0 0-.053-.088c-.707-.96-1.425-1.885-2.132-2.854a.085.085 0 0 1-.02-.045c0-.022.01-.044.041-.055.95-.286 1.573-1.124 1.573-2.28 0-.96-.454-1.62-1.055-1.973-.539-.32-1.056-.397-1.943-.397H12.94c-.095 0-.105.011-.105.11v7.494c0 .099.02.11.116.11h1.32c.094 0 .105-.011.105-.11zm.654-3.515c.834 0 1.214.418 1.214 1.09 0 .76-.422 1.07-1.182 1.07h-.58c-.096 0-.106-.012-.106-.11v-1.94c0-.1.01-.11.105-.11zM26 8c0-2.182-1.636-4-3.726-4s-3.726 1.818-3.726 4 1.636 4 3.726 4S26 10.182 26 8zm-5.837 0c0-1.311.855-2.402 2.111-2.402 1.256 0 2.111 1.09 2.111 2.402 0 1.311-.855 2.402-2.11 2.402-1.257 0-2.112-1.09-2.112-2.402z"></path></svg></span>Collab Mode<span class="EditorHeaderViewSwitcherLink_linkMeta-rzMQe">/collab/<span data-href="https://blog.codepen.io/documentation/pro-features/collab-mode/" class="EditorHeaderViewSwitcherLink_learnMore-iaxpx"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="13" height="13"><path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path></svg></span></span></a><a class="EditorHeaderViewSwitcherLink_link-wYdA5 editor-link professor-link" href="https://codepen.io/Edwin-McCain/professor/raNxMWa" id="professor-link"><span class="EditorHeaderViewSwitcherLink_badgePro-kVS91 BadgePro-module_root-EhalN BadgePro-module_svg-OztkH Badge-module_root-+zThw" title="PRO" data-test-id="pro-badge"><svg viewBox="0 0 32 16" xmlns="http://www.w3.org/2000/svg" style="width: 32px; height: 16px;"><rect fill="#ffdd40" height="16" rx="1.5" width="32"></rect><path d="M9.174 5.598c.834 0 1.214.44 1.214 1.113 0 .76-.422 1.113-1.182 1.113h-.56c-.094 0-.105-.011-.105-.11V5.708c0-.1.01-.11.106-.11zm.106 3.67c.76 0 1.404-.188 1.847-.563.56-.452.855-1.135.855-2.016 0-.893-.317-1.61-.887-2.039-.443-.33-.97-.507-1.857-.507H7.106c-.095 0-.106.011-.106.11v7.494c0 .099.01.11.106.11h1.33c.094 0 .105-.011.105-.11v-2.37c0-.099.01-.11.106-.11zM14.375 9.047c0-.077 0-.11.063-.11.053 0 .074.022.116.088l1.953 2.722c.074.099.084.11.18.11h1.635c.064 0 .095 0 .095-.022a.31.31 0 0 0-.053-.088c-.707-.96-1.425-1.885-2.132-2.854a.085.085 0 0 1-.02-.045c0-.022.01-.044.041-.055.95-.286 1.573-1.124 1.573-2.28 0-.96-.454-1.62-1.055-1.973-.539-.32-1.056-.397-1.943-.397H12.94c-.095 0-.105.011-.105.11v7.494c0 .099.02.11.116.11h1.32c.094 0 .105-.011.105-.11zm.654-3.515c.834 0 1.214.418 1.214 1.09 0 .76-.422 1.07-1.182 1.07h-.58c-.096 0-.106-.012-.106-.11v-1.94c0-.1.01-.11.105-.11zM26 8c0-2.182-1.636-4-3.726-4s-3.726 1.818-3.726 4 1.636 4 3.726 4S26 10.182 26 8zm-5.837 0c0-1.311.855-2.402 2.111-2.402 1.256 0 2.111 1.09 2.111 2.402 0 1.311-.855 2.402-2.11 2.402-1.257 0-2.112-1.09-2.112-2.402z"></path></svg></span>Professor Mode<span class="EditorHeaderViewSwitcherLink_linkMeta-rzMQe">/professor/<span data-href="http://blog.codepen.io/documentation/pro-features/professor-mode/" class="EditorHeaderViewSwitcherLink_learnMore-iaxpx"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="13" height="13"><path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path></svg></span></span></a><a class="EditorHeaderViewSwitcherLink_link-wYdA5 editor-link pres-link" href="https://codepen.io/Edwin-McCain/pres/raNxMWa" id="pres-link"><span class="EditorHeaderViewSwitcherLink_badgePro-kVS91 BadgePro-module_root-EhalN BadgePro-module_svg-OztkH Badge-module_root-+zThw" title="PRO" data-test-id="pro-badge"><svg viewBox="0 0 32 16" xmlns="http://www.w3.org/2000/svg" style="width: 32px; height: 16px;"><rect fill="#ffdd40" height="16" rx="1.5" width="32"></rect><path d="M9.174 5.598c.834 0 1.214.44 1.214 1.113 0 .76-.422 1.113-1.182 1.113h-.56c-.094 0-.105-.011-.105-.11V5.708c0-.1.01-.11.106-.11zm.106 3.67c.76 0 1.404-.188 1.847-.563.56-.452.855-1.135.855-2.016 0-.893-.317-1.61-.887-2.039-.443-.33-.97-.507-1.857-.507H7.106c-.095 0-.106.011-.106.11v7.494c0 .099.01.11.106.11h1.33c.094 0 .105-.011.105-.11v-2.37c0-.099.01-.11.106-.11zM14.375 9.047c0-.077 0-.11.063-.11.053 0 .074.022.116.088l1.953 2.722c.074.099.084.11.18.11h1.635c.064 0 .095 0 .095-.022a.31.31 0 0 0-.053-.088c-.707-.96-1.425-1.885-2.132-2.854a.085.085 0 0 1-.02-.045c0-.022.01-.044.041-.055.95-.286 1.573-1.124 1.573-2.28 0-.96-.454-1.62-1.055-1.973-.539-.32-1.056-.397-1.943-.397H12.94c-.095 0-.105.011-.105.11v7.494c0 .099.02.11.116.11h1.32c.094 0 .105-.011.105-.11zm.654-3.515c.834 0 1.214.418 1.214 1.09 0 .76-.422 1.07-1.182 1.07h-.58c-.096 0-.106-.012-.106-.11v-1.94c0-.1.01-.11.105-.11zM26 8c0-2.182-1.636-4-3.726-4s-3.726 1.818-3.726 4 1.636 4 3.726 4S26 10.182 26 8zm-5.837 0c0-1.311.855-2.402 2.111-2.402 1.256 0 2.111 1.09 2.111 2.402 0 1.311-.855 2.402-2.11 2.402-1.257 0-2.112-1.09-2.112-2.402z"></path></svg></span>Presentation Mode<span class="EditorHeaderViewSwitcherLink_linkMeta-rzMQe">/pres/<span data-href="http://blog.codepen.io/documentation/pro-features/presentation-mode/" class="EditorHeaderViewSwitcherLink_learnMore-iaxpx"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="13" height="13"><path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path></svg></span></span></a></nav></div></div></div></div><span class="ButtonGroup-module_root-RfSlH BookmarkButton-module_bookmarkButtonGroup-XHnqF"><button title="Remove Bookmark" class="Button-module_root-xw+9D BookmarkButton-module_bookmarkButton-8PJ4t" data-bookmarked="true"><svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18"><path d="M0 1.8C0 .81.78 0 1.75 0h10.5C13.22 0 14 .81 14 1.8v15.3c0 .34-.18.65-.47.8-.29.15-.64.13-.91-.07L7 13.7l-5.62 4.13c-.27.2-.62.22-.91.07a.893.893 0 0 1-.47-.8V1.8Z" data-name="Layer 1"></path></svg></button><button aria-haspopup="true" aria-expanded="false" aria-label="View Bookmarks" title="View Bookmarks" class="Button-module_root-xw+9D ButtonWithDropdownTrigger-module_root-QUiLE"><svg viewBox="-122.9 121.1 105.9 61.9" xmlns="http://www.w3.org/2000/svg" class="ButtonWithDropdownTrigger-module_icon-BjxRt DropdownArrowIcon-module_icon-w0Zif"><path d="m-63.2 180.3 43.5-43.5c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5-4-2.7-6.5-2.7-4.8 1-6.5 2.7L-69.9 161l-37.2-37.2c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.6c-1.9 1.8-2.8 4.2-2.8 6.6 0 2.3.9 4.6 2.6 6.5 11.4 11.5 41 41.2 43 43.3l.2.2c3.6 3.6 10.3 3.6 13.9 0z"></path></svg></button></span><nav class="DropdownControlled-module_root-3ewM0 HeaderWrap-module_userMenu-Ocnx8 UserMenu-module_userMenuDropdownParent-+nd1x" data-direction="bottom left" data-open="false"><button class="UserMenu-module_userMenuButton-b38jZ" data-test-id="user-menu-button" title="User Menu" aria-haspopup="menu" aria-expanded="false" aria-controls="oc-1742907153284"><span id="sessionUserAvatar" class="UserMenu-module_sessionUserAvatar-d-j2e" data-test-id="user-avatar"></span><style>
            #sessionContextAvatar {
                background-image: url('https://assets.codepen.io/t-1/user-default-avatar.jpg?format=auto&version=0&width=80&height=80');
              }
            #sessionUserAvatar {
                background-image: url('https://assets.codepen.io/t-1/user-default-avatar.jpg?format=auto&version=0&width=80&height=80');
            }</style><span class="ScreenReaderText-module_root-jASUi">User Menu</span></button><div class="DropdownControlled-module_content-mxnG0" id="oc-1742907153284" role="menu" data-open="false" hidden="" data-direction="bottom left"></div></nav></div></header>
<div class="item-settings-modal tab-layout tab-layout-modal pen" id="item-settings-modal">

  <header class="item-settings-modal-header tab-layout-header">
    <h2 class="item-settings-modal-header-title tab-layout-header-title">Pen Settings</h2>
    <div class="save-and-close-wrap">
      <button type="button" class="button mini-button button-no-right-margin close" id="top-close-settings">
        <svg class="icon-x" viewBox="0 0 100 100">
          <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
        </svg>
      </button>
    </div>
  </header>

  <div class="tabs tab-layout-wrapper settings-tabs-wrapper">

    <nav id="settings-tabs" class="no-mobile-nav tab-layout-tabs item-settings-tabs  notranslate" translate="no">

      <div class="tab-layout-tab-group">
            <a id="settings-html-tab" href="https://codepen.io/Edwin-McCain/pen/raNxMWa#settings-html" class="settings-tab-html" data-type="html">
              HTML
            </a>
            <a id="settings-css-tab" href="https://codepen.io/Edwin-McCain/pen/raNxMWa#settings-css" class="settings-tab-css" data-type="css">
              CSS
            </a>
            <a id="settings-js-tab" href="https://codepen.io/Edwin-McCain/pen/raNxMWa#settings-js" class="settings-tab-js active" data-type="js">
              JS
            </a>

      </div>

      <div class="tab-layout-tab-group">
            <a id="settings-details-tab" href="https://codepen.io/Edwin-McCain/pen/raNxMWa#settings-details" class="settings-tab-details" data-type="details">
              Pen Details
            </a>
            <a id="settings-privacy-tab" href="https://codepen.io/Edwin-McCain/pen/raNxMWa#settings-privacy" class="settings-tab-privacy" data-type="privacy">
              Privacy
                <span style="border-radius: 2px; padding: 1px 6px 2px 5px; color: black !important; background: var(--cp-color-yellow); white-space: nowrap; text-shadow: none; letter-spacing: 0; font-size: 71%; position: relative; top: -1px;">PRO</span>
            </a>
            <a id="settings-behavior-tab" href="https://codepen.io/Edwin-McCain/pen/raNxMWa#settings-behavior" class="settings-tab-behavior" data-type="behavior">
              Behavior
            </a>
            <a id="settings-editor-tab" href="https://codepen.io/Edwin-McCain/pen/raNxMWa#settings-editor" class="settings-tab-editor" data-type="editor">
              Editor
            </a>
            <a id="settings-template-tab" href="https://codepen.io/Edwin-McCain/pen/raNxMWa#settings-template" class="settings-tab-template" data-type="template">
              Template
            </a>
            <a id="settings-screenshot-tab" href="https://codepen.io/Edwin-McCain/pen/raNxMWa#settings-screenshot" class="settings-tab-screenshot" data-type="screenshot">
              Screenshot
                <span style="border-radius: 2px; padding: 1px 6px 2px 5px; color: black !important; background: var(--cp-color-yellow); white-space: nowrap; text-shadow: none; letter-spacing: 0; font-size: 71%; position: relative; top: -1px;">PRO</span>
            </a>
      </div>
    </nav>

      <div class="settings tab-page" id="settings-html">
        <h3 aria-label="HTML">HTML</h3>

<div class="settings-row top-label-form normal-labels">

  <h4>
    <label for="html-preprocessor">
      HTML Preprocessor
    </label>
  </h4>

  <div class="help-flyout-link">
    <svg class="icon-help" viewBox="0 0 100 100">
      <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
    </svg>
    <div class="help-flyout help-flyout-reverse">
      <h5>About HTML Preprocessors</h5>
      <svg class="icon-x" viewBox="0 0 100 100">
        <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
      </svg>
      <p>HTML preprocessors can make writing HTML more powerful or convenient. For instance, Markdown is designed to be easier to write and read for text documents and you could write a loop in Pug.</p>
      <p><a href="https://blog.codepen.io/documentation/editor/using-html-preprocessors/" target="_blank" rel="noopener">Learn more</a> · <a href="https://codepen.io/versions/" target="_blank" rel="noopener">Versions</a></p>
    </div>
  </div>

  <div class="custom-select-wrap">
    <select name="html-preprocessor" id="html-preprocessor" class="fullwidth">
          <option value="none">None</option>
          <option value="haml">Haml</option>
          <option value="markdown">Markdown</option>
          <option value="slim">Slim</option>
          <option value="pug">Pug</option>
    </select>
    <div class="select-icon">
      <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
        <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
      </svg>
      <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
        <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
      </svg>
    </div>
  </div>

</div>

<div class="settings-row top-label-form normal-labels">

  <h4>
    <label for="html-classes">Add Class(es) to &lt;html&gt;</label>
  </h4>

  <div class="help-flyout-link">
    <svg class="icon-help" viewBox="0 0 100 100">
      <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
    </svg>
    <div class="help-flyout help-flyout-reverse">
      <h5>Adding Classes</h5>
      <svg class="icon-x" viewBox="0 0 100 100">
        <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
      </svg>
      <p>In CodePen, whatever you write in the HTML editor is what goes within the <code>&lt;body&gt;</code> tags in <a target="_blank" rel="noopener" href="https://blog.codepen.io/documentation/features/preview-template/">a basic HTML5 template</a>. So you don't have access to higher-up elements like the <code>&lt;html&gt;</code> tag. If you want to add classes there that can affect the whole document, this is the place to do it.</p>
    </div>
  </div>

  <input type="text" id="html-classes" name="html-classes" class="fullwidth" placeholder="e.g. single post post-1234" maxlength="250">

</div>

<div class="settings-row top-label-form normal-labels">

  <h4>
    <label for="head-content">Stuff for &lt;head&gt;</label>
  </h4>

  <div class="help-flyout-link">
    <svg class="icon-help" viewBox="0 0 100 100">
      <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
    </svg>
    <div class="help-flyout help-flyout-reverse">
      <h5>About the &lt;head&gt;</h5>
      <svg class="icon-x" viewBox="0 0 100 100">
        <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
      </svg>
      <p>In CodePen, whatever you write in the HTML editor is what goes within the <code>&lt;body&gt;</code> tags in <a target="_blank" rel="noopener" href="https://blog.codepen.io/documentation/features/preview-template/">a basic HTML5 template</a>. If you need things in the <code>&lt;head&gt;</code> of the document, put that code here.</p>
    </div>
  </div>

  <div class="head-content-wrapper">
    <textarea id="head-content" name="head-content" class="fullwidth is-code head-content notranslate" translate="no" placeholder="e.g. &lt;meta&gt;, &lt;link&gt;, &lt;script&gt;"></textarea>
    <span class="insecure-resource-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">!</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
          </svg>
          <h5>Insecure Resource</h5>
          <p>The resource you are linking to is using the 'http' protocol, which may not work when the browser is using https.</p>
        </div>
      </div>
    </span>
  </div>

  <button class="button mini-button button-medium" id="meta-tag-insert">↑ Insert the most common viewport meta tag</button>

</div>

      </div>
      <div class="settings tab-page" id="settings-css">
        <h3 aria-label="CSS">CSS</h3>

<div class="settings-row top-label-form normal-labels">

  <h4>
    <label for="css-preprocessor">
      CSS Preprocessor
    </label>
  </h4>

  <div class="help-flyout-link">
    <svg class="icon-help" viewBox="0 0 100 100">
      <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
    </svg>
    <div class="help-flyout help-flyout-reverse">
      <h5>About CSS Preprocessors</h5>
      <svg class="icon-x" viewBox="0 0 100 100">
        <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
      </svg>
      <p>CSS preprocessors help make authoring CSS easier. All of them offer things like variables and mixins to provide convenient abstractions.</p>
      <p><a href="https://blog.codepen.io/documentation/editor/using-css-preprocessors/" target="_blank">Learn more</a> · <a href="https://codepen.io/versions/" target="_blank">Versions</a></p>
    </div>
  </div>

  <div class="custom-select-wrap">
    <select name="css-preprocessor" id="css-preprocessor" class="fullwidth css-preprocessor">
        <option value="none">None</option>
        <option value="less">Less</option>
        <option value="scss">SCSS</option>
        <option value="sass">Sass</option>
        <option value="stylus">Stylus</option>
        <option value="postcss">PostCSS</option>
    </select>
    <div class="select-icon">
      <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
        <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
      </svg>
      <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
        <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
      </svg>
    </div>
  </div>

  <div id="need-an-addon" class="align-right hide">
    <a id="css-need-an-addon-button" href="https://codepen.io/Edwin-McCain/pen/raNxMWa#0" class="button button-medium mini-button need-an-addon-button">
      Need an add-on?
    </a>
  </div>

  <div class="add-ons add-ons-scss hide" id="add-ons"></div>

</div>

<div id="startercss-options-form" class="settings-row top-label-form">

  <h4>
    CSS Base
  </h4>

  <div class="help-flyout-link">
    <svg class="icon-help" viewBox="0 0 100 100">
      <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
    </svg>
    <div class="help-flyout help-flyout-reverse">
      <h5>About CSS Base</h5>
      <svg class="icon-x" viewBox="0 0 100 100">
        <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
      </svg>
      <p>It's a common practice to apply CSS to a page that styles elements such that they are consistent across all browsers. We offer two of the most popular choices: <a href="http://necolas.github.io/normalize.css/" target="_blank" rel="noopener">normalize.css</a> and a <a href="http://meyerweb.com/eric/tools/css/reset/" target="_blank" rel="noopener">reset</a>. Or, choose <b>Neither</b> and nothing will be applied.</p>
    </div>
  </div>

  <ul class="radio-list">
      <li>
        <input type="radio" id="startercss-normalize" name="startercss" checked="" value="normalize">
        <label for="startercss-normalize" class="small-inline">Normalize</label>
      </li>
      <li>
        <input type="radio" id="startercss-reset" name="startercss" checked="" value="reset">
        <label for="startercss-reset" class="small-inline">Reset</label>
      </li>
      <li>
        <input type="radio" id="startercss-neither" name="startercss" checked="" value="neither">
        <label for="startercss-neither" class="small-inline">Neither</label>
      </li>
  </ul>

</div>

<div id="prefix-options-form" class="settings-row top-label-form">

  <h4>
    Vendor Prefixing
  </h4>

  <div class="help-flyout-link">
    <svg class="icon-help" viewBox="0 0 100 100">
      <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
    </svg>
    <div class="help-flyout help-flyout-reverse">
      <h5>About Vendor Prefixing</h5>
      <svg class="icon-x" viewBox="0 0 100 100">
        <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
      </svg>
      <p>To get the best cross-browser support, it is a common practice to apply vendor prefixes to CSS properties and values that require them to work. For instance <code>-webkit-</code> or <code>-moz-</code>.</p>
      <p>We offer two popular choices: <a href="https://github.com/postcss/autoprefixer" target="blank" rel="noopener">Autoprefixer</a> (which processes your CSS server-side) and <a href="http://leaverou.github.io/prefixfree/" target="_blank" rel="noopener">-prefix-free</a> (which applies prefixes via a script, client-side).</p>
    </div>
  </div>

  <ul class="radio-list">
      <li>
        <input type="radio" id="prefix-autoprefixer" name="prefix" value="autoprefixer">
        <label for="prefix-autoprefixer" class="small-inline">Autoprefixer</label>
      </li>
      <li>
        <input type="radio" id="prefix-prefixfree" name="prefix" value="prefixfree">
        <label for="prefix-prefixfree" class="small-inline">Prefixfree</label>
      </li>
      <li>
        <input type="radio" id="prefix-neither" name="prefix" value="neither">
        <label for="prefix-neither" class="small-inline">Neither</label>
      </li>
  </ul>
</div>

<div id="external-css-resources" class="settings-row">

  <h4>
    Add External Stylesheets/Pens
  </h4>

  <p>Any URLs added here will be added as <code>&lt;link&gt;</code>s in order, and before the CSS in the editor. You can use the CSS from another Pen by using its URL and the proper <a href="https://blog.codepen.io/documentation/url-extensions/">URL extension</a>.</p>

  <div class="resource-search-bar">
    <svg class="icon icon-mag" viewBox="0 0 56.7 56.7">
      <path d="M42.8,7.3C33-2.4,17.1-2.4,7.3,7.3c-9.8,9.8-9.8,25.7,0,35.5c8.7,8.7,22.2,9.7,32,2.9l9.6,9.6c1.8,1.8,4.7,1.8,6.4,0
	c1.8-1.8,1.8-4.7,0-6.4l-9.6-9.6C52.5,29.5,51.5,16,42.8,7.3z M36.6,36.6c-6.4,6.4-16.7,6.4-23.1,0s-6.4-16.7,0-23.1
	c6.4-6.4,16.7-6.4,23.1,0C43,19.9,43,30.3,36.6,36.6z"></path>
    </svg>

    <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;"><input id="external-css-search" type="text" value="" placeholder="Search for resources (Bootstrap, Foundation, Animate.css...)" class="aa-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="both" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="position: relative; vertical-align: top;"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: Lato, &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Tahoma, sans-serif; font-size: 15px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><span class="aa-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none; right: auto;"><div class="aa-dataset-1"></div><div class="aa-dataset-2"></div></span></span>
  </div>

  <div class="algolia-shoutout">
    <a href="https://www.algolia.com/?utm_source=react-instantsearch&amp;utm_medium=website&amp;utm_content=codepen.io&amp;utm_campaign=poweredby" target="_blank">
      Powered by <img alt="Algolia" src="./script_files/algolia-9e1c0c887f4db420704b2a79926864019ef156bcecc9d5774a7e4eaa731fc5b5.svg">
    </a>
  </div>

  <div class="help-flyout-link">
    <svg class="icon-help" viewBox="0 0 100 100">
      <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
    </svg>
    <div class="help-flyout help-flyout-reverse">
      <h5>About External Resources</h5>
      <svg class="icon-x" viewBox="0 0 100 100">
        <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
      </svg>
      <p>You can apply CSS to your Pen from any stylesheet on the web. Just put a URL to it here and we'll apply it, in the order you have them, before the CSS in the Pen itself.</p>
      <p>You can also link to another Pen here (use the <code>.css</code> <a href="https://blog.codepen.io/documentation/url-extensions/">URL Extension</a>) and we'll pull the CSS from that Pen and include it. If it's using a <em>matching</em> preprocessor, use the appropriate URL Extension and we'll combine the code before preprocessing, so you can use the linked Pen as a true dependency.</p>
      <p><a href="https://blog.codepen.io/documentation/editor/adding-external-resources/" target="_blank" rel="noopener">Learn more</a></p>
    </div>
  </div>

  <div id="css-external-resources" class="external-resource-wrapper ui-sortable">
<div data-view-id="33127340" class="external-resource-url-row">

    <span class="move-external-url">
      <svg viewBox="0 0 17 20" class="icon-drag-handle" width="20" height="17">
        <path d="m1.5 3a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3z"></path>
      </svg>
    </span>

    <input id="external-resource-input-33127340" class="fullwidth css-resource external-resource" type="text" pattern="^((ftp|http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&amp;%@!\-\/]))?$" name="external-css" placeholder="https://yourwebsite.com/style.css" value="" data-view-id="33127340">

    <span class="insecure-resource-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
          </svg>
          <h5>Insecure Resource</h5>
          <p>You are linking to a resource using the non-secure http:// protocol, which may not work when the browser is using https:// like CodePen enforces.</p>
        </div>
      </div>
    </span>

    <span class="not-using-url-extension-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
          </svg>
          <h5>URL Extension Required</h5>
          <p>When linking another Pen as a resource, make sure you use a <a href="https://blog.codepen.io/documentation/url-extensions/">URL Extension</a> of the type of code you want to link to. Either <code>.css</code>, <code>.js</code>, or the extension of a matching code processor.</p>
        </div>
      </div>
    </span>

    <div class="resource-actions">
      <span class="remove-external-url external-url-option" data-view-id="33127340">
        <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
          <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
        </svg>
      </span>

      <a id="external-resource-input-view-link-33127340" class="open-external-url external-url-option" target="_blank" rel="noopener" data-view-id="33127340" href="https://codepen.io/Edwin-McCain/pen/raNxMWa">
        <svg viewBox="0 0 30.5 16.5" id="icon-eye" width="14" height="14">
          <path d="M15.3,0C8.9,0,3.3,3.3,0,8.3c3.3,5,8.9,8.3,15.3,8.3c6.4,0,12-3.3,15.3-8.3C27.3,3.3,21.7,0,15.3,0z M15.3,14.5 c-3.4,0-6.2-2.8-6.2-6.2C9,4.8,11.8,2,15.3,2c3.4,0,6.2,2.8,6.2,6.2C21.5,11.7,18.7,14.5,15.3,14.5z"></path>
        </svg>
      </a>
    </div>

  </div><div data-view-id="32917104" class="external-resource-url-row">

    <span class="move-external-url">
      <svg viewBox="0 0 17 20" class="icon-drag-handle" width="20" height="17">
        <path d="m1.5 3a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3z"></path>
      </svg>
    </span>

    <input id="external-resource-input-32917104" class="fullwidth css-resource external-resource" type="text" pattern="^((ftp|http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&amp;%@!\-\/]))?$" name="external-css" placeholder="https://codepen.io/username/pen/aBcDef.css" value="" data-view-id="32917104">

    <span class="insecure-resource-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
          </svg>
          <h5>Insecure Resource</h5>
          <p>You are linking to a resource using the non-secure http:// protocol, which may not work when the browser is using https:// like CodePen enforces.</p>
        </div>
      </div>
    </span>

    <span class="not-using-url-extension-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
          </svg>
          <h5>URL Extension Required</h5>
          <p>When linking another Pen as a resource, make sure you use a <a href="https://blog.codepen.io/documentation/url-extensions/">URL Extension</a> of the type of code you want to link to. Either <code>.css</code>, <code>.js</code>, or the extension of a matching code processor.</p>
        </div>
      </div>
    </span>

    <div class="resource-actions">
      <span class="remove-external-url external-url-option" data-view-id="32917104">
        <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
          <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
        </svg>
      </span>

      <a id="external-resource-input-view-link-32917104" class="open-external-url external-url-option" target="_blank" rel="noopener" data-view-id="32917104" href="https://codepen.io/Edwin-McCain/pen/raNxMWa">
        <svg viewBox="0 0 30.5 16.5" id="icon-eye" width="14" height="14">
          <path d="M15.3,0C8.9,0,3.3,3.3,0,8.3c3.3,5,8.9,8.3,15.3,8.3c6.4,0,12-3.3,15.3-8.3C27.3,3.3,21.7,0,15.3,0z M15.3,14.5 c-3.4,0-6.2-2.8-6.2-6.2C9,4.8,11.8,2,15.3,2c3.4,0,6.2,2.8,6.2,6.2C21.5,11.7,18.7,14.5,15.3,14.5z"></path>
        </svg>
      </a>
    </div>

  </div></div>

<script id="css-external-resources-template" nonce="" type="text/template">
  <div data-view-id="<%= view_id %>" class="external-resource-url-row <%= insecure_resource %>">

    <span class="move-external-url">
      <svg viewBox="0 0 17 20" class="icon-drag-handle" width="20" height="17">
        <path d="m1.5 3a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3z"/>
      </svg>
    </span>

    <input
      id="external-resource-input-<%= view_id %>"
      class="fullwidth css-resource external-resource"
      type="text"
      pattern="^((ftp|http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$"
      name="external-css"
      placeholder="<%= placeholder %>"
      value="<%= url %>"
      data-view-id="<%= view_id %>">

    <span class="insecure-resource-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"/>
          </svg>
          <h5>Insecure Resource</h5>
          <p>You are linking to a resource using the non-secure http:// protocol, which may not work when the browser is using https:// like CodePen enforces.</p>
        </div>
      </div>
    </span>

    <span class="not-using-url-extension-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"/>
          </svg>
          <h5>URL Extension Required</h5>
          <p>When linking another Pen as a resource, make sure you use a <a href="https://blog.codepen.io/documentation/url-extensions/">URL Extension</a> of the type of code you want to link to. Either <code>.css</code>, <code>.js</code>, or the extension of a matching code processor.</p>
        </div>
      </div>
    </span>

    <div class="resource-actions">
      <span class="remove-external-url external-url-option" data-view-id="<%= view_id %>">
        <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
          <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"/>
        </svg>
      </span>

      <a id="external-resource-input-view-link-<%= view_id %>" class="open-external-url external-url-option" target="_blank" rel="noopener" data-view-id="<%= view_id %>" href="<%= url %>">
        <svg viewBox="0 0 30.5 16.5" id="icon-eye" width="14" height="14">
          <path d="M15.3,0C8.9,0,3.3,3.3,0,8.3c3.3,5,8.9,8.3,15.3,8.3c6.4,0,12-3.3,15.3-8.3C27.3,3.3,21.7,0,15.3,0z M15.3,14.5 c-3.4,0-6.2-2.8-6.2-6.2C9,4.8,11.8,2,15.3,2c3.4,0,6.2,2.8,6.2,6.2C21.5,11.7,18.7,14.5,15.3,14.5z"/>
        </svg>
      </a>
    </div>

  </div>
</script>


  <div class="external-resource-actions group">
    <span id="add-css-resource" class="button mini-button button-medium add-resource" data-type="css">
      <span data-type="css">+ add another resource</span>
    </span>
  </div>

</div>

      </div>
      <div class="settings tab-page active" id="settings-js">
        <div class="item-settings-javascript normal-labels">


    <h3>
      JavaScript
    </h3>

    <div class="item-settings-javascript-preprocessor settings-row">

      <h4>
        <label for="js-preprocessor">
          JavaScript Preprocessor
        </label>
      </h4>

      <div class="help-flyout-link">
        <svg class="icon-help" viewBox="0 0 100 100" width="14" height="14">
          <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
        </svg>
        <div class="help-flyout help-flyout-reverse">
          <h5>About JavaScript Preprocessors</h5>
          <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
          </svg>
          <p>JavaScript preprocessors can help make authoring JavaScript easier and more convenient.</p>
          <p><a href="https://blog.codepen.io/documentation/editor/using-js-preprocessors/" target="_blank" rel="noopener">Learn more</a> · <a href="https://codepen.io/versions/" target="_blank">Versions</a></p>
        </div>
      </div>

      <div class="custom-select-wrap">
        <select name="js-preprocessor" id="js-preprocessor" class="fullwidth">
            <option value="none">None</option>
            <option value="babel">Babel</option>
            <option value="typescript">TypeScript</option>
            <option value="coffeescript">CoffeeScript</option>
            <option value="livescript">LiveScript</option>
        </select>
        <div class="select-icon">
          <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
            <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
          </svg>
          <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
            <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
          </svg>
        </div>
      </div>

      <p><small>Babel includes JSX processing.</small></p>

    </div>














    <div id="external-js-resources" class="item-settings-javascript-external settings-row external-js-resources top-label-form">

      <h4>
        Add External Scripts/Pens
      </h4>

      <p>Any URL's added here will be added as <code>&lt;script&gt;</code>s in order, and run <em>before</em> the JavaScript in the editor. You can use the URL of any other Pen and it will include the JavaScript from that Pen.</p>

      <div class="resource-search-bar">
        <svg viewBox="0 0 56.7 56.7" class="icon icon-mag" width="18" height="18">
          <path d="M42.8,7.3C33-2.4,17.1-2.4,7.3,7.3c-9.8,9.8-9.8,25.7,0,35.5c8.7,8.7,22.2,9.7,32,2.9l9.6,9.6c1.8,1.8,4.7,1.8,6.4,0
	c1.8-1.8,1.8-4.7,0-6.4l-9.6-9.6C52.5,29.5,51.5,16,42.8,7.3z M36.6,36.6c-6.4,6.4-16.7,6.4-23.1,0s-6.4-16.7,0-23.1
	c6.4-6.4,16.7-6.4,23.1,0C43,19.9,43,30.3,36.6,36.6z"></path>
        </svg>

        <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;"><input id="external-js-search" type="text" value="" placeholder="Search CDNjs (jQuery, Lodash, React, Angular, Vue.js, Ember...)" class="aa-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="both" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-3" dir="auto" style="position: relative; vertical-align: top;"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: Lato, &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Tahoma, sans-serif; font-size: 15px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><span class="aa-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-3" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none; right: auto;"><div class="aa-dataset-4"></div><div class="aa-dataset-5"></div></span></span>
      </div>

      <div class="algolia-shoutout">
        <a href="https://www.algolia.com/?utm_source=react-instantsearch&amp;utm_medium=website&amp;utm_content=codepen.io&amp;utm_campaign=poweredby" target="_blank">
          Powered by <img alt="Algolia" src="./script_files/algolia-9e1c0c887f4db420704b2a79926864019ef156bcecc9d5774a7e4eaa731fc5b5.svg">
        </a>
      </div>

      <div class="help-flyout-link">
        <svg class="icon-help" viewBox="0 0 100 100" width="14" height="14">
          <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
        </svg>
        <div class="help-flyout help-flyout-reverse">
          <h5>About External Resources</h5>
          <svg class="icon-x" viewBox="0 0 100 100" height="12" width="12">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
          </svg>
          <p>You can apply a script from anywhere on the web to your Pen. Just put a URL to it here and we'll add it, in the order you have them, before the JavaScript in the Pen itself.</p>
          <p>If the script you link to has the file extension of a preprocessor, we'll attempt to process it before applying.</p>
          <p>You can also link to another Pen here, and we'll pull the JavaScript from that Pen and include it. If it's using a matching preprocessor, we'll combine the code before preprocessing, so you can use the linked Pen as a true dependency.</p>
          <p><a href="https://blog.codepen.io/documentation/adding-external-resources/" rel="noopener" target="_blank">Learn more</a></p>
        </div>
      </div>

      <div id="js-external-resources" class="external-resource-wrapper ui-sortable">

  
  <div data-view-id="80147442" class="external-resource-url-row">

    <span class="move-external-url">
      <svg viewBox="0 0 17 20" class="icon-drag-handle" width="20" height="17">
        <path d="m1.5 3a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3z"></path>
      </svg>
    </span>

    <input id="external-resource-input-80147442" class="fullwidth js-resource external-resource" type="text" pattern="^((ftp|http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&amp;%@!\-\/]))?$" name="external-js" placeholder="https://codepen.io/username/pen/aBcDef.css" value="" data-view-id="80147442">

    <span class="insecure-resource-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
          </svg>
          <h5>Insecure Resource</h5>
          <p>You are linking to a resource using the non-secure http:// protocol, which may not work when the browser is using https:// like CodePen enforces.</p>
        </div>
      </div>
    </span>

    <span class="not-using-url-extension-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
          </svg>
          <h5>URL Extension Required</h5>
          <p>When linking another Pen as a resource, make sure you use a <a href="https://blog.codepen.io/documentation/url-extensions/">URL Extension</a> of the type of code you want to link to. Either <code>.css</code>, <code>.js</code>, or the extension of a matching code processor.</p>
        </div>
      </div>
    </span>

    <div class="resource-actions">
      <span class="remove-external-url external-url-option" data-view-id="80147442">
        <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
          <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
        </svg>
      </span>

      <a id="external-resource-input-view-link-80147442" class="open-external-url external-url-option" target="_blank" rel="noopener" data-view-id="80147442" href="https://codepen.io/Edwin-McCain/pen/www.bing.com">
        <svg viewBox="0 0 30.5 16.5" id="icon-eye" width="14" height="14">
          <path d="M15.3,0C8.9,0,3.3,3.3,0,8.3c3.3,5,8.9,8.3,15.3,8.3c6.4,0,12-3.3,15.3-8.3C27.3,3.3,21.7,0,15.3,0z M15.3,14.5 c-3.4,0-6.2-2.8-6.2-6.2C9,4.8,11.8,2,15.3,2c3.4,0,6.2,2.8,6.2,6.2C21.5,11.7,18.7,14.5,15.3,14.5z"></path>
        </svg>
      </a>
    </div>

  </div>


  
  <div data-view-id="71127191" class="external-resource-url-row ">

    <span class="move-external-url">
      <svg viewBox="0 0 17 20" class="icon-drag-handle" width="20" height="17">
        <path d="m1.5 3a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3z"></path>
      </svg>
    </span>

    <input id="external-resource-input-71127191" class="fullwidth js-resource external-resource" type="text" pattern="^((ftp|http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&amp;%@!\-\/]))?$" name="external-js" placeholder="https://codepen.io/username/pen/aBcDef.css" value="" data-view-id="71127191">

    <span class="insecure-resource-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
          </svg>
          <h5>Insecure Resource</h5>
          <p>You are linking to a resource using the non-secure http:// protocol, which may not work when the browser is using https:// like CodePen enforces.</p>
        </div>
      </div>
    </span>

    <span class="not-using-url-extension-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
          </svg>
          <h5>URL Extension Required</h5>
          <p>When linking another Pen as a resource, make sure you use a <a href="https://blog.codepen.io/documentation/url-extensions/">URL Extension</a> of the type of code you want to link to. Either <code>.css</code>, <code>.js</code>, or the extension of a matching code processor.</p>
        </div>
      </div>
    </span>

    <div class="resource-actions">
      <span class="remove-external-url external-url-option" data-view-id="71127191">
        <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
          <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
        </svg>
      </span>

      <a id="external-resource-input-view-link-71127191" class="open-external-url external-url-option" target="_blank" rel="noopener" data-view-id="71127191" href="https://codepen.io/Edwin-McCain/pen/raNxMWa">
        <svg viewBox="0 0 30.5 16.5" id="icon-eye" width="14" height="14">
          <path d="M15.3,0C8.9,0,3.3,3.3,0,8.3c3.3,5,8.9,8.3,15.3,8.3c6.4,0,12-3.3,15.3-8.3C27.3,3.3,21.7,0,15.3,0z M15.3,14.5 c-3.4,0-6.2-2.8-6.2-6.2C9,4.8,11.8,2,15.3,2c3.4,0,6.2,2.8,6.2,6.2C21.5,11.7,18.7,14.5,15.3,14.5z"></path>
        </svg>
      </a>
    </div>

  </div>

</div>

<script id="js-external-resources-template" nonce="" type="text/template">
  <div data-view-id="<%= view_id %>" class="external-resource-url-row <%= insecure_resource %>">

    <span class="move-external-url">
      <svg viewBox="0 0 17 20" class="icon-drag-handle" width="20" height="17">
        <path d="m1.5 3a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3z"/>
      </svg>
    </span>

    <input
      id="external-resource-input-<%= view_id %>"
      class="fullwidth js-resource external-resource"
      type="text"
      pattern="^((ftp|http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$"
      name="external-js"
      placeholder="<%= placeholder %>"
      value="<%= url %>"
      data-view-id="<%= view_id %>">

    <span class="insecure-resource-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"/>
          </svg>
          <h5>Insecure Resource</h5>
          <p>You are linking to a resource using the non-secure http:// protocol, which may not work when the browser is using https:// like CodePen enforces.</p>
        </div>
      </div>
    </span>

    <span class="not-using-url-extension-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"/>
          </svg>
          <h5>URL Extension Required</h5>
          <p>When linking another Pen as a resource, make sure you use a <a href="https://blog.codepen.io/documentation/url-extensions/">URL Extension</a> of the type of code you want to link to. Either <code>.css</code>, <code>.js</code>, or the extension of a matching code processor.</p>
        </div>
      </div>
    </span>

    <div class="resource-actions">
      <span class="remove-external-url external-url-option" data-view-id="<%= view_id %>">
        <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
          <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"/>
        </svg>
      </span>

      <a id="external-resource-input-view-link-<%= view_id %>" class="open-external-url external-url-option" target="_blank" rel="noopener" data-view-id="<%= view_id %>" href="<%= url %>">
        <svg viewBox="0 0 30.5 16.5" id="icon-eye" width="14" height="14">
          <path d="M15.3,0C8.9,0,3.3,3.3,0,8.3c3.3,5,8.9,8.3,15.3,8.3c6.4,0,12-3.3,15.3-8.3C27.3,3.3,21.7,0,15.3,0z M15.3,14.5 c-3.4,0-6.2-2.8-6.2-6.2C9,4.8,11.8,2,15.3,2c3.4,0,6.2,2.8,6.2,6.2C21.5,11.7,18.7,14.5,15.3,14.5z"/>
        </svg>
      </a>
    </div>

  </div>
</script>


      <div class="external-resource-actions group">
        <span id="add-js-resource" class="button button-medium mini-button add-resource" data-type="js">
          <span data-type="js">+ add another resource</span>
        </span>
      </div>
    </div>

  <h3 aria-label="Packages">Packages</h3>

  <div class="item-settings-packages settings-row" id="item-settings-packages">

    <h4>Add Packages</h4>

    <p>Search for and use JavaScript packages from <a href="https://www.npmjs.com/" target="blank" rel="noopener">npm</a> here. By selecting a package, an <code>import</code> statement will be added to the top of the JavaScript editor for this package.</p>

    <div class="resource-search-bar">
      <svg viewBox="0 0 56.7 56.7" class="icon icon-mag" width="18" height="18">
        <path d="M42.8,7.3C33-2.4,17.1-2.4,7.3,7.3c-9.8,9.8-9.8,25.7,0,35.5c8.7,8.7,22.2,9.7,32,2.9l9.6,9.6c1.8,1.8,4.7,1.8,6.4,0
c1.8-1.8,1.8-4.7,0-6.4l-9.6-9.6C52.5,29.5,51.5,16,42.8,7.3z M36.6,36.6c-6.4,6.4-16.7,6.4-23.1,0s-6.4-16.7,0-23.1
c6.4-6.4,16.7-6.4,23.1,0C43,19.9,43,30.3,36.6,36.6z"></path>
      </svg>
      <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;"><input id="packages-search" type="text" value="" placeholder="Search npm and add a package..." class="aa-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="both" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-6" dir="auto" style="position: relative; vertical-align: top;"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: Lato, &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Tahoma, sans-serif; font-size: 15px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><span class="aa-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-6" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none; right: auto;"><div class="aa-dataset-7"></div></span></span>
    </div>

    <div class="algolia-shoutout">
      <a href="https://www.algolia.com/?utm_source=react-instantsearch&amp;utm_medium=website&amp;utm_content=codepen.io&amp;utm_campaign=poweredby" target="_blank">
        Powered by <img alt="Algolia" src="./script_files/algolia-9e1c0c887f4db420704b2a79926864019ef156bcecc9d5774a7e4eaa731fc5b5.svg">
      </a>
    </div>

    <div class="help-flyout-link">
      <svg class="icon-help" viewBox="0 0 100 100" width="14" height="14">
        <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
      </svg>
      <div class="help-flyout help-flyout-reverse">
        <h5>About Packages</h5>
        <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
          <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
        </svg>
        <p>Using packages here is powered by <a href="https://esm.sh/">esm.sh</a>, which makes packages from npm not only available on a CDN, but prepares them for native JavaScript ESM usage.</p>
        <p>All packages are different, so refer to their docs for how they work.</p>
        <p>If you're using React / ReactDOM, make sure to turn on Babel for the JSX processing.</p>
      </div>
    </div>

  </div>

</div>

      </div>

      <div class="settings tab-page" id="settings-details">
        <div id="pen-details" class="pen-details">

  <div id="pen-details-form" class="pen-details-form">

    <h3 aria-label="Pen Details">
      Details
    </h3>

    <div class="settings-row top-label-form normal-labels">
      <h4>
        <label for="item-details-title">
          Pen Title
        </label>
      </h4>
      <input type="text" id="item-details-title" class="item-details-title" name="item-details-title" value="codestorm" maxlength="255" placeholder="Untitled">
    </div>

    <div class="settings-row top-label-form normal-labels">
      <h4>
        <label for="item-details-description">
          Pen Description
        </label>
      </h4>
      <textarea class="item-details-description" id="item-details-description" placeholder="Explain what’s going on in your Pen here. This text is searchable, so it can also help others find your work. Remember to credit others where credit is due. Markdown supported."></textarea>
    </div>

    <div class="tags settings-row top-label-form normal-labels">
      <h4>
        <label for="pen-tags" class="tags-label">
          Tags <em>comma separated, <span id="max-tags-label">max of five</span></em>
        </label>
      </h4>

      <input type="text" id="pen-tags" class="pen-tags">

      <div class="active-tags" id="active-tags"></div>
    </div>

  </div>

</div>

      </div>
      <div class="settings tab-page" id="settings-privacy">
        <div id="pen-privacy" class="pen-details">

  <div id="pen-privacy-form" class="pen-details-form top-label-form ">

    <h3>
      Privacy
    </h3>

    <div class="settings-row public-private-checkbox-row">

      <div class="public-private-wrap">

          <div class="pro-upsell">

            <div class="illustration-pro">

              <input type="checkbox" name="illustration-pro" id="illustration-pro">
              <img alt="Go PRO" class="blind-top" src="./script_files/blind-top-f2681f21fdd4abda7aac4277b7be978237e2c48832b45e6a8959dd9dcb0f8e64.svg">
              <img alt="Window blinds lowered to protect code." class="blinds" src="./script_files/blinds-e1e47297e1c0a3b8d2568baaa288d5f264e0c6495561c906a97dbfd553a8f66d.svg">
              <img alt="Code Editor with window blinds (raised) and a light blub turned on." class="code" src="./script_files/privacy-048c44f7b51ade74eef277e8027a41fe1a8651c393278b25a807ad7ea79f8418.svg">
              <div class="illustration-bg"></div>

            </div>

            <h4>Keep it secret; keep it safe.</h4>

            <p>Private Pens are hidden everywhere on CodePen, except to you. You can still share them and other people can see them, they just can't find them through searching or browsing.</p>

            <a href="https://codepen.io/features/pro" class="button yellow">Upgrade to PRO</a>

          </div>


      </div>

    </div>


  </div>

</div>

      </div>
      <div class="settings tab-page" id="settings-behavior">
        <h3 aria-label="Pen Behavior">Behavior</h3>

<div class="settings-row">

  <h4>Auto Save</h4>

  <div>
    <p class="hint">If active, Pens will autosave every 30 seconds after being saved once.</p>

    <div class="ios-toggle-mega-label-wrap">
      <span class="ios-toggle ios-toggle-reverse">
        <input type="checkbox" id="auto-save" name="auto-save" checked="">
        <label for="auto-save"></label>
        <label for="auto-save" class="ios-toggle-mega-label"></label>
      </span>
    </div>
  </div>

</div>

<div class="settings-row">

  <h4>Auto-Updating Preview</h4>

  <p class="hint">If enabled, the preview panel updates automatically as you code. If disabled, use the "Run" button to update.</p>

  <div class="ios-toggle-mega-label-wrap">
    <span class="ios-toggle ios-toggle-reverse">
      <input type="checkbox" id="auto-run" name="auto-run" checked="">
      <label for="auto-run"></label>
      <label for="auto-run" class="ios-toggle-mega-label"></label>
    </span>
  </div>

</div>

<div class="settings-row">

  <h4>Format on Save</h4>

  <p class="hint">If enabled, your code will be formatted when you actively save your Pen. <strong><span class="inline-note">Note:</span> your code becomes un-folded during formatting.</strong></p>

  <div class="ios-toggle-mega-label-wrap">
    <span class="ios-toggle ios-toggle-reverse">
      <input type="checkbox" id="format_on_save" name="format_on_save">
      <label for="format_on_save"></label>
      <label for="format_on_save" class="ios-toggle-mega-label"></label>
    </span>
  </div>


</div>

      </div>
      <div class="settings tab-page" id="settings-editor">
        <h3 aria-label="Editor Settings">Editor Settings</h3>

<div id="editor-settings-form" class="settings-row top-label-form">

  <h4>
    Code Indentation
  </h4>

  <ul class="radio-list">
    <li>
      <input type="radio" id="indent-with-spaces" name="indent-with" value="spaces" checked="">
      <label for="indent-with-spaces" class="small-inline">Spaces</label>
    </li>
    <li>
      <input type="radio" id="indent-with-tabs" name="indent-with" value="tabs">
      <label for="indent-with-tabs" class="small-inline">Tabs</label>
    </li>
  </ul>

</div>

<div class="settings-row top-label-form normal-labels">

  <h4>
    <label for="tab-size">
      Code Indent width
    </label>
  </h4>

  <div class="custom-select-wrap">
    <select id="tab-size" class="fullwidth" name="tab-size">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
    <div class="select-icon">
      <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
        <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
      </svg>
      <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
        <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
      </svg>
    </div>
  </div>

</div>

<div class="settings-row">

  <h4>Want to change your Syntax Highlighting theme, Fonts and more?</h4>

  <p>Visit <a href="https://codepen.io/settings/editor" target="_blank">your global Editor Settings</a>.</p>

</div>

      </div>
      <div class="settings tab-page" id="settings-template">
        <div id="pen-template" class="pen-details">

  <div class="top-label-form">

    <h3>Template</h3>

    <div class="settings-row">

      <h4>Make Template?</h4>

      <p>Templates are Pens that can be used to start other Pens quickly from the create menu. The new Pen will copy all the code and settings from the template and make a new Pen (that is not a fork). You can <a target="_blank" rel="noopener" href="https://codepen.io/you/pens/templates">view all of your templates</a>, or <a target="_blank" rel="noopener" href="https://blog.codepen.io/documentation/api/templates/">learn more in the documentation</a>.</p>

      <div class="ios-toggle-mega-label-wrap" id="item-details-template-wrap">

        <span class="ios-toggle ios-toggle-reverse">
          <input type="checkbox" name="item-details-template" id="item-details-template">
          <label for="item-details-template"></label>
          <label for="item-details-template" class="ios-toggle-mega-label"><span>On</span></label>
        </span>

      </div>

    </div>

    <div class="settings-row">

      <h4>Template URL</h4>

      <p>Any Pen can act as a template (even if you don't flip the toggle above) with a special URL you can use yourself or share with others. Here's this Pen's template URL:</p>

      <div class="inline-display-flex">
        <input type="url" id="template-url-input" value="https://codepen.io/pen?template=raNxMWa">
        <button id="template-url-input-btn" class="button medium inline-template">Copy URL</button>
      </div>

    </div>

  </div>

</div>

      </div>
      <div class="settings tab-page" id="settings-screenshot">
        <div id="pen-screenshot" class="pen-details">

  <h3>Screenshot</h3>

  <div id="pen-screenshot-form" class="pen-details-form">

    <div class="thumbnail-upload-section settings-row">

      <h4>
        Screenshot or Custom Thumbnail
      </h4>

      <p>Screenshots of Pens are shown in mobile browsers, RSS feeds, to users who chose images instead of iframes, and in social media sharing.</p>

        <div id="settings-screenshot-wrap" class="settings-screenshot-wrap">
          <div id="screenshot-type" class="screenshot-description">

  <div class="screenshot-area-screenshot screenshot-image" id="custom-screenshot" style="background-image: url(https://shots.codepen.io/username/pen/raNxMWa-800.jpg?version=1742907000);">
    <a id="delete-screenshot" class="button mini-button button-dark delete-screenshot inline-display-none">× Delete</a>
  </div>

  <div class="screenshot-description-container">
      <p>This Pen is using the default Screenshot, generated by CodePen. Upgrade to <span style="border-radius: 2px; padding: 1px 6px 2px 5px; color: black !important; background: var(--cp-color-yellow); white-space: nowrap; text-shadow: none; letter-spacing: 0; font-size: 71%; position: relative; top: -1px;">PRO</span> to upload your own thumbnail that will be displayed on previews of this pen throughout the site and when sharing to social media.</p>
      <a href="https://codepen.io/features/pro" class="button yellow">Upgrade to PRO</a>
  </div>
</div>

        </div>




    </div>

  </div>

</div>

      </div>
  </div>

  <footer>
    <div class="save-and-close-wrap">
          <a href="https://codepen.io/features/pro" class="button button-small button-outline button-upsell" style="max-width: 28em" target="_blank"><div>Upgrade to <span style="border-radius: 2px; padding: 1px 6px 2px 5px; color: black !important; background: var(--cp-color-yellow); white-space: nowrap; text-shadow: none; letter-spacing: 0; font-size: 71%; position: relative; top: -1px;">PRO</span> and unlock Privacy, Custom Thumbnails, Asset Hosting, and more.</div></a>
        <input type="submit" class="button button-small green button-no-right-margin save-and-close" value="Save &amp; Close" id="save-details">
    </div>
  </footer>
</div>


<div class="page-wrap">

  <div class="boxes">

    <div class="mobile-editor-nav">
          <button id="html-toggle" class="selected"><span>HTML</span></button>
          <button id="css-toggle"><span>CSS</span></button>
          <button id="js-toggle"><span>JS</span></button>
      <button id="result-toggle" class="selected"><span>Result</span></button>
    </div>

    <div class="top-boxes editor-parent" data-number-of-editors="3" elementtiming="pen-editors">



        <div class="editor-resizer html-editor-resizer" title="Double-click to expand."><h2 class="box-title html-editor-title box-title--resizer" id="html-editor-title">

                  <svg viewBox="0 0 15 15" class="file-type-icon" id="icon-file-html">
    <rect fill="#FF3C41" width="15" height="15" rx="4"></rect>
    <path d="M10.97 2.29a.563.563 0 0 0-.495-.29.572.572 0 0 0-.488.277l-5.905 9.86a.565.565 0 0 0-.007.574c.102.18.287.289.495.289a.572.572 0 0 0 .488-.277l5.905-9.86a.565.565 0 0 0 .007-.574" fill="#28282B"></path>
  </svg>


                <span class="box-title-name">
                  HTML
                </span>
                <span class="box-title-preprocessor-name "></span>
              </h2></div>

        <div id="box-html" class="box box-html" data-type="html" style="width: 32.2077%;">

          <div class="powers">
            <div class="powers-drag-handle" title="Double-click to expand."></div>

            <div class="editor-actions-left">
              <h2 class="box-title html-editor-title" id="html-editor-title">

                  <svg viewBox="0 0 15 15" class="file-type-icon" id="icon-file-html">
    <rect fill="#FF3C41" width="15" height="15" rx="4"></rect>
    <path d="M10.97 2.29a.563.563 0 0 0-.495-.29.572.572 0 0 0-.488.277l-5.905 9.86a.565.565 0 0 0-.007.574c.102.18.287.289.495.289a.572.572 0 0 0 .488-.277l5.905-9.86a.565.565 0 0 0 .007-.574" fill="#28282B"></path>
  </svg>


                <span class="box-title-name">
                  HTML
                </span>
                <span class="box-title-preprocessor-name "></span>
              </h2>

            </div>

            <div class="editor-actions-right">
              <div class="collaborators-indicators"></div>

              <button id="settings-pane-html" class="button button-medium mini-button settings-nub" data-type="html" title="Open HTML Settings">
                <svg viewBox="0 0 100 100" id="icon-gear" width="10" height="10">
                  <path d="M87.687,45.077c-0.313-2.433-0.816-4.807-1.542-7.079l8.145-11.73l-5.827-7.515l-0.094-0.123l-5.824-7.514
                    l-12.955,5.577c-2.041-1.265-4.192-2.362-6.459-3.219L59.42,0h-9.34h-0.153h-9.341l-3.709,13.474
                    c-2.27,0.857-4.421,1.955-6.463,3.222l-12.957-5.577l-5.825,7.514l-0.097,0.124l-5.822,7.517l8.146,11.731
                    c-0.726,2.271-1.233,4.645-1.544,7.079L0,52.032l2.08,9.375l0.033,0.15l2.08,9.375l14.001,0.761c1.295,2.028,2.771,3.926,4.4,5.668
                    l-2.396,14.227l8.416,4.173l0.138,0.067L37.169,100l9.309-10.796c1.161,0.109,2.335,0.173,3.524,0.173s2.358-0.074,3.52-0.184
                    l9.317,10.804l8.415-4.173l0.141-0.066l8.413-4.172l-2.396-14.228c1.628-1.741,3.104-3.64,4.4-5.672l14-0.759l2.078-9.375
                    l0.035-0.154L100,52.025L87.687,45.077z M50.003,34.51c8.435,0,15.272,7.035,15.272,15.719c0,8.679-6.839,15.717-15.272,15.717
                    c-8.436,0-15.272-7.038-15.272-15.717C34.731,41.545,41.569,34.51,50.003,34.51z"></path>
                </svg>
              </button>

              <button class="button mini-button button-medium editor-dropdown-button editor-dropdown-button-html" data-dropdown="#editor-dropdown-html" aria-haspopup="true" aria-expanded="false">
  <span class="visually-hidden">
    HTML Options
  </span>
  <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini" width="10" height="10">
    <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
    c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
    C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
  </svg>
</button>


              <ul id="editor-dropdown-html" class="link-list is-dropdown editor-dropdown editor-dropdown-html" data-dropdown-position="css" data-dropdown-type="html">
    <li class="editor-dropdown-list-item">
      <button id="tidy-html" class="invisible-button tidy-code-button" data-editor-type="html">
        Format HTML
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="view-compiled-html" class="invisible-button view-compiled-button hide" data-editor-type="html">
        View Compiled HTML
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="analyze-html" class="invisible-button analyze-button" data-editor-type="html">
        Analyze HTML
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="maximize-html-editor" class="invisible-button maximize-button" data-editor-type="html">
        Maximize HTML Editor
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="minimize-html-editor" class="invisible-button minimize-button" data-editor-type="html">
        Minimize HTML Editor
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="fold-all-html" class="invisible-button fold-all-button" data-editor-type="html">
        Fold All
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="unfold-all-html" class="invisible-button unfold-all-button" data-editor-type="html">
        Unfold All
      </button>
    </li>
</ul>

            </div>
          </div>

          <div class="code-wrap notranslate" translate="no">
            <div class="CodeMirror cm-s-default CodeMirror-wrap CodeMirror-simplescroll" translate="no"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 39px; left: 258.462px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" aria-label="HTML Code Editor" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; min-height: 1em; outline: none;"></textarea></div><div class="CodeMirror-simplescroll-horizontal" cm-not-content="true" style="display: none;"><div></div></div><div class="CodeMirror-simplescroll-vertical" cm-not-content="true" style="display: block; bottom: 0px;"><div style="height: 120.685px; top: 102.71px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 40px; margin-bottom: -15px; border-right-width: 35px; min-height: 821px; padding-right: 10px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation" style="padding-bottom: 276.5px;"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre class="CodeMirror-line-like">x</pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors" style="visibility: hidden;"><div class="CodeMirror-cursor" style="left: 218.462px; top: 315px; height: 22.5px;">&nbsp;</div></div><div class="CodeMirror-code" role="presentation" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-meta">&lt;!DOCTYPE html&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 11px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">html</span> <span class="cm-attribute">lang</span>=<span class="cm-string">"en"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 11px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">head</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">meta</span> <span class="cm-attribute">charset</span>=<span class="cm-string">"UTF-8"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">meta</span> <span class="cm-attribute">name</span>=<span class="cm-string">"viewport"</span> <span class="cm-attribute">content</span>=<span class="cm-string">"width=device-width,</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> <span class="cm-string">initial-scale=1.0"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 11px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">title</span><span class="cm-tag cm-bracket">&gt;</span>To-Do List App<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">title</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">link</span> <span class="cm-attribute">rel</span>=<span class="cm-string">"stylesheet"</span> <span class="cm-attribute">bref</span>=<span class="cm-string">"style.css"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">10</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">head</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">11</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">12</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 11px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">body</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">13</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 11px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag emmet-open-tag">div</span> <span class="cm-attribute">class</span>=<span class="cm-string">"todo-container"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">14</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 11px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">h1</span><span class="cm-tag cm-bracket">&gt;</span>My To-Do List<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">h1</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">15</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">input</span> <span class="cm-attribute">type</span>=<span class="cm-string">"text"</span> <span class="cm-attribute">10</span>=<span class="cm-string">"taskinput"</span> <span class="cm-attribute">placeholder</span>=<span class="cm-string">"Add a new task..."</span> <span class="cm-tag cm-bracket">/&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">16</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 11px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">id</span>=<span class="cm-string">"addTaskButton"</span><span class="cm-tag cm-bracket">&gt;</span>Add Task<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">17</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">ul</span> <span class="cm-attribute">id</span>=<span class="cm-string">"tasklist"</span><span class="cm-tag cm-bracket">&gt;&lt;/</span><span class="cm-tag">ul</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">18</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag emmet-close-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">19</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">20</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">script</span> <span class="cm-attribute">src</span>=<span class="cm-string">"script.js"</span><span class="cm-tag cm-bracket">&gt;&lt;/</span><span class="cm-tag">script</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">21</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">body</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">22</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">html</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 35px; width: 1px; border-bottom: 0px solid transparent; top: 821px;"></div><div class="CodeMirror-gutters" style="height: 856px; left: -1.9e-06px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 29px;"></div><div class="CodeMirror-gutter CodeMirror-foldgutter"></div></div></div></div>
            <div class="error-bar" id="error-bar-html" style="display: none;">
              <span class="error-icon" data-type="html">
                !
              </span>
            </div>
            <span class="code-editor-status"></span>
          </div>

        </div>




        <div class="editor-resizer css-editor-resizer" title="Double-click to expand."><h2 class="box-title css-editor-title box-title--resizer" id="css-editor-title">

                  <svg viewBox="0 0 15 15" class="file-type-icon" id="icon-file-css">
    <rect fill="#0EBEFF" width="15" height="15" rx="4"></rect><path d="M8 8.366l1.845 1.065a.507.507 0 0 0 .686-.181.507.507 0 0 0-.186-.685L8.5 7.5l1.845-1.065a.507.507 0 0 0 .186-.685.507.507 0 0 0-.686-.181L8 6.634v-2.13A.507.507 0 0 0 7.5 4c-.268 0-.5.225-.5.503v2.131L5.155 5.569a.507.507 0 0 0-.686.181.507.507 0 0 0 .186.685L6.5 7.5 4.655 8.565a.507.507 0 0 0-.186.685c.134.232.445.32.686.181L7 8.366v2.13c0 .271.224.504.5.504.268 0 .5-.225.5-.503V8.366z" fill="#282828"></path>
  </svg>


                <span class="box-title-name">
                  CSS
                </span>
                <span class="box-title-preprocessor-name ">(SCSS)</span>
              </h2></div>

        <div id="box-css" class="box box-css" data-type="css" style="width: 32.2077%;">

          <div class="powers">
            <div class="powers-drag-handle" title="Double-click to expand."></div>

            <div class="editor-actions-left">
              <h2 class="box-title css-editor-title" id="css-editor-title">

                  <svg viewBox="0 0 15 15" class="file-type-icon" id="icon-file-css">
    <rect fill="#0EBEFF" width="15" height="15" rx="4"></rect><path d="M8 8.366l1.845 1.065a.507.507 0 0 0 .686-.181.507.507 0 0 0-.186-.685L8.5 7.5l1.845-1.065a.507.507 0 0 0 .186-.685.507.507 0 0 0-.686-.181L8 6.634v-2.13A.507.507 0 0 0 7.5 4c-.268 0-.5.225-.5.503v2.131L5.155 5.569a.507.507 0 0 0-.686.181.507.507 0 0 0 .186.685L6.5 7.5 4.655 8.565a.507.507 0 0 0-.186.685c.134.232.445.32.686.181L7 8.366v2.13c0 .271.224.504.5.504.268 0 .5-.225.5-.503V8.366z" fill="#282828"></path>
  </svg>


                <span class="box-title-name">
                  CSS
                </span>
                <span class="box-title-preprocessor-name ">(SCSS)</span>
              </h2>

            </div>

            <div class="editor-actions-right">
              <div class="collaborators-indicators"></div>

              <button id="settings-pane-css" class="button button-medium mini-button settings-nub" data-type="css" title="Open CSS Settings">
                <svg viewBox="0 0 100 100" id="icon-gear" width="10" height="10">
                  <path d="M87.687,45.077c-0.313-2.433-0.816-4.807-1.542-7.079l8.145-11.73l-5.827-7.515l-0.094-0.123l-5.824-7.514
                    l-12.955,5.577c-2.041-1.265-4.192-2.362-6.459-3.219L59.42,0h-9.34h-0.153h-9.341l-3.709,13.474
                    c-2.27,0.857-4.421,1.955-6.463,3.222l-12.957-5.577l-5.825,7.514l-0.097,0.124l-5.822,7.517l8.146,11.731
                    c-0.726,2.271-1.233,4.645-1.544,7.079L0,52.032l2.08,9.375l0.033,0.15l2.08,9.375l14.001,0.761c1.295,2.028,2.771,3.926,4.4,5.668
                    l-2.396,14.227l8.416,4.173l0.138,0.067L37.169,100l9.309-10.796c1.161,0.109,2.335,0.173,3.524,0.173s2.358-0.074,3.52-0.184
                    l9.317,10.804l8.415-4.173l0.141-0.066l8.413-4.172l-2.396-14.228c1.628-1.741,3.104-3.64,4.4-5.672l14-0.759l2.078-9.375
                    l0.035-0.154L100,52.025L87.687,45.077z M50.003,34.51c8.435,0,15.272,7.035,15.272,15.719c0,8.679-6.839,15.717-15.272,15.717
                    c-8.436,0-15.272-7.038-15.272-15.717C34.731,41.545,41.569,34.51,50.003,34.51z"></path>
                </svg>
              </button>

              <button class="button mini-button button-medium editor-dropdown-button editor-dropdown-button-css" data-dropdown="#editor-dropdown-css" aria-haspopup="true" aria-expanded="false">
  <span class="visually-hidden">
    CSS Options
  </span>
  <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini" width="10" height="10">
    <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
    c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
    C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
  </svg>
</button>


              <ul id="editor-dropdown-css" class="link-list is-dropdown editor-dropdown editor-dropdown-css" data-dropdown-position="css" data-dropdown-type="css">
    <li class="editor-dropdown-list-item">
      <button id="tidy-css" class="invisible-button tidy-code-button" data-editor-type="css">
        Format CSS
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="view-compiled-css" class="invisible-button view-compiled-button" data-editor-type="css">
        View Compiled CSS
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="analyze-css" class="invisible-button analyze-button" data-editor-type="css">
        Analyze CSS
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="maximize-css-editor" class="invisible-button maximize-button" data-editor-type="css">
        Maximize CSS Editor
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="minimize-css-editor" class="invisible-button minimize-button" data-editor-type="css">
        Minimize CSS Editor
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="fold-all-css" class="invisible-button fold-all-button" data-editor-type="css">
        Fold All
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="unfold-all-css" class="invisible-button unfold-all-button" data-editor-type="css">
        Unfold All
      </button>
    </li>
</ul>

            </div>
          </div>

          <div class="code-wrap notranslate" translate="no">
            <div class="CodeMirror cm-s-default CodeMirror-wrap CodeMirror-simplescroll" translate="no"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 94px; left: 184.213px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" aria-label="CSS Code Editor" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; min-height: 1em; outline: none;"></textarea></div><div class="CodeMirror-simplescroll-horizontal" cm-not-content="true" style="display: none;"><div></div></div><div class="CodeMirror-simplescroll-vertical" cm-not-content="true" style="display: block; bottom: 0px;"><div style="height: 53.3881px; top: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 40px; margin-bottom: -15px; border-right-width: 35px; min-height: 1900px; padding-right: 10px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation" style="padding-bottom: 276.5px;"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre class="CodeMirror-line-like"><span>xxxxxxxxxx</span></pre><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>72</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors" style=""><div class="CodeMirror-cursor" style="left: 144.213px; top: 90px; height: 22.5px;">&nbsp;</div></div><div class="CodeMirror-code" role="presentation" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 11px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag">body</span> {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">font-family</span>: <span class="cm-variable">Arial</span>, <span class="cm-atom">sans-serif</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">background-color</span>: <span class="cm-atom">#f4f4f4</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">display</span>: <span class="cm-atom">flex</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">justify-content</span>: <span class="cm-atom">center</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">align-items</span>: <span class="cm-atom">center</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">height</span>: <span class="cm-number">100vh</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">margin</span>: <span class="cm-number">0</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">10</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">11</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 11px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-qualifier">.todo-container</span> {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">12</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">background-color</span>: <span class="cm-keyword">white</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">13</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">padding</span>: <span class="cm-number">20px</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">14</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">border-radius</span>: <span class="cm-number">8px</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">15</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">box-shadow</span>: <span class="cm-number">0</span> <span class="cm-number">4px</span> <span class="cm-number">8px</span> <span class="cm-variable cm-callee">rgba</span>(<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">16</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">width</span>: <span class="cm-number">300px</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">17</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">18</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">19</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 11px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag">h1</span> {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">20</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">text-align</span>: <span class="cm-atom">center</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">21</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">color</span>: <span class="cm-atom">#333</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">22</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">23</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 35px; width: 1px; border-bottom: 0px solid transparent; top: 1900px;"></div><div class="CodeMirror-gutters" style="height: 1935px; left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 29px;"></div><div class="CodeMirror-gutter CodeMirror-foldgutter"></div></div></div></div>
            <div class="error-bar" id="error-bar-css" style="display: none;">
              <span class="error-icon" data-type="css">
                !
              </span>
            </div>
            <span class="code-editor-status"></span>
          </div>

        </div>




        <div class="editor-resizer js-editor-resizer" title="Double-click to expand."><h2 class="box-title js-editor-title box-title--resizer" id="js-editor-title">

                  <svg viewBox="0 0 15 15" class="file-type-icon" id="icon-file-js">
    <rect fill="#FCD000" width="15" height="15" rx="4"></rect>
    <path d="M6.554 3.705c0 .267-.19.496-.452.543-1.2.217-2.12 1.61-2.12 3.275 0 1.665.92 3.057 2.12 3.274a.554.554 0 0 1-.205 1.087c-1.733-.322-3.022-2.175-3.022-4.361 0-2.187 1.289-4.04 3.022-4.362a.554.554 0 0 1 .657.544zm1.892 0c0-.347.316-.607.657-.544 1.733.322 3.022 2.175 3.022 4.362 0 2.186-1.289 4.04-3.022 4.361a.554.554 0 0 1-.205-1.087c1.2-.217 2.12-1.61 2.12-3.274 0-1.665-.92-3.058-2.12-3.275a.551.551 0 0 1-.452-.543z" fill="#282828"></path>
  </svg>


                <span class="box-title-name">
                  JS
                </span>
                <span class="box-title-preprocessor-name "></span>
              </h2></div>

        <div id="box-js" class="box box-js" data-type="js" style="width: 32.2077%;">

          <div class="powers">
            <div class="powers-drag-handle" title="Double-click to expand."></div>

            <div class="editor-actions-left">
              <h2 class="box-title js-editor-title" id="js-editor-title">

                  <svg viewBox="0 0 15 15" class="file-type-icon" id="icon-file-js">
    <rect fill="#FCD000" width="15" height="15" rx="4"></rect>
    <path d="M6.554 3.705c0 .267-.19.496-.452.543-1.2.217-2.12 1.61-2.12 3.275 0 1.665.92 3.057 2.12 3.274a.554.554 0 0 1-.205 1.087c-1.733-.322-3.022-2.175-3.022-4.361 0-2.187 1.289-4.04 3.022-4.362a.554.554 0 0 1 .657.544zm1.892 0c0-.347.316-.607.657-.544 1.733.322 3.022 2.175 3.022 4.362 0 2.186-1.289 4.04-3.022 4.361a.554.554 0 0 1-.205-1.087c1.2-.217 2.12-1.61 2.12-3.274 0-1.665-.92-3.058-2.12-3.275a.551.551 0 0 1-.452-.543z" fill="#282828"></path>
  </svg>


                <span class="box-title-name">
                  JS
                </span>
                <span class="box-title-preprocessor-name "></span>
              </h2>

            <div class="unsaved-editor-message visible"><b>8</b> unsaved changes <span class="dismiss"><svg class="icon-x" viewBox="0 0 100 100"><path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path></svg></span></div></div>

            <div class="editor-actions-right">
              <div class="collaborators-indicators"></div>

              <button id="settings-pane-js" class="button button-medium mini-button settings-nub" data-type="js" title="Open JS Settings">
                <svg viewBox="0 0 100 100" id="icon-gear" width="10" height="10">
                  <path d="M87.687,45.077c-0.313-2.433-0.816-4.807-1.542-7.079l8.145-11.73l-5.827-7.515l-0.094-0.123l-5.824-7.514
                    l-12.955,5.577c-2.041-1.265-4.192-2.362-6.459-3.219L59.42,0h-9.34h-0.153h-9.341l-3.709,13.474
                    c-2.27,0.857-4.421,1.955-6.463,3.222l-12.957-5.577l-5.825,7.514l-0.097,0.124l-5.822,7.517l8.146,11.731
                    c-0.726,2.271-1.233,4.645-1.544,7.079L0,52.032l2.08,9.375l0.033,0.15l2.08,9.375l14.001,0.761c1.295,2.028,2.771,3.926,4.4,5.668
                    l-2.396,14.227l8.416,4.173l0.138,0.067L37.169,100l9.309-10.796c1.161,0.109,2.335,0.173,3.524,0.173s2.358-0.074,3.52-0.184
                    l9.317,10.804l8.415-4.173l0.141-0.066l8.413-4.172l-2.396-14.228c1.628-1.741,3.104-3.64,4.4-5.672l14-0.759l2.078-9.375
                    l0.035-0.154L100,52.025L87.687,45.077z M50.003,34.51c8.435,0,15.272,7.035,15.272,15.719c0,8.679-6.839,15.717-15.272,15.717
                    c-8.436,0-15.272-7.038-15.272-15.717C34.731,41.545,41.569,34.51,50.003,34.51z"></path>
                </svg>
              </button>

              <button class="button mini-button button-medium editor-dropdown-button editor-dropdown-button-js" data-dropdown="#editor-dropdown-js" aria-haspopup="true" aria-expanded="false">
  <span class="visually-hidden">
    JS Options
  </span>
  <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini" width="10" height="10">
    <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
    c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
    C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
  </svg>
</button>


              <ul id="editor-dropdown-js" class="link-list is-dropdown editor-dropdown editor-dropdown-js" data-dropdown-position="css" data-dropdown-type="js">
    <li class="editor-dropdown-list-item">
      <button id="tidy-js" class="invisible-button tidy-code-button" data-editor-type="js">
        Format JavaScript
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="view-compiled-js" class="invisible-button view-compiled-button hide" data-editor-type="js">
        View Compiled JavaScript
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="analyze-js" class="invisible-button analyze-button" data-editor-type="js">
        Analyze JavaScript
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="maximize-js-editor" class="invisible-button maximize-button" data-editor-type="js">
        Maximize JavaScript Editor
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="minimize-js-editor" class="invisible-button minimize-button" data-editor-type="js">
        Minimize JavaScript Editor
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="fold-all-js" class="invisible-button fold-all-button" data-editor-type="js">
        Fold All
      </button>
    </li>
    <li class="editor-dropdown-list-item">
      <button id="unfold-all-js" class="invisible-button unfold-all-button" data-editor-type="js">
        Unfold All
      </button>
    </li>
</ul>

            </div>
          </div>

          <div class="code-wrap notranslate" translate="no">
            <div class="CodeMirror cm-s-default CodeMirror-wrap CodeMirror-simplescroll" translate="no"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 4px; left: 44px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" aria-label="JavaScript Code Editor" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; min-height: 1em; outline: none;"></textarea></div><div class="CodeMirror-simplescroll-horizontal" cm-not-content="true" style="display: none;"><div></div></div><div class="CodeMirror-simplescroll-vertical" cm-not-content="true" style="display: block; bottom: 0px;"><div style="height: 68.5053px; top: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 40px; margin-bottom: -15px; border-right-width: 35px; min-height: 1473px; padding-right: 10px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation" style="padding-bottom: 276.5px;"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><div style="position: relative; margin-left: -40px; width: 491px;"><div class="inline-editor-error inline-editor-error inline-error-hidden">
      <div class="inline-error-message">Uncaught TypeError: Cannot read properties of null (reading 'addEventListner')</div>
    </div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors" style="visibility: hidden;"><div class="CodeMirror-cursor" style="left: 4px; top: 0px; height: 22.5px;">&nbsp;</div></div><div class="CodeMirror-code" role="presentation" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">// Get DOM elements</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">const</span> <span class="cm-def">taskInput</span> <span class="cm-operator">=</span> </span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">'taskinput'</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">const</span> <span class="cm-def">addTaskButton</span> <span class="cm-operator">=</span> </span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">'addTaskButton'</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">const</span> <span class="cm-def">taskList</span> <span class="cm-operator">=</span> </span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">'taskList'</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">// Function to create a new task</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">10</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 11px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">function</span> <span class="cm-def">createtask</span>(<span class="cm-def">taskContent</span>) {<span class="cm-keyword">const</span> <span class="cm-def">li</span> <span class="cm-operator">=</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">11</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-variable">document</span>.<span class="cm-property">createElement</span>(<span class="cm-string">'11'</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">12</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">13</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-comment">// Create text mode</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">14</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; <span class="cm-keyword">const</span> <span class="cm-def">taskText</span> <span class="cm-operator">=</span> </span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">15</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">document</span>.<span class="cm-property">createElement</span>(<span class="cm-string">'button'</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">16</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">17</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">removeButton</span>.<span class="cm-property">classList</span>.<span class="cm-property">add</span>(<span class="cm-string">'remove-btn'</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">18</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-variable">removeButton</span>.<span class="cm-property">textContent</span> <span class="cm-operator">=</span> <span class="cm-string">'Remove'</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">19</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-variable">removeButton</span>.<span class="cm-property">onclick</span> <span class="cm-operator">=</span> <span class="cm-keyword">function</span> () {};</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">20</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-comment">// Add text node and button to the list item</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">21</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">li</span>.<span class="cm-property">appendChild</span>(<span class="cm-variable-2">taskText</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">22</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">li</span>.<span class="cm-property">appendChild</span>(<span class="cm-variable">removeButton</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">23</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-comment">// Toggle completed task on click</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 35px; width: 1px; border-bottom: 0px solid transparent; top: 1473px;"></div><div class="CodeMirror-gutters" style="height: 1508px; left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 29px;"></div><div class="CodeMirror-gutter CodeMirror-foldgutter"></div></div></div></div>
            <div class="error-bar" id="error-bar-js" style="display: block;">
              <span class="error-icon" data-type="js">
                !
              </span>
            </div>
            <span class="code-editor-status"></span>
          </div>

            <div class="react-pen-editor-imports" data-props-type="js"></div>
        </div>



    </div>

    <div id="resizer" class="resizer">
      <span></span>
      <div id="width-readout" class="width-readout">999px</div>
      <div id="pen-ad"></div>
    </div>

      <section id="drawer" class="comments">

      </section>

    <div class="output-container">
      <div class="output-sizer"> 
        <div id="result_div" class="result"><iframe id="index.html-ed551deb-8c61-90e3-e273-0613b0bb6979" src="./script_files/index.html" allow="accelerometer *; bluetooth *; camera *; encrypted-media *; display-capture *; geolocation *; gyroscope *; microphone *; midi *; clipboard-read *; clipboard-write *; web-share *; serial *; xr-spatial-tracking *" allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" class="result-iframe iframe-visual-update" name="CodePen" loading="lazy"></iframe>
          


          <div id="editor-drag-cover" class="drag-cover"></div>

        </div>

        <div id="box-console" class="box box-console notranslate" translate="no">

  <div class="editor-resizer editor-resizer-console" title="Drag to resize. Double-click to expand."></div>

  <div class="powers">
    <div class="powers-drag-handle" title="Drag to resize. Double-click to expand."></div>
    <div class="editor-actions-left">
      <h2 class="box-title"><span class="box-title-name">Console</span></h2>
    </div>
    <div class="editor-actions-right">
        <button class="button button-medium mini-button console-clear-button" title="Clear">
          Clear
        </button>
        <button class="button button-medium mini-button close-editor-button" data-type="console" title="Close">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
          </svg>
        </button>
      </div>
  </div>

  <div class="console-wrap">
    <div class="console-entries short-no-scroll"></div>
    <div class="console-command-line">
      <span class="console-arrow forwards"></span>
      <textarea class="console-command-line-input auto-expand" rows="1" data-min-rows="1"></textarea>
    </div>
  </div>

</div>


      </div> 

    </div>

  </div>

</div>

<div id="asset-bin-goes-here"></div>

  <footer id="react-pen-footer" class="site-footer editor-footer"><div class="footer-left"><div class="footer-actions-menu"><button id="footer-button" aria-expanded="false" class="Button-module_root-xw+9D toggle-footer-menu-button"><svg viewBox="-122.9 121.1 105.9 61.9" xmlns="http://www.w3.org/2000/svg"><path d="m-63.2 180.3 43.5-43.5c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5-4-2.7-6.5-2.7-4.8 1-6.5 2.7L-69.9 161l-37.2-37.2c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.6c-1.9 1.8-2.8 4.2-2.8 6.6 0 2.3.9 4.6 2.6 6.5 11.4 11.5 41 41.2 43 43.3l.2.2c3.6 3.6 10.3 3.6 13.9 0z"></path></svg></button><select name="zoom-choice" data-placeholder="Zoom Scale..." class="footer-button button mini-button zoom-select"><option value="1.0" class="option-green" selected="">1.0×</option><option value="0.5" class="option-green">0.5×</option><option value="0.25" class="option-green">0.25×</option></select></div></div><div class="footer-right"><span class="PenEditorFooterStatus_editorState-WVwoB editor-state" data-state="EMPTY"><span class="PenEditorFooterStatus_text-5fDLt"><span>Last saved <time id="last-saved-time-ago" datetime="2025-03-25 12:50:00 UTC" title="2025-03-25 12:50:00 UTC">March 25, 2025 — 8:50:00 AM</time></span></span><svg></svg></span><button id="live-view-popout-button" title="Open Live View in a New Window" class="Button-module_root-xw+9D live-view-popout-button" data-size="mini"><svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M11 2a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V3.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L14.586 2H11ZM0 4a2 2 0 0 1 2-2h5a1 1 0 0 1 0 2H2v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Z"></path></svg></button><button data-test-id="item-action-delete" class="Button-module_root-xw+9D" data-size="mini" data-roll="red">Delete</button><button data-id="collection-item-add-button" class="Button-module_root-xw+9D" data-size="mini">Add to Collection</button><button data-test-id="fork-button" title="Fork this Pen" class="Button-module_root-xw+9D" data-size="mini" data-has-icon="true"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M84.339 62.504a15.805 15.805 0 0 0-11.313 4.721 40.187 40.187 0 0 1-1.578-1.572c-6.965-7.211-14.451-19.189-22.311-29.678-7.977-10.209-16.196-20.413-29.012-20.906H0v14.37h20.126c2.555-.111 6.556 1.993 11.208 6.914 6.961 7.197 14.454 19.171 22.315 29.662 4.822 6.164 9.759 12.293 15.741 16.289 1.99 6.191 7.93 10.688 14.949 10.688 8.648 0 15.661-6.824 15.661-15.244s-7.013-15.244-15.661-15.244zM51.541 29.438h18.986c2.637 4.795 7.831 8.059 13.811 8.059 8.648 0 15.661-6.824 15.661-15.243S92.986 7.01 84.338 7.01c-5.979 0-11.174 3.264-13.811 8.058H36.3c6.007 3.551 10.861 8.924 15.241 14.37z"></path></svg>Fork</button><button class="Button-module_root-xw+9D embed-modal-button" data-size="mini">Embed</button><span class="DropdownControlled-module_root-3ewM0" data-direction="top left" data-open="false"><button aria-haspopup="menu" aria-expanded="false" aria-controls="oc-1742907154079" class="Button-module_root-xw+9D" data-size="mini">Export</button><div class="DropdownControlled-module_content-mxnG0" id="oc-1742907154079" role="menu" data-open="false" hidden="" data-direction="top left"></div></span><span class="DropdownControlled-module_root-3ewM0" data-direction="top left" data-open="false"><button aria-haspopup="menu" aria-expanded="false" aria-controls="oc-1742907154080" class="Button-module_root-xw+9D" data-size="mini">Share</button><div class="DropdownControlled-module_content-mxnG0" id="oc-1742907154080" role="menu" data-open="false" hidden="" data-direction="top left"></div></span></div><div class="footer-actions" data-expanded="false"><button class="Button-module_root-xw+9D console-toggle-button" data-size="mini">Console</button><button class="Button-module_root-xw+9D" data-size="mini">Assets</button><button data-id="editor-comments-button" class="Button-module_root-xw+9D" data-size="mini">Comments</button><button title="Keyboard Shortcuts" class="Button-module_root-xw+9D keyboard-commands-button" data-size="mini"><span>Ctrl</span></button></div></footer>

<div id="keycommands" class="modal modal-neutral">
<div class="keycommands-container">

  <section class="editor-commands inline-editor-commands">

    <h2>Editor Commands</h2>

    <div class="key-group">
      <kbd class="keycommand">
        <span class="key pc_only">Ctrl</span>
        <span class="key mac_only">Ctrl</span>
        <span class="key">Space</span>
      </kbd>
      Autocomplete
    </div>
    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key">F</span>
      </kbd>
      Find
    </div>
    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key">G</span>
      </kbd>
      Find Next
    </div>
    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key" title="Shift">⇧</span>
        <span class="key">G</span>
      </kbd>
      Find Previous
    </div>
    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key pc_only" title="Shift">⇧</span>
        <span class="key mac_only">Opt</span>
        <span class="key">F</span>
      </kbd>
      Find &amp; Replace
    </div>
    <div class="key-group mac_only">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key" title="Shift">⇧</span>
        <span class="key">F</span>
      </kbd>
      Format Code
    </div>
    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key">[</span>
      </kbd>
      Indent Code Right
    </div>
    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key">]</span>
      </kbd>
      Indent Code Left
    </div>
    <div class="key-group">
      <kbd class="keycommand">
        <span class="key" title="Shift">⇧</span>
        <span class="key">Tab</span>
      </kbd>
      Auto Indent Code
    </div>
    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key">/</span>
      </kbd>
      Line Comment
    </div>
    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key pc_only" title="Shift">⇧</span>
        <span class="key mac_only">Opt</span>
        <span class="key">/</span>
      </kbd>
      Block Comment
    </div>

    <p class="inline-tab-triggers">Also see: <a href="https://blog.codepen.io/documentation/features/tab-triggers/" target="_blank" rel="noopener">Tab Triggers</a></p>

  </section>

  <section class="editor-commands">

    <h2>Editor Focus</h2>

    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key pc_only">Alt</span>
        <span class="key mac_only">Opt</span>
        <span class="key">1</span>
      </kbd>
      HTML Editor
    </div>


    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key pc_only">Alt</span>
        <span class="key mac_only">Opt</span>
        <span class="key">2</span>
      </kbd>
      CSS Editor
    </div>

    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key pc_only">Alt</span>
        <span class="key mac_only">Opt</span>
        <span class="key">3</span>
      </kbd>
      JS Editor
    </div>

    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key pc_only">Alt</span>
        <span class="key mac_only">Opt</span>
        <span class="key">4</span>
      </kbd>
      Toggle Console
    </div>

    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key pc_only">Alt</span>
        <span class="key mac_only">Opt</span>
        <span class="key">0</span>
      </kbd>
      Preview
    </div>


    <div class="key-group">

      <kbd class="keycommand">
        <span class="key">Esc</span>
      </kbd>

      Exit currently focused editor
    </div>
  </section>


  <section class="editor-commands">

    <h2>Misc</h2>

    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key" title="Shift">⇧</span>
        <span class="key">7</span>
      </kbd>
      Re-run Preview
    </div>

    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key" title="Shift">⇧</span>
        <span class="key">8</span>
      </kbd>
      Clear All Analyze Errors
    </div>

    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key" title="Shift">⇧</span>
        <span class="key">9</span>
      </kbd>
      Open This Dialog
    </div>

    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key" title="Shift">⇧</span>
        <span class="key">0</span>
      </kbd>
      Open Debug View
    </div>

    <h2>HTML Specific</h2>

    <div class="key-group">

      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key" title="Shift">⇧</span>
        <span class="key">A</span>
      </kbd>
      Wrap With...
    </div>

    <h2>Pen Actions</h2>

    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key">P</span>
      </kbd>
      Create New Pen
    </div>

    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key">S</span>
      </kbd>
      Save
    </div>

    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key" title="Shift">⇧</span>
        <span class="key">S</span>
      </kbd>
      Save As Private <span style="border-radius: 2px; padding: 1px 6px 2px 5px; color: black !important; background: var(--cp-color-yellow); white-space: nowrap; text-shadow: none; letter-spacing: 0; font-size: 71%; position: relative; top: -1px;">PRO</span>
    </div>

    <div class="key-group">
      <kbd class="keycommand">
        <span class="key -command"></span>
        <span class="key">I</span>
      </kbd>
      Info Panel (if owned)
    </div>

  </section>
</div>
</div>


  



  <div id="popup-overlay" class="overlay popup-overlay" style="display: none;"></div>
  <div id="modal-overlay" class="overlay modal-overlay" style="display: none;"></div>

  <noscript>

  <input type="checkbox" class="modal-closing-trick" id="modal-closing-trick">

  <div class="overlay noscript-overlay" style="display: block;"></div>

  <div class="modal modal-message group modal-warning">

    <div class="modal-title">CodePen requires JavaScript to render the code and preview areas in this view.</div>

    <p>Trying <a href="https://codepen.io/Edwin-McCain/debug/raNxMWa">viewing this Pen in Debug Mode</a>, which is the preview area without any iframe and does not require JavaScript. Although what the preview is of might!</p>

    <p>Need to know how to enable JavaScript? <a href="http://enable-javascript.com/" target="_blank" rel="noopener">Go here.</a></p>

    <label class="button button-medium" for="modal-closing-trick">Close this, use anyway.</label>

  </div>

</noscript>


   <textarea id="init-data" style="display:none">{"__browser":{"country":"US","device":"unknown_device","mobile":false,"name":"chrome","platform":"pc","version":"135"},"__constants":{},"__CPDATA":{"domain_iframe":"https://cdpn.io","environment":"production","host":"codepen.io","iframe_allow":"accelerometer *; bluetooth *; camera *; encrypted-media *; display-capture *; geolocation *; gyroscope *; microphone *; midi *; clipboard-read *; clipboard-write *; web-share *; serial *; xr-spatial-tracking *","iframe_sandbox":"allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"},"__graphql":{"data":{"data":{"sessionUser":{"id":"Ykdgwo","name":"Edwin McCain","title":"Edwin McCain","avatar":"https://assets.codepen.io/t-1/user-default-avatar.jpg?format=auto&amp;version=0","currentContext":{"id":"Ykdgwo","title":"Edwin McCain","name":"Edwin McCain","avatar":"https://assets.codepen.io/t-1/user-default-avatar.jpg?format=auto&amp;version=0","username":"Edwin-McCain","__typename":"User"},"currentTeamId":null,"username":"Edwin-McCain","admin":false,"anon":false,"pro":false,"verified":true,"featureFlags":[],"teams":[],"__typename":"User"}}},"url":"https://codepen.io/graphql","api":"cprails"},"__user":{"anon":false,"base_url":"/Edwin-McCain/","cohorts":[],"current_team_hashid":null,"current_team_id":0,"hashid":"Ykdgwo","id":14010181,"itemType":"user","name":"Edwin McCain","paid":false,"tier":0,"username":"Edwin-McCain","created_at":"2025-02-18T23:36:11.300Z","email_verified":true,"collections_count":1,"collections_private_count":1,"followers_count":0,"followings_count":0,"pens_count":2,"pens_private_count":0,"projects_count":0,"projects_private_count":0},"__firebase":{"config":{"apiKey":"AIzaSyBgLAe7N_MdFpuVofMkcQLGwwhUu5tuxls","authDomain":"codepen-store-production.firebaseapp.com","databaseURL":"https://codepen-store-production.firebaseio.com","disabled":false,"projectId":"codepen-store-production"},"token":"eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImNsYWltcyI6eyJvd25lcklkIjoiWWtkZ3dvIiwiYWRtaW4iOmZhbHNlfSwiZXhwIjoxNzQyOTEwNzU3LCJpYXQiOjE3NDI5MDcxNTcsImlzcyI6ImZpcmViYXNlLWFkbWluc2RrLThva3lsQGNvZGVwZW4tc3RvcmUtcHJvZHVjdGlvbi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLThva3lsQGNvZGVwZW4tc3RvcmUtcHJvZHVjdGlvbi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVpZCI6IllrZGd3byJ9.rRhJTkSgum1T33sTaxdT40ZXn8vuAkUfIrAZhLAVK4CqoYAODQ0M5E-6bYermrzgzhCJybUdDAX0f03PjUR2HUCeh8TkIx5D19ZP3StoIsie-i2-M_kg5a9NhCzBSxNb2gm613u_R_nemZmwtY09dRzAKxvgWkvDq-4t40JKCCp1NazWCzY76ojBQWaqGbt9IFvbrSmfDM5eHpOogqqhyFRktuhEnvKNfCg2Ih_YQlAXrf38I_U6cUCUuJgPU8jwL7gdTImklclCAs7VlNJdrhPCo5pPdMkVOJs1Xv1D4Pd_D4WBqAfvlp8GNGvTiadE2fAglAmaA_3-EacoqaMWtw"},"__pay_stripe_public_key":"pk_live_2GndomDfiklqpSNQn8FrGuwZSMIMzha7DkLJqlYe7IR0ihKAlKdiHg68JJc5eVPt68rzAjzAAVXcUwjySHRCsgjQQ00gtRBUFNH","__pay_braintree_env":"production","__boomboom":{"serve_url":"https://cdpn.io/cpe/boomboom","store_url":"https://codepen.io/cpe/boomboom/store"},"__editor_config":{"id":"classic","editors":[{"id":"html","type":"html","name":"HTML","showEditor":true,"showSettings":true,"showProcessors":true,"embeds":{"showViewCompiled":true},"settings":[{"id":"processor","name":"HTML Preprocessor","type":"select","visible":true,"values":[{"id":"none","name":"None","value":"none","default":true},{"id":"haml","name":"Haml","value":"haml"},{"id":"markdown","name":"Markdown","value":"markdown"},{"id":"slim","name":"Slim","value":"slim"},{"id":"pug","name":"Pug","value":"pug"}]},{"id":"html_classes","name":"Add Class(es) to &lt;html&gt;","type":"input","placeholder":"e.g. single post post-1234","visible":true},{"id":"head","name":"Stuff for &lt;head&gt;","type":"textarea","placeholder":"e.g. &lt;meta&gt;, &lt;link&gt;, &lt;script&gt;","visible":true}],"actions":[{"id":"tidy_html","type":"tidy_code","name":"Format HTML","disabled_processors":["haml","slim"]},{"id":"view_compiled_html","type":"view_compiled","name":"View Compiled HTML","disabled_processors":["none"],"showInEmbeds":true},{"id":"analyze_html","type":"analyze","name":"Analyze HTML"},{"id":"maximize_html_editor","type":"maximize","name":"Maximize HTML Editor"},{"id":"minimize_html_editor","type":"minimize","name":"Minimize HTML Editor"},{"id":"fold_all_html","type":"fold_all","name":"Fold All"},{"id":"unfold_all_html","type":"unfold_all","name":"Unfold All"}],"processors":[{"id":"none","name":"None"},{"id":"haml","name":"Haml"},{"id":"markdown","name":"Markdown"},{"id":"slim","name":"Slim"},{"id":"pug","name":"Pug"}]},{"id":"css","type":"css","name":"CSS","showEditor":true,"showSettings":true,"showProcessors":true,"showVendorPrefixing":true,"embeds":{"showViewCompiled":true},"actions":[{"id":"tidy_css","type":"tidy_code","name":"Format CSS","disabled_processors":["sass","stylus"]},{"id":"view_compiled_css","type":"view_compiled","name":"View Compiled CSS","disabled_processors":["none"],"disabled_prefixes":["neither","prefixfree"]},{"id":"analyze_css","type":"analyze","name":"Analyze CSS"},{"id":"maximize_css_editor","type":"maximize","name":"Maximize CSS Editor"},{"id":"minimize_css_editor","type":"minimize","name":"Minimize CSS Editor"},{"id":"fold_all_css","type":"fold_all","name":"Fold All","disabled_processors":["sass"]},{"id":"unfold_all_css","type":"unfold_all","name":"Unfold All","disabled_processors":["sass"]}],"processors":[{"id":"none","name":"None"},{"id":"less","name":"Less"},{"id":"scss","name":"SCSS"},{"id":"sass","name":"Sass"},{"id":"stylus","name":"Stylus"},{"id":"postcss","name":"PostCSS"}],"parSuffixes":["less","scss","sass","styl"]},{"id":"js","type":"js","name":"JS","showEditor":true,"showSettings":true,"showProcessors":true,"detectImports":true,"externalResourcesHidden":false,"embeds":{"showViewCompiled":true},"actions":[{"id":"tidy_js","type":"tidy_code","name":"Format JavaScript","disabled_processors":["coffeescript, livescript"]},{"id":"view_compiled_js","type":"view_compiled","name":"View Compiled JavaScript","disabled_processors":["none"]},{"id":"analyze_js","type":"analyze","name":"Analyze JavaScript"},{"id":"maximize_js_editor","type":"maximize","name":"Maximize JavaScript Editor"},{"id":"minimize_js_editor","type":"minimize","name":"Minimize JavaScript Editor"},{"id":"fold_all_js","type":"fold_all","name":"Fold All"},{"id":"unfold_all_js","type":"unfold_all","name":"Unfold All"}],"processors":[{"id":"none","name":"None"},{"id":"babel","name":"Babel"},{"id":"typescript","name":"TypeScript"},{"id":"coffeescript","name":"CoffeeScript"},{"id":"livescript","name":"LiveScript"}]}],"formatters":[{"id":"classic","name":"Classic","runOn":[{"eventType":"demand"}],"url":"https://fi593g2v2a.execute-api.us-west-2.amazonaws.com/production/format"}],"layout":{"default":"top"},"linters":[{"id":"classic","name":"Classic","runOn":[{"eventType":"demand"}],"url":"https://fi593g2v2a.execute-api.us-west-2.amazonaws.com/production/lint"}],"preview":{"intervalMaxWaitMS":3500,"intervalMS":1200},"settings":[{"id":"details","name":"Pen Details","type":"setting"},{"id":"privacy","name":"Privacy","pro":true,"type":"setting"},{"id":"behavior","name":"Behavior","type":"setting"},{"id":"editor","name":"Editor","type":"setting"},{"id":"template","name":"Template","type":"setting"},{"id":"screenshot","name":"Screenshot","pro":true,"type":"setting"}]},"__item":"{\"editor_settings\":{\"auto_run\":true,\"autocomplete\":false,\"code_folding\":true,\"css_pre_processor\":\"none\",\"css_prefix\":\"neither\",\"css_starter\":\"neither\",\"emmet_active\":true,\"font_size\":\"15\",\"font_type\":\"system\",\"format_on_save\":false,\"html_pre_processor\":\"none\",\"indent_with\":\"spaces\",\"js_pre_processor\":\"none\",\"key_bindings\":\"normal\",\"line_numbers\":true,\"line_wrapping\":true,\"match_brackets\":true,\"snippets\":{\"markupSnippets\":{},\"stylesheetSnippets\":{}},\"tab_size\":2,\"theme\":\"twilight\",\"id\":\"raNxMWa\",\"auto_save\":true},\"hashid\":\"raNxMWa\",\"itemType\":\"pen\",\"resources\":[],\"tags\":[],\"id\":79645403,\"user_id\":14010181,\"html\":\"&lt;!DOCTYPE html&gt;\\n&lt;html lang=\\\"en\\\"&gt;\\n\\n&lt;head&gt;\\n  &lt;meta charset=\\\"UTF-8\\\"&gt;\\n  &lt;meta name=\\\"viewport\\\" content=\\\"width=device-width,\\n initial-scale=1.0\\\"&gt;\\n  &lt;title&gt;To-Do List App&lt;/title&gt;\\n  &lt;link rel=\\\"stylesheet\\\" bref=\\\"style.css\\\"&gt;\\n&lt;/head&gt;\\n\\n&lt;body&gt;\\n  &lt;div class=\\\"todo-container\\\"&gt;\\n    &lt;h1&gt;My To-Do List&lt;/h1&gt;\\n    &lt;input type=\\\"text\\\" 10=\\\"taskinput\\\" placeholder=\\\"Add a new task...\\\" /&gt;\\n    &lt;button id=\\\"addTaskButton\\\"&gt;Add Task&lt;/button&gt;\\n    &lt;ul id=\\\"tasklist\\\"&gt;&lt;/ul&gt;\\n  &lt;/div&gt;\\n\\n  &lt;script src=\\\"script.js\\\"&gt;&lt;/script&gt;\\n&lt;/body&gt;\\n&lt;/html&gt;\",\"css\":\"body {\\n  font-family: Arial, sans-serif;\\n  background-color: #f4f4f4;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n  margin: 0;\\n}\\n\\n.todo-container {\\n  background-color: white;\\n  padding: 20px;\\n  border-radius: 8px;\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0);\\n  width: 300px;\\n}\\n\\nh1 {\\n  text-align: center;\\n  color: #333;\\n}\\n\\ninput[type=\\\"text\\\"] {\\n  width: 80%;\\n  padding: 10px;\\n  margin-right: 10px;\\n  border-radius: 4px;\\n  border: 1px solid #ddd;\\n}\\n\\nbutton {\\n  padding: 10px 15px;\\n  background-color: #4caf50;\\n  color: white;\\n  border: none;\\n  border-radius: 4px;\\n  cursor: pointer;\\n}\\n\\nbutton:hover {\\n  background-color: #45a049;\\n}\\nul {\\n  list-style: none;\\n  padding: 0;\\n  margin-top: 20px;\\n}\\nli {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 10px;\\n  border-bottom: 1px solid #add;\\n}\\nli.completed {\\n  text-decoration: line-through;\\n  color: #888;\\n}\\n\\nbutton.remove-btn {\\n  background-color: #f44336;\\n  padding: 5px 10px;\\n  border: none;\\n  color: white;\\n  border-radius: 4px;\\n  cursor: pointer;\\n}\\n\\nbutton.remove-btn:hover {\\n  background-color: #e53935;\\n}\\n\",\"js\":\"// Get DOM elements\\nconst taskInput = \\n      document.getElementById('taskinput');\\nconst addTaskButton = \\n      document.getElementById('addTaskButton');\\nconst taskList = \\n      document.getElementById('taskList');\\n\\n// Function to create a new task\\nfunction createtask(taskContent) {const li =\\n      document.createElement('11');\\n                                  \\n      // Create text mode\\n       const taskText = \\ndocument.createElement('button');\\n\\nremoveButton.classList.add('remove-btn');\\n                                   removeButton.textContent = 'Remove';\\n                                   removeButton.onclick = function () {};\\n                                  // Add text node and button to the list item\\n                                  li.appendChild(taskText);\\n                          li.appendChild(removeButton);\\n                                  // Toggle completed task on click\\n  li.onclick = function () {li.classList.toggle('completed'); };\\n \\ntaskList.appendChild(11);\\n                                 }\\n// Add task when the button is clicked\\naddTaskButton.onclick = function () {Input.taskContent = taskInput.value.trim();\\n                                     if (taskContent !== \\\"\\\") {createTask(taskContent);\\n                       taskInput.value = \\\"\\\"; // Clear the input field\\n                                                             }\\n                                    };\\n                                    // Add task by pressing Enter key\\ntaskInput.addEventListner('keypress',\\nfunction (e) {\\n  if (e.key === 'Enter') {\\n    addTaskButton.click();\\n  }\\n});\\n   \",\"html_pre_processor\":\"none\",\"css_pre_processor\":\"scss\",\"js_pre_processor\":\"none\",\"html_classes\":\"\",\"css_starter\":\"neither\",\"js_library\":null,\"created_at\":\"2025-02-18T23:37:43.529Z\",\"updated_at\":\"2025-03-25T12:50:00.054Z\",\"title\":\"codestorm\",\"description\":\"\",\"slug_hash\":\"raNxMWa\",\"head\":\"&lt;link&gt; real=\\\"stylesheet\\\"\\nhref=\\\"style.css\\\"&gt;\\n&lt;script src =\\\"script.js\\\" defer&gt;&lt;/script&gt;\",\"private\":false,\"slug_hash_private\":\"ad225d71ec64b949b4401a03968faaca\",\"has_animation\":true,\"team_id\":0,\"css_prefix\":\"neither\",\"template\":false,\"parent_id\":0,\"comments_count\":0,\"custom_screenshot_filename\":null,\"loves_count\":0,\"pick\":false,\"popularity\":0,\"views_count\":0,\"pick_visible_at\":null,\"cpid\":\"01951b6c-b369-7344-97a6-4a89ffeaf53f\",\"is_new_editor_pen\":false,\"access\":\"Public\",\"pen_hash\":null}","__layoutType":"top","__pageType":"pen","__profiled":{"base_url":"/Edwin-McCain","hashid":"Ykdgwo","id":14010181,"name":"Edwin McCain","type":"user","username":"Edwin-McCain"},"__processorsMap":{"autoprefixer":"autoprefixer-10","babel":"babel-7","coffeescript":"coffeescript-2","format-1":"format-1","flutter":"flutter-1","haml":"haml-4","less":"less-3","lint-1":"lint-1","livescript":"livescript-1","markdown":"markdown-11","postcss":"postcss-7","pug":"pug-2","sass":"sass-1","scss":"sass-1","sass-ruby-3":"sass-ruby-3","sass-ruby-compass-3":"sass-ruby-compass-3","slim":"slim-3","stylus":"stylus-0","typescript":"typescript-4","vue":"vue-2","vue3":"vue-3"},"__rtData":"{\"maxMembers\":0,\"roomID\":\"raNxMWa/live\",\"roomType\":\"live\",\"updatedAt\":1742907000,\"user\":{\"id\":\"Ykdgwo\",\"hashid\":\"Ykdgwo\",\"name\":\"Edwin McCain\",\"username\":\"Edwin-McCain\",\"role\":\"editor\"}}","__eijs":"https://public.codepenassets.com/embed/index.js","__favicon_mask_icon":"https://cpwebassets.codepen.io/assets/favicon/logo-pin-b4b4269c16397ad2f0f7a01bcdf513a1994f4c94b8af2f191c09eb0d601762b1.svg","__favicon_shortcut_icon":"https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico","__path_to_iframe_console_runner":"https://cpwebassets.codepen.io/assets/editor/iframe/iframeConsoleRunner-6d8bf8b4b479137260842506acbb12717dace0823c023e08b96360e60b0840d9.js","__path_to_iframe_refresh_css":"https://cpwebassets.codepen.io/assets/editor/iframe/iframeRefreshCSS-44fe83e49b63affec96918c9af88c0d80b209a862cf87ac46bc933074b8c557d.js","__path_to_iframe_runtime_errors":"https://cpwebassets.codepen.io/assets/editor/iframe/iframeRuntimeErrors-4f205f2c14e769b448bcf477de2938c681660d5038bc464e3700256713ebe261.js","__path_to_processor_worker":"https://cpwebassets.codepen.io/assets/packs/router.js","__path_to_stop_execution_on_timeout":"https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-2c7831bb44f98c1391d6a4ffda0e1fd302503391ca806e7fcc7b9b87197aec26.js","__pen_normalize_css_url":"https://public.codepenassets.com/css/normalize-5.0.0.min.css","__pen_prefix_free_url":"https://public.codepenassets.com/js/prefixfree-1.0.7.min.js","__pen_reset_css_url":"https://public.codepenassets.com/css/reset-2.0.min.css","__theme_url_twilight":"https://cpwebassets.codepen.io/assets/editor/themes/twilight-5624f2aa0a9e5ad3c27da1db150d791e788247e197af02b4cd6db6fbc40f7354.css","__theme_url_solarized_dark":"https://cpwebassets.codepen.io/assets/editor/themes/solarized-dark-5524d7672bd3f4191755f2f06eb52d9e90e3ae41b4919b94b68e336ee6f8e908.css","__theme_url_tomorrow_night":"https://cpwebassets.codepen.io/assets/editor/themes/tomorrow-night-b24eeddae48ecd6c977bf2059ba10ad91efd3680a1ba93f2e33ce76d5889b3ed.css","__theme_url_oceanic_dark":"https://cpwebassets.codepen.io/assets/editor/themes/oceanic-dark-6c860318d2c1c7700ca3f7a51ac9bf2847699c097f3219d4bdad14426c91df51.css","__theme_url_panda":"https://cpwebassets.codepen.io/assets/editor/themes/panda-aede9c039e179a2c374a5256861d53b097137008ca7fc1ce4b019c66dd0e2fd1.css","__theme_url_duotone_dark":"https://cpwebassets.codepen.io/assets/editor/themes/duotone-dark-47344b940707cb4e6850cef429b6d844aa969b31e4a4741299e4926c036cfc6d.css","__theme_url_highcontrast_dark":"https://cpwebassets.codepen.io/assets/editor/themes/highcontrast-dark-47187de4142cc38f6f5a1e9f846225ded7136f4761bf6a3ec0ed89c8ce9b7382.css","__theme_url_classic":"https://cpwebassets.codepen.io/assets/editor/themes/classic-45c43b72fafc606f79eb802d819ada14ee27946fe25dfe189da767500cc78cf9.css","__theme_url_solarized_light":"https://cpwebassets.codepen.io/assets/editor/themes/solarized-light-81bc654a0e146841fcfbec1f085308252d35f1b9daef8ca23b1ff91cb32b1862.css","__theme_url_xq_light":"https://cpwebassets.codepen.io/assets/editor/themes/xq-light-b4ef10af805d69aee43b581c024e201f80d911d6cc638a309edd2242a2b77565.css","__theme_url_oceanic_light":"https://cpwebassets.codepen.io/assets/editor/themes/oceanic-light-d441824dd2db1a08b893f344b6cf56731c6af6adef3e12c4eaa652e2db553d35.css","__theme_url_mdn_like":"https://cpwebassets.codepen.io/assets/editor/themes/mdn-like-d5ee28ea8d118f387e9c19f0aac088b13655f3e4725cd597296e08d7167a43ae.css","__theme_url_duotone_light":"https://cpwebassets.codepen.io/assets/editor/themes/duotone-light-f63768bb645798048a0e1eef9795b405a351a9edca2d722c0cada0d3672c94dd.css","__theme_url_highcontrast_light":"https://cpwebassets.codepen.io/assets/editor/themes/highcontrast-light-cb745e3989e02d3701df587f5fefa5e9707157de3a129e3d86f1ca7ce6cc4bff.css"}</textarea>

  <script src="./script_files/browser_support-2c1a3d31dbc6b5746fb7dacdbc81dd613906db219f13147c66864a6c3448246c.js.download"></script>
  <script src="./script_files/everypage-c0439686246cf4a1465a9bf7bcc4b0a7a720b9724e1e14b3aa3bec47880049c4.js.download"></script>


  <script src="./script_files/vendor-54bd34e7e5f9e787775f.chunk.js.download"></script>
<script src="./script_files/3-d1c767eaafdb7284a528.chunk.js.download"></script>
<script src="./script_files/everypage-8469761bfcad7dff4fc1.js.download"></script><div id="react-messages"><div class="Messages-module_container-YzpcS" style="position: fixed; z-index: 9999; inset: 16px; pointer-events: none;"></div></div><div></div>
  <script src="./script_files/vendor-54bd34e7e5f9e787775f.chunk.js.download"></script>
<script src="./script_files/processorRouter-87fff36bc8e4e7fdd989.js.download"></script>
    <script src="./script_files/filestack.min.js.download"></script>
  <script src="./script_files/commonLibs-18d595d95e5894ceae5661c7e40deeca7df254309b42f89edce76949b15a0f31.js.download"></script>

<script src="./script_files/codemirror-e628acccbc140ed80f9daa48b5e64c775855e64a41d7fad48e7583a7819aa9d6.js.download"></script>
  <script src="./script_files/emmet-codemirror-plugin-96396a4ad085138a7f4e501477590b84cedf5a10d5298bdeb2da448cada82d11.js.download"></script>


  <script src="./script_files/index-92baa2f77e5a89be2d35698eaec943a1437db0848c2524d7e33652550acd5605.js.download"></script>







</body></html>