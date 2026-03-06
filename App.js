import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Shield, 
  TrendingUp, 
  Settings, 
  Search, 
  Bell, 
  Menu,
  Sword,
  ShieldAlert,
  Coins,
  ChevronRight,
  MoreVertical,
  Activity,
  Plus
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({
    totalPlayers: 1248,
    activeNow: 156,
    totalRevenue: 15420,
    growth: 12.5
  });

  const [players, setPlayers] = useState([
    { id: 1, name: 'Gladiator_Pro', level: 45, rank: 'Elite', gold: 12500, status: 'Online' },
    { id: 2, name: 'ShadowWarrior', level: 38, rank: 'Master', gold: 8400, status: 'Offline' },
    { id: 3, name: 'IronClad', level: 52, rank: 'Legend', gold: 25000, status: 'Online' },
    { id: 4, name: 'DragonSlayer', level: 31, rank: 'Warrior', gold: 4200, status: 'Offline' },
  ]);

  const activityData = [
    { name: 'Sun', players: 400 },
    { name: 'Mon', players: 600 },
    { name: 'Tue', players: 550 },
    { name: 'Wed', players: 800 },
    { name: 'Thu', players: 700 },
    { name: 'Fri', players: 900 },
    { name: 'Sat', players: 1100 },
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans rtl" dir="rtl">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 border-l border-slate-800 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-lg">
              <Sword size={24} className="text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">ארנת הגלדיאטורים</h1>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <NavItem 
            icon={<TrendingUp size={20} />} 
            label="לוח בקרה" 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')} 
          />
          <NavItem 
            icon={<Users size={20} />} 
            label="שחקנים" 
            active={activeTab === 'players'} 
            onClick={() => setActiveTab('players')} 
          />
          <NavItem 
            icon={<Shield size={20} />} 
            label="ניהול פריטים" 
            active={activeTab === 'items'} 
            onClick={() => setActiveTab('items')} 
          />
          <NavItem 
            icon={<ShieldAlert size={20} />} 
            label="אבטחה ודיווחים" 
            active={activeTab === 'security'} 
            onClick={() => setActiveTab('security')} 
          />
          <div className="pt-8 pb-2 px-4 text-xs font-semibold text-slate-500 uppercase">מערכת</div>
          <NavItem 
            icon={<Settings size={20} />} 
            label="הגדרות שרת" 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')} 
          />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">
          <div className="relative w-96">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="חפש שחקן, פריט או עסקה..." 
              className="w-full bg-slate-950 border border-slate-800 rounded-full py-2 pr-10 pl-4 text-sm focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full border-2 border-slate-900"></span>
            </button>
            <div className="flex items-center gap-3 pr-4 border-r border-slate-800">
              <div className="text-left">
                <p className="text-sm font-medium">איציק המנהל</p>
                <p className="text-xs text-slate-500">מנהל ראשי</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-orange-400 border-2 border-slate-800"></div>
            </div>
          </div>
        </header>

        {/* Dashboard Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold">ברוך הבא, מפקד</h2>
              <p className="text-slate-400">ככה נראה מצב הארנה שלך היום.</p>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors font-medium">
              <Plus size={20} />
              הוסף פריט לחנות
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard title="סה״כ שחקנים" value={stats.totalPlayers} icon={<Users className="text-blue-500" />} change="+5% מהחודש שעבר" />
            <StatCard title="שחקנים מחוברים" value={stats.activeNow} icon={<Activity className="text-green-500" />} change="שיא של 24 שעות" />
            <StatCard title="הכנסות החודש" value={`₪${stats.totalRevenue}`} icon={<Coins className="text-yellow-500" />} change="+12.5% צמיחה" />
            <StatCard title="רמת עומס שרת" value="98%" icon={<Shield className="text-purple-500" />} change="מצב יציב" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-slate-900 rounded-2xl border border-slate-800 p-6">
              <h3 className="text-lg font-bold mb-6">פעילות שחקנים שבועית</h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={activityData}>
                    <defs>
                      <linearGradient id="colorPlayers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                    />
                    <Area type="monotone" dataKey="players" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorPlayers)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Players List */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
              <h3 className="text-lg font-bold mb-6">שחקנים מובילים</h3>
              <div className="space-y-6">
                {players.map(player => (
                  <div key={player.id} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold group-hover:bg-red-600 transition-colors">
                        {player.level}
                      </div>
                      <div>
                        <p className="font-semibold">{player.name}</p>
                        <p className="text-xs text-slate-500">{player.rank}</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-yellow-500">{player.gold} זהב</p>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${player.status === 'Online' ? 'bg-green-500/10 text-green-500' : 'bg-slate-800 text-slate-400'}`}>
                        {player.status === 'Online' ? 'מחובר' : 'לא מחובר'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-2 text-slate-400 hover:text-white text-sm font-medium border border-slate-800 rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                צפה בכל השחקנים
                <ChevronRight size={16} className="rotate-180" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// רכיב עזר לפריט בתפריט
const NavItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      active 
        ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

// רכיב עזר לכרטיס סטטיסטיקה
const StatCard = ({ title, value, icon, change }) => (
  <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
        {icon}
      </div>
      <MoreVertical size={16} className="text-slate-600 cursor-pointer" />
    </div>
    <p className="text-slate-500 text-sm mb-1 font-medium">{title}</p>
    <div className="flex items-baseline gap-2">
      <h4 className="text-2xl font-bold">{value}</h4>
      <span className="text-xs text-green-500 font-medium">{change}</span>
    </div>
  </div>
);

export default AdminPanel;
