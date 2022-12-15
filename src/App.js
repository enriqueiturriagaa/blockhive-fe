import "./App.css";
import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MainDashboard from "./MainDashboard";

function App() {
  const [accounts, setAccounts] = useState([]);
  const isConnected = Boolean(accounts[0]);

  return (
    <div className="bg-off-black">
      <div className="bg-[url('/src/assets/beehive-pattern.png')] min-h-screen	text-off-white text-center">
        <Navbar accounts={accounts} setAccounts={setAccounts} />

        {isConnected ? (
          <MainDashboard accounts={accounts} setAccounts={setAccounts} />
        ) : (
          <Hero accounts={accounts} setAccounts={setAccounts} />
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
