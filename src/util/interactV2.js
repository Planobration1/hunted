import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import { chainId as NETWORK_ID } from "../constants/address";
// have to tell them to install metamask 

const injected = injectedModule()

const onboard = Onboard({
    wallets: [injected],
    //hideBranding: true, this is not allowed
    chains: [
      {
        //id: NETWORK_ID,
        id: 1337,  // ganache lol 
        rpcUrl: 'http://localhost:8545'

       },
      /*{
        id: '0x2105',
        token: 'ETH',
        label: 'Base',
        rpcUrl: 'https://mainnet.base.org'
    }*/
    ],
    theme: 'dark',
    
  
  })

export const connectWallet =  async () => {
    const wallets = await onboard.connectWallet(); //not null first time connecting
    console.log(wallets[0]["accounts"][0]["address"]) 
    if (wallets[0]["accounts"][0]["address"] != null){
        console.log('very cool')
        return {
            address: wallets[0]["accounts"][0]["address"], // still doesn't return anything
            status: "👆🏽 Mint your GG Now."
        }
    }
    
   /* rest of the function */
   
}

export const getCurrentWalletConnected = async () => {
    const currentState = await onboard.connectWallet();

    if(currentState[0]["accounts"][0]["address"] != null) {
        return {
            address: currentState[0]["accounts"][0]["address"],
            status: "👆🏽 Mint your GG Now.",
        }
    } else {
        return {
            address: "",
            status: "",
        }
    }
}
