let ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
    console.log('open connection')
}

ws.onclose = () => {
    console.log('close connection')
}

//接收Server发送的信息
ws.onmessage = event => {
    console.log(event)
}