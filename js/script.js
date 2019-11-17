//--------------------------------------------//
//-------------- List of Id's ----------------//
/*----------------------------------------------
Buttons & Tabs:
Overview      - tab1 - butt1
History       - tab2 - butt2
Periodic Tabe - tab3 - butt3
About me      - tab4 - butt4
Contact me    - tab5 - butt5

g1                   - butt6
*/


//--------------------------------------------//
//------------ Event listeners ---------------//
//--------------------------------------------//
document.getElementById("butt1").addEventListener("click", showOverview);
document.getElementById("butt2").addEventListener("click", showHistory);
document.getElementById("butt3").addEventListener("click", showPT);
document.getElementById("butt4").addEventListener("click", showAm);
document.getElementById("butt5").addEventListener("click", showCm);

document.getElementById("butt6").addEventListener("mouseover", hoverg1);
document.getElementById("butt6").addEventListener("mouseout", outg1);
document.getElementById("butt6").addEventListener("click", showg1);

document.getElementById("butt7").addEventListener("mouseover", hoverg2);
document.getElementById("butt7").addEventListener("mouseout", outg2);
document.getElementById("butt7").addEventListener("click", showg2);

document.getElementById("butt8").addEventListener("mouseover", hoverg3);
document.getElementById("butt8").addEventListener("mouseout", outg3);
document.getElementById("butt8").addEventListener("click", showg3);

document.getElementById("butt9").addEventListener("mouseover", hoverg4);
document.getElementById("butt9").addEventListener("mouseout", outg4);
document.getElementById("butt9").addEventListener("click", showg4);

document.getElementById("butt10").addEventListener("mouseover", hoverg5);
document.getElementById("butt10").addEventListener("mouseout", outg5);
document.getElementById("butt10").addEventListener("click", showg5);

document.getElementById("butt11").addEventListener("mouseover", hoverg6);
document.getElementById("butt11").addEventListener("mouseout", outg6);
document.getElementById("butt11").addEventListener("click", showg6);

document.getElementById("butt12").addEventListener("mouseover", hoverg7);
document.getElementById("butt12").addEventListener("mouseout", outg7);
document.getElementById("butt12").addEventListener("click", showg7);

document.getElementById("butt13").addEventListener("mouseover", hoverg8);
document.getElementById("butt13").addEventListener("mouseout", outg8);
document.getElementById("butt13").addEventListener("click", showg8);

document.getElementById("butt14").addEventListener("mouseover", hoverg9);
document.getElementById("butt14").addEventListener("mouseout", outg9);
document.getElementById("butt14").addEventListener("click", showg9);

document.getElementById("butt15").addEventListener("mouseover", hoverg10);
document.getElementById("butt15").addEventListener("mouseout", outg10);
document.getElementById("butt15").addEventListener("click", showg10);
//--------------------------------------------//
//----------- Tab show functions -------------//
//--------------------------------------------//
function showOverview() {
    document.getElementById('tab1').style.display = "block";
    document.getElementById('tab2').style.display = "none";
    document.getElementById('tab3').style.display = "none";
    document.getElementById('tab4').style.display = "none";
    document.getElementById('tab5').style.display = "none";
}

function showHistory() {
    document.getElementById('tab1').style.display = "none";
    document.getElementById('tab2').style.display = "block";
    document.getElementById('tab3').style.display = "none";
    document.getElementById('tab4').style.display = "none";
    document.getElementById('tab5').style.display = "none";
}

function showPT() {
    document.getElementById('tab1').style.display = "none";
    document.getElementById('tab2').style.display = "none";
    document.getElementById('tab3').style.display = "block";
    document.getElementById('tab4').style.display = "none";
    document.getElementById('tab5').style.display = "none";
}

function showAm() {
    document.getElementById('tab1').style.display = "none";
    document.getElementById('tab2').style.display = "none";
    document.getElementById('tab3').style.display = "none";
    document.getElementById('tab4').style.display = "block";
    document.getElementById('tab5').style.display = "none";
}

function showCm() {
    document.getElementById('tab1').style.display = "none";
    document.getElementById('tab2').style.display = "none";
    document.getElementById('tab3').style.display = "none";
    document.getElementById('tab4').style.display = "none";
    document.getElementById('tab5').style.display = "block";
}

//--------------------------------------------//
//------ Elements mouseover functions --------//
//--------------------------------------------//
function hoverg1() {
    var x =document.getElementsByClassName("g1");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.add('g1-h');  
    }
}

function hoverg2() {
    var x =document.getElementsByClassName("g2");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.add('g2-h'); 
    }
}

function hoverg3() {
    var x =document.getElementsByClassName("g3");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.add('g3-h');          
    }
}
function hoverg4() {
    var x =document.getElementsByClassName("g4");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.add('g4-h');          
    }
}
function hoverg5() {
    var x =document.getElementsByClassName("g5");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.add('g5-h');          
    }
}
function hoverg6() {
    var x =document.getElementsByClassName("g6");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.add('g6-h');          
    }
}
function hoverg7() {
    var x =document.getElementsByClassName("g7");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.add('g7-h');          
    }
}
function hoverg8() {
    var x =document.getElementsByClassName("g8");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.add('g8-h');          
    }
}
function hoverg9() {
    var x =document.getElementsByClassName("g9");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.add('g9-h');          
    }
}
function hoverg10() {
    var x =document.getElementsByClassName("g10");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.add('g10-h');          
    }
}
//--------------------------------------------//
//------ Elements mouseout functions ---------//
//--------------------------------------------//
function outg1() {
    var x =document.getElementsByClassName("g1");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g1-h');  
    }
}

function outg2() {
    var x =document.getElementsByClassName("g2");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g2-h');  
    }
}
function outg3() {
    var x =document.getElementsByClassName("g3");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g3-h');  
    }
}
function outg4() {
    var x =document.getElementsByClassName("g4");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g4-h');  
    }
}
function outg5() {
    var x =document.getElementsByClassName("g5");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g5-h');  
    }
}
function outg6() {
    var x =document.getElementsByClassName("g6");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g6-h');  
    }
}
function outg7() {
    var x =document.getElementsByClassName("g7");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g7-h');  
    }
}
function outg8() {
    var x =document.getElementsByClassName("g8");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g8-h');  
    }
}
function outg9() {
    var x =document.getElementsByClassName("g9");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g9-h');  
    }
}
function outg10() {
    var x =document.getElementsByClassName("g10");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g10-h');  
    }
}
//--------------------------------------------//
//---------- Show Elements functions ---------//
//--------------------------------------------//
function showg1() {
    document.getElementById('butt6').removeEventListener("mouseout", outg1);
    document.getElementById('butt6').removeEventListener("mouseover", hoverg1); 
    document.getElementById('butt6').removeEventListener("click", showg1);
    document.getElementById('butt6').addEventListener("click", removeg1); 
    var x =document.getElementsByClassName("g1");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g1-h');
        x[i].classList.add('g1-active');
    } 
}
function removeg1() {
    var x =document.getElementsByClassName("g1");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g1-active');
    }
    document.getElementById('butt6').addEventListener("mouseout", outg1);
    document.getElementById('butt6').addEventListener("mouseover", hoverg1); 
    document.getElementById('butt6').addEventListener("click", showg1);
    document.getElementById('butt6').removeEventListener("click", removeg1);     
}

function showg2() {
    document.getElementById('butt7').removeEventListener("mouseout", outg2);
    document.getElementById('butt7').removeEventListener("mouseover", hoverg2); 
    document.getElementById('butt7').removeEventListener("click", showg2);
    document.getElementById('butt7').addEventListener("click", removeg2); 
    var x =document.getElementsByClassName("g2");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g2-h');
        x[i].classList.add('g2-active');
    } 
}
function removeg2() {
    var x =document.getElementsByClassName("g2");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g2-active');
    }
    document.getElementById('butt7').addEventListener("mouseout", outg2);
    document.getElementById('butt7').addEventListener("mouseover", hoverg2); 
    document.getElementById('butt7').addEventListener("click", showg2);
    document.getElementById('butt7').removeEventListener("click", removeg2);     
}

function showg3() {
    document.getElementById('butt8').removeEventListener("mouseout", outg3);
    document.getElementById('butt8').removeEventListener("mouseover", hoverg3); 
    document.getElementById('butt8').removeEventListener("click", showg3);
    document.getElementById('butt8').addEventListener("click", removeg3); 
    var x =document.getElementsByClassName("g3");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g3-h');
        x[i].classList.add('g3-active');
    } 
}
function removeg3() {
    var x =document.getElementsByClassName("g3");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g3-active');
    }
    document.getElementById('butt8').addEventListener("mouseout", outg3);
    document.getElementById('butt8').addEventListener("mouseover", hoverg3); 
    document.getElementById('butt8').addEventListener("click", showg3);
    document.getElementById('butt8').removeEventListener("click", removeg3);     
}

function showg4() {
    document.getElementById('butt9').removeEventListener("mouseout", outg4);
    document.getElementById('butt9').removeEventListener("mouseover", hoverg4); 
    document.getElementById('butt9').removeEventListener("click", showg4);
    document.getElementById('butt9').addEventListener("click", removeg4); 
    var x =document.getElementsByClassName("g4");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g4-h');
        x[i].classList.add('g4-active');
    } 
}
function removeg4() {
    var x =document.getElementsByClassName("g4");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g4-active');
    }
    document.getElementById('butt9').addEventListener("mouseout", outg4);
    document.getElementById('butt9').addEventListener("mouseover", hoverg4); 
    document.getElementById('butt9').addEventListener("click", showg4);
    document.getElementById('butt9').removeEventListener("click", removeg4);     
}

function showg5() {
    document.getElementById('butt10').removeEventListener("mouseout", outg5);
    document.getElementById('butt10').removeEventListener("mouseover", hoverg5); 
    document.getElementById('butt10').removeEventListener("click", showg5);
    document.getElementById('butt10').addEventListener("click", removeg5); 
    var x =document.getElementsByClassName("g5");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g5-h');
        x[i].classList.add('g5-active');
    } 
}
function removeg5() {
    var x =document.getElementsByClassName("g5");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g5-active');
    }
    document.getElementById('butt10').addEventListener("mouseout", outg5);
    document.getElementById('butt10').addEventListener("mouseover", hoverg5); 
    document.getElementById('butt10').addEventListener("click", showg5);
    document.getElementById('butt10').removeEventListener("click", removeg5);     
}

function showg6() {
    document.getElementById('butt11').removeEventListener("mouseout", outg6);
    document.getElementById('butt11').removeEventListener("mouseover", hoverg6); 
    document.getElementById('butt11').removeEventListener("click", showg6);
    document.getElementById('butt11').addEventListener("click", removeg6); 
    var x =document.getElementsByClassName("g6");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g6-h');
        x[i].classList.add('g6-active');
    } 
}
function removeg6() {
    var x =document.getElementsByClassName("g6");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g6-active');
    }
    document.getElementById('butt11').addEventListener("mouseout", outg6);
    document.getElementById('butt11').addEventListener("mouseover", hoverg6); 
    document.getElementById('butt11').addEventListener("click", showg6);
    document.getElementById('butt11').removeEventListener("click", removeg6);     
}

function showg7() {
    document.getElementById('butt12').removeEventListener("mouseout", outg7);
    document.getElementById('butt12').removeEventListener("mouseover", hoverg7); 
    document.getElementById('butt12').removeEventListener("click", showg7);
    document.getElementById('butt12').addEventListener("click", removeg7); 
    var x =document.getElementsByClassName("g7");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g7-h');
        x[i].classList.add('g7-active');
    } 
}
function removeg7() {
    var x =document.getElementsByClassName("g7");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g7-active');
    }
    document.getElementById('butt12').addEventListener("mouseout", outg7);
    document.getElementById('butt12').addEventListener("mouseover", hoverg7); 
    document.getElementById('butt12').addEventListener("click", showg7);
    document.getElementById('butt12').removeEventListener("click", removeg7);     
}

function showg8() {
    document.getElementById('butt13').removeEventListener("mouseout", outg8);
    document.getElementById('butt13').removeEventListener("mouseover", hoverg8); 
    document.getElementById('butt13').removeEventListener("click", showg8);
    document.getElementById('butt13').addEventListener("click", removeg8); 
    var x =document.getElementsByClassName("g8");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g8-h');
        x[i].classList.add('g8-active');
    } 
}
function removeg8() {
    var x =document.getElementsByClassName("g8");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g8-active');
    }
    document.getElementById('butt13').addEventListener("mouseout", outg8);
    document.getElementById('butt13').addEventListener("mouseover", hoverg8); 
    document.getElementById('butt13').addEventListener("click", showg8);
    document.getElementById('butt13').removeEventListener("click", removeg8);     
}

function showg9() {
    document.getElementById('butt14').removeEventListener("mouseout", outg9);
    document.getElementById('butt14').removeEventListener("mouseover", hoverg9); 
    document.getElementById('butt14').removeEventListener("click", showg9);
    document.getElementById('butt14').addEventListener("click", removeg9); 
    var x =document.getElementsByClassName("g9");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g9-h');
        x[i].classList.add('g9-active');
    } 
}
function removeg9() {
    var x =document.getElementsByClassName("g9");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g9-active');
    }
    document.getElementById('butt14').addEventListener("mouseout", outg9);
    document.getElementById('butt14').addEventListener("mouseover", hoverg9); 
    document.getElementById('butt14').addEventListener("click", showg9);
    document.getElementById('butt14').removeEventListener("click", removeg9);     
}

function showg10() {
    document.getElementById('butt15').removeEventListener("mouseout", outg10);
    document.getElementById('butt15').removeEventListener("mouseover", hoverg10); 
    document.getElementById('butt15').removeEventListener("click", showg10);
    document.getElementById('butt15').addEventListener("click", removeg10); 
    var x =document.getElementsByClassName("g10");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g10-h');
        x[i].classList.add('g10-active');
    } 
}
function removeg10() {
    var x =document.getElementsByClassName("g10");
    var i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('g10-active');
    }
    document.getElementById('butt15').addEventListener("mouseout", outg10);
    document.getElementById('butt15').addEventListener("mouseover", hoverg10); 
    document.getElementById('butt15').addEventListener("click", showg10);
    document.getElementById('butt15').removeEventListener("click", removeg10);     
}