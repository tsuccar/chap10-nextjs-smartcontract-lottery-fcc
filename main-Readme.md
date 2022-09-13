` yarn create next-app .`           //install boilerplate
`yarn run dev`                      // to run vanilla

Install prettier
                `yarn add --dev prettier`
Copy and Paste 
                `.prettierignore`
                `prettierrc`



                  --:--   Two ways of connecting to Wallet Manual Coding vs Libarary  --:--
1) 
    Use React-Moralis as an alternative to ethers that we have used to connect to your wallet
    We have used `const {ethers} = require ("ethers)`. however, React-Moralis gives "other" addtional functionalities.

    Install moralis-v1 & react-moralis - https://www.npmjs.com/package/react-moralis 'Moralis' is alternative to 'ethers'
    `yarn add moralis-v1 react-moralis`
Create and code `Components/ManualHeader.js` //use it to connect with wallet.
   

2) 
     Install web3uikit -  https://github.com/web3ui/web3uikit (UI library to speed up  dapp development for whichever  chain)
     `yarn add web3uikit`
     Create and code `Components/Header.js`

Create and code `Components/LotteryEntrance.js` // to automate lottery entrance on UI
Create and code `constants/abi.json` // to receivet post contract deployment config
Create and code `constants/contractAddresses.json` // to receivet post contract deployment config


                        /// Running Test scripts on the localhost using Chap9 Backend ///


          Create and Code `deploy/99-update-front-end.js`     //this will reflect changes into the Frort End 
          Update `.env` with `UPDATE_FRONT_END=true`

          Create and code `script/mockOffchain.js`    //for testing.
          Run Script test against background already running chain on Chap9 code:
              1. `yarn hardhat node`
              2. `yarn hardhat run scripts/enter.js --network localhost
              3. `yarn hardhat run scripts/mockOffchain.js --network localhost`
