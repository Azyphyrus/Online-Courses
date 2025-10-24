'use client';

import {useState, useEffect } from "react";

export default function Hydration(){
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) return null;
}