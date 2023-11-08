import Spline from "@splinetool/react-spline";
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { useState } from "react";
import { ElementProps } from "@/interfaces/ElementProps";
import data from "../../../data.json";

export function PeriodicTable() {
  //@ts-ignore
  const [mouseEventValue, setMouseEventValue] = useState(null);
  const [element, setElement] = useState({} as ElementProps);

  const handleMouseDown = (e: any) => {
    const newData = data.find((d) => {
      return d.elementName == e.target.name;
    });
    setElement(newData as unknown as ElementProps);
    setMouseEventValue(e.target.name);
  };

  console.log(element);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Spline
          scene="https://prod.spline.design/SnPDzo71xIErGBDB/scene.splinecode"
          onMouseDown={handleMouseDown}
        />
      </DialogTrigger>
      <DialogContent className="fixed bg-slate-100 w-5/6 h-5/6 z-50 p-3 left-8 right-8 top-24 rounded-2xl border-2 border-black divide-y divide-slate-700 divide-dotted shadow-2xl shadow-slate-950 overflow-auto ">
        <DialogTitle className="font-bold text-2xl text-black bg-transparent">
          {element.elementName}
        </DialogTitle>
        <DialogDescription className="whitespace-pre-line flex-column overflow-auto bg-transparent">
          <div className="my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Descoberto por:
            </label>
            <p className="bg-transparent">{element.discoveredBy}</p>
          </div>

          <div className="flex gap-2 my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Ano:
            </label>
            <p className="bg-transparent">{element.discoveredIn}</p>
          </div>

          <div className="my-3 bg-transparent" >
            <label htmlFor="" className="font-bold bg-transparent">
              Principais Características:
            </label>
            <p className="bg-transparent">{element.mainFeatures}</p>
          </div>

          <div className="flex gap-2 my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Configuração Eletrônica:
            </label>
            <p className="bg-transparent">{element.eletronicConfig}</p>
          </div>

          <div className="my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Como é encontrado:
            </label>
            <p className="bg-transparent">{element.howIsItFound}</p>
          </div>

          <div className="my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Como é extraído:
            </label>
            <p className="bg-transparent">{element.howIsItExtracted}</p>
          </div>

          <div className="my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Há em abundância?
            </label>
            <p className="bg-transparent"> {element.isThereAbundance}</p>
          </div>

          <div className="my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Como deve ser manejado:
            </label>
            <p className="bg-transparent" >{element.howShouldItBeManaged}</p>
          </div>

          <div className="my-3 bg-transparent">
            <label htmlFor="" className="font-bold bg-transparent">
              Como é usado:
            </label>
            <p className="bg-transparent">{element.howIsItUse}</p>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog> 
  );
}
