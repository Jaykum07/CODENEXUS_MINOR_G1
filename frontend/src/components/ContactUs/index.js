import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FaPlus, FaTimes } from "react-icons/fa";

import {
  PageContainer,
  Section,
  Heading,
  Subheading,
  GetInvolvedWrapper,
  ImageContainer,
  IllustrationImage,
  ImageInfoBox,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  Textarea,
  SubmitButton,
  FormStatusMessage,
  FAQItem,
  FAQHeader,
  FAQTitle,
  FAQContent,
  ButtonContainer,
  ToggleButton,
  AskLink,
} from "./styledComponents";

import ILLUSTRATION_URL from "../../assets/contact-page.png";

// Store FAQ data in an array
const allFaqData = [
  {
    q: "Do I need to be good at communication to join the club?",
    a: "Not at all! Code Nexus is a place to learn and grow. We value passion for technology and a willingness to learn above all. We have activities that help improve communication skills too.",
  },
  {
    q: "How can I become a member of Code Nexus?",
    a: "You can become a member by filling out the form on our website during the recruitment drive, or by contacting one of the core committee members. Follow our social media for announcements!",
  },
  {
    q: "What activities or events does the club organize?",
    a: "We organize a wide range of events, including coding competitions, hackathons, workshops on new technologies (like React, ML, Web3), guest lectures from industry experts, and collaborative projects.",
  },
  {
    q: "What are the benefits of joining a tech community like Code Nexus?",
    a: "You get to collaborate with like-minded peers, build real-world projects for your portfolio, gain mentorship from seniors and experts, and network for future career opportunities. Plus, it's fun!",
  },
  {
    q: "Do I need to be good at coding to join the club?",
    a: "Absolutely not! We welcome students from all skill levels, from beginners to experts. Our goal is to provide a space for everyone to learn and improve their coding skills together.",
  },
  {
    q: "What is Code Nexus and what does this tech club do?",
    a: "Code Nexus is our college tech club that brings together students who love technology, coding, and innovation. We organize coding events, workshops, and projects where members learn, share ideas, and build real-world skills together. It's a space to grow, connect, and turn ideas into impact.",
  },
];

const ContactAndFAQ = () => {
  const form = useRef();
  // State for the open FAQ item 
  const formSectionRef = useRef(null);
  const [openFAQ, setOpenFAQ] = useState(5);
  // State for showing all FAQs (set to true to match screenshot)
  const [showMore, setShowMore] = useState(false);

  // State for EmailJS form submission
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleToggleFAQ = (index) => {
    // If you click the already open one, it closes (sets to null)
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendSuccess(false);
    setSendError(false);

    emailjs
      .sendForm(
        "service_m5700mj", // 1. Get from EmailJS > Email Services
        "contact_form123", // 2. Get from EmailJS > Email Templates
        form.current,
        "sKku75j5lgRH9wqEY" // 3. Get from EmailJS > Account > API Keys
      )
      .then(
        (result) => {
          console.log(result.text);
          setSendSuccess(true);
          e.target.reset(); // Resets the form after successful submission
        },
        (error) => {
          console.log(error.text);
          setSendError(true);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleAskQuestionClick = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Determine which FAQs to display
  const displayedFaqs = showMore ? allFaqData : allFaqData.slice(0, 4);

  return (
    <PageContainer>
      {/* --- GET INVOLVED SECTION --- */}
      <Section ref={formSectionRef}>
        <Heading>Get Involved with Code Nexus</Heading>
        <Subheading>
          If you have an idea, project, or want to join our tech community?
          Let's collaborate, innovate, and build together!
        </Subheading>

        <GetInvolvedWrapper>
          <ImageContainer>
            <IllustrationImage
              src={ILLUSTRATION_URL}
              alt="Tech collaboration"
            />
            <ImageInfoBox>
              Mail: codenexus.jitb@gmail.com
              <br />
              Instagram: @codenexus.jitb
            </ImageInfoBox>
          </ImageContainer>

          <Form ref={form} onSubmit={sendEmail}>
            <FormGroup>
              <Label htmlFor="first_name">
                First Name <span>*</span>
              </Label>
              <Input type="text" id="first_name" name="first_name" required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="last_name">
                Last Name <span>*</span>
              </Label>
              <Input type="text" id="last_name" name="last_name" required />
            </FormGroup>

            <FormGroup className="full-width">
              <Label htmlFor="user_email">
                Professional Email <span>*</span>
              </Label>
              <Input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="yourname@company.com"
                required
              />
            </FormGroup>

            <FormGroup className="full-width">
              <Label htmlFor="contact_number">
                Contact Number <span>*</span>
              </Label>
              <Input
                type="tel"
                id="contact_number"
                name="contact_number"
                placeholder="Enter your contact number"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="course">
                Course <span>*</span>
              </Label>
              <Select id="course" name="course" defaultValue="B.Tech" required>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="BCA">BCA</option>
                <option value="MCA">MCA</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="year">
                Year <span>*</span>
              </Label>
              <Select id="year" name="year" defaultValue="1st" required>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="branch">
                Branch <span>*</span>
              </Label>
              <Select id="branch" name="branch" defaultValue="CSE" required>
                <option value="CSE">Computer Science & Engg.</option>
                <option value="IT">Information Technology</option>
                <option value="ECE">Electronics & Comm.</option>
                <option value="ME">Mechanical Engg.</option>
                <option value="CE">Civil Engg.</option>
              </Select>
            </FormGroup>

            <FormGroup className="full-width">
              <Label htmlFor="message">
                Message <span>*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us what you're working on or how you'd like to collaborate"
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Let's Connect"}
            </SubmitButton>

            {sendSuccess && (
              <FormStatusMessage className="success">
                Message sent successfully! We'll be in touch soon.
              </FormStatusMessage>
            )}
            {sendError && (
              <FormStatusMessage className="error">
                Failed to send message. Please try again later.
              </FormStatusMessage>
            )}
          </Form>
        </GetInvolvedWrapper>
      </Section>

      {/* --- FAQ SECTION --- */}
      <Section>
        <Heading>Frequently Asked Questions</Heading>
        <Subheading>
          Have questions about Code Nexus (Tech Club)? We're here to help.
        </Subheading>

        {displayedFaqs.map((faq, index) => (
          <FAQItem key={index}>
            <FAQHeader onClick={() => handleToggleFAQ(index)}>
              <FAQTitle>{faq.q}</FAQTitle>
              {openFAQ === index ? <FaTimes /> : <FaPlus />}
            </FAQHeader>
            <FAQContent isOpen={openFAQ === index}>{faq.a}</FAQContent>
          </FAQItem>
        ))}

        <ButtonContainer>
          <ToggleButton onClick={handleToggleShowMore}>
            {showMore ? "Show Less" : "Load More"}
          </ToggleButton>
          <AskLink onClick={handleAskQuestionClick}>Ask More Questions</AskLink>
        </ButtonContainer>
      </Section>
    </PageContainer>
  );
};

export default ContactAndFAQ;
