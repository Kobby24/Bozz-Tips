'use client';

import { useState, useRef } from 'react';
import LocationPopover from '../../components/LocationPopover';
import Link from 'next/link';

export default function VVIPPage() {
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const dailyBtnRef = useRef<HTMLButtonElement>(null);
  const weeklyBtnRef = useRef<HTMLButtonElement>(null);
  const monthlyBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Black Header */}
      <div className="bg-blue-900 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">VVIP</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">VVIP</h2>
          <p className="text-gray-600 text-lg">
            Select a package to enjoy from today's VVIP games.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Daily Package */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">DAILY VVIP PLAN</h3>
              <div className="text-red-600 text-3xl font-bold mb-6">$4.00</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Daily VVIP Package
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Telegram Support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Access to VVIP Tips (For 1 day)
                </li>
              </ul>
              <button
                ref={dailyBtnRef}
                onClick={() => setOpenPopover('daily')}
                className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 font-semibold hover:from-blue-800 hover:to-blue-950 transition-all"
              >
                SELECT PLAN
              </button>
              <LocationPopover
                isOpen={openPopover === 'daily'}
                onClose={() => setOpenPopover(null)}
                anchorRef={dailyBtnRef as React.RefObject<HTMLButtonElement>}
              />
            </div>
          </div>

          {/* Weekly Package */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">WEEKLY VVIP PLAN</h3>
              <div className="text-red-600 text-3xl font-bold mb-6">$20.00</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Weekly VVIP Package
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Premium Telegram Access
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Access to VVIP Tips (For 7 days)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Priority Support
                </li>
              </ul>
              <button
                ref={weeklyBtnRef}
                onClick={() => setOpenPopover('weekly')}
                className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 font-semibold hover:from-blue-800 hover:to-blue-950 transition-all"
              >
                SELECT PLAN
              </button>
              <LocationPopover
                isOpen={openPopover === 'weekly'}
                onClose={() => setOpenPopover(null)}
                anchorRef={weeklyBtnRef as React.RefObject<HTMLButtonElement>}
              />
            </div>
          </div>

          {/* Monthly Package */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">MONTHLY VVIP PLAN</h3>
              <div className="text-red-600 text-3xl font-bold mb-6">$33.33</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Monthly VVIP Package
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  VIP Telegram Group
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Access to VVIP Tips (For 30 days)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  24/7 Premium Support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Exclusive Analysis
                </li>
              </ul>
              <button
                ref={monthlyBtnRef}
                onClick={() => setOpenPopover('monthly')}
                className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 font-semibold hover:from-blue-800 hover:to-blue-950 transition-all"
              >
                SELECT PLAN
              </button>
              <LocationPopover
                isOpen={openPopover === 'monthly'}
                onClose={() => setOpenPopover(null)}
                anchorRef={monthlyBtnRef as React.RefObject<HTMLButtonElement>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 