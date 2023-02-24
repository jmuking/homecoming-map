import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [google, setGoogle] = useState<any>();
  const [userInfo, setUserInfo] = useState<any>();

  function onOneTapSignedIn(response: any) {
    console.log(response);
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setGoogle((window as any).google);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (google) {
      google.accounts.id.initialize({
        client_id:
          "314390942764-4c3obesugrbhfintur2v1cm6g55it20f.apps.googleusercontent.com",
        cancel_on_tap_outside: false,
        callback: onOneTapSignedIn,
      });

      google.accounts.id.prompt((notification: any) => {
        if (notification.isNotDisplayed()) {
          console.log(notification.getNotDisplayedReason());
        } else if (notification.isSkippedMoment()) {
          console.log(notification.getSkippedReason());
        } else if (notification.isDismissedMoment()) {
          console.log(notification.getDismissedReason());
        }
      });
    }
  }, [google]);

  return <div className="App"></div>;
}

export default App;
