'use strict';
const alltotal=document.getElementById('total');
Donation.donors=[];
function Donation(name,amount){
  this.name=name;
  this.amount=amount;
  this.age=this.getrandomage();
  Donation.donors.push(this);
}

Donation.prototype.getrandomage=function(){
  let value=(Math.random() * (30 - 18) + 18);
  return Math.floor(value);
};

let total=0;
let table=document.getElementById('table');
headerRow();
function headerRow() {
  let headerrow=document.createElement('tr');
  table.appendChild(headerrow);
  let nameHeader=document.createElement('th');
  headerrow.appendChild(nameHeader);
  nameHeader.textContent='Donor Name';
  let ageHeader=document.createElement('th');
  headerrow.appendChild(ageHeader);
  ageHeader.textContent='Donor age';
  let amountHeader=document.createElement('th');
  headerrow.appendChild(amountHeader);
  amountHeader.textContent='Amount';
}
Donation.prototype.render=function(){
  let headerrowdata=document.createElement('tr');
  table.appendChild(headerrowdata);
  let donorName=document.createElement('td');
  headerrowdata.appendChild(donorName);
  donorName.textContent=this.name;
  let donorAge=document.createElement('td');
  headerrowdata.appendChild(donorAge);
  donorAge.textContent=this.age;
  let Amount=document.createElement('td');
  headerrowdata.appendChild(Amount);
  Amount.textContent=this.amount;
  total=total+parseInt(this.amount);
  console.log(total);
  //i could not finish this total amount but i get the total correctly :)  
//   let totalall=document.createElement('p');
//   alltotal.appendChild(totalall);
//   totalall.textContent=total;
};

// function saveTols(){
//   let arrOfdonors=JSON.stringify(Donation.donors);
//   localStorage.setItem('Donors',arrOfdonors);
//   console.log('saved to LS',arrOfdonors);
// }


let DonorsLS=localStorage.getItem('Donors');
if(DonorsLS){
  DonorsLS=JSON.parse(DonorsLS);
  table.innerHTML='';
  headerRow();
  console.log(DonorsLS);
  for(let i=0;i<DonorsLS.length;i++)
  {
    let reInst=new Donation(DonorsLS[i].name,DonorsLS[i].amount);
    reInst.age=DonorsLS[i].age;
    reInst.render();
  }
}
const form=document.getElementById('donor');
form.addEventListener('submit',handlesubmitting);

function handlesubmitting(event){
  event.preventDefault();
  let don=event.target;
  let donorName=don.DonorName.value;
  console.log(donorName);
  let donorAmount=don.selection.value;
  console.log(donorAmount);
  let newDonation=new Donation(donorName,donorAmount);
  newDonation.render();
  form.reset();
  let arrOfdonors=JSON.stringify(Donation.donors);
  localStorage.setItem('Donors',arrOfdonors);
  console.log('saved to LS',arrOfdonors);
}

