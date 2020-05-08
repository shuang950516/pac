function FindProxyForURL(url, host) {
  return "HTTP localhost:3128;HTTPS localhost:3128;SOCKS 127.0.0.0:3128";
}
