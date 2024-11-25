"use client";
import Sideheading from "@/app/components/user/Sideheading";
import { registeredUsers } from "@/app/constants";
import { useState } from "react";

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const tableHeaders = [
    { label: "Name" },
    { label: "Email" },
    { label: "Phone" },
    { label: "Joined Date" }
  ];

  const filteredUsers = registeredUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm) ||
    user.joinedDate.includes(searchTerm)
  );

  return (
    <div className="bg-zinc-800 ml-64 max-sm:ml-0 w-[calc(100%-16rem)] max-sm:w-full min-h-screen p-5 max-sm:p-4">
      <Sideheading title="Registered" highlight="Users" />
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-zinc-700 text-zinc-100 rounded-lg border border-zinc-600 focus:outline-none placeholder-zinc-400 max-sm:text-sm"
          />
        </div>

        <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-xl border border-zinc-700 max-sm:rounded-lg max-sm:overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-700 border-b border-zinc-700">
              <tr>
                {tableHeaders.map((header) => (
                  <th 
                    key={header.label}
                    className="p-5 max-sm:p-3 text-[#27E0B3] font-bold text-lg max-sm:text-sm whitespace-nowrap"
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-800">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr 
                    key={user.id}
                    className="hover:bg-zinc-800/50 transition-all duration-200"
                  >
                    <td className="p-4 max-sm:p-3 text-zinc-100 text-center max-sm:text-sm whitespace-nowrap">
                      {user.name}
                    </td>
                    <td className="p-4 max-sm:p-3 text-zinc-100 text-center max-sm:text-sm whitespace-nowrap">
                      {user.email}
                    </td>
                    <td className="p-4 max-sm:p-3 text-zinc-100 text-center max-sm:text-sm whitespace-nowrap">
                      {user.phone}
                    </td>
                    <td className="p-4 max-sm:p-3 text-zinc-100 text-center max-sm:text-sm whitespace-nowrap">
                      {user.joinedDate}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-zinc-400 max-sm:text-sm max-sm:p-3">
                    No users found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}