import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TIMELINE } from '../constants/timelineConstants';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';

const Timeline = () => {
    const colors = [
        "#031D70",
        "#F26440",
        "#EFB43B"
    ];

    const getIconByCategory = (category) => {
        switch (category) {
            case 'Education':
                return <FaGraduationCap />;
            case 'Work':
                return <FaBriefcase />;
            case 'Learning':
                return <GiTeacher />;
            default:
                return null;
        }
    };

    return (
        <VerticalTimeline lineColor='#fff'>
            {TIMELINE.map((e, key) => (
                <VerticalTimelineElement
                    key={key}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: colors[key % colors.length],
                        color: '#fff',
                        fontFamily: 'Raleway',
                    }}
                    contentArrowStyle={{ borderRight: `7px solid ${colors[key % colors.length]}` }}
                    date={e.date}
                    location={e.location}
                    iconStyle={{ background: colors[key % colors.length], color: '#fff' }}
                    icon={getIconByCategory(e.icon)}
                >
                    <h3 className="vertical-timeline-element-title">{e.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{e.subtitle}</h4>
                    <h4 className='vertical-timeline-element-location mb-2'>{e.location}</h4>
                    <h4 className='vertical-timeline-element-description text-justify text-sm'>{e.description}</h4>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};

export default Timeline;
