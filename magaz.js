"use strict";

var bask=document.getElementById('wrapper'),
arrmass1=document.getElementsByClassName('item1'),
arrmass2=document.getElementsByClassName('item2'),
arrmass3=document.getElementsByClassName('item3'),
divSumm=document.getElementById('summ'),
buttSumm=document.getElementById('getSumm');
 document.getElementById('b1').onclick=addToBasket1,addSumms;
 document.getElementById('b2').onclick=addToBasket2;
 document.getElementById('b3').onclick=addToBasket3;

 function addToBasket1 () {
 	var wr=document.createElement('section');
	bask.appendChild(wr);
 	var arr1 = [];
	for(var i = 0; i < arrmass1.length; i++){
	arr1.push(arrmass1[i].innerHTML);
	wr.innerHTML=arr1;
	
}}
 function addToBasket2(){
 	var wr=document.createElement('section');
	bask.appendChild(wr);
 	var arr2 = [];
	for(var i = 0; i < arrmass2.length; i++){
	arr2.push(arrmass2[i].innerHTML);
	wr.innerHTML=arr2;
 }}
 function addToBasket3(){
 	var wr=document.createElement('section');
	bask.appendChild(wr);
 	var arr3 = [];
	for(var i = 0; i < arrmass3.length; i++){
	arr3.push(arrmass3[i].innerHTML);
	wr.innerHTML=arr3;
 }}
 function addSumms() {
 	var arr1 = [];
	for(var i = 0; i < arrmass1.length; i++){
	arr1.push(arrmass1[i].innerHTML);
	console.log(arr1);
 }}
 