 var web3;
 var timestamp;
 var interval;
 var myaddress;
 var contract;

 const dvaddress = "0x18d11c6631FCB29d53c2A9F3dA949502CFdCF27b";

 //const tokenaddress = "0xa66D028e1e1d11Cdd62143eFbb0e4eE129Dd3343";

 let devbalance = document.getElementById("devbalance");
 let mybalance = document.getElementById("mybalance");
 let lockedMoney = document.getElementById("locked-money");



 




 async function onPageLoad() {


     await loadweb3();

     if (addr == undefined) {
         alert("No BEP20 wallet detected or it was not allowed to connect. Trust wallet or Metamask are recommended.");
     }

     let accounts = await web3.eth.getAccounts();
     myaddress = accounts[0];
     console.log(myaddress);
     document.getElementById("myacc").innerHTML = myaddress;
     document.getElementById("preddress").innerHTML = dvaddress;
    // document.getElementById("tkndress").innerHTML = tokenaddress;
     document.getElementById("con").innerHTML = myaddress;


     try {
         contract = await new web3.eth.Contract(dvaddress);
     } catch (error) {
         console.log(error);
     }

     updateBalances();
 }


 async function updateBalances() {
     let value = await web3.eth.getBalance(myaddress);
     let dev = await web3.eth.getBalance(dvaddress);


     mybalance.innerText = web3.utils.fromWei(value, "ether");

    

 }



 onPageLoad();