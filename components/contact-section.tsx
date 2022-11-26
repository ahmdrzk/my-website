import { MdOutlineAlternateEmail, MdOutlineMarkEmailRead } from "react-icons/md";
import SectionHeading from "./section-heading";
import Button from "./button";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

import data from "../data/data.json";

type ContactSectionProps = {
  id: string;
};

const ContactSection = ({ id }: ContactSectionProps) => {
  const { animatedElement: animatedElement1 } = useAnimateOnScroll<HTMLDivElement>("slide-up");
  const { animatedElement: animatedElement2 } = useAnimateOnScroll<HTMLDivElement>("slide-up");

  return (
    <section id={id} className="contact-section-bg">
      <div className="contact-section-overlay">
        <SectionHeading as="h2">Contact Me</SectionHeading>
        <div className="contact-section">
          <div ref={animatedElement1} className="contact-card">
            <div className="contact-type-label">
              <span className="contact-icon">
                <MdOutlineAlternateEmail />
              </span>
              <div>
                <h5>Contact on Email</h5>
                <a href={`mailto:${data.email}`} className="contact-link">
                  {data.email}
                </a>
              </div>
            </div>
          </div>
          <div ref={animatedElement2} className="contact-card">
            <div className="contact-type-label">
              <span className="contact-icon">
                <MdOutlineMarkEmailRead />
              </span>
              <h5>Drop Me a Message</h5>
            </div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              autoComplete="off"
              spellCheck="false"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <input name="bot-field" />
              </div>
              <div>
                <label htmlFor="contact-name">Your Name</label>
                <input type="text" id="contact-email" className="input" />
              </div>
              <div>
                <label htmlFor="contact-email">Your Email</label>
                <input type="email" id="contact-email" className="input" />
              </div>
              <div>
                <label>Subject</label>
                <input type="text" id="contact-subject" className="input" />
              </div>
              <div>
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" className="input"></textarea>
              </div>
              <Button>Submit Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
