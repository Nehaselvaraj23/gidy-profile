"use client";

import { useEffect, useState, useCallback } from "react";

export function useProfile() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async () => {
    console.log("🔄 FETCHING PROFILE...");
    setLoading(true);
    

     const res = await fetch(`${window.location.origin}/api/profile?_t=${Date.now()}`, {
      cache: 'no-store',
      method: 'GET',
    });
    
    const data = await res.json();
    console.log("📥 PROFILE DATA:", data);
    
    setProfile(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const refresh = useCallback(async () => {
    console.log("🔄 MANUAL REFRESH...");
    await fetchProfile();
  }, [fetchProfile]);

  return { profile, loading, refresh };
}
