import React from 'react';

const ResumePage = () => {
  const resumeViewUrl = 'https://drive.google.com/file/d/1-Rvm3s2b3k0vbF8X_Ja0RDtXO-eTdngz/view?usp=sharing';
  const resumeDownloadUrl = 'https://drive.google.com/uc?export=download&id=1-Rvm3s2b3k0vbF8X_Ja0RDtXO-eTdngz';

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Resume
      </h1>

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-10 text-center max-w-3xl mx-auto">
        <div className="flex justify-center gap-10 mb-8">
          {/* Open Resume Button */}
          <a
            href={resumeViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black border-2 border-black px-8 py-4 rounded-lg shadow-lg hover:bg-black hover:text-white transition duration-300 ease-in-out font-bold text-lg w-40 flex items-center justify-center gap-2"
          >
            🎹 <span>Open</span>
          </a>

          {/* Download Resume Button */}
          <a
            href={resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white border-2 border-black px-8 py-4 rounded-lg shadow-lg hover:bg-white hover:text-black transition duration-300 ease-in-out font-bold text-lg w-40 flex items-center justify-center gap-2"
          >
            🎵 <span>Download</span>
          </a>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Tap the keys to view or download my resume!
        </p>
      </div>
    </div>
  );
};

export default ResumePage;
