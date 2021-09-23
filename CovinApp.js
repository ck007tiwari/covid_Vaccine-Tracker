   // JavaScript start from here till closer tag 
   // const InDate= prompt("Enter Date in DD-MM-YYYY")
   // const InPin = prompt("Enter 6-digit pincode")
   const InDate = require('29-08-2021')
   const InPin = require('110052')

   const APTURL = () => `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${InPin}&date=${InDate}`
   async function getSlot() {
      const resp = await fetch(APTURL());
      const respData = await resp.json();
      looping(respData);
   }
   getSlot();
   let looping = (rrrr) => {
      for (let i = 0; i < 10; i++) {
         let name1= rrrr.sessions[i].name
         console.log(`Name- ${rrrr.sessions[i].name}`);
         console.log(`Address- ${rrrr.sessions[i].address}`);
         console.log(`Fee- ${rrrr.sessions[i].fee_type}`);
         console.log(`Frist dose available- $2{rrrr.sessions[i].available_capacity_dose1}`);
         console.log(`Secound dose available- ${rrrr.sessions[i].available_capacity_dose2}`);
         console.log(`Total dose available- ${rrrr.sessions[i].available_capacity}`);
         console.log(`Vaccine- ${rrrr.sessions[i].vaccine}`);
         console.log("***********************************************************************");
      }
   }