'use client';

import React, { useState } from 'react';

interface ApkSpec {
  minSdk: string;
  targetSdk: string;
  arch: string;
}

interface ApkItem {
  id: string;
  title: string;
  version: string;
  size: string;
  description: string;
  downloadUrl: string;
  specs: ApkSpec;
}

const APK_DATA: ApkItem[] = [
  {
    id: 'soothe-laundry',
    title: 'Soothe Laundry App',
    version: 'v1.0.0',
    size: 'EAS Build',
    description: 'On-demand laundry management app built with React Native, Expo Router, and NestJS.',
    downloadUrl: 'https://expo.dev/accounts/gamegod/projects/s-smoothe/builds/0e9c5dc8-359a-44c7-a8ff-5f9671d4033e',
    specs: { minSdk: 'Android 8.0', targetSdk: 'Android 14', arch: 'arm64-v8a' }
  },
  {
    id: 'biosensor-hub',
    title: 'Biosensor Telemetry Hub',
    version: 'v1.0.0',
    size: '42.5 MB',
    description: 'Cloud-based biosensor tracking system integrated with WebSockets & Flutter client.',
    downloadUrl: '/biosensor-production-demo.apk',
    specs: { minSdk: 'Android 8.0', targetSdk: 'Android 14', arch: 'arm64-v8a' }
  },
  {
    id: 'running-pals',
    title: 'RunningPal',
    version: 'v1.0.0',
    size: 'EAS Build',
    description: 'Real-time social running mobile application featuring map location tracking.',
    downloadUrl: 'https://expo.dev/accounts/gamegod/projects/runningpals/builds/d3610d7b-cf4f-4412-85e9-7b2a59e2b607',
    specs: { minSdk: 'Android 8.0', targetSdk: 'Android 14', arch: 'arm64-v8a' }
  }
];

export const ApkCarouselSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section id="apks" className="bg-[#1A1412] text-[#F6F3EE] py-16 px-6 sm:px-12 rounded-3xl my-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D97706] font-semibold">
              Direct Android APK Releases
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-1">
              Test Live Builds
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveIdx((prev) => (prev - 1 + APK_DATA.length) % APK_DATA.length)}
              className="p-3 bg-[#2C1D16] hover:bg-[#3D291F] rounded-full transition border border-[#3D291F]"
              aria-label="Previous APK"
            >
              &#8592;
            </button>
            <button
              onClick={() => setActiveIdx((prev) => (prev + 1) % APK_DATA.length)}
              className="p-3 bg-[#2C1D16] hover:bg-[#3D291F] rounded-full transition border border-[#3D291F]"
              aria-label="Next APK"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {APK_DATA.map((apk, idx) => {
            const isExternal = apk.downloadUrl.startsWith('http');
            const isDisabled = apk.downloadUrl === '#';

            return (
              <div
                key={apk.id}
                className={`p-6 bg-[#2C1D16] border border-[#3D291F] rounded-2xl flex flex-col justify-between transition-all ${
                  idx === activeIdx ? 'ring-2 ring-[#D97706]' : 'opacity-70'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{apk.title}</h3>
                    <span className="text-xs bg-[#8C4A27]/40 text-[#D97706] px-2.5 py-1 rounded-md font-mono">
                      {apk.version}
                    </span>
                  </div>
                  <p className="text-sm text-[#D9D0C3] mb-6">{apk.description}</p>
                </div>

                {isDisabled ? (
                  <button
                    disabled
                    className="w-full text-center py-3 bg-[#3D291F] text-gray-400 font-medium rounded-xl cursor-not-allowed"
                  >
                    Build Unavailable
                  </button>
                ) : (
                  <a
                    href={apk.downloadUrl}
                    target={isExternal ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    download={!isExternal ? true : undefined}
                    className="w-full text-center py-3 bg-[#8C4A27] hover:bg-[#D97706] text-white font-medium rounded-xl transition block"
                  >
                    Download APK ({apk.size})
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};