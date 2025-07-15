function FindProxyForURL(url, host) {
    if (
        dnsDomainIs(host, "nebula.kuaishou.com") ||
        dnsDomainIs(host, "mitm.it") ||
        dnsDomainIs(host, "cauth.pupuapi.com")
    ) {
        return "PROXY www.marstech.top:18080";
    }
    return "DIRECT";
}
