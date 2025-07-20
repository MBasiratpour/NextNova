    import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { drones, vrGlasses } from '../data/products';

const Home = () => {
  const featuredDrones = drones.slice(0, 2);
  const featuredVR = vrGlasses.slice(0, 2);

  return (
    <div className="min-h-screen bg-white dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Next Generation
            <span className="block bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
              Tech Innovation
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-accent-silver max-w-3xl mx-auto mb-8">
            Discover the future of technology with our cutting-edge drones and VR glasses. 
            Compare features, specifications, and find the perfect device for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/drones"
              className="bg-primary-light text-primary-dark px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 shadow-lg"
            >
              Explore Drones
            </Link>
            <Link
              to="/vr-glasses"
              className="bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 shadow-lg"
            >
              Discover VR
            </Link>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { number: '50+', label: 'Premium Products' },
            { number: '10K+', label: 'Happy Customers' },
            { number: '24/7', label: 'Expert Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 dark:bg-primary-dark/50 rounded-xl border dark:border-primary-light/20">
              <div className="text-4xl font-bold text-primary-light mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-accent-silver">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-primary-dark/20 backdrop-blur-sm p-4">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/stoh_TUlduM?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&loop=1&playlist=stoh_TUlduM"
                title="NextNova Introduction"
                className="w-full h-full rounded-xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Featured Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Products
          </h2>
          
          {/* Featured Drones */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Top Drones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDrones.map((drone, index) => (
                <motion.div
                  key={drone.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
                        <span className="ml-1 text-gray-600 dark:text-accent-silver">
                          {drone.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {drone.name}
                    </h4>
                    <p className="text-gray-600 dark:text-accent-silver mb-4 text-sm">
                      {drone.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary-light">
                        ${drone.price}
                      </span>
                      <div className="flex gap-2">
                        <Link
                          to="/compare"
                          className="bg-primary-light text-primary-dark px-3 py-1 rounded-lg hover:opacity-90 transition-opacity duration-200 text-sm"
                        >
                          Compare
                        </Link>
                        <Link
                          to={`/drones/${drone.id}`}
                          className="bg-gray-100 dark:bg-primary-dark text-gray-700 dark:text-accent-silver px-3 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-primary-dark/70 transition-colors duration-200 text-sm"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Featured VR */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Top VR Headsets
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVR.map((vr, index) => (
                <motion.div
                  key={vr.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-primary-dark/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border dark:border-primary-light/20"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={vr.image}
                      alt={vr.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white dark:bg-primary-dark px-2 py-1 rounded-full">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-primary-light fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="ml-1 text-gray-600 dark:text-accent-silver">
                          {vr.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {vr.name}
                    </h4>
                    <p className="text-gray-600 dark:text-accent-silver mb-4 text-sm">
                      {vr.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary-light">
                        ${vr.price}
                      </span>
                      <div className="flex gap-2">
                        <Link
                          to="/compare"
                          className="bg-primary-light text-primary-dark px-3 py-1 rounded-lg hover:opacity-90 transition-opacity duration-200 text-sm"
                        >
                          Compare
                        </Link>
                        <Link
                          to={`/vr-glasses/${vr.id}`}
                          className="bg-gray-100 dark:bg-primary-dark text-gray-700 dark:text-accent-silver px-3 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-primary-dark/70 transition-colors duration-200 text-sm"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center p-12 bg-gradient-to-r from-primary-dark to-primary-light rounded-2xl text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore the Future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Compare products and find your perfect tech companion
          </p>
          <Link
            to="/compare"
            className="bg-white text-primary-dark px-8 py-4 rounded-lg font-semibold hover:bg-accent-silver transition-colors duration-200 inline-block shadow-lg"
          >
            Start Comparing Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;