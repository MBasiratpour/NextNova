  import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { vrGlasses } from '../data/products';

const VRGlasses = () => {
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'name'>('rating');
  const [filterBy, setFilterBy] = useState<'all' | 'budget' | 'premium'>('all');

  const filteredAndSortedVR = vrGlasses
    .filter(vr => {
      if (filterBy === 'budget') return vr.price < 600;
      if (filterBy === 'premium') return vr.price >= 600;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

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
            VR Glasses & Headsets
          </h1>
          <p className="text-lg text-gray-600 dark:text-[#C0C0C0] max-w-2xl mx-auto">
            Immerse yourself in virtual worlds with cutting-edge VR technology, high-resolution displays, and advanced tracking systems
          </p>
        </motion.div>

        {/* Filters and Sorting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8 p-6 bg-gray-50 dark:bg-[#1A2B5A] rounded-xl"
        >
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-[#C0C0C0] mb-2">
              Filter by Price
            </label>
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value as any)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#0F1A3A] text-gray-900 dark:text-white"
            >
              <option value="all">All VR Headsets</option>
              <option value="budget">Budget (&lt; $600)</option>
              <option value="premium">Premium ($600+)</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-[#C0C0C0] mb-2">
              Sort by
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#0F1A3A] text-gray-900 dark:text-white"
            >
              <option value="rating">Rating</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </div>
        </motion.div>

        {/* VR Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedVR.map((vr, index) => (
            <motion.div
              key={vr.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-[#1A2B5A] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={vr.image}
                  alt={vr.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-[#0F1A3A] px-2 py-1 rounded-full">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-[#00F5FF] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
                      {vr.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {vr.name}
                  </h3>
                  <span className="text-2xl font-bold text-[#00F5FF]">
                    ${vr.price}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-[#C0C0C0] mb-4 text-sm">
                  {vr.description}
                </p>

                {/* Key Specs */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-[#C0C0C0]">Resolution:</span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {vr.specifications['Display Resolution']}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-[#C0C0C0]">Refresh Rate:</span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {vr.specifications['Refresh Rate']}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-[#C0C0C0]">FOV:</span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {vr.specifications['Field of View']}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {vr.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#00F5FF]/20 text-[#00F5FF] text-xs rounded-full"
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
                  <Link
                    to={`/vr-glasses/${vr.id}`}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-accent-silver rounded-lg hover:bg-gray-50 dark:hover:bg-primary-dark transition-colors duration-200 text-sm"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VR Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: "🎮",
              title: "Gaming",
              description: "Immersive gaming experiences with room-scale tracking"
            },
            {
              icon: "🎬",
              title: "Entertainment",
              description: "Watch movies and videos in virtual cinemas"
            },
            {
              icon: "🏢",
              title: "Professional",
              description: "Training, education, and business applications"
            }
          ].map((use, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 dark:bg-[#1A2B5A] rounded-xl"
            >
              <div className="text-4xl mb-4">{use.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {use.title}
              </h3>
              <p className="text-gray-600 dark:text-[#C0C0C0]">
                {use.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-[#0F1A3A] to-[#00F5FF] rounded-2xl text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Enter Virtual Reality?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Compare VR headsets to find the perfect match for your needs
          </p>
          <Link
            to="/compare"
            className="bg-white text-[#0F1A3A] px-8 py-3 rounded-lg font-semibold hover:bg-[#C0C0C0] transition-colors duration-200 inline-block"
          >
            Compare VR Headsets
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default VRGlasses;