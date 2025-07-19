import { PopOverFilter } from "@/components/pop-over-filter";
import { SortButton } from "@/components/sort-button";
import { Layout } from "@/layout/Layout";


const filterData = [
  "Name", "Response", "Time", "Date"
]

const opsData = [
  "between", "equalTo", "Then"
]

const sortData = [
  "Name", "Response", "Time", "Date"
]


function SamplePage() {

  const handleSort = (field: string) => {
    // Your sorting logic here based on field name
    console.log("Sort by:", field)
    // Sort your data however you want
}

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

        <div>
          <SortButton
          sortData={sortData}
          onSort={handleSort}
          />
        </div>
        </div>
    </Layout>
  );
}

export default SamplePage;
