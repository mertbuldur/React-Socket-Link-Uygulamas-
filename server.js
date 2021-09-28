var app  = require('express')();
var http = require('http').Server(app);
var io  = require('socket.io')(http);
var port = 3001;
app.get('/',function(req,res){
   res.send('Youtube Videosu'); 
});

io.on('connection',function(socket){
    console.log('Connection oldu');

    socket.on('send_data',(data) => {
        socket.broadcast.emit('push_data',{url:data.url});
        //socket.emit('welcome',{text:`Sitede bir link paylaşıldı: ${data.site_name}`});
    })

});



http.listen(port,function(){
    console.log(`server is running: http://localhost:${port}`);
})