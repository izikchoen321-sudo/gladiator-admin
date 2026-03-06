import React, { useState } from 'react';
import { Sword, TrendingUp, Users, Search, Plus } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AdminPanel = () => {
  const activityData = [
    { name: 'Sun', players: 400 }, { name: 'Mon', players: 600 },
    { name: 'Tue', players: 550 }, { name: 'Wed', players: 800 },
    { name: 'Thu', players: 700 }, { name: 'Fri', players: 900 },
    { name: 'Sat', players: 1100 },
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans rtl" dir="rtl">
      <div className="w-64 bg-slate-900 border-l border-slate-800 flex flex-col p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-red-600 p-2 rounded-lg"><Sword size={24} /></div>
          <h1 className="text-xl font-bold">ארנה אדמין</h1>
        </div>
        <nav className="space-y-4">
          <div className="flex items-center gap-3 text-red-600"><TrendingUp size={20}/> לוח בקרה</div>
          <div className="flex items-center gap-3 text-slate-400"><Users size={20}/> שחקנים</div>
        </nav>
      </div>
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
           <h2 className="text-3xl font-bold">מצב הארנה</h2>
           <button className="bg-red-600 px-4 py-2 rounded-lg flex items-center gap-2"><Plus size={20} /> פריט חדש</button>
        </header>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Area type="monotone" dataKey="players" stroke="#ef4444" fill="#ef4444" fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
