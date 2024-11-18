import { Server } from "socket.io"
import jwt, { decode } from 'jsonwebtoken'
import { config } from "../config.js"

class Socket {
    constructor(server) {
        this.io = new Server(server, {
            cors: {
                origin: '*'
            }
        })
        this.io.use((socket, next) => {
            const token = socket.handshake.auth.token
            if (!token) {
                return next(new Error('인증 에러!'))
            }
            jwt.verify(token, config.jwt.secretKey, (error, decoded) => {
                if (error) {
                    return next(new Error('인증에러!'))
                }
                socket.user = decoded
                next()
            })
        })

        this.io.on('connection', (socket) => {
            console.log('클라이언트 접속!', socket.user)
        })
    }
}

let socket

// 서버 인자가 없어서 오류가 발생할 수 있으므로, server를 전달하도록 수정
export function initSocket(server) {
    if (!socket) {
        socket = new Socket(server)  // server를 전달
    }
}

// socket 객체를 반환하는 함수
export function getSocketIo() {
    if (!socket) {
        throw new Error('먼저 init를 실행하세요')
    }
    return socket.io
}