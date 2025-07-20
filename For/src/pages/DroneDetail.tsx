import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { drones } from '../data/products';

const DroneDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const drone = drones.find(d => d.id === id);

  if (!drone) {
    return (
      <div className="min-h-screen bg-white dark:bg-primary-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Drone Not Found
          </h1>
          <Link
            to="/drones"
            className="bg-primary-light text-primary-dark px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            Back to Drones
          </Link>
        </div>
      </div>
    );
  }

  const relatedDrones = drones.filter(d => d.id !== drone.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2 text-sm mb-8"
        >
          <Link to="/" className="text-gray-500 dark:text-accent-silver hover:text-primary-light">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link to="/drones" className="text-gray-500 dark:text-accent-silver hover:text-primary-light">
            Drones
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 dark:text-white font-medium">{drone.name}</span>
        </motion.nav>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 dark:text-accent-silver hover:text-primary-light mb-8 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Drones
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="aspect-square bg-gray-100 dark:bg-primary-dark/50 rounded-2xl overflow-hidden border dark:border-primary-light/20">
              <img
                src={drone.image}
                alt={drone.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-gray-500 dark:text-accent-silver bg-gray-100 dark:bg-primary-dark/50 px-3 py-1 rounded-full">
                  {drone.brand}
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-accent-silver bg-gray-100 dark:bg-primary-dark/50 px-3 py-1 rounded-full">
                  {drone.category}
                </span>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-primary-light fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
                    {drone.rating} / 5.0
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {drone.name}
              </h1>
              <p className="text-sm text-gray-500 dark:text-accent-silver mb-4">
                Model: {drone.model} • Released: {new Date(drone.releaseDate).toLocaleDateString()}
              </p>
              <p className="text-lg text-gray-600 dark:text-accent-silver">
                {drone.description}
              </p>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-4xl font-bold text-primary-light">
                    ${drone.priceUSD}
                  </span>
                  <span className="text-lg text-gray-500 dark:text-accent-silver ml-2">
                    / €{drone.priceEUR}
                  </span>
                </div>
                <div className="flex gap-3">
                  <Link
                    to="/compare"
                    className="bg-gray-100 dark:bg-primary-dark/50 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-primary-dark transition-colors duration-200 border dark:border-primary-light/20"
                  >
                    Compare
                  </Link>
                  <button className="bg-primary-light text-primary-dark px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 shadow-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
              
              {/* Use Cases */}
              <div>
                <span className="text-sm font-medium text-gray-700 dark:text-accent-silver">Perfect for: </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {drone.useCase.map((use, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-light/20 text-primary-light text-sm rounded-full font-medium"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Specs */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quick Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-50 dark:bg-primary-dark/50 rounded-lg border dark:border-primary-light/20">
                  <div className="text-sm text-gray-500 dark:text-accent-silver">Camera</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{drone.camera}</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-primary-dark/50 rounded-lg border dark:border-primary-light/20">
                  <div className="text-sm text-gray-500 dark:text-accent-silver">Flight Time</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{drone.batteryLife}</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-primary-dark/50 rounded-lg border dark:border-primary-light/20">
                  <div className="text-sm text-gray-500 dark:text-accent-silver">Max Range</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{drone.maxRange}</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-primary-dark/50 rounded-lg border dark:border-primary-light/20">
                  <div className="text-sm text-gray-500 dark:text-accent-silver">Weight</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{drone.weight}</div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Features
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {drone.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 dark:bg-primary-dark/50 rounded-lg border dark:border-primary-light/20"
                  >
                    <div className="w-2 h-2 bg-primary-light rounded-full mr-3"></div>
                    <span className="text-sm text-gray-900 dark:text-white font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Complete Specifications
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Specs */}
            <div className="bg-white dark:bg-primary-dark/50 rounded-2xl shadow-lg overflow-hidden border dark:border-primary-light/20">
              <div className="p-6 bg-gray-50 dark:bg-primary-dark/30 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Technical Specifications</h3>
              </div>
              <div className="p-6 space-y-4">
                {Object.entries(drone.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                    <span className="font-medium text-gray-900 dark:text-white">{key}</span>
                    <span className="text-gray-600 dark:text-accent-silver">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connectivity & Compatibility */}
            <div className="space-y-6">
              {/* Connectivity */}
              <div className="bg-white dark:bg-primary-dark/50 rounded-2xl shadow-lg overflow-hidden border dark:border-primary-light/20">
                <div className="p-6 bg-gray-50 dark:bg-primary-dark/30 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Connectivity</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {drone.connectivity.map((conn, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-light/20 text-primary-light text-sm rounded-full font-medium"
                      >
                        {conn}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sensors */}
              {drone.sensors && (
                <div className="bg-white dark:bg-primary-dark/50 rounded-2xl shadow-lg overflow-hidden border dark:border-primary-light/20">
                  <div className="p-6 bg-gray-50 dark:bg-primary-dark/30 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sensors</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-2">
                      {drone.sensors.map((sensor, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-light rounded-full mr-3"></div>
                          <span className="text-sm text-gray-900 dark:text-white">{sensor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* OS Compatibility */}
              <div className="bg-white dark:bg-primary-dark/50 rounded-2xl shadow-lg overflow-hidden border dark:border-primary-light/20">
                <div className="p-6 bg-gray-50 dark:bg-primary-dark/30 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">OS Compatibility</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {drone.osCompatibility.map((os, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-primary-dark text-gray-700 dark:text-accent-silver text-sm rounded-full"
                      >
                        {os}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Accessories & Apps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Included Accessories */}
            <div className="bg-white dark:bg-primary-dark/50 rounded-2xl shadow-lg overflow-hidden border dark:border-primary-light/20">
              <div className="p-6 bg-gray-50 dark:bg-primary-dark/30 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Included Accessories</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  {drone.accessories.map((accessory, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-light rounded-full mr-3"></div>
                      <span className="text-sm text-gray-900 dark:text-white">{accessory}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* App Support */}
            {drone.appSupport && (
              <div className="bg-white dark:bg-primary-dark/50 rounded-2xl shadow-lg overflow-hidden border dark:border-primary-light/20">
                <div className="p-6 bg-gray-50 dark:bg-primary-dark/30 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Supported Apps</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {drone.appSupport.map((app, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-light/20 text-primary-light text-sm rounded-full font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                  {drone.controllerType && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-sm font-medium text-gray-700 dark:text-accent-silver">Controller: </span>
                      <span className="text-sm text-gray-900 dark:text-white">{drone.controllerType}</span>
                    </div>
                  )}
                  {drone.storage && (
                    <div className="mt-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-accent-silver">Storage: </span>
                      <span className="text-sm text-gray-900 dark:text-white">{drone.storage}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Related Drones
            </h2>
            <Link
              to="/drones"
              className="text-primary-light hover:opacity-80 font-medium transition-opacity duration-200"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedDrones.map((relatedDrone, index) => (
              <motion.div
                key={relatedDrone.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-dark/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border dark:border-primary-light/20"
              >
                <Link to={`/drones/${relatedDrone.id}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedDrone.image}
                      alt={relatedDrone.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white dark:bg-primary-dark px-2 py-1 rounded-full">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-primary-light fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
                          {relatedDrone.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {relatedDrone.name}
                    </h3>
                    <p className="text-gray-600 dark:text-accent-silver text-sm mb-4">
                      {relatedDrone.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary-light">
                        ${relatedDrone.price}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-accent-silver">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DroneDetail;