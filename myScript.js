  var p = [];
	var p1 = [];
	var p2 = [];
	var p11 = [];
	var p21 = [];
	var sp=[];
	var position=Math.floor(Math.random() * 75) + 1;
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
			for(i=0;i<75;i++){
				 sp.push(i+1);
			}
		}
		c=Math.floor(Math.random() * ((sp.length)-1)) ;
		position=sp[c];
		sp.splice(c, 1);
		document.getElementById("t1").rows[1].cells[1].innerHTML = position;
		// if(p1.indexOf(position)!=-1){
		// 	c=p1.indexOf(position);
		// 	i=Math.floor(c/5);
		// 	j=c%5;
		// 	p11[c]=1;
		// 	console.log("this is p11 "+p11);
		// 	document.getElementById("t").rows[i].cells[j].style.backgroundColor="#e6e600";
		// }
		// if(p2.indexOf(position)!=-1){
		// 	c=p2.indexOf(position);
		// 	i=Math.floor(c/5);
		// 	j=c%5;
		// 	document.getElementById("t2").rows[i].cells[j].style.backgroundColor="#e6e600";
		// 	p21[c]=1;
		// 	console.log(p21);
		// }


    var id;
    if(p1.indexOf(position)!=-1){
      c=p1.indexOf(position);
      id = document.getElementById("t");
      p11[c] = 1;
    }
    if(p2.indexOf(position)!=-1){
      c=p2.indexOf(position);
      id = document.getElementById("t2");
      p21[c]=1;
    }
    i=Math.floor(c/5);
    j=c%5;
    id.rows[i].cells[j].style.backgroundColor="#e6e600";

	}


	function myShuffleFunction(object) {
		sp=[];
		for(i=0;i<75;i++){
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
			position=sp[c];
			sp.splice(c, 1);
			p[i]=position;
			i++;
		}
		for (i=0; i < 5; i++){
			for (j=0; j < 5; j++){
				position=(i*5)+j;
				id.rows[i].cells[j].innerHTML = p[position];
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
