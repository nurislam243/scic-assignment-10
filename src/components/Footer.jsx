export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} JobTaskApp. All rights reserved.</p>
      </div>
    </footer>
  );
}