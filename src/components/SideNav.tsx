import { useState } from 'react';

export default function SideNav() {
  const [activeKey, setActiveKey] = useState('HSG');

  return (
    <nav className="w-48 bg-gray-100 p-4">
      <div
        className={`mb-2 p-2 rounded cursor-pointer ${
          activeKey === 'HSG' ? 'bg-gray-300 font-bold' : 'hover:bg-gray-200'
        }`}
        onClick={() => setActiveKey('HSG')}
      >
        HSG
      </div>
      <div
        className={`mb-2 p-2 rounded cursor-pointer ${
          activeKey === 'TM&Metal Plate' ? 'bg-gray-300 font-bold' : 'hover:bg-gray-200'
        }`}
        onClick={() => setActiveKey('TM&Metal Plate')}
      >
        TM&Metal Plate
      </div>
      <div
        className={`mb-2 p-2 rounded cursor-pointer ${
          activeKey === 'EMP' ? 'bg-gray-300 font-bold' : 'hover:bg-gray-200'
        }`}
        onClick={() => setActiveKey('EMP')}
      >
        EMP
      </div>
    </nav>
  );
}