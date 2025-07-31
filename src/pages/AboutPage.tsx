import React, { useEffect, useRef } from 'react';
import { Music, Laptop, GraduationCap, Trophy, Lightbulb, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      observer.observe(item);
      item.classList.add('opacity-0');
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const playNote = (index: number) => {
    const notes = ['C4', 'D4', 'E4', 'F4', 'G4'];
    const note = notes[index % notes.length];

    audio.volume = 0.2;
    audio.play().catch(e => console.log('Audio play error:', e));
  };

  const timelineItems = [
    {
      year: '2019-2020',
      title: 'Musical Foundations',
      description: 'Began my journey in music, mastering piano basics and performing while nurturing a deep curiosity for technology.',
      icon: <Music />,
      color: 'bg-blue-500',
    },
    {
      year: '2020-2021',
      title: 'Software Foundations',
      description: 'Built early full-stack projects and strengthened core programming skills, balancing music and code during my B.Tech.',
      icon: <Laptop />,
      color: 'bg-green-500',
    },
    {
      year: '2023',
      title: 'Machine Learning & Research',
      description: 'Completed an ML internship at NIT Trichy and authored a paper on Diabetes Diagnosis with 81% accuracy.',
      icon: <GraduationCap />,
      color: 'bg-amber-500',
    },
    {
      year: '2021-2024',
      title: 'Leadership & Innovation',
      description: 'Organized tech events and piano workshops (like Octavize), while leading the Music Club as Joint Secretary.',
      icon: <Trophy />,
      color: 'bg-red-500',
    },
    {
      year: '2025-Present',
      title: 'Future-Focused Growth',
      description: 'Balancing cloud, full-stack, and ML development while working toward launching a groundbreaking tech startup. Also striving to become a world-class software engineer at a top tech company like Google, OpenAI, or Microsoft.',
      icon: <Lightbulb />,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Code Meets Keys: My Story
          </h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
  A passionate developer and pianist fusing full-stack development, machine learning, cloud skills and music into experiences that inspire and innovate. Currently striving to become a
  <b className="font-bold text-amber-600 dark:text-amber-400"> Software Engineer </b> 
  to bring my skills and creativity to impactful projects.
</p>




        </div>

  {/* Piano Keys Divider */}
<div className="flex justify-center mb-12 relative w-[280px] h-20 mx-auto">
  {/* White keys */}
  {Array.from({ length: 7 }).map((_, i) => (
    <div
      key={`white-${i}`}
      className="bg-white dark:bg-slate-300 border border-slate-400 dark:border-slate-700 h-full w-[40px] z-0 relative"
    />
  ))}

  {/* Black keys (positions: 0.7, 1.7, skip 2, 3.7, 4.7, 5.7) */}
  {[
    { id: 'C#', pos: 0.7 },
    { id: 'D#', pos: 1.7 },
    { id: 'F#', pos: 3.7 },
    { id: 'G#', pos: 4.7 },
    { id: 'A#', pos: 5.7 },
  ].map(({ id, pos }, i) => (
    <div
      key={`black-${i}`}
      className="absolute top-0 w-[25px] h-[60%] bg-black z-10 rounded-b"
      style={{ left: `${pos * 40}px` }}
    />
  ))}
</div>


        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 to-amber-600" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`timeline-item flex transition-opacity duration-700 ease-out ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                data-index={index}
              >
                <div className={`w-1/2 px-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="mb-2 inline-block font-serif text-amber-600 dark:text-amber-400 font-bold">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>

                <div className="z-10 flex items-center justify-center">
                  <div
                    className={`${item.color} text-white rounded-full p-3 shadow-lg`}
                    onMouseEnter={() => playNote(index)}
                  >
                    {item.icon}
                  </div>
                </div>

                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Octavize Workshop Highlight */}
        <div className="mt-24 bg-amber-50 dark:bg-slate-900 rounded-lg shadow-md p-8 border border-amber-200 dark:border-amber-500">
          <h2 className="text-2xl font-bold flex items-center mb-4 text-amber-700 dark:text-amber-300">
            <Star className="mr-2" /> Spotlight: Octavize Workshop
          </h2>
          <p className="text-slate-700 dark:text-slate-300">
            Led a successful piano workshop – <strong>Octavize</strong> – where I taught music theory and keyboard skills to aspiring musicians, blending my passion for music with mentorship and leadership.
          </p>
        </div>

{/* Skills Section */}
<div className="mt-24 bg-amber-50 dark:bg-slate-900 rounded-lg shadow-md p-8 border border-amber-200 dark:border-amber-500">
  <h2 className="font-serif text-3xl font-bold mb-8 text-center text-amber-700 dark:text-amber-300">
    Technical Skills & Tools
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
    <div>
      <div className="flex flex-wrap gap-4 justify-center">
        {[
          'Java', 'React', 'Node.js', 'Python', 'RESTful APIs', 'SQL', 'MongoDB', 'Express.js',
          'AWS', 'Machine Learning', 'Data Structures and Algorithms', 'OS', 'DBMS', 'OOPS'
        ].map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 
                      hover:bg-amber-500 hover:text-white transition-colors duration-300"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default AboutPage;
