import React from "react";
import logo from "./assets/nav-logo.svg";

function Navbar({ accounts, setAccounts }) {
  const isConnected = Boolean(accounts[0]);
  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }
  return (
    <div className="flex justify-between py-4 px-6 items-center">
      <div>
        {isConnected ? (
          <img src={logo} className="max-w-[200px]" />
        ) : (
          <img src={logo} className="max-w-[250px]" />
        )}
      </div>
      <div>
        {isConnected ? (
          <div>
            <p className="font-DDC inline-block mr-4 ">Connected To: </p>
            <div className="inline-block border-2  border-[#C89731]  p-1 rounded-full  ">
              <p className="py-2 px-4 bg-[#A77011]/30 rounded-full font-DDC">
                {accounts[0]}
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={connectAccount}
            className="font-DDC border-2  border-[#C89731]  p-1 rounded "
          >
            <div className=" py-2 px-4 bg-[#A77011]/30 rounded-[1px] hover:bg-[#A77011]/50 ease-in duration-100">
              Connect Metamask
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
