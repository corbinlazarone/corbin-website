"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ALERT_TYPE, Alert } from "./types/alert-types";
import { AnimatePresence } from "framer-motion";
import PopupAlert from "./utils/popupAlert";

export default function Home() {
  const [alert, setAlert] = useState<Alert | null>(null);

  const handleAlert = (message: string, type: ALERT_TYPE) => {
    setAlert({ message, type });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AnimatePresence>
          {alert && (
            <PopupAlert
              message={alert.message}
              type={alert.type}
              onClose={() => setAlert(null)}
            />
          )}
        </AnimatePresence>
        <Hero />
        <Experience />
        <Projects />
        <Contact onAlert={handleAlert} />
      </main>
      <Footer />
    </div>
  );
}
