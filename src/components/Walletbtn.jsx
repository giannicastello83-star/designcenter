import { useAccount, useDisconnect } from "wagmi";
import { useEffect, useState } from "react";
import MM from "./MM";
import "./wallet.css";

export const Wallnetbtn = () => {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const [walletModalVisible, setWalletModalVisible] = useState(false);

  const connectWallet = () => setWalletModalVisible(true);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", (chainID) => {
        if (![5, 11155111, 1, 137].includes(Number(chainID))) {
          disconnect();
        }
      });
    }
  }, [disconnect]);

  return (
    <div className="wallet-container">
      {isConnected ? (
        <button className="wallet-btn disconnect" onClick={disconnect}>
          Disconnect
        </button>
      ) : (
        <button className="wallet-btn connect" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}

      <MM isOpen={walletModalVisible} setIsOpen={setWalletModalVisible} />
    </div>
  );
};