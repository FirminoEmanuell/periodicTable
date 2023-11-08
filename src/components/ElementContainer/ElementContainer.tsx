import { Label } from "@radix-ui/react-label";

interface ElementContainerProps {
  GroupName: string;
  ElementsGroup: React.ReactNode; // Você pode ajustar o tipo conforme necessário
}

export function ElementContainer(props: ElementContainerProps) {
  return (
    <div className="bg-slate-300 w-auto h-40 rounded-2xl justify-evenly p-4 overflow-x-auto mt-2 mb-10 shadow-md">
      <Label className="absolute font-bold">{props.GroupName}</Label>
      {props.ElementsGroup}
    </div>
  );
}
