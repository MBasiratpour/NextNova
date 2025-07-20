import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { vrGlasses } from '../data/products';

const VRDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vr = vrGlasses.find(v => v.id === id);

  if (!vr) {
    return (
      <div className="min-h-screen bg-white dark:bg-primary-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            VR Headset Not Found
          </h1>
          <Link
            to="/vr-glasses"
            className="bg-primary-light text-primary-dark px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            Back to VR Glasses
          </Link>
        </div>
      </div>
    );
  }

  const relatedVR = vrGlasses.filter(v => v.id !== vr.id).slice(0, 3);

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
          <Link to="/vr-glasses" className="text-gray-500 dark:text-accent-silver hover:text-primary-light">
            VR Glasses
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 dark:text-white font-medium">{vr.name}</span>
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
          Back to VR Glasses
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
                src={vr.image}
                alt={vr.name}
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
                  {vr.brand}
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-accent-silver bg-gray-100 dark:bg-primary-dark/50 px-3 py-1 rounded-full">
                  {vr.category}
                </span>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-primary-light fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
                    {vr.rating} / 5.0
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {vr.name}
              </h1>
              <p className="text-sm text-gray-500 dark:text-accent-silver mb-4">
                Model: {vr.model} • Released: {new Date(vr.releaseDate).toLocaleDateString()}
              </p>
              <p className="text-lg text-gray-600 dark:text-accent-silver">
                {vr.description}
              </p>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-4xl font-bold text-primary-light">
                    ${vr.priceUSD}
                  </span>
                  <span className="text-lg text-gray-500 dark:text-accent-silver ml-2">
                    / €{vr.priceEUR}
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
                  {vr.useCase.map((use, index) => (
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
                  <div className="text-sm text-gray-500 dark:text-accent-silver">Resolution</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{vr.specifications['Display Resolution']}</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-primary-dark/50 rounded-lg border dark:border-primary-light/20">
                  <div className="text-sm text-gray-500 dark:text-accent-silver">Refresh Rate</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{vr.specifications['Refresh Rate']}</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-primary-dark/50 rounded-lg border dark:border-primary-light/20">
                  <div className="text-sm text-gray-500 dark:text-accent-silver">Field of View</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{vr.specifications['Field of View']}</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-primary-dark/50 rounded-lg border dark:border-primary-light/20">
                  <div className="text-sm text-gray-500 dark:text-accent-silver">Weight</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{vr.weight}</div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Features
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {vr.keyFeatures.map((feature, index) => (
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

            {/* VR Experience Types */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Experience Types
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: "🎮", label: "Gaming", desc: "Immersive VR games" },
                  { icon: "🎬", label: "Entertainment", desc: "Movies & videos" },
                  { icon: "🏢", label: "Professional", desc: "Work & training" }
                ].map((use, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-50 dark:bg-primary-dark/50 rounded-lg border dark:border-primary-light/20"
                  >
                    <div className="text-2xl mb-2">{use.icon}</div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                      {use.label}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-accent-silver">
                      {use.desc}
                    </div>
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
                {Object.entries(vr.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                    <span className="font-medium text-gray-900 dark:text-white">{key}</span>
                    <span className="text-gray-600 dark:text-accent-silver text-right">{value}</span>
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
                    {vr.connectivity.map((conn, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-light/20 text-primary-light text-sm rounded-full font-medium"
                      >
                        {conn}
                      </span>
                    ))}
                  </div>
                  {vr.controllerType && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-sm font-medium text-gray-700 dark:text-accent-silver">Controller: </span>
                      <span className="text-sm text-gray-900 dark:text-white">{vr.controllerType}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* OS Compatibility */}
              <div className="bg-white dark:bg-primary-dark/50 rounded-2xl shadow-lg overflow-hidden border dark:border-primary-light/20">
                <div className="p-6 bg-gray-50 dark:bg-primary-dark/30 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">OS Compatibility</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {vr.osCompatibility.map((os, index) => (
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

              {/* Storage Options */}
              <div className="bg-white dark:bg-primary-dark/50 rounded-2xl shadow-lg overflow-hidden border dark:border-primary-light/20">
                <div className="p-6 bg-gray-50 dark:bg-primary-dark/30 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Storage</h3>
                </div>
                <div className="p-6">
                  <span className="text-gray-900 dark:text-white font-medium">{vr.storage}</span>
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
                  {vr.accessories.map((accessory, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-light rounded-full mr-3"></div>
                      <span className="text-sm text-gray-900 dark:text-white">{accessory}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* App Support */}
            {vr.appSupport && (
              <div className="bg-white dark:bg-primary-dark/50 rounded-2xl shadow-lg overflow-hidden border dark:border-primary-light/20">
                <div className="p-6 bg-gray-50 dark:bg-primary-dark/30 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Supported Platforms</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {vr.appSupport.map((app, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-light/20 text-primary-light text-sm rounded-full font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
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
              Related VR Headsets
            </h2>
            <Link
              to="/vr-glasses"
              className="text-primary-light hover:opacity-80 font-medium transition-opacity duration-200"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedVR.map((relatedVRItem, index) => (
              <motion.div
                key={relatedVRItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-dark/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border dark:border-primary-light/20"
              >
                <Link to={`/vr-glasses/${relatedVRItem.id}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedVRItem.image}
                      alt={relatedVRItem.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white dark:bg-primary-dark px-2 py-1 rounded-full">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-primary-light fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
                          {relatedVRItem.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {relatedVRItem.name}
                    </h3>
                    <p className="text-gray-600 dark:text-accent-silver text-sm mb-4">
                      {relatedVRItem.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary-light">
                        ${relatedVRItem.price}
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

export default VRDetail;