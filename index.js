function onUpdateReady(){
  var description = document.getElementById("description");
  description.innerHTML = '<div class="alert alert-warning">应用已经更新,<a href="#" onclick="location.reload()">点击刷新页面</a></div>';
}

window.applicationCache.addEventListener('updateready',onUpdateReady,false);

//数据加载完才提醒用户
if(window.applicationCache.status === window.applicationCache.UPDATEREADY){
  alert();
  onUpdateReady();
}
