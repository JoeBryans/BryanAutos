export default function Error({ statusCode, title, message }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-3xl font-bold text-center text-red-500">{title}</h1>
      <p className="text-center text-red-500">{message}</p>
    </div>
  );
}
