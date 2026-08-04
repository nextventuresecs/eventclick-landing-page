'use client';

import { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  Users, 
  CheckCircle2,
  Check,
  Minus,
  Lock,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TargetUsers() {
  const [selectedRole, setSelectedRole] = useState<'org_admin' | 'event_admin' | 'volunteer'>('org_admin');

  const roles = [
    {
      id: 'org_admin' as const,
      title: 'Org Admin',
      internalRole: 'org_admin',
      subtitle: 'Organization Executive & Super Administrator',
      description: 'Full administrative authority across the entire organization. Manages user roles, defines master form templates, creates event rooms, assigns staff, and exports compliance reports.',
      icon: Building2,
      accentColor: '#402291',
      lightBg: 'bg-[#402291]/[0.04]',
      badgeBg: 'bg-[#402291]/10',
      badgeText: 'text-[#402291]',
      capabilities: [
        'Full Organization Control & Settings',
        'User Management & Role Assignment',
        'Create & Schedule Event Rooms',
        'Build Master Attendance Forms',
        'Assign Event Admins & Field Volunteers',
        'Export QC Audit Reports & Analytics'
      ]
    },
    {
      id: 'event_admin' as const,
      title: 'Event Admin',
      internalRole: 'event_admin',
      subtitle: 'Field Supervisor & Event Lead',
      description: 'Responsible for operational room execution. Creates volunteer accounts, customizes room forms, controls LiveKit video streams, manages recordings, and captures reports.',
      icon: UserCheck,
      accentColor: '#0891B2',
      lightBg: 'bg-[#0891B2]/[0.04]',
      badgeBg: 'bg-[#0891B2]/10',
      badgeText: 'text-[#0891B2]',
      capabilities: [
        'Create & Manage Field Volunteers',
        'Customize Room Forms & Checklists',
        'Start / Stop LiveKit Stream & Recording',
        'View Staff Assignments',
        'Capture & Evaluate QC Photo Quotas',
        'Finalize & Close Completed Rooms'
      ]
    },
    {
      id: 'volunteer' as const,
      title: 'Volunteer',
      internalRole: 'volunteer',
      subtitle: 'On-Ground Field Worker & Participant Lead',
      description: 'Executes verified on-site task capture. Views active live rooms, generates viewer links for stakeholders, and submits attendee forms with camera photo evidence.',
      icon: Users,
      accentColor: '#059669',
      lightBg: 'bg-[#059669]/[0.04]',
      badgeBg: 'bg-[#059669]/10',
      badgeText: 'text-[#059669]',
      capabilities: [
        'View Active Live Rooms & Schedules',
        'Generate & Share Viewer Room Links',
        'Submit Participant Intake Forms',
        'Capture Camera-Bound Photo Proof'
      ]
    }
  ];

  const currentRoleObj = roles.find(r => r.id === selectedRole) || roles[0];

  const permissionMatrix = [
    { feature: 'View Live Event Rooms', ngo_admin: true, event_admin: true, volunteer: true },
    { feature: 'Share Viewer Links', ngo_admin: true, event_admin: true, volunteer: true },
    { feature: 'Submit Attendance & Camera Photos', ngo_admin: true, event_admin: true, volunteer: true },
    { feature: 'Start/Stop Stream & Recording', ngo_admin: true, event_admin: true, volunteer: false },
    { feature: 'Create Volunteer Accounts', ngo_admin: true, event_admin: true, volunteer: false },
    { feature: 'Manage Forms & Checklists', ngo_admin: true, event_admin: true, volunteer: false },
    { feature: 'Evaluate QC Photo Quotas', ngo_admin: true, event_admin: true, volunteer: false },
    { feature: 'Organization User & Role Admin', ngo_admin: true, event_admin: false, volunteer: false },
    { feature: 'Global Audit Export & Analytics', ngo_admin: true, event_admin: false, volunteer: false },
  ];

  return (
    <section id="roles" className="relative py-24 md:py-32 bg-[#FAFAFC] overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] text-[#1D1D1F] text-[13px] font-semibold tracking-wide">
            <ShieldCheck className="w-4 h-4 text-[#402291]" />
            <span>Role-Based Access Control</span>
          </div>
          
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1D1D1F] tracking-tight leading-tight">
            Tailored workflows for{' '}
            <span className="bg-gradient-to-r from-[#402291] to-[#3160B7] bg-clip-text text-transparent">
              three distinct roles.
            </span>
          </h2>
          
          <p className="text-[16px] md:text-[18px] text-[#86868B] leading-relaxed max-w-2xl mx-auto font-medium">
            Strict permissions guarantee data integrity and operational governance at every level. Select a role below to highlight its capabilities.
          </p>

          {/* iOS Style Segmented Control for Mobile/Tablet */}
          <div className="pt-6 flex justify-center md:hidden">
            <div className="flex items-center p-1.5 bg-black/[0.04] rounded-full relative overflow-x-auto max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {roles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRole(r.id)}
                  className={`relative px-4 py-2 text-[13px] font-medium rounded-full transition-colors z-10 whitespace-nowrap ${
                    selectedRole === r.id ? 'text-[#1D1D1F]' : 'text-[#86868B]'
                  }`}
                >
                  {selectedRole === r.id && (
                    <motion.div
                      layoutId="mobileActiveTab"
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-black/[0.04]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {r.title}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3 Role Cards Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
          {roles.map((r, idx) => {
            const Icon = r.icon;
            const isSelected = selectedRole === r.id;
            
            return (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1,
                  type: 'spring',
                  stiffness: 100,
                  damping: 20
                }}
                onClick={() => setSelectedRole(r.id)}
                className={`${!isSelected ? 'hidden md:flex' : 'flex'} relative bg-white rounded-[32px] p-8 cursor-pointer flex-col justify-between transition-all duration-500 overflow-hidden group border ${
                  isSelected
                    ? 'border-transparent shadow-[0_20px_40px_rgb(0,0,0,0.08)] md:scale-[1.02]'
                    : 'border-black/[0.03] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)]'
                }`}
              >
                {/* Active Role Background Tint Glow */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 pointer-events-none"
                      style={{ backgroundColor: r.lightBg }}
                    />
                  )}
                </AnimatePresence>
                
                {/* Accent Top Border Indicator */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      layoutId="activeRoleBorder"
                      className="absolute top-0 left-0 right-0 h-1.5"
                      style={{ backgroundColor: r.accentColor }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10 space-y-6 flex-grow">
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500 ease-out"
                      style={{ backgroundColor: r.badgeBg, color: r.accentColor }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-[12px] font-semibold px-3 py-1 rounded-full ${r.badgeBg} ${r.badgeText}`}>
                      {r.internalRole}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-[22px] text-[#1D1D1F]">
                      {r.title}
                    </h3>
                    <p className="text-[13px] font-semibold mt-1" style={{ color: r.accentColor }}>
                      {r.subtitle}
                    </p>
                  </div>

                  <p className="text-[14.5px] text-[#86868B] leading-relaxed">
                    {r.description}
                  </p>
                </div>

                <div className="relative z-10 space-y-3 pt-6 mt-6 border-t border-black/[0.04]">
                  <span className="text-[12px] font-medium text-[#1D1D1F] uppercase tracking-wider block">
                    Key Capabilities
                  </span>
                  <ul className="space-y-3 text-[13px] text-[#1D1D1F]">
                    {r.capabilities.slice(0, 4).map((cap, capIdx) => (
                      <li key={capIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: r.accentColor }} />
                        <span className="leading-tight">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mac Comparison Style Permission Matrix */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-[24px] text-[#1D1D1F]">
              Feature Availability
            </h3>
          </div>

          <div className="overflow-x-auto pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr>
                  <th className="py-4 px-6 w-[40%] text-[13px] font-medium text-[#86868B] border-b border-black/[0.06]">
                    Security Endpoint
                  </th>
                  
                  {roles.map(r => (
                    <th 
                      key={r.id}
                      onClick={() => setSelectedRole(r.id)}
                      className={`py-4 px-4 text-center cursor-pointer transition-all border-b border-black/[0.06] w-[20%] ${
                        selectedRole === r.id ? 'bg-white rounded-t-[20px] shadow-[0_-10px_30px_rgb(0,0,0,0.02)]' : 'hover:bg-black/[0.02]'
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center gap-1.5">
                        <r.icon className="w-5 h-5" style={{ color: r.accentColor }} />
                        <span className={`text-[14px] font-semibold ${selectedRole === r.id ? 'text-[#1D1D1F]' : 'text-[#86868B]'}`}>
                          {r.title}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-transparent">
                {permissionMatrix.map((row, idx) => (
                  <tr key={idx} className="group">
                    <td className="py-4 px-6 font-medium text-[#1D1D1F] text-[14px] border-b border-black/[0.04]">
                      {row.feature}
                    </td>

                    {/* Org Admin */}
                    <td className={`py-4 px-4 text-center border-b border-black/[0.04] transition-colors ${
                      selectedRole === 'org_admin' ? 'bg-white shadow-[0_0_30px_rgb(0,0,0,0.02)]' : 'group-hover:bg-black/[0.01]'
                    }`}>
                      {row.ngo_admin ? (
                        <Check className="w-5 h-5 mx-auto text-[#1D1D1F]" />
                      ) : (
                        <Minus className="w-5 h-5 mx-auto text-[#D1D1D6]" />
                      )}
                    </td>

                    {/* Event Admin */}
                    <td className={`py-4 px-4 text-center border-b border-black/[0.04] transition-colors ${
                      selectedRole === 'event_admin' ? 'bg-white shadow-[0_0_30px_rgb(0,0,0,0.02)]' : 'group-hover:bg-black/[0.01]'
                    }`}>
                      {row.event_admin ? (
                        <Check className="w-5 h-5 mx-auto text-[#1D1D1F]" />
                      ) : (
                        <Minus className="w-5 h-5 mx-auto text-[#D1D1D6]" />
                      )}
                    </td>

                    {/* Volunteer */}
                    <td className={`py-4 px-4 text-center border-b border-black/[0.04] transition-colors ${
                      selectedRole === 'volunteer' ? 'bg-white shadow-[0_0_30px_rgb(0,0,0,0.02)]' : 'group-hover:bg-black/[0.01]'
                    }`}>
                      {row.volunteer ? (
                        <Check className="w-5 h-5 mx-auto text-[#1D1D1F]" />
                      ) : (
                        <Minus className="w-5 h-5 mx-auto text-[#D1D1D6]" />
                      )}
                    </td>
                  </tr>
                ))}
                
                {/* Table Footer with dynamic active indicator curve */}
                <tr>
                  <td className="py-4 px-6" />
                  {roles.map(r => (
                    <td key={r.id} className={`py-4 px-4 transition-colors ${
                      selectedRole === r.id ? 'bg-white rounded-b-[20px] shadow-[0_10px_30px_rgb(0,0,0,0.02)]' : ''
                    }`} />
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-center gap-2 text-[12px] text-[#86868B] font-medium mt-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Least Privilege Endpoint Authorization (RBAC V2.4)</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
