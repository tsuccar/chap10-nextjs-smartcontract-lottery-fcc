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


                        /// RUNNING Test scripts on the localhost using Chap9 Backend ///


          Create and Code `deploy/99-update-front-end.js`     //this will reflect changes into the Frort End 
          Update `.env` with `UPDATE_FRONT_END=true`

          Create and code `script/mockOffchain.js`    //for testing.
          Run Script test against background already running chain on Chap9 code:
              1. `yarn hardhat node`
              2. `yarn hardhat run scripts/enter.js --network localhost`
              3. `yarn hardhat run scripts/mockOffchain.js --network localhost`

          Run frontend on  Chap10 code:
              1. `yarn run dev`

`yarn add --dev tailwindcss postcss autoprefixer` // install tailwindcss https://tailwindcss.com/docs/guides/nextjs
`yarn tailwindcss init -p` //creates a config file
- Add the paths to all of your template files in your `tailwind.config.js` file.
- Add/Overwrite the @tailwind directives for each of Tailwind’s layers to your `./styles/globals.css` file.
- In VSCcode, install `PostCSS Language Support` plugin.



                                            /// IPFS & Manual static code upload ///
Install IPFS node desktop : https://ipfs.tech/#install
Install Chromimum IPFS companion in Brave Browser to allow ipfs://CDID

Deploy Backend (Chap9) to Rinkeby - `yarn hardhat deploy --network rinkeby`
IPFS just hosts static files and it's not a compute. (eg. it won't be able to do yarn hardhat run). Therefore, we need to build our `optimized production build`
`yarn build` eq. `yarn next build`
`yarn next export`  to build static code in `./out` folder. we will need to import this in IPFS. Grab CID
got to browser a ipfs://QmeYuPMFUgkJ8gck1VZygmqnr7rtRrMhpFwZuebXg3ZYVc. Viola  (This is maual way of add to IPFS)

                    /// Fleek.co to upload programatically & helps with auto pinning of our data on other nodes///
- Build command in fleek `yarn. && yarn run build && yarn run export`