import React from "react";

function MainDashboard({ accounts, setAccounts }) {
  return (
    <div>
      <div>
        <p className="font-DDC inline-block mr-4 ">Connected To: </p>
        <div className="inline-block border-2  border-[#C89731]  p-1 rounded-full  ">
          <p className="py-2 px-4 bg-[#A77011]/30 rounded-full font-DDC">
            {accounts[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
