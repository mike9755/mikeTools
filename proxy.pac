function FindProxyForURL(url, host) {
    if (
        dnsDomainIs(host, "nebula.kuaishou.com") ||
        dnsDomainIs(host, "mitm.it")
    ) {
        return "PROXY www.marstech.top:18080";
    }
    return "DIRECT";
}
