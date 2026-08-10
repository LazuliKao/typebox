import { createNtp } from './ntp.ts'

const _ = createNtp({
    enabled: true,
    server: '',
    server_port: 0,
    domain_resolver: 'dns-server',
    detour: 'outbound',
})
