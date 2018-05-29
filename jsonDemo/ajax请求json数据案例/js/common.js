$(document).ready(function(){
	//添加地图
	var stauteArr={
			'beimeizhou':'true',
			'nanmeizhou':'true',
			'ouzhou':'true',
			'feizhou':'true',
			'yazhou':'true',
			'dayangzhou':'true'
		};
	$(".conSixmap .name").on('click',function(){
		var _this=this;
		var htmlcon="";
		$(this).siblings(".name").children(".condetail").fadeOut(500);
		$(this).children(".condetail").fadeIn(500);
		var _name=$(this).attr('data-name');
		
		//当前请求过后不需要请求
		if(stauteArr[_name] =='false'){
			return;
		}
		  $.ajax({
			url:"js/schoolMap.json",
			type:'get',
			data:{},
			dataType:"json",
			success: function(data){
				for(var i in data){
					if(_name==i){
						console.log(data[i]);
						for(var j=0;j<data[i].length;j++){
							 htmlcon+="<span>"+data[i][j]+"</span>";
						}
						$(_this).children(".condetail").append(htmlcon);
						stauteArr[i]='false';
					}
				}
			},
			error: function(){
				alert('请求失败，请检查网络');
			}
		});
 
	});
});

