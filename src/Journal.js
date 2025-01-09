import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Popup from './Popup'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './Journal.css';

const entries = [
    { id: 1, title: "new baking techniques", content: "Lately I've been baking lots of baguettes. My first few attempts were pretty lackluster - the crust was completely white and it looked like someone bleached it. It still tasted good though! Just missing the visual component. I watched some youtube videos of baguette making and one of the tricks is that you gotta use a pan filled with water in the baking process. This pan goes on the lower rack of the oven and the moisture created from the steam sticks to the bread crust, allowing it to develop a crispy and brown crust." },
    { id: 2, title: "what is devops?", content: "I had no idea what DevOps was until I started my second co-op term as a DevOps software developer. I started the internship writing Ansible playbooks to automate code deployments on virtual machines and by the end of the term, I had created a working prototype of an automated AWS image creator. Before this experience, I thought software development was all about writing code. You write a feature, push it, and move on to the next thing. But in DevOps, the scope is much broader. It's about thinking beyond the code—how it’s deployed, how it scales, and how the infrastructure supports it. DevOps introduced me to this really cool idea that good software isn't just functional; it’s maintainable, reliable, and efficient to deploy. One of the first lessons I learned was how automation is the backbone of DevOps. Writing Ansible playbooks taught me how repeatable processes can save time and reduce human error. The AWS image creator project was another eye-opener. By automating the process of building and distributing machine images, I got a glimpse into the level of efficiency DevOps enables. This wasn't just about making my job easier; it was about empowering teams to move faster and focus on what matters most—delivering value to users. Looking back, what stands out to me most is how much DevOps is about mindset. It's about collaboration, ownership, and constantly finding ways to improve the systems we rely on. It's not just about the tools, whether it's Ansible, Docker, or Kubernetes. It’s about how you use those tools to bring teams together and build something that works seamlessly from development to production." },
    { id: 3, title: "my thoughts on university fellowships", content: "Coming into first year I never really cared about socializing. I stuck to the same group of friends from high school and didn't bother talking to anyone else. Then the pandemic hit. lol. No more friends. No more social interaction. I thought I could tough it out cause I'm an introvert, but eventually the loneliness got to me in 3rd year. The term before the start of 4th year I vowed I would join a university fellowship (Chinese Christian Community) lest I continue in my loneliness. So I did. The first day I joined I was so nervous. But I pushed through because I knew the prize waiting for me at the end. That day was 2 years ago. Since then, I found my friends, I found my brothers, I found my future wife, and most importantly I found my faith. Hallelujah!" },
];

const Journal = () => {
    const [selectedEntry, setSelectedEntry] = useState(null);

    const openPopup = (entry) => {
        setSelectedEntry(entry);
    };

    const closePopup = () => {
        setSelectedEntry(null);
    };

    return (
        <div>
            <div className="journal-container">
                <div className="return-button">
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowCircleLeft} />
                    </Link>
                </div>
                <div className="journal-titles">
                    {entries.map((entry) => (
                        <button
                            key={entry.id}
                            className="journal-link"
                            onClick={() => openPopup(entry)}
                        >
                            {entry.title}
                        </button>
                    ))}
                </div>
            </div>

            {selectedEntry && (
                <Popup onClose={closePopup}>
                    <h2>{selectedEntry.title}</h2>
                    <p>{selectedEntry.content}</p>
                </Popup>
            )}
        </div>
    );
};

export default Journal;
