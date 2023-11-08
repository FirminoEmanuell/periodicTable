import ElementButton from "../ElementButton";
import { attribute } from "../../assets/attributes";
import otherMetalsData from "../../json/otherMetalsData.json";

export function OtherMetalsGroup() {
  return (
    <div className="flex gap-3 mt-10">
      {otherMetalsData.map((element) => (
        <ElementButton
          key={element.elementName} // Use uma chave única, se possível
          attributes={attribute[6].className}
          dialogTitle={element.elementName}
          elementName={element.tableElementName}
          zNumber={element.zNumber}
          aNumber={element.aNumber}
          eNumber={element.eNumber}
          uNumber={element.uNumber}
          nNumber={element.nNumber}
          biggestWorldReserves={element.biggestWorldReserves}
          discoveredBy={element.discoveredBy}
          discoveredIn={element.discoveredIn}
          eletronicConfig={element.eletronicConfig}
          howIsItExtracted={element.howIsItExtracted}
          howIsItFound={element.howIsItFound}
          howIsItUse={element.howIsItUse}
          howShouldItBeManaged={element.howShouldItBeManaged}
          isThereAbundance={element.isThereAbundance}
          mainFeatures={element.mainFeatures}
          offersRisk={element.offersRisk}
        />
      ))}
    </div>
  );
}
