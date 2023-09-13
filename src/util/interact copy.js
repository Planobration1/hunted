import Onboard from "bnc-onboard";
import { chainId as NETWORK_ID } from "../constants/address";

const wallets = [
    { walletName: "metamask"},
    { walletName: "coinbase" },
];

let walletProvider;
const onboard = Onboard({

    networkId: NETWORK_ID,     // dappId: "877e8915-22d9-450e-a9b8-799bfd51798e", // [String] The API key created by step one above// [Integer] The Ethereum network ID your Dapp uses.
    hideBranding: true,
    walletSelect: {
        heading: "Select a Wallet",
        description: "Please select a wallet to connect to this site:",
        wallets: wallets
    },
    subscriptions: {
        wallet: (wallet) => {
            walletProvider = wallet.provider;
            console.log(`${wallet.name} is now connected`);
        },
    },
    darkMode: true
});

export const connectWallet =  async () => {
    const currentState = onboard.getState(); 
    console.log(currentState) // null first time connecting, must reclick the button 
    if(currentState["address"] != null) {
        return {
            address: currentState["address"], //doesnt return anything
            status: "👆🏽 Mint your GG Now.",
        }
    }
    const walletSelected = await onboard.walletSelect({
        walletSelect: {
            networkId: NETWORK_ID,
            wallets
          },
    });
    if (walletSelected !== false) {
        const walletCheck = await onboard.walletCheck();
        if (walletCheck === true) {
            const currentState = onboard.getState();
            return {
                address: currentState["address"], // doesnt return anything ? why 
                status: "👆🏽 Mint your GG Now.",
            }
        } else {
            return {
                address: "",
                status: "😥 Connect your wallet account to the site.",
            }
        }
    }

}

export const disConnectWallet = () => {
    // onboard.walletReset()
    return {
        address: "",
        status: "😥 Connect your wallet account to the site.",
    }
}

export const getCurrentWalletConnected = async () => {
    const currentState = onboard.getState();

    if(currentState["address"] != null) {
        return {
            address: currentState["address"],
            status: "👆🏽 Mint your GG Now.",
        }
    } else {
        return {
            address: "",
            status: "",
        }
    }
}


