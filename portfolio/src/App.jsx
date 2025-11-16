import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Testing Vite with Tailwind CSS.
        </h1>
      </div>
    </div>
  );
}
