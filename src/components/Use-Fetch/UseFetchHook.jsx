import useFetch from "./useFetch";

const UseFetchHook = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>useFetch Hook</h1>
      {loading ? <h2>Fetching products...</h2> : null}
      {error ? <h2>{error}</h2> : null}
      {data && data.products && data.products.length
        ? data.products.map((item) => <p key={item.key}>{item.title}</p>)
        : null}
    </div>
  );
};

export default UseFetchHook;
