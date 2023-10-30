export default function Page({ params }: { params: { id: number } }) {
  return <div>Customer: {params.id}</div>;
}
