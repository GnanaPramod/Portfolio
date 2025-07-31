import React from 'react';
// Import images from the local folder
import image1 from './p1.jpg'; // Update the filename if needed
import image2 from './p2.jpg'; // Update the filename if needed
import image3 from './p3.jpg'; // Update the filename if needed
import image4 from './p4.jpg';
import image5 from './p5.jpg';

const AchievementsPage = () => {
  const achievements = [
    {
      title: "🎹 Conducted Octavize Workshop",
      date: "June 2024",
      description: "Led a successful piano workshop at NIT Andhra Pradesh, where I explained music theory and demonstrated advanced keyboard techniques.",
      image: image5,
    },
    {
      title: "🎵 Joint Secretary & Executive Member at Music Club 'Dhwani' – NIT AP",
      date: "2021–2024",
      description: "As a Joint Secretary and Executive Member, I organized multiple music events, workshops, and performances, including managing the club’s logistics and activities.",
      image: image3,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Achievements
      </h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.05] ${
                index % 2 === 0 ? 'bg-white text-black' : 'bg-black text-white'
              }`}
            >
              {/* Title */}
              <h2 className="text-2xl font-semibold mb-2 text-center">
                {achievement.title}
              </h2>

              {/* Date */}
              <p className="text-sm mb-4 text-center">
                {achievement.date}
              </p>

              {/* Content and Images placed side-by-side or stacked */}
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                {/* Image */}
                {achievement.image && (
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="rounded-lg shadow-md w-full md:w-64 h-auto object-contain"
                  />
                )}

                {/* Description */}
                <div className="flex-1 text-center md:text-left">
                  <p>{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
