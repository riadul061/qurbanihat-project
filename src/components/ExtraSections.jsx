import React from 'react';

const ExtraSections = () => {
    return (
        <div>
            <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Qurbani Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Healthy Animal</h3>
            <p className="text-gray-600">
              Always choose a healthy and active animal with no visible illness.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Correct Age</h3>
            <p className="text-gray-600">
              Ensure the animal meets the required Islamic age criteria.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Proper Feeding</h3>
            <p className="text-gray-600">
              Check if the animal was raised with natural and healthy food.
            </p>
          </div>
        </div>
      </section>


      {/* 🐄 TOP BREEDS */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Top Breeds
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          <div className="bg-green-50 p-6 rounded-xl text-center shadow">
            <h3 className="font-bold text-lg">Sahiwal</h3>
            <p className="text-sm text-gray-600 mt-2">
              Premium meat quality & strong جسم
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl text-center shadow">
            <h3 className="font-bold text-lg">Holstein Friesian</h3>
            <p className="text-sm text-gray-600 mt-2">
              Large size imported breed
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl text-center shadow">
            <h3 className="font-bold text-lg">Black Bengal</h3>
            <p className="text-sm text-gray-600 mt-2">
              The most popular goat in Bangladesh
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl text-center shadow">
            <h3 className="font-bold text-lg">Red Chittagong</h3>
            <p className="text-sm text-gray-600 mt-2">
              Strong and disease resistant breed
            </p>
          </div>

        </div>
      </section>

        </div>
    );
};

export default ExtraSections;