import { useEffect, useState } from "react";

function NetworkStatusBanner() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-red-500 text-white py-2 px-4 rounded shadow-lg z-[9999]">
      ⚠️ You're offline — check your internet connection
    </div>
  );
}

export default NetworkStatusBanner;
