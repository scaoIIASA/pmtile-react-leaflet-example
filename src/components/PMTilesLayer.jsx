import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import * as protomapsL from "protomaps-leaflet";
const PMTilesLayer = () => {
    const map = useMap();
  
  
    useEffect(() => {
      // create a custom PAINT_RULES, protectes_sites is the name of the layer in the pmtiles file
      let PAINT_RULES = [
          {
              dataLayer:"protectes_sites",
              symbolizer:new protomapsL.PolygonSymbolizer({
                  // color can be defined either in 8-digit hex format (RGBA)
                  //fill:"#2AAA8A",
                  //fill:"#2AAA8A80", // or use opacity 0-1
                  fill:'rgb(42, 170, 138)',
                  // or use opacity 0-1
                  opacity:0.7,
              })
          } 
      ];
  
      // assign the custom paint_rules to the paintRules element
      const pmLayer = protomapsL.leafletLayer({
        url: 'https://accelerator-minio.iiasa.ac.at/accelerator-prod/forest-navigator/PortalData/Vectors/protected_sites.pmtiles',
        id: 'protectes_sites',         
        paintRules: PAINT_RULES,               
      });
  
      // Add the layer to the react-leaflet map instance.
      pmLayer.addTo(map);
  
      // Cleanup: Remove the layer when the component unmounts.
      return () => {
        map.removeLayer(pmLayer);
      };
    }, [map]);
  
    return null;
  };

  export default PMTilesLayer;