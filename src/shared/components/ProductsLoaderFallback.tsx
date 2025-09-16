import LoadingSpinner from "./LoadingSpinner";

export default function ProductsLoaderFallback() {
  return (
    <div className="-mt-10 flex flex-col items-center justify-center space-y-10 relative bg-content lg:mx-56 rounded-lg h-[500px]">
      <LoadingSpinner style={{ width: 64, height: 64 }} />
      <p className="text-muted-foreground">
        Loading product recommendations...
      </p>
    </div>
  );
}
