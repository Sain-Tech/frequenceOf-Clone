$.post("http://dev.chsain.com:3000/gettestdata", 
{
    requests: 0 //0, 1, 2, 3, ...
}, data => {
    alert(JSON.stringify(data));
    console.log(data);
}).fail(msg => {
    alert("failed", msg)
});

chrome.tabs.executeScript({
    code: `
    var bodyText = document.querySelector('body').innerText;
    var bodyNum = bodyText.split(' ').length;
    //alert(bodyText);
    `
});