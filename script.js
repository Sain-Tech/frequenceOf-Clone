function core() {
    var filt = document.querySelector('#user').value;

    chrome.storage.sync.set({
        userWords: filt
    });

    chrome.tabs.executeScript({
        code: `
        document.querySelector('body').innerText;
        `
    }, function(result) {
        var bodyText = result[0];
        var bodyNum = bodyText.split(' ').length;
        var myNum = bodyText.match(new RegExp(`\\b(${filt})\\b`, 'gi')).length;
    
        var per = myNum / bodyNum * 100;
        per = per.toFixed(2);
    
        document.querySelector('#result').innerText = `${myNum} / ${bodyNum} (${per}%)`;
    
    });
}

chrome.storage.sync.get(function(data) {
    document.querySelector('#user').value = data.userWords;
    core();
});

document.querySelector('#user').addEventListener('change', function() {
    var filt = document.querySelector('#user').value;
    core();
});