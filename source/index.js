let EasyMap = {
	map:null,
	point:new BMap.Point(31.2810476,121.3521966),
	init:function(){
		if (navigator.geolocation) { 
			navigator.geolocation.getCurrentPosition((position)=>{
				// console.log(this);
				// console.log(position.coords.longitude);
				// console.log(position.coords.latitude);
				this.point = new BMap.Point(position.coords.longitude,position.coords.latitude);
				console.log(this.point);	
				this.addMapCtrl(); 
				this.addInfoWindow("您现在的位置在这里！O(∩_∩)O");

			},()=>{
				// console.log(this);
				this.point = new BMap.Point(121.363044,31.285189);
				// console.log(this.point);
				this.addMapCtrl();
				this.addInfoWindow("您现在的位置在这里！→_→但是你竟然没开定位"); 
			});
		}else{ 
				alert("您的浏览器不支持获取地理位置。"); 
		} 
	},
	// localSearch:function(){
	// 			//添加地图搜索功能
	// 			// console.log(this);
	// 	var local = new BMap.LocalSearch(this.map, {      
	// 				renderOptions:{map: this.map}      
	// 	});
	// 	local.search(document.querySelector("input[name='search']").value);
	// },

	addMapCtrl:function(){
		this.map = new BMap.Map("container");
		//初始化地图
		this.map.centerAndZoom(this.point,16);
		//添加控件
		this.map.addControl(new BMap.NavigationControl());//地图平移缩放控件  
		this.map.addControl(new BMap.ScaleControl());    //比例控件
		this.map.addControl(new BMap.OverviewMapControl()); //缩略地图控件  
		this.map.addControl(new BMap.MapTypeControl());

		// this.addMarker();

		var stCtrl = new BMap.PanoramaControl();  
		stCtrl.setOffset(new BMap.Size(20, 20));  
		this.map.addControl(stCtrl);
		//搜索
		// var search = document.querySelector("input[name='search']");
		// search.onkeyup = this.localSearch.call(this);   
		//一些核心类
		
		this.map.enableScrollWheelZoom();  //允许鼠标滚动放大缩小
		this.map.enableKeyboard();  //允许键盘上下左右操作地图

		// var TrafficControl = new BMap.TrafficControl(this.map);
	} ,
	// addMarker:function(){
	// 	// // var marker = new BMap.Marker(this.point);
	// 	// this.map.addControl(new BMap.Marker(this.point));//地图标注
	// 	// console.log(marker.getOffset());
	// 	// marker.enableDragging();    
	// 	// marker.addEventListener("dragend", function(e){    
	// 	// console.log("当前位置：" + e.point.lng + ", " + e.point.lat);    
	// 	// })
	// },
	addInfoWindow:function(note){
		var opts = {    
			width : 250,     // 信息窗口宽度    
			height: 100,     // 信息窗口高度    
			title : "您好^_^",  // 信息窗口标题   
		}
		var infoWindow = new BMap.InfoWindow(note, opts);       
		this.map.openInfoWindow(infoWindow, this.map.getCenter());      // 打开信息窗口
	},
}
EasyMap.init();