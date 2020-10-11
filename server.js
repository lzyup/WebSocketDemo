// import express from 'express'
// import { Server as SocketServer } from 'ws';
const express = require('express');
const SocketServer = require('ws').Server

//指定port
const PORT = 3000;

//创建express
const server = express().listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})

//将express交给SocketServer开启WebSocket的服务
const wss = new SocketServer({ server });

//当WebSocket与外部连接时
wss.on('connection', ws => {
    console.log('Client connected1');

    //定时给Client发送信息
    // const sendNowTime = setInterval(() => {
    //     ws.send(String(new Date()))
    // }, 1000);


    //对message设置监听，接收Client发送的信息
    ws.on('message', data => {
        //data是client发送的信息
        // ws.send(data);

        let clients = wss.clients;

        //发送信息到每个client
        clients.forEach((client => {
            client.send(data)
        }))
    })
    //当WebSocket关闭时
    ws.on('close', () => {
        console.log('Close connected');
        // clearInterval(sendNowTime)
    })
})