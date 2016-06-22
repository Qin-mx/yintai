$(function(){
	// 轮播
function lunbo(){	
	var bos=$(".dabanner")[0];
	var imgs=$(".banner-tutu");
	var dian=$(".dian");
	var right=$(".banner-right")[0];
	var left=$(".banner-left")[0];
	var n=0;
	var next=0;
	var t=setInterval(move,5000)
	function move(){
		next=n+1;
		if(next>=imgs.length){
			next=0;
		}
		for(var i=0;i<dian.length;i++){
			dian[i].style.background="#211616";	  
			imgs[i].style.zIndex ="0";		
		}
		dian[next].style.background="#E5004F";
		imgs[next].style.zIndex=1;
		imgs[n].style.zIndex=0;
		n=next;

	}
	function move1(){
		next=n-1;
		if(next<0){
			next=imgs.length-1;
		}
		for(var i=0;i<dian.length;i++){
			dian[i].style.background="#211616";	  
			imgs[i].style.zIndex ="0";		
		}
		dian[next].style.background="#E5004F";
		imgs[next].style.zIndex=1;
		imgs[n].style.zIndex=0;
		n=next;
	}
	left.onclick=function(){
		move1();
	}
	right.onclick=function(){
		move();
	}
	bos.onmouseover=function(){
		clearInterval(t);                  
		left.style.display="block";
		right.style.display="block";  
	}
	bos.onmouseout=function(){
		t=setInterval(move,5000)     
		left.style.display="none";
		right.style.display="none";          
	}
	for(var i=0;i<dian.length;i++){

		dian[i].index=i;   
		dian[i].onmouseover=function(){
			for(var i=0;i<imgs.length;i++){
				dian[i].style.background="#211616";	    		
			}
			dian[this.index].style.background="#E5004F";
			imgs[this.index].style.zIndex=1;
			imgs[n].style.zIndex=0;  
			n=this.index;
		} 
	}
}
lunbo();
//轮播
function move(n){
	var box=$(".box-lunbo")[n];
	var imgs=$(".floor-lunbo",box);
	var dian=$(".yuanq",box);
	var right=$(".floor-right")[n];
	var left=$(".floor-left")[n];
	var flag=true;
	var n=0;
	var next=1;
	box.onmouseover=function(){
		animate(left,{left:0},100);
		animate(right,{right:0},100);
	}
	box.onmouseout=function(){
		animate(left,{left:-30},200);
		animate(right,{right:-30},200);
	}
	right.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		for(var i=0;i<imgs.length;i++){
			dian[i].style.background="#6E6E6E"; 
		}
		dian[next].style.background="#DA0A52";         
		animate(imgs[n],{left:0},500);        
		animate(imgs[next],{left:-390},500,function(){
			flag=true;
		});       
	}
	left.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		for (var i = 0; i < imgs.length; i++) {
			dian[i].style.background="#6E6E6E";
		}
		dian[n].style.background="#DA0A52";      
		animate(imgs[n],{left:390},500);        
		animate(imgs[next],{left:0},500,function(){
			flag=true;
		});      
	}
	for(var i=0;i<dian.length;i++){
		dian[i].index=i;                   
		dian[i].onclick=function(){                
			for(var i=0;i<dian.length;i++){
				dian[i].style.background="#6E6E6E";
			}       
			dian[this.index].style.background="#DA0A52";
			if(this.index>n){ 
				animate(imgs[n],{left:0},500);        
				animate(imgs[this.index],{left:-390},500,function(){
					flag=true;
				});  
				n=this.index;
			}else if(this.index<n){
				animate(imgs[this.index],{left:390},500);        
				animate(imgs[n],{left:0},500,function(){
					flag=true;
				}); 
				n=this.index;	
			}
		}

	}
}
var  box=$(".box-lunbo");
for (var i = 0; i < box.length; i++) {
	move(i);
}
//xiala
function xiala(){
	var box=$(".logo-gou")[0];
	var img=$("#logo-gou-a");
	box.onmouseover=function(){
		img.style.display="block"
	}
	box.onmouseout=function(){
		img.style.display="none"
	}
}
xiala();
// >消失
function xiao(n){
	var box=$(".fen")[n];
	var img=$(".dayu")[n];
	var tu=$(".all-hota")[n];
	box.onmouseover=function(){
		img.style.display="none"
		tu.style.display="block";
	}
	box.onmouseout=function(){
		img.style.display="block"
		tu.style.display="none";
	}
}
var box=$(".fen");
for (var i = 0; i < box.length; i++) {
	xiao(i);
}
//下
function xia(n){
	var box=$(".yt-xia")[n];
	var  wei=$(".wechata")[n];
	box.onmouseover=function(){
		wei.style.display="block"
	}
	box.onmouseout=function(){
		wei.style.display="none"
	}
}
var box=$(".yt-xia");
for (var i = 0; i < box.length; i++) {
	xia(i);
}
//选项
function xuan(n){
	var  lis=$(".floor-remen");
	var  ones=$(".floor-banner-tu");
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;                
		lis[i].onmouseover=function(){    
			for(var j=0;j<ones.length;j++){
				ones[j].style.display="none";
				lis[j].style.border=0; 
				lis[j].style.color="#666";
				lis[j].style.fontWeight="normal"
			}
			ones[this.index].style.display="block"; 
			lis[this.index].style.borderBottom="3px solid #e5004f"; 
			lis[this.index].style.color="#000";
			lis[this.index].style.fontWeight="bold" 		
		}
	} 
}
xuan();
// xuanx
function xuan2(){
	var  lis=$(".temai");
	var  ones=$(".temaiyifu");
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;                
		lis[i].onmouseover=function(){    
			for(var j=0;j<ones.length;j++){
				ones[j].style.display="none";
				lis[j].style.border=0; 
				lis[j].style.color="#666";
				lis[j].style.fontWeight="normal"
			}
			ones[this.index].style.display="block";
			lis[this.index].style.borderBottom="5px solid #e5004f"; 
			lis[this.index].style.color="#000";
			lis[this.index].style.fontWeight="bold"   		
		}
	}      
}
	xuan2();
//名片轮播
function ming(n){
	var box=$(".sbiao")[n];
	var imgs=$(".sbiao-box",box);
	var right=$(".sbiao-right")[n];
	var left=$(".sbiao-left")[n];
	var n=0;
	var next=0;
	right.onclick=function(){
		next=n+1;
		if(next>=imgs.length){
			return;
		}
			animate(imgs[n],{left:-200},500);        
			animate(imgs[next],{left:0},500);   
			n=next;    
	}
	left.onclick=function(){
		next=n-1;
		if(next<0){
			return;
		}
			animate(imgs[n],{left:200},500);        
			animate(imgs[next],{left:0},500);   
			n=next;    
	}

}
var  box=$(".sbiao");
for (var i = 0; i < box.length; i++) {
	ming(i);
}
//按需加载
anxu();
function anxu(){
		var fl=$(".fl");
		var floor=$(".floor");
		var box=$(".boss")[0];
		var lis=$(".dains");
        var ch=document.documentElement.clientHeight;
        var bh=box.offsetHeight;
        box.style.top=(ch-bh)/2+"px";
        var sign=true;
        var arr=[
	        {name:"时尚潮流"},
	        {name:"潮流女装"},
	        {name:"精品男装"},
	        {name:"时尚鞋靴"},
	        {name:"潮流箱包"},
	        {name:"美容护肤"},
	        {name:"运动户外"},
	        {name:"内衣配饰"},
	        {name:"婴童家居"},
	        {name:"返回顶部"}
        ]
        for(var i=0;i<lis.length;i++){/*for循环控制楼层控制时间*/
        	lis[i].index=i;/*对所需的图片和楼层控制进行编号*/
        	lis[i].onclick=function(){
        		if(sign){
        			sign=false;
        			for(var i=0;i<lis.length;i++){
        				lis[i].innerHTML="";
        				lis[i].style.background="transparent"
                /*通过for循环来控制所需的
                此时的楼层的背景颜色*/
            }
            lis[this.index].style.background="#C81623";
            lis[this.index].innerHTML=arr[this.index]["name"]
            lis[this.index].style.fontSize=18+'px';
            lis[this.index].style.color='#fff';
            if(this.index==9){
            	var obj=document.documentElement.scrollTop? document.documentElement:document.body;/*浏览器的兼容问题，用三元运算符进行控制*/
            	/*定义楼层到顶部的高度，*/
            	lis[9].style.background="#C81623";
            	animate(obj,{scrollTop:0},1000,function(){
            		sign=true;
            		lis[9].style.background="transparent";
            		lis[9].innerHTML="";
            	}); /*创建滚动的动画效果*/ 
            }else{
            	var obj=document.documentElement.scrollTop? document.documentElement:document.body;/*浏览器的兼容问题，用三元运算符进行控制*/
            	var top=fl[this.index].offsetTop;/*定义楼层到顶部的高度，*/
            	animate(obj,{scrollTop:top},1000,function(){
            		sign=true;
            	}); /*创建滚动的动画效果*/ 
            }

        }
    }
} 
    window.onscroll=function(){         //滚动事件
    	if(!sign){
    		return;
    	}
        var obj=document.documentElement.scrollTop? document.documentElement:document.body;/*浏览器的兼容问题，用三元运算符进行控制*/
          for(var i=0;i<fl.length;i++){
            if(obj.scrollTop>=fl[i].offsetTop-ch+500){/*如果控制的楼层的到顶部得到高度就可以等式不成立的时候进行颜色变换*/
              for(var j=0;j<floor.length;j++){
                 lis[j].innerHTML="";
                 lis[j].style.background="transparent"
              }
                lis[i].style.background="#C81623";
                lis[i].innerHTML=arr[i]["name"]
                lis[i].style.fontSize=18+'px';
                lis[i].style.color="#fff";
                }
                
                var imgs=$("img",floor[i]);         
                for(var j=0;j<imgs.length;j++){
                	var aa=imgs[j].getAttribute("aa");
                	imgs[j].src=aa;
        		}
        }
        var flag=true;
        var flag1=true;        
        if(obj.scrollTop>=floor[0].offsetTop-ch+100){   
    	    if(flag){
    		flag=false;   
    		animate(box,{opacity:1},300,function(){
    			flag1=true; 
    			});	
    	    }
    	}else{
    		if(flag1){
    			flag1=false;
    			animate(box,{opacity:0},300,function(){
    				flag=true;
    			});	
    		}
    	}
    }	

}
//边框变色
function bianse1(n){
	var kuang=$(".kuang")[n];
	var border1=$(".border-left")[n];
	var border2=$(".border-right")[n];
	var border3=$(".border-top")[n];
	var border4=$(".border-bottom")[n];
	kuang.onmouseover=function(){
		border1.style.width=220+"px";
		border2.style.height=260+"px";
		border3.style.height=260+"px";
		border4.style.width=220+"px";
	}
	kuang.onmouseout=function(){
		border1.style.width=0;
		border2.style.height=0;
		border3.style.height=0;
		border4.style.width=0;
	}
}
var kuang=$(".kuang")
for (var i = 0; i < 8; i++) {
	bianse1(i);
}
function bianse(n){
	var kuang=$(".biank")[n];
	var border1=$(".biank-left")[n];
	var border2=$(".biank-right")[n];
	var border3=$(".biank-top")[n];
	var border4=$(".biank-bottom")[n];
	kuang.onmouseover=function(){
		border1.style.width=270+"px";
		border2.style.height=180+"px";
		border3.style.height=180+"px";
		border4.style.width=270+"px";
	}
	kuang.onmouseout=function(){
		border1.style.width=0;
		border2.style.height=0;
		border3.style.height=0;
		border4.style.width=0;
	}
}
var kuang=$(".biank")
for (var i = 0; i < kuang.length; i++) {
	bianse(i)
}

function dianliang(){
	var li = $("li")[0];
	var lii = $('.dao')[0];
	var caidan1 = $('img')[0];
	var caidan2 = $('img')[1];
	var dao1 = $('img')[5];
	var dao2 = $('img')[6];
	li.onmouseover=function(){
		caidan1.style.display = "none";
		caidan2.style.display = "block";

	}
	li.onmouseout=function(){
		caidan1.style.display = "block";
		caidan2.style.display = "none";
	}
	lii.onmouseover=function(){
		dao1.style.display = "none";
		dao2.style.display = "block";

	}
	lii.onmouseout=function(){
		dao1.style.display = "block";
		dao2.style.display = "none";
	}
}
dianliang();
})