import React from "react";
import Account from "./Account";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import { bgColor, textColor, activeColor } from "../theme"

const nav = [
  { label: "Gallery", path: "/" },
  { label: "YourCollectibles", path: "/yourcollectibles" },
  { label: "Transfers", path: "/transfers" },
  /* { label: "IPFS Upload", path: "/ipfsup" }, */
  { label: "Debug Contracts", path: "/debugcontracts" },
]

export const NavBar = () => {
  const { pathname } = useLocation()
  const history = useHistory()

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      width: 500,
      position: "absolute",
      top: 20,
      left: 400
    }}>
      {nav?.map(item => {
        return (<div
          key={item?.label}
          style={{ color: pathname === item?.path ? activeColor : textColor, marginRight: 20, cursor: "pointer" }}
          className="cursor-pointer hover:text-red-500"
          onClick={() => history.push(item?.path)}
        >{item?.label}</div>)
      })}
    </div>
  )
}

export const Header = (props) => {
  const { address, localProvider, userProvider, mainnetProvider, price, loadWeb3Modal, web3Modal, logoutOfWeb3Modal, blockExplorer, faucetHint } = props
  return (<>
    <div style={{ backgroundImage: `linear-gradient(to right, ${bgColor}, #f7e3b5)`, display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: 20, paddingRight: 20, height: 60 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ fontSize: 24, fontWeight: "sold", marginRight: 20 }}>
          WaterMargin
        </div>
        <a href="https://dapp-learning.com" target="_blank" rel="noopener noreferrer" style={{ color: "gray" }}>by Dapp-Learning DAO</a>
      </div>
      {/* 👨‍💼 Your account is in the top right with a wallet at connect options */}
      <div style={{ position: "relative" }}>
        {web3Modal?.cachedProvider && props?.networkDisplay}
        <Account
          address={address}
          localProvider={localProvider}
          userProvider={userProvider}
          mainnetProvider={mainnetProvider}
          price={price}
          web3Modal={web3Modal}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
          blockExplorer={blockExplorer}
        />
        <div style={{ position: "absolute", top: 50, right: 0 }}>
          {faucetHint}
        </div>
      </div>
    </div>
  </>)
}
