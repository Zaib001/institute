import React from 'react';
import { useTranslation } from 'react-i18next';

const teamMembers = [
  {
    id: 'robert_anderson',
    image: '/path/to/image1.jpg', // Replace with actual image path
  },
  {
    id: 'maria_sanchez',
    image: '/path/to/image2.jpg', // Replace with actual image path
  },
  {
    id: 'john_doe',
    image: '/path/to/image3.jpg', // Replace with actual image path
  },
];

const TeamMembersSection = () => {
  const { t } = useTranslation();

  return (
    <section className="px-8 py-16 mt-10 bg-gray-50 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{t('about_us.team_members.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={member.image}
                alt={t(`about_us.team_members.members.${member.id}.name`)}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">
                  {t(`about_us.team_members.members.${member.id}.name`)}
                </h3>
                <p className="text-gray-600">{t(`about_us.team_members.members.${member.id}.role`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;
