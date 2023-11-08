import ElementButton from "../ElementButton";
import { attribute } from "../../assets/attributes";
import nobleGasesData from "../../json/nobleGasesData.json";

export function NobleGasesGroup() {
  return (
    <div className="flex gap-3 mt-10">
      {nobleGasesData.map((element) => (
        <ElementButton
          key={element.elementName} // Use uma chave única, se possível
          attributes={attribute[5].className}
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
