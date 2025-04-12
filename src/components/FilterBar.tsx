import React from 'react';
import { Filter, Globe } from 'lucide-react';
import { Filters } from '../types';

interface FilterBarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  countries: string[];
  types: string[];
}

export function FilterBar({ filters, onFilterChange, countries, types }: FilterBarProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-gray-500" />
        <h2 className="text-lg font-semibold text-gray-700">Filters</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              Country
            </div>
          </label>
          <select
            value={filters.country || ''}
            onChange={(e) => onFilterChange({ ...filters, country: e.target.value || null })}
            className="w-full rounded-md border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">All Countries</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pricing</label>
          <select
            value={filters.pricing || ''}
            onChange={(e) => onFilterChange({ ...filters, pricing: e.target.value || null })}
            className="w-full rounded-md border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">All Pricing</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
            <option value="Freemium">Freemium</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">API Type</label>
          <select
            value={filters.type || ''}
            onChange={(e) => onFilterChange({ ...filters, type: e.target.value || null })}
            className="w-full rounded-md border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            {types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            onClick={() => onFilterChange({ category: null, country: null, pricing: null, type: null })}
            className="w-full px-4 py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
}