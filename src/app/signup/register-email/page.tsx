"use client";
import React, { useEffect, useState } from "react";
import { RegisterEmailView } from "./components/view";

const RegisterEmailPage = () => {
  const [initial, setInitial] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitial(true);
    }, 250);
  }, []);

  if (!initial) return null;

  return (
    <div>
      <RegisterEmailView />
    </div>
  );
};

export default RegisterEmailPage;
