import Link from "next/link";
import img from "./../../public/quiz.jpg";

export default function Home() {
  return (
    <div className="bg-indigo-950 relative h-screen">
      <div className="flex items-center justify-center">
        <h1 className="text-white text-9xl">QUIZ APP</h1>
      </div>
      <div className="flex items-center justify-center">
        <h3 className="text-white">made by Shayan</h3>
      </div>
      <div className=" flex items-center justify-center h-4/6">
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-900">
            <Link href='sign-in'> Sign In</Link>
          </button>
          <button className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-900">
            <Link href='sign-up'> Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
