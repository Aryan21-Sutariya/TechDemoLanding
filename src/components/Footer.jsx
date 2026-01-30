import React from 'react'

export default function Footer() {
  return (
    <div className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-base font-semibold">Building a circular future</p>
            <p className="mt-1 text-sm text-gray-600">Every verified transaction diverts waste from landfills and drives fair incomes.</p>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-brand-700">Techvanza</span> · Circular Economy Marketplace
          </div>
        </div>
        <div className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} Circular Economy Marketplace. All rights reserved.</div>
      </div>
    </div>
  )
}
