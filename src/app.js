// window.addEventListener('devtoolschange', function (e) {
//     if (e.detail.open) {
//         document.querySelectorAll('my-app')[0].remove();
//         document.body.innerHTML = "<h2 style='display:flex;width:100%;height:100vh;max-width:450px;margin:0 auto;align-items:center;justify-content:center;font-weight:700;line-height:1.2;'>Do not open developer tools on this page. This will be counted as an attempt to cheat, and too many counts will result in a permanent IP ban.</h2>";
//         alert("Do not open developer tools on this page. This will be counted as an attempt to cheat, and too many counts will result in a permanent IP ban.");
//         window.location.reload();
//     }
// });

document.getElementsByTagName('title')[0].addEventListener('DOMSubtreeModified', function (e) {
    gtag('config', 'UA-119583599-1', {
        'page_title': document.title,
        'page_path': window.location.pathname,
        'page_location': window.location.href
    });
}, false);