import Header from "../components/Header";
import PeriodicTable from "../components/PeriodicTable";
import data from "../../data.json"

console.log(data);

export function Desktop() {
  return (
    <div className="overflow-hidden ">
      <Header />
      <PeriodicTable   />
    </div>
  );
}
