  var p = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var p1 = [];
	var p2 = [];
	var p11 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var p21 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var sp=[];
	var p1c=0;
	var p2c=0;
	var t=Math.floor(Math.random() * 100) + 1;
	var i=0;
	var j=0;
	var c=0;
	var spin=0;
	var sn=0;
	myShuffleFunction("b1");
        myShuffleFunction("b2");
	function mySpinFunction() {
		if(spin==0){
			spin=1;
			document.getElementById("b1").style.display="none";
			document.getElementById("b2").style.display="none";
			document.getElementById("spin").innerHTML="SPIN";
			sp=[];
			for(i=0;i<100;i++){
				 sp.push(i+1);
			}
		}
		c=Math.floor(Math.random() * ((sp.length)-1)) ;
		t=sp[c];
		sp.splice(c, 1);
		document.getElementById("t1").rows[1].cells[1].innerHTML = t;
		if(p1.indexOf(t)!=-1){
			c=p1.indexOf(t);
			i=Math.floor(c/5);
			j=c%5;
			p11[c]=1;
			console.log(p11);
			document.getElementById("t").rows[i].cells[j].style.backgroundColor="red";
		}
		if(p2.indexOf(t)!=-1){
			c=p2.indexOf(t);
			i=Math.floor(c/5);
			j=c%5;
			document.getElementById("t2").rows[i].cells[j].style.backgroundColor="red";
			p21[c]=1;
			console.log(p21);
		}
	}
	function myShuffleFunction(object) {
		sp=[];
		for(i=0;i<100;i++){
			 sp.push(i+1);
		}
		i=0;
		if(object == "b1"){
			var id = document.getElementById("t");
		}
		if(object == "b2"){
			var id = document.getElementById("t2");
		}
		while(i<25){
			c=Math.floor(Math.random() * ((sp.length)-1)) ;
			t=sp[c];
			sp.splice(c, 1);
			p[i]=t;
			i++;
		}
		for (i=0; i < 5; i++){
			for (j=0; j < 5; j++){
				t=(i*5)+j;
				id.rows[i].cells[j].innerHTML = p[t];
			}
		}
                if(object == "b1"){
			p1=p;
		}
		if(object == "b2"){
			p2=p;
		}
		p=[];
		console.log(p1);
	}
