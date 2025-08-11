import { MadeWithDyad } from "@/components/made-with-dyad";
import Calculator from "@/components/Calculator"; // Import the new Calculator component

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Welcome to Your Blank App
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Start building your amazing project here!
        </p>
      </div>
      <Calculator /> {/* Render the Calculator component */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;