//############### The case for restarting the Metamask > Settings > Advanced > 'Reset Accont'
//when you restart the local hardhat node but do not reset the MetaMask it will throw an error in the terminal Error: 
//Transaction reverted: function selector was not recognized and there's no fallback function.
// Watch for RPC error in Red"Expected nonce to 4 but revceived 6"  >> Then you need to 'Reset Account' and use appropriate Netmask Account 
import { contractAddresses, abi } from "../constants"
// dont export from moralis when using react
import { useMoralis, useWeb3Contract } from "react-moralis" //useMoralis on client side, useWeb3Contract on Blockchain side
import { useEffect, useState } from "react"
import { useNotification } from "web3uikit"
import { ethers } from "ethers"

export default function LotteryEntrance() {
    //
    const { Moralis, isWeb3Enabled, chainId: chainIdHex,web3 } = useMoralis() //renaming to Hex temprarily b/c incoming value is in Hex.
    // These get re-rendered every time due to our connect button!
    // The reason Moralis know what chain we are on is, in our "Header" component, The Header comp passes all info about Metamask to "Morlais Provider", The Morlais provider passes it down to all the moralis components inside Morlais provider tags.
    const chainId = parseInt(chainIdHex)
    console.log(`ChainId is ${chainId}`)
    console.log(`ChainId is contractAddresses ? ${chainId in contractAddresses}`)
    const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    console.log(`RaffleAddress is ${raffleAddress}`)
    // State hooks
    // https://stackoverflow.com/questions/58252454/react-hooks-using-usestate-vs-just-variables
    const [entranceFee, setEntranceFee] = useState("0")
    const [numberOfPlayers, setNumberOfPlayers] = useState("0")
    const [recentWinner, setRecentWinner] = useState("0")
   // https://web3ui.github.io/web3uikit/?path=/docs/5-popup-notification--hook-demo
    const dispatch = useNotification()

    const {
        runContractFunction: enterRaffle,
        data: enterTxResponse,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "enterRaffle",
        msgValue: entranceFee,
        params: {},
    })

    /* View Functions */

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress, // specify the networkId
        functionName: "getEntranceFee",
        params: {},
    })

    const { runContractFunction: getPlayersNumber } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getNumberOfPlayers",
        params: {},
    })

    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getRecentWinner",
        params: {},
    })

    async function updateUIValues() {
        // Another way we could make a contract call:
        // const options = { abi, contractAddress: raffleAddress }
        // const fee = await Moralis.executeFunction({
        //     functionName: "getEntranceFee",
        //     ...options,
        // })
        const entranceFeeFromCall = (await getEntranceFee()).toString()
        const numPlayersFromCall = (await getPlayersNumber()).toString()
        const recentWinnerFromCall = await getRecentWinner()
        console.log(`number of player ${numPlayersFromCall}`)
        setEntranceFee(entranceFeeFromCall)
        setNumberOfPlayers(numPlayersFromCall)
        setRecentWinner(recentWinnerFromCall)
    }
    //Remeber that we can't have await directly inside useEffect due  to the nature of it.
    useEffect(() => {
        if (isWeb3Enabled) {
            updateUIValues()
            listenForWinnerToBePicked()
        }
    }, [isWeb3Enabled,numberOfPlayers])
    // no list means it'll update everytime anything changes or happens
    // empty list means it'll run once after the initial rendering
    // and dependencies mean it'll run whenever those things in the list change

    // An example filter for listening for events, we will learn more on this next Front end lesson
    // const filter = {
    //     address: raffleAddress,
    //     topics: [
    //         // the name of the event, parnetheses containing the data type of each event, no spaces
    //         utils.id("RaffleEnter(address)"),
    //     ],
    // }


    // https://web3ui.github.io/web3uikit/?path=/docs/5-popup-notification--hook-demo
    const handleNewNotification = () => {
        dispatch({
            type: "info",
            message: "Transaction Complete!",
            title: "Transaction Notification",
            position: "topR",
            icon: "bell",
        })
    }

    // Probably could add some error handling
    const handleSuccess = async (tx) => {
        await tx.wait(1)
        updateUIValues()
        handleNewNotification(tx)
    }

    // Challenge Exercise

    async function listenForWinnerToBePicked(){
        const lottery = new ethers.Contract(raffleAddress, abi, web3)
        console.log("Waiting for a winner ...");
        await new Promise ((resolve, reject) => {
            lottery.once("WinnerPicked", async() => {
                console.log("We got a winner!");
                try {
                    await updateUIValues();
                    resolve();
                } catch (error) {
                    console.log(error);
                    reject(error);
                }
            });
        });
    }





    return (
        <div className="p-5">
            <h1 className="py-4 px-4 font-bold text-3xl">Lottery</h1>
            {raffleAddress ? ( //only if the raffle address exists and not null.
                <>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
                        onClick={async () =>
                            await enterRaffle({
                                // onComplete:
                                // onError:
                                onSuccess: handleSuccess,//checks to see Transaction is sent to Metamask successfully not that it was waiting for block confirmation. make sense right it should be between metamask and the blockchain
                                onError: (error) => console.log(error),//good practice to add these on all 'runContractFunctions'
                            })
                        }
                        disabled={isLoading || isFetching}
                    >
                        {isLoading || isFetching ? (
                            <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"></div>
                        ) : (
                            "Enter Raffle"
                        )}
                    </button>
                    <div>Entrance Fee: {ethers.utils.formatUnits(entranceFee, "ether")} ETH</div>
                    <div>The current number of players is: {numberOfPlayers}</div>
                    <div>The most previous winner was: {recentWinner}</div>
                </>
            ) : (
                <div>Please connect to a supported chain </div>
            )}
        </div>
    )
}