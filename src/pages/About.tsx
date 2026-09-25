import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`;

// Hero Section
const HeroSection = styled.section`
  padding: 6rem 4rem 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 2rem;
  }
`;

const SmallLabel = styled.p`
  color: ${({ theme }) => theme.colors.grayText};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.2;
  max-width: 900px;

  span { color: ${({ theme }) => theme.colors.primaryGreen}; }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

// Timeline Section
const TimelineSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 4rem 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 5rem;

  &:last-child { margin-bottom: 0; }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    gap: 2rem;
    margin-bottom: 4rem;
  }
`;

const TimelineLeft = styled.div`
  flex: 1;
  position: relative;
  padding-left: 2.5rem;
  border-left: 4px solid ${({ theme }) => theme.colors.primaryGreen};

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: -10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primaryGreen};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-left: none;
    padding-left: 0;
    &::before { display: none; }
  }
`;

const TimelineRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 220px;
  }
`;

const StatGraphic = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background: ${({ theme }) => theme.colors.primaryGreen};
  border-radius: 50% 50% 50% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 168, 107, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 200px;
    height: 200px;
  }
`;

const BigNumber = styled.div`
  font-size: 4.5rem; 
  font-weight: 800; 
  line-height: 1;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { font-size: 3.5rem; }
`;

const BigLabel = styled.div`
  font-size: 1.2rem; 
  font-weight: 500; 
  margin-top: 0.5rem;
`;

// CTA Section
const CTASection = styled.section`
  background: ${({ theme }) => theme.colors.primaryGreen};
  padding: 6rem 4rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  margin-top: 4rem;

  &::before {
    content: '';
    position: absolute;
    bottom: -50%; left: -10%; width: 120%; height: 100%;
    background: ${({ theme }) => theme.colors.darkText};
    border-radius: 50% 50% 0 0; opacity: 0.1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { padding: 4rem 2rem; }
`;

const CTATitle = styled.h2`
  font-size: 3rem; 
  font-weight: 700; 
  margin-bottom: 2rem; 
  position: relative; 
  z-index: 1;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { font-size: 2.2rem; }
`;

const CTAButtonGroup = styled.div`
  display: flex; 
  justify-content: center; 
  gap: 1.5rem; 
  position: relative; 
  z-index: 1;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { flex-direction: column; align-items: center; }
`;

const ButtonPrimary = styled.a`
  background: ${({ theme }) => theme.colors.darkText}; 
  color: white; 
  padding: 1rem 2.5rem;
  border-radius: 50px; 
  font-weight: 600; 
  text-decoration: none; 
  transition: transform 0.3s;
  &:hover { transform: translateY(-3px); }
`;

const ButtonOutline = styled.a`
  background: transparent; 
  color: white; 
  padding: 1rem 2.5rem; 
  border-radius: 50px;
  font-weight: 600; 
  border: 2px solid white; 
  text-decoration: none; 
  transition: background 0.3s;
  &:hover { background: rgba(255,255,255,0.1); }
`;

const About = () => {
  return (
    <PageContainer>
      <HeroSection>
        <SmallLabel>About Badri Innovation Lab</SmallLabel>
        <HeroTitle>We are a team of passionate <span>engineers</span> and <span>designers</span> building the future.</HeroTitle>
      </HeroSection>

      <TimelineSection>
        {/* Step 1 */}
        <TimelineItem>
          <TimelineLeft>
            <h2 style={{ fontSize: '2.2rem', color: '#0B132B' }}>Innovation is our foundation.</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748B' }}>
              Badri Innovation Lab is a modern software development company specializing in custom mobile app development, website development, and UI/UX design. We focus on delivering digital products that are not only beautiful but also highly functional and scalable.
            </p>
          </TimelineLeft>
          <TimelineRight>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80" 
                alt="Product UI/UX Design" 
              />
            </ImageBox>
          </TimelineRight>
        </TimelineItem>

        {/* Step 2 */}
        <TimelineItem>
          <TimelineLeft>
            <h2 style={{ fontSize: '2.2rem', color: '#0B132B' }}>Full-stack solutions for your business.</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748B' }}>
              From web application development to robust e-commerce solutions, we provide end-to-end services tailored to your unique requirements. Our team ensures your business runs smoothly with our dedicated maintenance & support.
            </p>
          </TimelineLeft>
          <TimelineRight>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt="Software Coding and Engineering" 
              />
            </ImageBox>
          </TimelineRight>
        </TimelineItem>

        {/* Step 3 - Stat Graphic */}
        <TimelineItem>
          <TimelineLeft>
            <h2 style={{ fontSize: '2.2rem', color: '#0B132B' }}>Trusted by startups & enterprises.</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748B' }}>
              We have consistently helped businesses scale. Our commitment to quality and innovation has allowed us to achieve an outstanding 91% customer satisfaction score, maintaining long-term relationships with our clients.
            </p>
          </TimelineLeft>
          <TimelineRight>
            <StatGraphic>
              <BigNumber>91%</BigNumber>
              <BigLabel>Client Satisfaction</BigLabel>
            </StatGraphic>
          </TimelineRight>
        </TimelineItem>
      </TimelineSection>

      {/* CTA */}
      <CTASection>
        <CTATitle>Ready to start your <br /> next big idea?</CTATitle>
        <CTAButtonGroup>
          <ButtonPrimary href="/contact">Talk to Sales</ButtonPrimary>
          <ButtonOutline href="/work">Explore Our Work</ButtonOutline>
        </CTAButtonGroup>
      </CTASection>
    </PageContainer>
  );
};

export default About;
