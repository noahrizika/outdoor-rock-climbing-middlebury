import React, { useEffect, useState } from 'react';

const Announcement_Data = ({ baseURL }) => {
  const [announcements, setAnnouncements] = useState([[]]);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseURL}/info`, {
          method: 'GET',
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        if (data.info && data.info.length > 0) {
            const announcementsArray = data.info.map(item => [item.date, item.title, item.body]);
            console.log(announcementsArray);
            setAnnouncements(announcementsArray);
            setData(announcementsArray);
        }
        console.log('announcements above and below');
        console.log(announcements);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.toString());
      }};

    fetchData();
  }, [baseURL]); // Dependency array to ensure useEffect runs only once or when baseURL changes

  return (
    <div>
        {data ? (
            announcements.map((announcement, index) => (
                <div id="yes-data" key={index}>
                    <div>{announcement[0]}</div>
                    <div><h2>{announcement[1]}</h2></div>
                    <div>{announcement[2]}</div>
                    <br />
                </div>
                ))
            ) : (
            <div id="no-data">
                <p>Did not connect to database. The following is a hardcoded example.</p>
                <br />
                <div>7/5/2024 5:44:29 PM</div>
                <div><h2>Our Annual Climbing Competition is Coming Up!!</h2></div>
                <br />
                <div><p>The climbing club at Middlebury College is buzzing with excitement as we gear up to host our annual campus-wide climbing competition. This event is one of the highlights of the year for our club, and it's amazing to see how it brings together students from all over the campus, regardless of their climbing experience. We've been working hard to set up challenging and fun routes that will test everyone's skills and provide a great opportunity for climbers to push their limits. From the beginners who are just getting their footing to the seasoned climbers looking to dominate the leaderboard, there's something for everyone. The atmosphere in the climbing gym is electric as we prep the walls, check the gear, and make sure everything is perfect for the big day. On the day of the competition, the energy is palpable. Friends cheer each other on, offering encouragement and celebrating each small victory. It's not just about the climbing; it's about the camaraderie and the sense of community that we all share. The competition includes a variety of events, from speed climbing to bouldering challenges, ensuring that everyone has a chance to shine. Prizes and bragging rights are up for grabs, but the real reward is the shared experience and the memories we create together. As a member of the climbing club, it's incredibly fulfilling to see so many people come together, united by their passion for climbing and their desire to support one another. This competition is more than just a contest; it's a celebration of our vibrant climbing community at Middlebury.</p></div>
            </div>
            )}
  </div>
  );
};

export default Announcement_Data;
