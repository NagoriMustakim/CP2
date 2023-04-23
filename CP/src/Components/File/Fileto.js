import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Ddrive from "./Ddrive.json"
import Modal from "./supporter/Modal";
import Display from "./supporter/Display";
import FileUpload from "./supporter/FileUpload";
import "./fileto.css"
const Fileto = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [signer, setSigner] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const connectHandler = async () => {
    if (window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      let address = await signer.getAddress();
      setSigner(signer)
      setAccount(address);
      const contract = new ethers.Contract(
        Ddrive.address,
        Ddrive.abi,
        signer
      );
      setContract(contract);
      setProvider(provider);

    }
    else {
      console.error("Metamask is not installed");
    }

  }
  return (
    <>
      <button className="share" onClick={connectHandler}>{account == "" ? "Connect" : "Connected"}</button>
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )
      }
      {
        modalOpen && (
          <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
        )
      }

      <div className="App">
        <h1 style={{ color: "white" }}>Gdrive 3.0</h1>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>

        <p style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p>
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <Display contract={contract} account={account}></Display>
      </div>
    </>
  )
}

export default Fileto