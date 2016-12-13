require('./logger');

$('#app').html('from jquery');
var app = document.getElementById('app')
app.innerHTML = 'welcome to my demo app';
console.log('app loaded');
[1,2,3].map(n => n + 1);
if(module.hot){
    module.hot.accept();
}
