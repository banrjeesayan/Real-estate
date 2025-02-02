/* eslint-disable react/no-unknown-property */
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow dark:bg-purple-200 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <span className="text-purple-700">Mahi</span>
              <span className="text-purple-500">Estate.</span>
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link
                to="/about"
                class="hover:underline me-4 md:me-6 text-slate-700"
              >
                About
              </Link>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6 text-slate-700">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6 text-slate-700">
                Licensing
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sayan-banerjee-62173924a/"
                class="hover:underline text-slate-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-white-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            MahiEstate™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
