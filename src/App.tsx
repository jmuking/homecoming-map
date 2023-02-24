import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [google, setGoogle] = useState<any>();
  const [userInfo, setUserInfo] = useState<any>();

  function onOneTapSignedIn(response: any) {
    console.log(response);
    loadClient();
  }

  function loadClient() {
    google.client.setApiKey("AIzaSyDr-NsioXIVsF33dprft5TtPOWM1uimUNc");
    return google.client
      .load("https://forms.googleapis.com/$discovery/rest?version=v1")
      .then(
        function () {
          console.log("GAPI client loaded for API");
        },
        function (err: any) {
          console.error("Error loading GAPI client for API", err);
        }
      );
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return google.client.forms.forms
      .batchUpdate({
        resource: {},
      })
      .then(
        function (response: any) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
        },
        function (err: any) {
          console.error("Execute error", err);
        }
      );
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

  return (
    <div className="App">
      {google?.client?.forms && <button onClick={execute}>Execute</button>}
    </div>
  );
}

export default App;
