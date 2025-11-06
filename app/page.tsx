'use client';

import { useEffect, useState } from 'react';
import { Activity, Users, Heart, TrendingUp, MapPin } from 'lucide-react';

export default function Home() {
  const [stats, setStats] = useState({
    beneficiaries: 0,
    abhaNumbers: 0,
    patientsTreated: 0,
    states: 0,
  });

  useEffect(() => {
    // Animate numbers on load
    const targetStats = {
      beneficiaries: 7307000000,
      abhaNumbers: 1178000000,
      patientsTreated: 753000000,
      states: 31,
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        beneficiaries: Math.floor(targetStats.beneficiaries * progress),
        abhaNumbers: Math.floor(targetStats.abhaNumbers * progress),
        patientsTreated: Math.floor(targetStats.patientsTreated * progress),
        states: Math.floor(targetStats.states * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 10000000) {
      return `${(num / 10000000).toFixed(2)} Crore`;
    }
    return num.toLocaleString('en-IN');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
                <Activity className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">
                  National Programme for Prevention and Control of NCDs
                </h1>
                <p className="text-sm text-gray-600">Ministry of Health and Family Welfare, Government of India</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 h-12 items-center">
            <a href="#" className="hover:text-orange-300 transition-colors font-semibold">Home</a>
            <a href="#" className="hover:text-orange-300 transition-colors">About Us</a>
            <a href="#" className="hover:text-orange-300 transition-colors">Login</a>
            <a href="#" className="hover:text-orange-300 transition-colors">Media Gallery</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Portal Statistics
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive tracking of Non-Communicable Disease management across India
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Beneficiaries */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-12 h-12 text-blue-500" />
              <div className="bg-blue-100 rounded-full p-2">
                <TrendingUp className="w-6 h-6 text-blue-700" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {formatNumber(stats.beneficiaries)}
            </h3>
            <p className="text-gray-600 font-medium">Beneficiaries Enrolled</p>
          </div>

          {/* ABHA Numbers */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-12 h-12 text-green-500" />
              <div className="bg-green-100 rounded-full p-2">
                <TrendingUp className="w-6 h-6 text-green-700" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {formatNumber(stats.abhaNumbers)}
            </h3>
            <p className="text-gray-600 font-medium">ABHA Numbers Generated</p>
          </div>

          {/* Patients Treated */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <Heart className="w-12 h-12 text-red-500" />
              <div className="bg-red-100 rounded-full p-2">
                <TrendingUp className="w-6 h-6 text-red-700" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {formatNumber(stats.patientsTreated)}
            </h3>
            <p className="text-gray-600 font-medium">Patients Treated (HTN/DM)</p>
          </div>

          {/* States */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <MapPin className="w-12 h-12 text-orange-500" />
              <div className="bg-orange-100 rounded-full p-2">
                <TrendingUp className="w-6 h-6 text-orange-700" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {stats.states}
            </h3>
            <p className="text-gray-600 font-medium">States/UTs Using Portal</p>
          </div>
        </div>

        {/* Portal Adoption Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Portal Adoption Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <p className="text-4xl font-bold text-blue-700 mb-2">31</p>
              <p className="text-gray-700">States/UTs Using System</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6">
              <p className="text-4xl font-bold text-yellow-700 mb-2">0</p>
              <p className="text-gray-700">States Currently Onboarding</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
              <p className="text-4xl font-bold text-green-700 mb-2">5</p>
              <p className="text-gray-700">States Sending API Data</p>
            </div>
          </div>
        </div>

        {/* About NCDs Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl shadow-lg p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-4">About Non-Communicable Diseases (NCDs)</h3>
          <p className="text-lg leading-relaxed mb-4">
            Non-communicable diseases (NCDs), also known as chronic diseases, are medical conditions or diseases
            that are not caused by infectious agents. They include cardiovascular diseases, diabetes, cancer,
            chronic respiratory diseases, and mental health conditions.
          </p>
          <p className="text-lg leading-relaxed">
            The National Programme for Prevention and Control of NCDs aims to prevent and control common NCDs
            through awareness, early diagnosis, management, and capacity building at various levels of healthcare.
          </p>
        </div>

        {/* Key Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Hypertension</h4>
            <p className="text-gray-600">
              Screening, diagnosis, and management of high blood pressure to prevent cardiovascular complications.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Activity className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Diabetes</h4>
            <p className="text-gray-600">
              Early detection and management of diabetes mellitus to reduce complications and improve quality of life.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Prevention</h4>
            <p className="text-gray-600">
              Community-based awareness programs focusing on lifestyle modifications and risk factor management.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">National Health Mission</p>
            <p className="text-sm text-blue-200">Ministry of Health and Family Welfare, Government of India</p>
            <p className="text-xs text-blue-300 mt-4">Last Updated: 27-08-2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
