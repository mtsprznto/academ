import { SubcriptorsChart } from "./components"


export default function AnalitycsPage() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SubcriptorsChart></SubcriptorsChart>
        <p>Total revevue</p>
      </div>
      <p>Tabla con todos los pagos y usuarios</p>
    </div>
  );
}
