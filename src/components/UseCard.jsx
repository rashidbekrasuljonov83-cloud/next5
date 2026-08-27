import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="max-w-md mx-auto bg-slate-900 text-white rounded-3xl shadow-2xl overflow-hidden border border-slate-800 p-8 my-8">
      {/* Header / Avatar qismi */}
      <div className="flex items-center space-x-4 border-b border-slate-800 pb-6">
        <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-indigo-500/30">
          {user.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-indigo-400 font-medium">@{user.username}</p>
        </div>
      </div>

      {/* Ma'lumotlar ro'yxati */}
      <div className="mt-6 space-y-4 text-slate-300">
        <div className="flex justify-between border-b border-slate-800/60 pb-2">
          <span className="text-slate-500 font-medium">Email:</span>
          <a
            href={`mailto:${user.email}`}
            className="text-indigo-400 hover:underline"
          >
            {user.email}
          </a>
        </div>

        <div className="flex justify-between border-b border-slate-800/60 pb-2">
          <span className="text-slate-500 font-medium">Telefon:</span>
          <span>{user.phone}</span>
        </div>

        <div className="flex justify-between border-b border-slate-800/60 pb-2">
          <span className="text-slate-500 font-medium">Veb-sayt:</span>
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:underline"
          >
            {user.website}
          </a>
        </div>

        <div className="border-b border-slate-800/60 pb-2">
          <span className="text-slate-500 font-medium block mb-1">Manzil:</span>
          <p className="text-sm bg-slate-800/50 p-2.5 rounded-xl border border-slate-800">
            {user.address.suite}, {user.address.street}, {user.address.city} (
            {user.address.zipcode})
          </p>
        </div>

        <div>
          <span className="text-slate-500 font-medium block mb-1">
            Kompaniya:
          </span>
          <p className="font-semibold text-white">{user.company.name}</p>
          <p className="text-xs text-slate-400 italic mt-0.5">
            "{user.company.catchPhrase}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
