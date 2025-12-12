import React from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center mb-8 pt-6">
      <div className="flex items-center justify-center mb-4">
        <Leaf className="h-10 w-10 text-green-600 mr-3" />
        <h1 className="text-4xl font-bold text-gray-800">NaturSupps</h1>
      </div>
      <p className="text-gray-600 text-lg">
        Entdecke natürliche Alternativen zu deinen Supplements
      </p>
    </header>
  );
};

export default Header;
