import React, { useEffect } from "react";

const HyvorTalkComments = () => {
  useEffect(() => {
    // Mengatur HYVOR_TALK_WEBSITE
    window.HYVOR_TALK_WEBSITE = "11876"; // Ganti dengan Website ID Anda

    // Konfigurasi tambahan (Opsional)
    window.HYVOR_TALK_CONFIG = {
      url: window.location.href, // Menggunakan URL halaman saat ini
      id: window.location.pathname, // Menggunakan path halaman sebagai ID
    };

    // Memasukkan skrip Hyvor Talk
    const hyvorTalkScript = document.createElement("script");
    hyvorTalkScript.src = "https://talk.hyvor.com/web-api/embed";
    hyvorTalkScript.async = true;
    document.body.appendChild(hyvorTalkScript);

    return () => {
      // Membersihkan skrip jika komponen dilepas
      document.body.removeChild(hyvorTalkScript);
    };
  }, []);

  return <div id="hyvor-talk-view"></div>;
};

export default HyvorTalkComments;
