import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white">SkillSwap</h2>
          <p className="mt-3 text-gray-400 text-sm">
            Connect, share, and grow skills with the community.  
            Learn from others while teaching what you know.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
           
            <li>
              <HashLink smooth to="/#why-this" className="hover:text-white">
                Why This
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#features" className="hover:text-white">
                Features
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#benefits" className="hover:text-white">
                Benefits
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#future-plan" className="hover:text-white">
                Will Add
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#guidelines" className="hover:text-white">
                Guidelines
              </HashLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <p>Email: support@skillswap.com</p>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
