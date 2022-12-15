import React from "react";
import { useState, useEffect } from "react";
import ManagerOptions from "./ManagerOptions";
import InvestorOptions from "./InvestorOptions";
import RegisterPropOptions from "./RegisterPropOptions";

function MainDashboard({ accounts, setAccounts }) {
  const [managerScreen, setManagerScreen] = useState(false); //CHECK IF THIS IS A LOGICAL PATTERN FOR REACT APPS
  const [investorScreen, setInvestorScreen] = useState(false); //CHECK IF THIS IS A LOGICAL PATTERN FOR REACT APPS
  const [registerPropScreen, setRegisterProp] = useState(false); //CHECK IF THIS IS A LOGICAL PATTERN FOR REACT APPS

  //   Helper Functions
  //Nav Helpers
  const managerActive = () => {
    setManagerScreen(true);
    setInvestorScreen(false);
    setRegisterProp(false);
  };
  const investorActive = () => {
    setManagerScreen(false);
    setInvestorScreen(true);
    setRegisterProp(false);
  };
  const registerActive = () => {
    setManagerScreen(false);
    setInvestorScreen(false);
    setRegisterProp(true);
  };

  useEffect(() => {
    async function main() {
      setManagerScreen(true);
    }
    return () => {
      main();
    };
  }, []);

  return (
    <div className="min-h-screen p-10 ">
      {/* Dashboard-Top */}
      <div className="font-DDC flex justify-between items-center mb-6">
        <div>
          {/* Conditionally Show Title of dashboard */}
          {managerScreen ? (
            <h1 className="text-2xl text-[#C89731]">Manager Dashboard</h1>
          ) : (
            ""
          )}
          {investorScreen ? (
            <h1 className="text-2xl text-[#C89731]">Investor Dashboard</h1>
          ) : (
            ""
          )}
          {registerPropScreen ? (
            <h1 className="text-2xl text-[#C89731]">Register a Property</h1>
          ) : (
            ""
          )}
        </div>

        <div>
          <p className="inline-block ">Other Actions:</p>
          {/* Conditionally show buttons except current Dashboard based on state */}
          {!investorScreen ? (
            <button
              onClick={investorActive}
              className="font-DDC border-2 text-sm border-[#A77011]/30  p-1 rounded ml-4 "
            >
              <div className=" py-2 px-4 bg-[#A77011]/30 rounded-[1px] hover:bg-[#A77011]/50 ease-in duration-100">
                Investor Dashboard
              </div>
            </button>
          ) : (
            ""
          )}

          {!managerScreen ? (
            <button
              onClick={managerActive}
              className="font-DDC border-2 text-sm border-[#A77011]/30  p-1 rounded ml-4 "
            >
              <div className=" py-2 px-4 bg-[#A77011]/30 rounded-[1px] hover:bg-[#A77011]/50 ease-in duration-100">
                Manager Dashboard
              </div>
            </button>
          ) : (
            ""
          )}

          {!registerPropScreen ? (
            <button
              onClick={registerActive}
              className="font-DDC border-2 text-sm border-[#A77011]/30  p-1 rounded ml-4 "
            >
              <div className=" py-2 px-4 bg-[#A77011]/30 rounded-[1px] hover:bg-[#A77011]/50 ease-in duration-100">
                Register a Property
              </div>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* Dashboard-Bottom */}
      <div className="flex">
        {/* Left Bottom - 2/3 -Action/Account Condition */}
        <div className="border-2 border-[#C89731] rounded p-6 w-2/3 mr-6">
          {managerScreen ? (
            <ManagerOptions accounts={accounts} setAccounts={setAccounts} />
          ) : (
            ""
          )}
          {investorScreen ? (
            <InvestorOptions accounts={accounts} setAccounts={setAccounts} />
          ) : (
            ""
          )}
          {registerPropScreen ? (
            <RegisterPropOptions
              accounts={accounts}
              setAccounts={setAccounts}
            />
          ) : (
            ""
          )}
        </div>

        {/* Right Bottom - 1/3 - BHV BALANCE */}
        <div className="border-2 border-[#C89731] rounded p-2 w-1/3">
          <div>
            <div className="font-DDC text-lg mb-4 flex justify-between  bg-[#A77011]/20 px-4 py-3 rounded border-2 border-[#C89731]/20">
              <p>$BHV BALANCE:</p>
              <p>10,000</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={""}
                className="font-DDC border-2 text-sm border-[#A77011]/30  p-1 rounded ml-4 "
              >
                <div className=" py-2 px-4 bg-[#A77011]/30 rounded-[1px] hover:bg-[#A77011]/50 ease-in duration-100">
                  Buy $BHV
                </div>
              </button>
              <button
                onClick={""}
                className="font-DDC border-2 text-sm border-[#A77011]/30  p-1 rounded ml-4 "
              >
                <div className=" py-2 px-4 bg-[#A77011]/30 rounded-[1px] hover:bg-[#A77011]/50 ease-in duration-100">
                  Sell $BHV
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
