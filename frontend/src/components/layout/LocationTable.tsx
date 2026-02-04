import React from 'react';

interface Location {
  orderType: string;
  location: string;
  link: string;
}

interface LocationTableProps {
  locations: Location[];
}

export function LocationTable({ locations }: LocationTableProps) {
  return (
    <div className="w-full max-w-[920px] mx-auto overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 font-metropolis font-bold border-b-2 border-gray-200">
              点单类型
            </th>
            <th className="text-left p-4 font-metropolis font-bold border-b-2 border-gray-200">
              地点
            </th>
          </tr>
        </thead>
        <tbody>
          {locations.map((loc, index) => (
            <tr key={index}>
              <td className="p-4 border-b border-gray-100 font-poppins font-light">
                <a href={loc.link} className="hover:underline text-inherit">
                  {loc.orderType}
                </a>
              </td>
              <td className="p-4 border-b border-gray-100 font-poppins">
                {loc.location}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
