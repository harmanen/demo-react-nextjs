import Pagination from "../../components/Pagination/Pagination";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", height: "400px", border: "1px solid red" }}>
        Customer: {params.id} - Place cards here
      </div>
      <Pagination />
    </div>
  );
}
