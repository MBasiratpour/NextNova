  import { useState } from 'react';
import { motion } from 'framer-motion';
import { allProducts } from '../data/products';
import { Product } from '../types';

const Compare = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<'all' | 'drone' | 'vr'>('all');

  const filteredProducts = allProducts.filter(product => 
    category === 'all' || product.category === category
  );

  const addToComparison = (product: Product) => {
    if (selectedProducts.length < 3 && !selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const removeFromComparison = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };

  const clearComparison = () => {
    setSelectedProducts([]);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F1A3A] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Product Comparison
          </h1>
          <p className="text-lg text-gray-600 dark:text-[#C0C0C0] max-w-2xl mx-auto">
            Compare up to 3 products side by side to make the best decision for your needs
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="flex bg-gray-100 dark:bg-[#1A2B5A] rounded-lg p-1">
            {[
              { value: 'all', label: 'All Products' },
              { value: 'drone', label: 'Drones' },
              { value: 'vr', label: 'VR Glasses' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setCategory(option.value as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  category === option.value
                    ? 'bg-[#00F5FF] text-[#0F1A3A] shadow-sm'
                    : 'text-gray-600 dark:text-[#C0C0C0] hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        {selectedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 bg-white dark:bg-[#1A2B5A] rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Comparison ({selectedProducts.length}/3)
                </h2>
                <button
                  onClick={clearComparison}
                  className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium"
                >
                  Clear All
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                      Product
                    </th>
                    {selectedProducts.map((product) => (
                      <th key={product.id} className="text-center p-4 min-w-64">
                        <div className="space-y-2">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-lg mx-auto"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-[#C0C0C0]">
                              {product.brand}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromComparison(product.id)}
                            className="text-red-600 hover:text-red-700 dark:text-red-400 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Price */}
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-medium text-gray-900 dark:text-white">Price</td>
                    {selectedProducts.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        <span className="text-2xl font-bold text-[#00F5FF]">
                          ${product.price}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Rating */}
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-medium text-gray-900 dark:text-white">Rating</td>
                    {selectedProducts.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        <div className="flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#00F5FF] fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          <span className="ml-1 font-medium text-gray-900 dark:text-white">
                            {product.rating}
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Specifications */}
                  {Object.keys(selectedProducts[0]?.specifications || {}).map((spec) => (
                    <tr key={spec} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-4 font-medium text-gray-900 dark:text-white">{spec}</td>
                      {selectedProducts.map((product) => (
                        <td key={product.id} className="p-4 text-center text-gray-700 dark:text-[#C0C0C0]">
                          {product.specifications[spec] || 'N/A'}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Features */}
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-medium text-gray-900 dark:text-white">Key Features</td>
                    {selectedProducts.map((product) => (
                      <td key={product.id} className="p-4">
                        <div className="space-y-1">
                          {product.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="text-xs bg-[#00F5FF]/20 text-[#00F5FF] px-2 py-1 rounded"
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Product Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {selectedProducts.length === 0 
              ? 'Select products to compare' 
              : `Add more products (${selectedProducts.length}/3)`
            }
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => {
              const isSelected = selectedProducts.find(p => p.id === product.id);
              const canAdd = selectedProducts.length < 3;

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`bg-white dark:bg-[#1A2B5A] rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                    isSelected 
                      ? 'ring-2 ring-[#00F5FF]' 
                      : 'hover:shadow-xl'
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-[#C0C0C0] mb-2">
                      {product.brand}
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-[#00F5FF]">
                        ${product.price}
                      </span>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-[#00F5FF] fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="ml-1 text-sm text-gray-600 dark:text-[#C0C0C0]">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    
                    {isSelected ? (
                      <button
                        onClick={() => removeFromComparison(product.id)}
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
                      >
                        Remove from Comparison
                      </button>
                    ) : (
                      <button
                        onClick={() => addToComparison(product)}
                        disabled={!canAdd}
                        className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          canAdd
                            ? 'bg-[#00F5FF] text-[#0F1A3A] hover:bg-[#00D4E6]'
                            : 'bg-[#C0C0C0] text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {canAdd ? 'Add to Compare' : 'Max 3 Products'}
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Help Section */}
        {selectedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-8 bg-gray-50 dark:bg-[#1A2B5A] rounded-2xl"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              How to Use the Comparison Tool
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 dark:text-[#C0C0C0]">
              <div>
                <div className="text-2xl mb-2">1️⃣</div>
                <p>Select up to 3 products you want to compare</p>
              </div>
              <div>
                <div className="text-2xl mb-2">2️⃣</div>
                <p>View detailed specifications side by side</p>
              </div>
              <div>
                <div className="text-2xl mb-2">3️⃣</div>
                <p>Make an informed decision based on your needs</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Compare;