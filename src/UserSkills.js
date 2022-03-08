import React, { useState, useEffect } from 'react';

const UserSkills = ({ id }) => {
  const [skillsTitle, setSkillsTitle] = useState({ title: '' });

  useEffect(() => {
    if (id === 1) {
      return setSkillsTitle({ title: 'HTML' });
    } else if (id === 2) {
      return setSkillsTitle({ title: 'CSS' });
    } else if (id === 3) {
      return setSkillsTitle({ title: 'PHP' });
    } else if (id === 4) {
      return setSkillsTitle({ title: 'Laravel' });
    } else if (id === 5) {
      return setSkillsTitle({ title: 'React.JS' });
    } else if (id === 6) {
      return setSkillsTitle({ title: 'Vue.JS' });
    } else if (id === 7) {
      return setSkillsTitle({ title: 'Svelte' });
    } else if (id === 8) {
      return setSkillsTitle({ title: 'Angular' });
    }
  }, []);

  return <div key={id}>{skillsTitle.title}</div>;
};

export default UserSkills;
