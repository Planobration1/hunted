import {chainId} from '../constants/address'
  // const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY
// const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
// const web3 = createAlchemyWeb3(alchemyKey)
// const web3 = new Web3('https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161')
// const clanCount = 5

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      // var addressArray = await window.ethereum.request({ 
      //   method: 'eth_accounts',
      // }) 
      const chain = await window.ethereum.request({ method: 'eth_chainId' })
      if (parseInt(chain, 16) != chainId) {
        window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId:chainId }],
        })
      }
      console.log(chain, parseInt(chain, 16), chainId, parseInt(chain, 16) === chainId)
      // if (parseInt(chain, 16) == chainId) {
        const addressArray = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "You can mint new pack now.",
          }
        } else {
          return {
            address: "",
            status: "Connect your wallet account to the site.",
          }
        }
      // } else {
      //   window.ethereum.request({
      //     method: 'wallet_switchEthereumChain',
      //     params: [{ chainId:chainId }],
      //   })
      //   return {
      //     address: "",
      //     status: "Connect your wallet account to the site.",
      //   }
      // }
      
    } catch (err) {
      return {
        address: "",
        status: "" + err.message,
      }
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            {" "}
            {/* <a target="_blank" href={`https://metamask.io/download.html`}> */}
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.(https://metamask.io/download.html)
            {/* </a> */}
          </p>
        </span>
      ),
    }
  }
}

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      })
      const chain = await window.ethereum.request({
        method: "eth_chainId",
      })
      if (addressArray.length > 0 && chain === chainId) {
        return {
          address: addressArray[0],
          status: "You can mint new pack now.",
        }
      } else {
        return {
          address: "",
          status: "Connect to Metamask and choose the correct chain using the top right button.",
        }
      }
    } catch (err) {
      return {
        address: "",
        status: "" + err.message,
      }
    }
  } else {
    //so the else here is executed but this part is not rendered if metamask is not available
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            {" "}
            {/* <a target="_blank" href={`https://metamask.io/download.html`}> */}
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.(https://metamask.io/download.html)
            {/* </a> */}
          </p>
        </span>
      ),
    }
  }
}
