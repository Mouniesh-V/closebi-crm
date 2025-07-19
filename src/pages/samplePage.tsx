import { PopOverFilter } from "@/components/pop-over-filter";
import { Layout } from "@/layout/Layout";


const filterData = [
  "Name", "Response", "Time", "Date"
]

const opsData = [
  "between", "equalTo", "Then"
]
function SamplePage() {
  return (
    <Layout>

      <div className="flex flex-row justify-around">
        <h1>
          This is SamplePage of overall data
        </h1>

        <div>
          <PopOverFilter
          filterFields={filterData}
          operators={opsData}
          />
        </div>
        </div>
    </Layout>
  );
}

export default SamplePage;
