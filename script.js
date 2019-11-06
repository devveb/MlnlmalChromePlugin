chrome.browserAction.onClicked.addListener(function(tab) {
  var request = new XMLHttpRequest();
  request.open("POST", "http://mlnlmal.ml/api/shlk?v=2&orl="+tab.url);
  request.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
      var json = JSON.parse(this.responseText);
      alert(json.shortUrl);
    }
  };
  request.send();
});




