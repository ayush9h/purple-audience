import React, { useState } from 'react';
import '../styles/medmusic.css'
const MusicTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    {
      title: 'Mindfulness Meditation',
      musicList: [
        { id: 1, title: 'Spiegel im Spiegel', writer: 'Arvo Pärt' },
        { id: 2, title: 'Radiate', writer: 'Alexis Ffrench' },
        { id: 3, title: 'Det är en ros utsprungen', writer: 'Jan Sandström' },
        { id: 4, title: 'Dream 3 (in the midst of my life)', writer: 'Max Richter' },
      ],
    },
    {
      title: 'Zen Meditation',
      musicList: [
        { id: 1, title: 'Oriental Flute Harmony', writer: 'Zen Music Garden' },
        { id: 2, title: 'Armenian Duduk Flute Music', writer: 'Zen Music Garden' },
        { id: 3, title: 'Om Meditation', writer: 'Zen Music Garden' },
        { id: 4, title: 'Lotus Blossom(Garden Sounds)', writer: 'Zen Music Garden' },
      ],
    },
    {
      title: 'Breath Awareness Meditation',
      musicList: [
        { id: 1, title: 'Vastness: Coherent Breathing Meditation', writer: 'Jenna Citrus' },
        { id: 2, title: 'Ethereal Starlight: Guided Breathwork Track', writer: 'Jenna Citrus' },
        { id: 3, title: 'Opening: Resonance Frequency Breathing', writer: 'Jenna Citrus' },
        { id: 4, title: 'Calm: Guided Breathing Exercises', writer: 'Jenna Citrus' },
      ],
    },
  ];

  const handleTabClick = (index) => {
    setCurrentTab(index);
  };


  const [currentSong, setCurrentSong] = useState(null);

  const handlePlayPause = (songId) => {
    if (currentSong === songId) {
      // Pause the song
      setCurrentSong(null);
    } else {
      // Play the song
      setCurrentSong(songId);
    }
  };

  return (
    <div className="music-tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${currentTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane ${currentTab === index ? 'active' : ''}`}
          >
            {tab.musicList.map((music) => (
              <div key={music.id} className="music">
                <h3>{music.title}</h3>
                <p>{music.writer}</p>
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: currentSong === music.id ? '50%' : '0%',
                    }}
                  ></div>
                </div>
                <button
                  onClick={() => handlePlayPause(music.id)}
                >
                  {currentSong === music.id ? 'PAUSE' : 'PLAY'}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicTabs;
