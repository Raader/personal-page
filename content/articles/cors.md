---
title: Understanding And Using Cors
date: "2021-05-07"
---

As a beginner i was in the process of making my first full stack app and right from the start i hit a unknown barrier CORS. I didn't know what it meaned but there was something about CORS in the error logs. I researched for hours trying to fix this issue. I eventually fixed it but didn't quite understand it right until now.

## So What Is CORS?

CORS stands for Cross-Origin Resource Sharing. It is an **HTTP-header** based mechanism that allows a server to indicate any **origins** (domain, scheme, port) other than its own from which a **browser** should permit loading of resources. It also relies on browser to make a **preflight** request to the server in order to check that server will permit the actual request.

## But ... Why?

A browser doesn't let a website make a request to another **origin** by default to protect the user. CORS allows web servers to safely make their resources accessible from different hosts.

## Getting Around CORS

Using and setting CORS can be a pain sometimes. Fortunately there is a work-around. One thing to note is CORS relies on **browser** to work. This means we can get around CORS using **proxies**.

## Proxies

A **proxy** in the context of web is just a web server that redirects request to another host. As we know CORS is implemented in browsers so instead of directly requesting a resource from a different host, we send the request to the proxy server. The proxy server than redirects the request to it's actual destination without getting blocked by CORS.
