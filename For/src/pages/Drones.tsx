import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { drones } from '../data/products';

const Drones = () => {
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'name'>('rating');
  const [filterBy, setFilterBy] = useState<'all' | 'budget' | 'premium'>('all');

  const filteredAndSortedDrones = drones
    .filter(drone => {
      if (filterBy === 'budget') return drone.price < 800;
      if (filterBy === 'premium') return drone.price >= 800;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen bg-white dark:bg-primary-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Drones
          </h1>
          <p className="text-lg text-gray-600 dark:text-accent-silver max-w-2xl mx-auto">
            Discover the latest drone technology with advanced features, superior camera quality, and intelligent flight modes
          </p>
        </motion.div>

        {/* Filters and Sorting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8 p-6 bg-gray-50 dark:bg-primary-dark/50 rounded-xl border dark:border-primary-light/20"
        >
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-accent-silver mb-2">
              Filter by Price
            </label>
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value as any)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-primary-dark text-gray-900 dark:text-white"
            >
              <option value="all">All Drones</option>
              <option value="budget">Budget (&lt; $800)</option>
              <option value="premium">Premium ($800+)</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-accent-silver mb-2">
              Sort by
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-primary-dark text-gray-900 dark:text-white"
            >
              <option value="rating">Rating</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </div>
        </motion.div>

        {/* Drone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedDrones.map((drone, index) => (
            <motion.div
              key={drone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-primary-dark/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border dark:border-primary-light/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={drone.image}
                  alt={drone.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-primary-dark px-2 py-1 rounded-full">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-primary-light fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
                      {drone.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {drone.name}
                  </h3>
                  <span className="text-2xl font-bold text-primary-light">
                    ${drone.price}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-accent-silver mb-4 text-sm">
                  {drone.description}
                </p>

                {/* Key Specs */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-accent-silver">Flight Time:</span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {drone.specifications['Flight Time']}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-accent-silver">Camera:</span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {drone.specifications['Camera Resolution']}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-accent-silver">Weight:</span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {drone.specifications['Weight']}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {drone.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-light/20 text-primary-light text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    to="/compare"
                    className="flex-1 bg-primary-light text-primary-dark text-center py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200 text-sm font-medium"
                  >
                    Compare
                  </Link>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-accent-silver rounded-lg hover:bg-gray-50 dark:hover:bg-primary-dark transition-colors duration-200 text-sm">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-dark to-primary-light rounded-2xl text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Can't Decide? Compare Side by Side
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Use our comparison tool to see detailed specs and features
          </p>
          <Link
            to="/compare"
            className="bg-white text-primary-dark px-8 py-3 rounded-lg font-semibold hover:bg-accent-silver transition-colors duration-200 inline-block"
          >
            Start Comparing
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Drones;