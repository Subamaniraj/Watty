import React from 'react';
import './CommunityGuidelines.css';

const CommunityGuidelines = () => {
  return (
    <div className="community-guidelines">
      <header className="boxcom">
        <h1 className='heading'>Community Guidelines</h1>
      </header>
      <main className="content1">
        <section>
          <h2>1. Be Respectful</h2>
          <p>Respect other members and their opinions. Treat everyone with kindness and avoid any form of harassment, hate speech, or personal attacks.</p>
        </section>
        <section>
          <h2>2. Follow Content Policies</h2>
          <p>Ensure that the content you upload complies with our policies. Do not post or share explicit, offensive, or illegal material.</p>
        </section>
        <section>
          <h2>3. Engage in Constructive Discussions</h2>
          <p>Participate in discussions in a constructive manner. Provide helpful feedback, engage in meaningful conversations, and avoid spamming or trolling.</p>
        </section>
        <section>
          <h2>4. Protect Personal Information</h2>
          <p>Respect the privacy of others. Do not share personal information, including contact details or private conversations, without explicit permission.</p>
        </section>
        <section>
          <h2>5. Report Violations</h2>
          <p>If you come across any content or behavior that violates our community guidelines, please report it to our support team for appropriate action.</p>
        </section>
      </main>
    </div>
  );
};

export default CommunityGuidelines;
