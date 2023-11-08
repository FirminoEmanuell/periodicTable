import ElementContainer from "../components/ElementContainer";
import { AlkaliMetalsGroup } from "../components/ElementsGroups/AlkaliMetalsGroup";
import { AlkalineEarthMetalsGroup } from "../components/ElementsGroups/AlkalineEarthMetalsGroup";
import { NobleGasesGroup } from "../components/ElementsGroups/NobleGasesGroup";
import { NonMetalsGroup } from "../components/ElementsGroups/NonMetalsGroup";
import { SemiMetalsGroup } from "../components/ElementsGroups/SemiMetalsGroup";
import { TransitionMetalsGroups } from "../components/ElementsGroups/TransitionMetalsGroup";
import { OtherMetalsGroup } from "../components/ElementsGroups/OtherMetalsGroup";
import Header from "../components/Header";
import { HalogenGroup } from "../components/ElementsGroups/HalogenGroup";
import { LathanidesGroup } from "../components/ElementsGroups/LanthanidesGroup";
import { ActinidesGroup } from "../components/ElementsGroups/ActinidesGroup";

export function Mobile() {
  return (
    <div className="overflow-hidden ">
      <Header />
      <ElementContainer
        {...{
          ElementsGroup: <TransitionMetalsGroups />,
          GroupName: "Metais de Transição",
        }}
      />
      <ElementContainer
        {...{
          ElementsGroup: <AlkaliMetalsGroup />,
          GroupName: "Metais Alcalinos",
        }}
      />
      <ElementContainer
        {...{
          ElementsGroup: <AlkalineEarthMetalsGroup />,
          GroupName: "Metais Alcalinoterrosos",
        }}
      />
      <ElementContainer
        {...{ ElementsGroup: <OtherMetalsGroup />, GroupName: "Outros Metais" }}
      />
      <ElementContainer
        {...{ ElementsGroup: <SemiMetalsGroup />, GroupName: "Semimetais" }}
      />
      <ElementContainer
        {...{ ElementsGroup: <NonMetalsGroup />, GroupName: "Ametais" }}
      />
      <ElementContainer
        {...{ ElementsGroup: <HalogenGroup />, GroupName: "Halogêneos" }}
      />
      <ElementContainer
        {...{ ElementsGroup: <LathanidesGroup />, GroupName: "Latanídeos" }}
      />
      <ElementContainer
        {...{ ElementsGroup: <ActinidesGroup />, GroupName: "Actinídeos" }}
      />
      <ElementContainer
        {...{ ElementsGroup: <NobleGasesGroup />, GroupName: "Gases Nobres" }}
      />
    </div>
  );
}
