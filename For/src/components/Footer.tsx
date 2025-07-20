const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NN</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                NextNova
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Your ultimate destination for comparing the latest drones and VR glasses. 
              Find the perfect tech gear that matches your needs and budget.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/drones" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Drones
                </a>
              </li>
              <li>
                <a href="/vr-glasses" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  VR Glasses
                </a>
              </li>
              <li>
                <a href="/compare" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Compare
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                support@nextnova.com
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                1-800-NEXTNOVA
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            9 2024 NextNova. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;