import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto">
                {/* Footer Sections */}
                <div className="flex flex-wrap justify-around">
                    {/* About Amazon */}
                    <div className=" md:w-1/3 mb-4 sm:mb-0">
                        <h3 className="text-lg font-semibold mb-2">About Us</h3>
                        <ul className="text-sm">
                            <li className="mb-1"><a href="#" className="hover:text-white transition duration-300">About Amazon</a></li>
                            <li className="mb-1"><a href="#" className="hover:text-white transition duration-300">Careers</a></li>
                            <li className="mb-1"><a href="#" className="hover:text-white transition duration-300">Press Releases</a></li>
                        </ul>
                    </div>
                    {/* Get to Know Us */}
                    <div className=" md:w-1/3 mb-4 sm:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Get to Know Us</h3>
                        <ul className="text-sm">
                            <li className="mb-1"><a href="#" className="hover:text-white transition duration-300">Connect with Us</a></li>
                            <li className="mb-1"><a href="#" className="hover:text-white transition duration-300">Amazon Cares</a></li>
                            <li className="mb-1"><a href="#" className="hover:text-white transition duration-300">Gift a Smile</a></li>
                        </ul>
                    </div>
                    {/* Make Money with Us */}
                    <div className=" md:w-1/3">
                        <h3 className="text-lg font-semibold mb-2">Make Money with Us</h3>
                        <ul className="text-sm">
                            <li className="mb-1"><a href="#" className="hover:text-white transition duration-300">Sell on Amazon</a></li>
                            <li className="mb-1"><a href="#" className="hover:text-white transition duration-300">Sell under Amazon Accelerator</a></li>
                            <li className="mb-1"><a href="#" className="hover:text-white transition duration-300">Become an Affiliate</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 text-sm">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <p>&copy; 2024 Amazon.com, Inc. or its affiliates</p>
                    <div className="flex mt-2 sm:mt-0">
                        <a href="#" className="mr-4 hover:text-white transition duration-300">Conditions of Use</a>
                        <a href="#" className="mr-4 hover:text-white transition duration-300">Privacy Notice</a>
                        <a href="#" className="hover:text-white transition duration-300">Interest-Based Ads</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
