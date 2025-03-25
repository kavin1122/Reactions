function MoodDisplay({ mood }) {
    const moods = {
        happy:"Keep Smiling! ☺️",
        sad:"It,s okay to be sad sometimes 😔",
        angry:"Take a deep breath! 😡",
        calm:"Feel relax 😌",
    };
    return (
      <div>{moods ? <p>{moods[mood]}</p> : <p> Select Your mood above</p>}</div>
    );
  }
  export default MoodDisplay;