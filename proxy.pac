function FindProxyForURL(url, host) {
    if (
        dnsDomainIs(host, "nebula.kuaishou.com") ||
        dnsDomainIs(host, "mitm.it") ||
        dnsDomainIs(host, "cauth.pupuapi.com")
    ) {
        return "PROXY 192.168.15.2:18080";
    }
    return "DIRECT";
}
