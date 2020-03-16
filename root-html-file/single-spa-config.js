import {
    registerApplication,
    start
} from 'single-spa';

registerApplication("applicationName", loadingFunction, activityFunction);
start();

function loadingFunction() {
    return import("src/app1/main.js");
}

function activityFunction(location) {
    return location.pathname.indexOf("/app1/") === 0;
}