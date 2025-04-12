import React from 'react';
import { API } from '../types';
import { ExternalLink } from 'lucide-react';

interface APICardProps {
  api: API;
}

export function APICard({ api }: APICardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {api.imageUrl && (
        <img
          src={api.imageUrl}
          alt={api.name}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-gray-900">{api.name}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            api.pricing === 'Free' ? 'bg-green-100 text-green-800' :
            api.pricing === 'Paid' ? 'bg-purple-100 text-purple-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {api.pricing}
          </span>
        </div>
        <p className="mt-2 text-gray-600">{api.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {api.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <span>{api.type}</span>
          <span>{api.country}</span>
        </div>
        <a
          href={api.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          Visit Documentation
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}