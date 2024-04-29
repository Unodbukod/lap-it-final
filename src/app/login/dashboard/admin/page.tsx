
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";
import Image from "next/image";
import SignoutButton from "../../../../components/form/signoutbutton";
// Triaged, use ternary operator, and create a separate component for nav bar and wrap it inside the layout.tsx
const Page = async () => {
  
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session?.user.role == "admin") {
    return (
      <div className="flex h-screen ">
        {/* Side Navbar */}
        <div className="w-64 px-4 py-8 bg-white border-r">
          <div className="transform">
            <Image width={100} height={100} src="/person1.svg" alt="" />
          </div>
          <div className="mt-10">
            <p className="mb-4 text-gray-600">
              Welcome, <strong>{session?.user.companyName}</strong>!
            </p>
            <div className="flex flex-col">
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-2 bg-white text-black hover:bg-indigo-600 hover:text-white rounded-lg"
                  >
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 bg-white text-black hover:bg-indigo-600 hover:text-white rounded-lg"
                  >
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/login/dashboard/admin/editlandingpage"
                    className="flex items-center p-2 space-x-3 bg-white text-black hover:bg-indigo-600 hover:text-white rounded-lg"
                  >
                    <span>Edit Landing Page</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/login/dashboard/admin/createaccountpage"
                    className="flex items-center p-2 space-x-3 bg-white text-black hover:bg-indigo-600 hover:text-white rounded-lg"
                  >
                    <span>Create Account</span>
                  </a>
                </li>

              </ul>
              <SignoutButton/>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex flex-col flex-1 p-10">
          <h1 className="text-4xl font-bold">
            Hello, Admin {session?.user.companyName}!
          </h1>
          <p className="mt-4">This is your dashboard.</p>
          {/* Your content here */}
        </div>
      </div>
    );
  }
  return (
    <h2>
      Please Login First to see this page <a href="/login/signin">Sign In</a>
    </h2>
  );
};

export default Page;
