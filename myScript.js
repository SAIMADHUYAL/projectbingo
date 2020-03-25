var p1 = [];
var p2 = [];
var p11 = [];
var p21 = [];
var p =[];
var sp=[];
var p1c=0;
var p2c=0;
var t=Math.floor(Math.random() * 100) + 1;
var t1=0;
var i=0;
var j=0;
var c=0;
var spin=0;
var time;
//var sn=0;
myFunction1("b1");
myFunction1("b2");


function myFunction2() {
  if(spin==0){
    spin=1;
    document.getElementById("b1").style.display="none";
    document.getElementById("b2").style.display="none";
    document.getElementById("spin").innerHTML="SPIN";
    //document.getElementById("spin").style.display="none";
    sp=[];
    for(i=0;i<=49;i++){
      var ranNumber = (i%25)+1;
      sp.push(ranNumber);
    }//remove %25 and replace 50 with 25
    console.log(sp);
    time  = setInterval ( "myFunction2()", 20000 );
  }
  if(spin==1){
    c=Math.floor(Math.random() * ((sp.length)-1)) ;
    t=sp[c];
    sp.splice(c, 1);
    document.getElementById("t1").rows[1].cells[1].innerHTML = t;
  }
}

function myFunction3(p,i,j) {
  var id;
  if(p == 0){
    id = document.getElementById("t");
  }
  if(p == 1){
    id = document.getElementById("t2");
  }
  if(spin==1){
    t1=(i*5)+j;
    if(p==0 &&p11[t1]!=1){
      t1=(i*5)+j;
      if(p1[t1]==t){
        p11[t1]=1;
        t=30;
        id.rows[i].cells[j].style.backgroundColor="#e6e600";
        p1c=0;
        for(i=0;i<5;i++){
          c=0;
          for(j=0;j<5;j++){
            t1=(i*5)+j;
            if(p11[t1]==1){
              c=c+1;
            }
          }
          if(c==5){
            p1c=p1c+1;
            for(j=0;j<5;j++){
              id.rows[i].cells[j].style.backgroundColor="#2eb82e";
            }
          }
        }
        for(j=0;j<5;j++){
          c=0;
          for(i=0;i<5;i++){
            t1=(i*5)+j;
            if(p11[t1]==1){
              c=c+1;
            }
          }
          if(c==5){
            p1c=p1c+1;
            for(i=0;i<5;i++){
              id.rows[i].cells[j].style.backgroundColor="#2eb82e";
            }
          }
        }
      }
    }

    if(p==1&&p21[t1]!=1){
      t1=(i*5)+j;
      if(p2[t1]==t){
        p21[t1]=1;
        t=30;
        id.rows[i].cells[j].style.backgroundColor="#e6e600";
        p2c=0;
        for(i=0;i<5;i++){
          c=0;
          for(j=0;j<5;j++){
            t1=(i*5)+j;
            if(p21[t1]==1){
              c=c+1;
            }
          }
          if(c==5){
            p2c=p2c+1;
            for(j=0;j<5;j++){
              id.rows[i].cells[j].style.backgroundColor="#2eb82e";
            }
          }
        }
        for(j=0;j<5;j++){
          c=0;
          for(i=0;i<5;i++){
            t1=(i*5)+j;
            if(p21[t1]==1){
              c=c+1;
            }
          }
          if(c==5){
            p2c=p2c+1;
            for(i=0;i<5;i++){
              id.rows[i].cells[j].style.backgroundColor="#2eb82e";
            }
          }
        }
      }
    }
    if(p1c>=5){
      spin=2;
      document.getElementById("t").innerHTML="BINGO";
      document.getElementById("t").style.color="#2eb82e";
      document.getElementById("t").style.fontSize="300%";
      clearInterval ( time );
    }
    if(p2c>=5){
      spin=2;
      document.getElementById("t2").innerHTML="BINGO";
      document.getElementById("t2").style.color="#2eb82e";
      document.getElementById("t2").style.fontSize="300%";
      clearInterval ( time );
    }
  }
}

// function myFunction(object) {
//   sp=[];
//   for(i=0;i<25;i++){
//     sp.push(i+1);
//   }
//   console.log(object);
//   i=0;
//   // if(object == "b1"){
//   //   var id = document.getElementById("t");
//   // }
//   // if(object == "b2"){
//   //   var id = document.getElementById("t2");
//   // }
//   while(i<25){
//     c=Math.floor(Math.random() * ((sp.length)-1)) ;
//     t=sp[c];
//     sp.splice(c, 1);
//     p1[i]=t;
//     i++;
//   }
//   for (i=0; i < 5; i++){
//     for (j=0; j < 5; j++){
//       t=(i*5)+j;
//       document.getElementById("t").rows[i].cells[j].innerHTML = p1[t];
//     }
//   }
//   // if(object == "b1"){
//   //   p1=p;
//   // }
//   // if(object == "b2"){
//   //   p2=p;
//   // }
//   // p=[];
//   console.log(p1);
//   console.log(p2);
// }
  function myFunction1(object) {
    sp=[];
    for(i=1;i<=25;i++){
      sp.push(i);
    }

    var id;
    if(object == "b1"){
      id = document.getElementById("t");
    }
    if(object == "b2"){
      id = document.getElementById("t2");
    }
    i=0;

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
}
