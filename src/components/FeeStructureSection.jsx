import feeStructure from "../data/feeStructure";
import { FeeRow } from "./FeeRow";

export default function FeeStructureSection() {
  return (
    <section className="bg-white px-4 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        {feeStructure.map((item, i) => (
          <FeeRow
            key={i}
            index={i}
            level={item.level}
            grades={item.grades}
            notes={item.notes}
            fee={item.fee}
          />
        ))}
      </div>
    </section>
  );
}
