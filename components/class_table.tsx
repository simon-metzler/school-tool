import PlusMinusButton from "@/components/ui/plus_minus_button";

export default function ClassTable() {
  // Liste mit den Daten für die Tabelle
  let tableData = [
    { id: 1, name: "Cy Ganderton", mitarbeit: 2, anwesenheit: 45 },
    { id: 2, name: "Hart Hagerty", mitarbeit: 3, anwesenheit: 23 },
    { id: 3, name: "Brice Swyre", mitarbeit: 4, anwesenheit: 100 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Kopf der Tabelle */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Mitarbeit</th>
            <th>Anwesenheit</th>
          </tr>
        </thead>
        <tbody>
          {/* Dynamische Erstellung der Zeilen */}
          {tableData.map((row, index) => (
            <tr key={row.id}>
              <th>{row.id}</th>
              <td>{row.name}</td>
              <td>
                <div className="flex gap-5 items-center">
              <div className="flex gap-1">
                    <PlusMinusButton type="+" />
                    <PlusMinusButton type="-" />
                  </div>
                {row.mitarbeit}%</div>
              </td>
              <div className="flex gap-1">
              <PlusMinusButton type="-" />
              <td>{row.anwesenheit}%</td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
