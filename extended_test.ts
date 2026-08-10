import { createOutbound } from './outbound.ts'
import { createEndpoint } from './endpoint.ts'
import { createDnsServer } from './dns.ts'
import { createExperimental } from './experimental.ts'
import { createRule } from './route.ts'

// Verify Mieru Outbound
const mieruOut = createOutbound({
    type: 'mieru',
    tag: 'mieru-out',
    server: 'example.com',
    server_port: 27017,
    transport: 'TCP',
    username: 'user',
    password: 'pass',
})

// Verify Warp Endpoint with Amnezia
const warpEnd = createEndpoint({
    type: 'warp',
    tag: 'warp-out',
    amnezia: {
        jc: 120,
        jmin: 23,
        jmax: 911,
        h1: 1,
        h2: 2,
        h3: 3,
        h4: 4,
    },
})

// Verify sDNS (now Partial<server>)
const sdnsServer = createDnsServer({
    type: 'sdns',
    tag: 'sdns-in',
    stamp: 'sdns://...',
})

// Verify ShadowsocksR
const ssrOut = createOutbound({
    type: 'shadowsocksr',
    tag: 'ssr-out',
    server: 'example.com',
    server_port: 8388,
    method: 'aes-128-ctr',
    password: 'password',
    obfs: 'plain',
    protocol: 'origin',
})

// Verify Unified Delay
const exp = createExperimental({
    unified_delay: {
        enabled: true,
    },
})

// Verify Tunnel Override
const tunnelRule = createRule({
    action: 'route',
    outbound: 'tunnel',
    override_tunnel_destination: 'dest-uuid',
})
