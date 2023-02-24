import React, { useEffect, useRef, useState } from "react";

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import Point from "@arcgis/core/geometry/Point";
import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils.js";

import "./App.css";

const CHOICES: any = [
  {
    geometry: {
      type: "point",
      x: -86.8515,
      y: 21.1619,
    },
    attributes: {
      objectID: 1,
      place: "Cancun",
    },
  },
  {
    geometry: {
      type: "point",
      x: -80.1918,
      y: 25.7617,
    },
    attributes: {
      objectID: 2,
      place: "Miami",
    },
  },
];

const FIELDS: any = [
  {
    name: "ObjectID",
    alias: "ObjectID",
    type: "oid",
  },
  {
    name: "place",
    alias: "Place",
    type: "string",
  },
];

const FORMURL: string =
  "https://docs.google.com/forms/d/e/1FAIpQLSdf0bq1J-cat1idJ_pxCJZGaku-S0JE32KDareKk4rceM_RvA/viewform?entry.1599146813=";

function App() {
  const mapRef = useRef(null);

  const [esriMap, setEsriMap] = useState<Map>();
  const [esriView, setEsriView] = useState<MapView>();
  const [choiceLayer, setChoiceLayer] = useState<FeatureLayer>();

  const [tipInfoText, setTipInfoText] = useState<string | null>(null);

  function centerPt() {
    let sum = [0, 0];

    for (const i in CHOICES) {
      const choice = CHOICES[i];
      sum[0] += choice.geometry.x;
      sum[1] += choice.geometry.y;
    }

    return [sum[0] / CHOICES.length, sum[1] / CHOICES.length];
  }

  function choiceInteract(attributes: any) {
    const oid = attributes.ObjectID;

    return choiceLayer?.queryFeatures({
      where: `ObjectID = ${oid}`,
      outFields: ["*"],
    });
  }

  function choiceClick(attributes: any) {
    choiceInteract(attributes)?.then((results) => {
      const allAttributes = results.features[0].attributes;
      const place = allAttributes.place;
      window.open(FORMURL + place);
    });
  }

  function choiceHover(attributes: any) {
    choiceInteract(attributes)?.then((results) => {
      const allAttributes = results.features[0].attributes;
      const place = allAttributes.place;
      setTipInfoText(`Are you REALLY sure you want to go to ${place}`);
    });
  }

  useEffect(() => {
    if (mapRef?.current) {
      const map = new Map({
        basemap: "streets-vector",
      });

      setEsriMap(map);

      const view = new MapView({
        map,
        container: mapRef.current,
      });

      setEsriView(view);

      const layer = new FeatureLayer({
        title: "choices",
        source: CHOICES,
        fields: FIELDS,
        objectIdField: "ObjectID",
        geometryType: "point",
        popupEnabled: true,
        renderer: new SimpleRenderer({
          symbol: new SimpleMarkerSymbol({
            size: 16,
            color: "orange",
            outline: {
              width: 0.5,
              color: "black",
            },
          }),
        }),
      });

      setChoiceLayer(layer);

      map.add(layer);

      view.when(() => {
        view.whenLayerView(layer).then(() => {
          function eventHandler(event: any, func: (attributes: any) => void) {
            const mapPoint = webMercatorUtils.project(
              view.toMap({ x: event.x, y: event.y }),
              { wkid: 4326 }
            ) as Point;

            let found = false;

            for (const i in CHOICES) {
              const choice = CHOICES[i];

              const xDif = choice.geometry.x / mapPoint.x;
              const yDif = choice.geometry.y / mapPoint.y;

              if (
                xDif < 1.005 &&
                xDif > 0.995 &&
                yDif < 1.005 &&
                yDif > 0.995
              ) {
                found = true;
                func(choice.attributes);
                break;
              }
            }

            return found;
          }

          view.on("click", (event) => {
            eventHandler(event, choiceClick);
          });

          view.on("pointer-move", (event) => {
            if (!eventHandler(event, choiceHover)) setTipInfoText(null);
          });

          view.goTo({
            center: centerPt(),
            zoom: 6,
          });
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapRef]);

  return (
    <div className="app">
      <div className="tip-container">
        <p className="tip-text">Click on your preferred party place!</p>
        {tipInfoText && <p className="tip-info">{tipInfoText}</p>}
      </div>
      <div className="map" ref={mapRef}></div>
    </div>
  );
}

export default App;
