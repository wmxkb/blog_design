console.error("电脑炸了");

//例一
for (var i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log(i);
    },100)
};
//例二
for (let i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log(i);
    },100)
};