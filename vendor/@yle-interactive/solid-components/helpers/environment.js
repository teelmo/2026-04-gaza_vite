export function isUsingApp(){
    const currentUrl = window.location.href;
    return currentUrl.includes("article-renderer") ? true : false;
}

export function inDevEnv(){
    const currentUrl = window.location.href;
    return currentUrl.includes("about:srcdoc") || currentUrl.startsWith("https://dev.yle.fi") ? true : false;
}

export function hasYleTopBar(){
    const yleTopBar = document.querySelector(".yle-header-container");
    return yleTopBar ? true : false;
}