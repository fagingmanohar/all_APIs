import React, { useState, useMemo } from 'react';
import { Database, Globe } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { FilterBar } from './components/FilterBar';
import { APICard } from './components/APICard';
import { categories, apis } from './data';
import { Filters } from './types';

function App() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<Filters>({
    category: null,
    country: null,
    pricing: null,
    type: null,
  });

  const countries = useMemo(() => [...new Set(apis.map(api => api.country))].sort(), []);
  const types = useMemo(() => [...new Set(apis.map(api => api.type))].sort(), []);

  const filteredApis = useMemo(() => {
    return apis.filter((api) => {
      const matchesSearch = api.name.toLowerCase().includes(search.toLowerCase()) ||
        api.description.toLowerCase().includes(search.toLowerCase()) ||
        api.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
      
      const matchesCategory = !filters.category || api.category === filters.category;
      const matchesCountry = !filters.country || api.country === filters.country;
      const matchesPricing = !filters.pricing || api.pricing === filters.pricing;
      const matchesType = !filters.type || api.type === filters.type;
      
      return matchesSearch && matchesCategory && matchesCountry && matchesPricing && matchesType;
    });
  }, [search, filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Globe className="h-8 w-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900">API Directory</h1>
          </div>
          <p className="mt-2 text-gray-600">
            Discover and explore APIs from around the world
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center mb-8">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={filters.category}
          onSelect={(category) => setFilters({ ...filters, category })}
        />

        <FilterBar
          filters={filters}
          onFilterChange={setFilters}
          countries={countries}
          types={types}
        />

        {filteredApis.length === 0 ? (
          <div className="text-center py-12">
            <Database className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No APIs found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApis.map((api) => (
              <APICard key={api.id} api={api} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;