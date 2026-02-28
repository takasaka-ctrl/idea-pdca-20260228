import React, { useState, useEffect } from "react";
import { Settings, Cpu, Zap, Layers, Bell, Search, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [activeTask, setActiveTask] = useState("Researching AI UI Trends");
  const [suggestions, setSuggestions] = useState([
    { id: 1, type: "terminal", text: "Run \"npm start\" for cawa-prototype", icon: <Terminal size={14} /> },
    { id: 2, type: "docs", text: "Open Framer Motion API Reference", icon: <Layers size={14} /> },
    { id: 3, type: "action", text: "Summarize recent Slack thread about UI", icon: <Zap size={14} /> }
  ]);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans flex flex-col items-center justify-center p-8">
      {/* App Header / Glassmorphism Sidebar Mockup */}
      <div className="w-full max-w-4xl bg-[#111] border border-[#222] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[600px]">
        
        {/* Navigation Sidebar */}
        <div className="w-16 md:w-20 bg-[#0a0a0a] border-r border-[#222] flex flex-col items-center py-8 gap-8">
          <div className="text-white bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-900/20">
            <Cpu size={24} />
          </div>
          <div className="text-[#555] hover:text-white transition-colors cursor-pointer"><Layers size={22} /></div>
          <div className="text-[#555] hover:text-white transition-colors cursor-pointer"><Search size={22} /></div>
          <div className="mt-auto text-[#555] hover:text-white transition-colors cursor-pointer mb-4"><Settings size={22} /></div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col relative overflow-hidden">
          
          {/* Top Bar */}
          <div className="h-16 border-b border-[#222] flex items-center justify-between px-8 bg-[#0d0d0d]/80 backdrop-blur-md sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide uppercase text-[#888]">CAWA Engine Active</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative"><Bell size={18} className="text-[#555]" /><span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600"></div>
            </div>
          </div>

          {/* Content */}
          <div className="p-10 flex-1 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">Focusing on</h1>
              <p className="text-xl text-[#888] font-light">{activeTask}</p>
            </motion.div>

            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#444] mb-6">Predicted Actions</h2>
              <AnimatePresence>
                {suggestions.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: "#181818" }}
                    className="p-5 bg-[#141414] border border-[#222] rounded-xl flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1f1f1f] text-blue-400 group-hover:text-blue-300">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-[#bbb] group-hover:text-white transition-colors">{item.text}</span>
                    </div>
                    <div className="text-[#333] group-hover:text-[#666] text-xs font-mono">⌘ + {index + 1}</div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Predictive Notification Toast */}
          <div className="absolute bottom-8 right-8 max-w-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="bg-[#111]/90 border border-blue-500/30 backdrop-blur-xl p-4 rounded-2xl shadow-2xl flex gap-4"
            >
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Context Sync Complete</h4>
                <p className="text-[11px] text-[#888] leading-relaxed">I"ve detected you"re preparing for the next commit. Should I generate the CHANGELOG based on your recent changes?</p>
                <div className="mt-3 flex gap-2">
                  <button className="text-[10px] font-bold bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-md transition-colors">Yes, Generate</button>
                  <button className="text-[10px] font-bold bg-[#222] hover:bg-[#333] text-white px-3 py-1.5 rounded-md transition-colors">Ignore</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-[#333] text-xs font-mono uppercase tracking-widest">Prototype v1.0.0 — CAWA AI Engine</p>
      </div>
    </div>
  );
};

export default App;