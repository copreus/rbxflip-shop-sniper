<h1 align="left">RbxFlip Shop Sniper</h1>

###

<p align="left">A simple bot to snipe limiteds from Rbxflip's limited shop that I made in around an hour.</p>
<p align="left">Message me on discord to report bugs or for help: gusto#8622</p>

<h2 align="left">Instructions</h2>

###

<p align="left">Step 1: Install NodeJS here https://nodejs.org/en/download<br>Step 2: Download the repository and extract the files<br>Step 3: Run install_modules.bat<br>Step 4: Edit the index.js file to meet your needs<br>Step 5: Run start.bat to start the sniper</p>

###

<h2 align="left">Setup instructions</h2>
<p align="left">On how to get your bearer token, watch this video: https://streamable.com/l5a2y6</p>

###
Put your bearer token between the brackets, watch the video above on how to get it.
```js
  const bearer = "";
```

Minimum price in USD. Bot wont buy an item if its under this amount.
```js
  let min_price = 100;
```

Maximum price in USD. Bot wont buy an item if its over this amount.
```js
  let max_price = 150
```

Max rate in USD. Bot wont buy an item if its over this amount.
```js
  let max_rate = 1.5
```

Maximum value. Bot wont buy an item if its over this amount.
```js
  let max_value = 100000
```

Minimum value. Bot wont buy an item if its under this amount.
```js
  let min_value = 10000
```

Maximum value. Bot wont buy an item if its over this amount.
```js
  let max_rap = 100000000
```

Delay per check. Currently set at 0.5 seconds.
```js
  let delay_per_check = 0.5
```

Put a discord webhook here if you want notifications. Optional
```js
  let webhook = ""

```

If true, prints to console each time it checks with response code 200
```js
  let check_logs = true
```

Put custom item ID's here. You can put multiple by seperating each ID with a comma.
```js
  let custom_items = [2409285794];

```

An example of multiple items
```js
  let custom_items = [2409285794, 88885069, 31101391];

```
###
