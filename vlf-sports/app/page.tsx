"use client";
import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Torneos from "./components/Torneos";
import Clubes from "./components/Clubes";
import Login from "./components/Login";
import Footer from "./components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "torneos":
        return <Torneos />;
      case "clubes":
        return <Clubes />;
      case "login":
        return <Login />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="pt-20">
        {renderActiveSection()}
      </main>
      
      {activeSection !== "login" && <Footer />}
    </div>
  );
}
