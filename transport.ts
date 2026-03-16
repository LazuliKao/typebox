import type { duration, headers, listable } from './types.ts'
import type { client_tls as tls } from './tls.ts'

export type transport = http | websocket | quic | grpc | httpupgrade | xhttp


interface http {
    type: 'http'
    host?: listable<string>
    path?: string
    method?: http_method
    headers?: headers
    idle_timeout?: duration
    ping_timeout?: duration
}
interface websocket {
    type: 'ws'
    path?: string
    headers?: headers
    max_early_data?: number
    early_data_header_name?: string
}
interface quic {
    type: 'quic'
}
interface grpc {
    type: 'grpc'
    service_name?: string
    idle_timeout?: duration
    ping_timeout?: duration
    permit_without_stream?: boolean
}
interface httpupgrade {
    type: 'httpupgrade'
    host?: string
    path?: string
    headers?: headers
}

interface xhttp extends xhttp_base {
    type: 'xhttp'
    mode?: 'auto' | 'packet-up' | 'stream-up' | 'stream-one'
    download?: xhttp_download
}

interface xhttp_base {
    host?: string
    path?: string
    headers?: Record<string, string>
    domain_strategy?: string
    x_padding_bytes?: string | number
    no_grpc_header?: boolean
    no_sse_header?: boolean
    sc_max_each_post_bytes?: number | string
    sc_min_posts_interval_ms?: number | string
    sc_max_buffered_posts?: number
    sc_stream_up_server_secs?: string | number
    xmux?: xmux

    x_padding_obfs_mode?: boolean
    x_padding_key?: string
    x_padding_header?: string
    x_padding_placement?: string
    x_padding_method?: string
    uplink_http_method?: string
    session_placement?: string
    session_key?: string
    seq_placement?: string
    seq_key?: string
    uplink_data_placement?: string
    uplink_data_key?: string
    uplink_chunk_size?: number
}
interface xhttp_download extends xhttp_base {
    server?: string
    server_port?: number
    detour?: string
    tls?: tls
}

interface xmux {
    max_concurrency?: number | string
    max_connections?: number | string
    c_max_reuse_times?: number | string
    h_max_request_times?: number | string
    h_max_reusable_secs?: number | string
    h_keep_alive_period?: number
}

type http_method = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE'

