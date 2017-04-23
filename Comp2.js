var turn= "player";
var turns=0;
var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var g=0;
var h=0;
var i=0;
var hUpA=0;
var hUpB=0;
var hMidA=0;
var hMidB=0;
var hDownA=0;
var hDownB=0;
var vLeftA=0;
var vLeftB=0;
var vMidA=0;
var vMidB=0;
var vRightA=0;
var vRightB=0;
var dDownA=0;
var dDownB=0;
var dUpA=0;
var dUpB=0;
var winsA=0;
var winsB=0;
var ties=0;
var game=0;
var select =0;
var square =0;
var testA=function() {
	turns++;
	if (hUpA===3 || hMidA===3 || hDownA===3 || vLeftA===3 || vMidA===3 || vRightA===3 || dDownA===3 || dUpA===3) {
		alert("You win!");
		winsA++;
		a=1;
		b=1;
		c=1;
		d=1;
		e=1;
		f=1;
		g=1;
		h=1;
		i=1;
		document.getElementById('playerOne').innerHTML="User (X) Score=" + winsA;
		restart();
		return
	} else if (turns===9){
		ties++;
		alert("You have tied!")
		document.getElementById('ties').innerHTML="Ties=" + ties;
		restart();
		return
	} else {
		turn = "comp";
		compchoice();
		return
	}
}
var testB=function() {
	turns++;
	if (hUpB===3 || hMidB===3 || hDownB===3 || vLeftB===3 || vMidB===3 || vRightB===3 || dDownB===3 || dUpB===3) {
		alert("The Computer wins!");
		winsB++;
		a=1;
		b=1;
		c=1;
		d=1;
		e=1;
		f=1;
		g=1;
		h=1;
		i=1;
		document.getElementById('playerTwo').innerHTML="Computer (O) Score=" + winsB;
		restart();
		return;
	} else if (turns===9){
		ties++;
		alert("You have tied!")
		document.getElementById('ties').innerHTML="Ties=" + ties;
		restart();
		return;
	} else {
		turn = "player"
		document.getElementById('Turn').innerHTML = "Turn: User"
	}
}
var changeOne=function() {
	if (a===0 && turn === "player") {
		a=1;
		document.getElementById('squareOne').innerHTML="  X";
		hUpA++;
		vLeftA++;
		dDownA++;
		testA();
		return;
	}
}
var changeTwo=function() {
	if (b===0 && turn === "player") {
		b=1;
		hUpA++;
		vMidA++;
		document.getElementById('squareTwo').innerHTML="  X";
		testA();
		return;
	}
}
var changeThree=function() {
	if (c===0 && turn === "player") {
		c=1;
		hUpA++;
		vRightA++;
		dUpA++;
		document.getElementById('squareThree').innerHTML="  X";
		testA();
		return;
	}
}
var changeFour=function() {
	if (d===0 && turn === "player") {
		d=1;
		hMidA++;
		vLeftA++;
		document.getElementById('squareFour').innerHTML="  X";
		testA();
		return;		
	}
}
var changeFive=function() {
	if (e===0 && turn === "player") {
		e=1;
		hMidA++;
		vMidA++;
		dDownA++;
		dUpA++;
		document.getElementById('squareFive').innerHTML="  X";
		testA(); 
		return;
	}
}
var changeSix=function() {
	if (f===0 && turn === "player") {
		f=1;
		hMidA++;
		vRightA++;
		document.getElementById('squareSix').innerHTML=" X";
		testA();
		return;
	}
}
var changeSeven=function() {
	if (g===0 && turn === "player") {
		g=1;
		hDownA++;
		vLeftA++;
		dUpA++;
		document.getElementById('squareSeven').innerHTML="  X";
		testA();
		return;
	}
}
var changeEight=function() {
	if (h===0 && turn === "player") {
		h=1;
		hDownA++;
		vMidA++;
		document.getElementById('squareEight').innerHTML="  X";
		testA();
		return;
	}
}
var changeNine=function() {
	if (i===0 && turn === "player") {
		i=1;
		hDownA++;
		vRightA++;
		dDownA++;
		document.getElementById('squareNine').innerHTML="  X";
		testA();
		return;
	}
}
var compchoice = function(){
	document.getElementById('Turn').innerHTML = "Turn: Computer"
	myvar = setTimeout(compchoice2, 1000);
	return;
}
var compchoice2 = function() {
	select = 0;
	if (hUpA===2 || hUpB===2) {
		if (a===0) {
			square=1;
			select=1;
		} else if (b===0) {
			square=2;
			select=1;
		} else if (c===0) {
			square=3;
			select=1;
		}
	} else if (hMidA===2 || hMidB===2) {
		if (d===0) {
			square=4;
			select=1;
		} else if (e===0) {
			square=5;
			select=1;
		} else if (f===0) {
			square=6;
			select=1;
		} 
	} else if (hDownA===2 || hDownB===3) {
		if (g===0) {
			square=7;
			select=1;
		} else if (h===0) {
			square=8;
			select=1;
		} else if (i===0) {
			square=9;
			select=1;
		}
	} else if (vLeftA===2 || vLeftB===2) {
		if (d===0) {
			square=4;
			select=1;
		} else if (a===0) {
			square=1;
			select=1;
		} else if (g===0) {
			square=7;
			select=1;
		} 
	} else if (vMidA===2 || vMidB===2) {
		if (b===0) {
			square=2;
			select=1;
		} else if (e===0) {
			square=5;
			select=1;
		} else if (h===0) {
			square=8;
			select=1;
		} 
	} else if (vRightA===2 || vRightB===2) {
		if (c===0) {
			square=3;
			select=1;
		} else if (f===0) {
			square=6;
			select=1;
		} else if (i===0) {
			square=9;
			select=1;
		} 
	} else if (dUpA===2 || dUpB===2) {
		if (c===0) {
			square=3;
			select=1;
		} else if (e===0) {
			square=5;
			select=1;
		} else if (g===0) {
			square=7;
			select=1;
		} 
	} else if (hMidA===2 || hMidB===2) {
		if (a===0) {
			square=1;
			select=1;
		} else if (e===0) {
			square=5;
			select=1;
		} else if (i===0) {
			square=9;
			select=1;
		}
	} else {
		while (select===0) {
			square = Math.ceil(9*Math.random());
			if (square===1) {
				if (a===0) {
					select=1;
				}
			} else if (square===2){
				if (b===0) {
					select=1;
				}
			} else if (square===3){
				if (c===0) {
					select=1;
				}
			} else if (square===4){
				if (d===0) {
					select=1;
				}
			} else if (square===5){
				if (e===0) {
					select=1;
				}
			} else if (square===6){
				if (f===0) {
					select=1;
				}
			} else if (square===7){
				if (g===0) {
					select=1;
				}
			} else if (square===8){
				if (h===0) {
					select=1;
				}
			} else if (square===9){
				if (i===0) {
					select=1;
				}
			}
	 	}
	}
	select = 1;
	if (square===1) {
		compone();
		return;
	} else if (square===2) {
		comptwo();
		return;
	} else if (square===3) {
		compthree();
		return;
	} else if (square===4) {
		compfour()
		return;
	} else if (square===5) {
		compfive();
		return;
	} else if (square===6) {
		compsix();
		return;
	} else if (square===7) {
		compseven();
		return;
	} else if (square===8) {
		compeight();
		return;
	} else if (square===9){
		compnine()
		return;
	}
}
var compone= function() {
	a=1;
	turn=0;
	hUpB++;
	vLeftB++;
	dDownB++;
	document.getElementById('squareOne').innerHTML="  O";
	testB();
	return;
}
var comptwo= function() {
	b=1;
	turn=0;
	hUpB++;
	vMidB++;
	document.getElementById('squareTwo').innerHTML="  O";
	testB();
	return;
}
var compthree = function() {
	c=1;
	hUpB++;
	vRightB++;
	dUpB++;	
	document.getElementById('squareThree').innerHTML="  O";
	testB();
	return;
}
var compfour = function(){
	d=1;
	hMidB++;
	vLeftB++;
	document.getElementById('squareFour').innerHTML="  O";
	testB();
	return;
}
var compfive =function() {
	e=1
	hMidB++;
	vMidB++;
	dDownB++;
	dUpB++;
	document.getElementById('squareFive').innerHTML="  O";
	testB();
	return;
}
var compsix =function(){
	f=1;
	hMidB++;
	vRightB++;
	document.getElementById('squareSix').innerHTML=" O";
	testB();
	return;
}
var compseven =function(){
	g=1;
	hDownB++;
	vLeftB++;
	dUpB++;
	document.getElementById('squareSeven').innerHTML="  O";
	testB();
	return;
}
var compeight =function(){
	h=1;
	hDownB++;
	vMidB++;
	document.getElementById('squareEight').innerHTML="  O";
	testB();
	return;
}
var compnine= function() {
	i=1;
	hDownB++;
	vRightB++;
	dDownB++;
	document.getElementById('squareNine').innerHTML="  O";
	testB();
	return;
}
var restart=function(){
	game++;
	document.getElementById('squareOne').innerHTML="";
	document.getElementById('squareTwo').innerHTML="";
	document.getElementById('squareThree').innerHTML="";
	document.getElementById('squareFour').innerHTML="";
	document.getElementById('squareFive').innerHTML="";
	document.getElementById('squareSix').innerHTML="";
	document.getElementById('squareSeven').innerHTML="";
	document.getElementById('squareEight').innerHTML="";
	document.getElementById('squareNine').innerHTML="";
	 a=0;
	 b=0;	
	 c=0;
	 d=0;
	 e=0;
	 f=0;
	 g=0;
	 h=0;
	 i=0;
	 turns=0;
	 hUpA=0;
	 hUpB=0;
	 hMidA=0;
	 hMidB=0;
	 hDownA=0;
	 hDownB=0;
	 vLeftA=0;
	 vLeftB=0;
	 vMidA=0;
	 vMidB=0;
	 vRightA=0;
	 vRightB=0;
	 dDownA=0;
	 dDownB=0;
	 dUpA=0;
	 dUpB=0;
	if (game%2 === 0) {
		turn = "player";
		document.getElementById('Turn').innerHTML = "Turn: User"
	} else {
		turn = "comp"
		document.getElementById('Turn').innerHTML = "Turn: Computer"
		compchoice();
		return;
	}
}