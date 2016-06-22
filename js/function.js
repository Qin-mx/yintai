function getClass(classname,obj){     //定义一个函数
	var obj=obj||document;           //进行选择
    if(obj.getElementsByClassName){        //如果能找到
       return obj.getElementsByClassName(classname) ; //直接输出
    }else{                                              //如果不能
    	var arr=[];
        var alls=obj.getElementsByTagName('*');//将所有元素调用出来
        for(var i=0;i<alls.length;i++){
            if(check(alls[i].className,classname)){
            	arr.push(alls[i]);                  // 满足条件输出          
            }
    
        }
        return arr;
    }
}
function check(a,match){                                //进行检查
	var brr=a.split(" ")
	for(var i=0;i<brr.length;i++){
		if(brr[i]==match){                          //判断
           return true;
		}
			
	}
	return false;
}



//封装id class div
function $(search,obj){                          //定义一个$函数
    var obj=obj||document;                       //判断用obj，还是document
      if(typeof(search)=="string"){
        if(search.charAt(0)=="#"){                   //如果是一个id
            return document.getElementById(search.substr(1));//输出
        }else if(search.charAt(0)=="."){             //如果是一个lei
            return getClass(search.substr(1),obj);      //输出
        }else{
            return obj.getElementsByTagName(search);
        }
        }else if(typeof(search)=="function"){
            window.onload=function(){
              search();
      }
  }
    
}

//获取内容
function getInner(obj,value){//定义一个函数
    if(obj.textContent){      //判定是否有这个元素
        if(value==undefined){ //判定是否有值
              return obj.textContent;  //返回
        }else{
              return obj.textContent=value;//将值给了对象
        }
    }else{ 
        if(obj.innerText){      //判定是否有这个元素 
            if(value==undefined){ //判定是否有值
               return obj.innerText; //返回
        } else{
               return obj.innerText=value;//将值给了对象
           }
        }
    }
}


// 取到样式
function getStyle(obj,style){  //定义一个函数
    if(obj.currentStyle){         //判定是否有这个元素
        return obj.currentStyle[style];  //返回
    }else{
        return getComputedStyle(obj,null)[style]
    }
}

// 获取子节点
// 获取元素节点
// 获取元素节点+文本节点
// type “a”只要元素节点，“b”要元素和文本
function getChild(obj,type){
    var type=type||"a";
    var all=obj.childNodes;//那所有元素
    var arr=[];       //给个空数组，存储
    for(var i=0;i<all.length;i++){
        if(type=="a"){          //判定type为a
            if(all[i].nodeType==1){   //如果是元素
                all.push=all[i];     //结果存储
            }else if(type=="b"){   //判定type为b
                if(all[i].nodeType==1||(all[i].nodeType==3&&all[i].nodeValue.replace(/^\s*|\s*$/g,""))){//判定是否是元素节点，或者是文本节点，并且文本节点没空格
                   all.push=all[i];      //结果存储
                }
            }

        }
        return arr;
    }

}
function getFirst(obj){
   return getChild(obj)[0];
}
function getFirst(obj){
    var nub=getChild(obj);
   return nub[nub.length-1];
}

function getNext(obj,type){
   var next=obj.nextSibling;/*定义变量获取下一个节点*/
   var type=type||"a";/*通过开关思想控制他走什么函数，
   当不传值的时候默认走a路线*/
  if(next.nodeType==null){/*如果next的节点值为null，则返回null*/
    return false;
  }
    if(type=="a"){
      while(next.nodeType==3||next.nodeType==8){/*如果next的类型为三或者为8
       的时候将next的下一个节点给他本身 */
      next=next.nextSibling;
        if(next.nodeType==null){/*如果next的类型为null,则返回false*/
          return false;
        }
      }
  }else if(type=="b"){/*如果传入的值是b，则走这里面的函数*/
      while((next.nodeType==3&&!next.nodeValue.replace(/^\s*|\s*$/g,""))||next.nodeType==8){
        next=next.nextSibling;
          if(next.nodeType==null){
            return false;
          }
      }
  }
  
  return next
}
// 遇到文字节点或注释节点跳过
function getPrevious(obj){
    var previous=obj.previousSibling
    if(previous==null){
        return false
    }
    while(previous.nodeType==3||previous.nodeType==8){
        previous=previous.previousSibling
        if(previous==null){
            return false
        }
    }
    return previous
}
// 把一个节点 放到某个节点之前

function insertBefore(obj,before){
    var parent=before.parentNode;
    parent.insertBefore(obj,before)
}

// 把一个节点 放到某个节点之后
function insertAfter(obj,after){
    // 获取父节点
    var parent=after.parentNode
    var next=getNext(after,"b")
    if(next){
        insertBefore(obj,next)
    }else{
        parent.appendChild(obj)
    }

}

//事件绑定3.22
function addEvent(obj,event,move){
    if(obj.addEventListener){
       obj.addEventListener(event,move,false);
    }else if(obj.attachEvent){
       obj.attachEvent("on"+event,move);
    }
}
//删除绑定
function removeEvent(obj,event,move){
    if(obj.removeEventListener){
       obj.removeEventListener(event,move,false);
    }else if(obj.detachEvent){
       obj.detachEvent("on"+event,move);
    }
}

// 滚轮事件
function mouseWheel(obj,funUp,funDown){
    if(obj.attachEvent){                          //确认元素
      obj.attachEvent("onmousewheel",scrollFn);    //存在输出ie
    }else if(obj.addEventListener){                   //确认元素
      obj.addEventListener("mousewheel",scrollFn,false);  //存在输出谷歌
      obj.addEventListener("DDMMouseScroll",scrollFn,false); //存在输出FF
    }
    function scrollFn(e){             
      var ev=e||window.event;                    
      var direction=ev.wheelDelta||ev.detail;   //滚动方向
      if (obj.attachEvent){
          ev.returnvalue=false
        }
          else{
          ev.preventDefault()
          }                                  //清楚默认
      if(direction==120||direction==-3){        //判断 上
        if(funUp){
           funUp();
         }
      }else if(direction==-120||direction==3){   //判断 下
        if(funDown){
          funDown();
        }
      }
    }
}
