const fetch = require('node-fetch')
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const bearer = "";


let min_price = 100;
let max_price = 150
let max_rate = 1.5
let max_value = 1000000
let min_value = 1
let max_rap = 100000000
let min_rap = 1

// This is in seconds
let delay_per_check = 0.5
let check_logs = true
let custom_items = [2409285794];

async function check(){
  while (true){
    try{
      let response = await fetch('https://api.rbxflip.com/roblox/shop'); let code = response.status; response = await response.json();
    if (code === 200){
      if (check_logs === true){console.log(`Checked site code 200`);}
      
      if (custom_items.length>0){
    for (let x in response){
      if (custom_items.indexOf(response[x]['userAsset']['asset']['assetId']) === 0){
        if (response[x]['rate'] <= max_rate && response[x]['price'] <= max_price && response[x]['price'] >= min_price && response[x]['userAsset']['asset']['value'] < max_value && response[x]['userAsset']['asset']['value'] >= min_value && response[x]['userAsset']['asset']['value']<= max_rap && response[x]['userAsset']['asset']['value'] >= min_rap){
          console.log(`Purchasing ${response[x]['userAsset']['asset']['name']} for $${response[x]['price']}`)
          buy(response[x]['userAsset']['userId'], response[x]['userAsset']['userAssetId'], response[x]['price'])
          //You can lower or increase the delay if you want, its currently set to 3 seconds
          await delay(3000)
        }
      }
    }
  }else {
    for (let x in response){
    if (response[x]['rate'] <= max_rate && response[x]['price'] <= max_price && response[x]['price'] >= min_price && response[x]['userAsset']['asset']['value'] < max_value && response[x]['userAsset']['asset']['value'] >= min_value && response[x]['userAsset']['asset']['value']<= max_rap && response[x]['userAsset']['asset']['value'] >= min_rap){
      console.log(`Purchasing ${response[x]['userAsset']['asset']['name']} for $${response[x]['price']}`)
      buy(response[x]['userAsset']['userId'], response[x]['userAsset']['userAssetId'], response[x]['price'])
      //You can lower or increase the delay if you want, its currently set to 3 seconds
      await delay(3000)
    }
  }
        
  }
    } else{
      console.log(`Failed. Code: ${code}`);
    }
    }catch(e){
      console.log(`error ${e}`)
    }
    await delay(delay_per_check*1000)
  }
}



async function buy(userId, userAssetId, expectedPrice){
  let response = await fetch('https://api.rbxflip.com/roblox/shop/buy', {
  method: 'POST',
  headers: {
    'authorization': `Bearer ${bearer}`,
    'content-type': 'application/json',
  },
  body: JSON.stringify([
    {
      'userId': userId,
      'userAssetId': userAssetId,
      'expectedPrice': expectedPrice
    }
  ])
}); response = await response.json();
  console.log(response)
}


async function main(){
  console.log("Made with love by gusto#8622")
  if (custom_items.length>0){
    console.log(`Sniping for items with IDs: ${custom_items.toString()}`)
  } else{ console.log("No items found in custom_items, starting sniper") }
  check();
}

main();
