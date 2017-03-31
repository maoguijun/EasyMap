var map = new BMap.Map("container");          // 创建地图实例 
 console.log(getLocation());
var point = new BMap.Point(getLocation());  // 创建点坐标  
map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  

//通过定位软件获取当前的地址
function getLocation() 
{ 
    if (navigator.geolocation) 
    { 
        navigator.geolocation.getCurrentPosition(showPosition); 
    } 
    else 
    { 
        alert("您的浏览器不支持获取地理位置。"); 
    } 
}

function showPosition(position) 
{ 
    return(position.coords.latitude ,position.coords.longitude);  
}

// map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);    
map.addControl(new BMap.NavigationControl());

map.addControl(new BMap.NavigationControl());    
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用

var opts = {type: BMAP_NAVIGATION_CONTROL_SMALL}    
map.addControl(new BMap.NavigationControl(opts));


