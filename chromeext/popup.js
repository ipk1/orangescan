function scanDomain(scanUrl, domainReg) {
    chrome.tabs.getSelected(null, function (tab) {
        var domainUrl = tab.url;
        var domain = domainReg.exec(domainUrl);
        domain = domain[0].split('.');
        var i = domain.length;
        domain = domain[i - 2] + "." + domain[i - 1];
        scanUrl.innerHTML = "<a href='http://101.200.161.172/domain/search?q=" + domain + "' target='_blank'>scan</a>";
        return domain;
    });
}
var domainReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
var scanUrl = document.getElementById('curDomain');
scanDomain(scanUrl, domainReg);
