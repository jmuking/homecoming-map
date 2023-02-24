import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [gapi, setGapi] = useState<any>();

  function authenticate() {
    return gapi.auth2
      .getAuthInstance()
      .signIn({
        scope:
          "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/forms.body",
      })
      .then(
        function () {
          console.log("hey");
          loadClient();
        },
        function (err: any) {
          console.error(err);
        }
      );
  }

  function loadClient() {
    console.log("woah");
    gapi.client.setApiKey("AIzaSyD6hzaZIs4hIA6pBlI4CiMa77-ex8RQN88");
    return gapi.client
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
    console.log(gapi);
    // return gapi.client.forms.forms
    //   .batchUpdate({
    //     resource: {},
    //   })
    //   .then(
    //     function (response: any) {
    //       // Handle the results here (response.result has the parsed body).
    //       console.log("Response", response);
    //     },
    //     function (err: any) {
    //       console.error("Execute error", err);
    //     }
    //   );
  }

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    script.onload = (script) => {
      setGapi((window as any).gapi);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (gapi) {
      gapi.load("client:auth2", function () {
        gapi.auth2.init({
          client_id:
            "314390942764-4c3obesugrbhfintur2v1cm6g55it20f.apps.googleusercontent.com",
        });
      });
    }
  }, [gapi]);

  return (
    <div className="App">
      {gapi && <button onClick={authenticate}>login</button>}
      {gapi?.client && <button onClick={execute}>execute</button>}
    </div>
  );
}

export default App;
