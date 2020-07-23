window.onload = function() {
    let loadTime = Date.now() - window.performance.timing.navigationStart;
    loadTime = (loadTime / 1000).toFixed(2);
    document.getElementById('timeLoad').textContent = loadTime;
}