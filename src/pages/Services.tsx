import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%; 
  background: ${({ theme }) => theme.colors.white};
`;

// Hero
const HeroSection = styled.section`
  padding: 5rem 4rem 3rem; 
  max-width: 1400px; 
  margin: 0 auto;
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  gap: 4rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse; 
    padding: 3rem 2rem; 
    gap: 3rem;
  }
`;
const HeroLeft = styled.div`
  flex: 1; 
  max-width: 600px;
`;
const SmallLabel = styled.p`
  color: ${({ theme }) => theme.colors.grayText}; 
  text-transform: uppercase; 
  letter-spacing: 2px;
  font-size: 0.9rem; 
  font-weight: 600; 
  margin-bottom: 0.5rem;
`;
const HeroTitle = styled.h1`
  font-size: 3.5rem; 
  font-weight: 800; 
  color: ${({ theme }) => theme.colors.darkText}; 
  line-height: 1.1;
  margin-bottom: 0.5rem;
  span { color: ${({ theme }) => theme.colors.primaryGreen}; }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { font-size: 2.5rem; }
`;
const HeroSub = styled.p`
  font-size: 1.2rem; 
  color: ${({ theme }) => theme.colors.grayText}; 
  margin-bottom: 2rem;
`;
const HeroRight = styled.div`
  flex: 1; 
  display: flex; 
  justify-content: flex-end;
`;
const HeroImageWrap = styled.div`
  width: 100%; 
  max-width: 550px; 
  height: 350px; 
  background: ${({ theme }) => theme.colors.lightGreenAccent};
  border-radius: 50% 0 50% 50%; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  overflow: hidden; 
  position: relative;
  box-shadow: 0 15px 35px rgba(0, 168, 107, 0.15);
  img { 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { 
    height: 250px; 
    border-radius: 20px; 
  }
`;

// Services Grid
const ServicesSection = styled.section`
  max-width: 1400px; 
  margin: 0 auto; 
  padding: 2rem 4rem 5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { padding: 2rem; }
`;
const SectionTitle = styled.h2`
  font-size: 2.5rem; 
  font-weight: 700; 
  color: ${({ theme }) => theme.colors.darkText}; 
  margin-bottom: 3rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { font-size: 2rem; }
`;
const Grid = styled.div`
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 1.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { grid-template-columns: 1fr; }
`;
const ServiceCard = styled(Link)`
  background: white; 
  padding: 2.2rem; 
  border-radius: 16px; 
  border: 1px solid #f1f5f9;
  text-decoration: none; 
  color: inherit; 
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  &:hover { 
    transform: translateY(-5px); 
    box-shadow: 0 12px 30px rgba(0, 168, 107, 0.12); 
    border-color: #00A86B; 
  }
`;
const CardTitle = styled.h3`
  font-size: 1.3rem; 
  font-weight: 700; 
  color: #0B132B; 
  margin-bottom: 0.8rem;
  border-bottom: 3px solid #00A86B; 
  display: inline-block; 
  padding-bottom: 4px;
`;
const CardDesc = styled.p`
  color: #64748B; 
  line-height: 1.6; 
  font-size: 0.95rem;
`;

// Tech Stack
const TechStackSection = styled.section`
  max-width: 1400px; 
  margin: 0 auto; 
  padding: 3rem 4rem 5rem; 
  text-align: center; 
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { padding: 3rem 2rem; }
`;
const TechTitle = styled.h2`
  font-size: 2.2rem; 
  font-weight: 700; 
  color: #0B132B; 
  margin-bottom: 0.5rem;
  span { color: #00A86B; }
`;
const TechSub = styled.p`
  color: #64748B; 
  margin-bottom: 3rem;
`;
const MarqueeTrack = styled.div`
  display: flex; 
  gap: 3rem; 
  white-space: nowrap; 
  animation: scroll 25s linear infinite;
  @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
`;
const TechItem = styled.span`
  font-size: 2.5rem; 
  font-weight: 700; 
  color: #cbd5e1; 
  letter-spacing: 1px; 
  transition: color 0.3s;
  &:hover { color: #00A86B; }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { font-size: 2rem; }
`;

// CTA
const CTASection = styled.section`
  background: #0B132B; 
  padding: 5rem 4rem; 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  gap: 4rem; 
  color: white;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { 
    flex-direction: column; 
    text-align: center; 
    padding: 3rem 2rem; 
    gap: 2rem; 
  }
`;
const CTALeft = styled.div`
  flex: 1; 
  max-width: 600px;
`;
const CTATitle = styled.h2`
  font-size: 2.8rem; 
  font-weight: 700; 
  margin-bottom: 1rem; 
  line-height: 1.2;
  span { color: #00A86B; }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { font-size: 2rem; }
`;
const CTADesc = styled.p`
  font-size: 1.1rem; 
  color: #a0aec0; 
  margin-bottom: 2rem;
`;
const CTAButton = styled(Link)`
  background: #00A86B; 
  color: white; 
  padding: 0.8rem 2rem; 
  border-radius: 50px; 
  font-weight: 600; 
  text-decoration: none; 
  transition: transform 0.3s;
  &:hover { transform: translateY(-3px); }
`;
const CTAImageWrap = styled.div`
  flex: 1; 
  display: flex; 
  justify-content: flex-end; 
  height: 250px;
  img { 
    width: 100%; 
    max-width: 450px; 
    height: 100%; 
    object-fit: cover; 
    border-radius: 20px; 
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { height: 200px; }
`;

const Services = () => {
  const serviceList = [
    { title: 'Software Development', desc: 'Build modern, scalable custom software solutions tailored to your business needs.' },
    { title: 'Mobile App Development', desc: 'Launch iOS and Android apps with smooth performance and intuitive user experiences.' },
    { title: 'Website Development', desc: 'Create high-performance, SEO-optimized websites that convert visitors into customers.' },
    { title: 'UI/UX Design', desc: 'Design modern, user-centric interfaces that are accessible and visually stunning.' },
    { title: 'E-commerce Solutions', desc: 'Build robust online stores with secure payment gateways and seamless inventory management.' },
    { title: 'Maintenance & Support', desc: 'Keep your software running smoothly with 24/7 monitoring and continuous optimization.' },
    { title: 'Web Application Development', desc: 'Develop dynamic and responsive web applications optimized for performance and scalability.' },
    { title: 'MVP Development', desc: 'Test market viability and gather feedback with the rapid development of minimal viable products.' },
    { title: 'SaaS Development', desc: 'Deliver software applications over the internet, allowing users to access them without local installation.' },
    { title: 'Back-End Development', desc: 'Create robust, scalable, and secure server-side logic that powers your websites and apps.' },
    { title: 'Front-End Development', desc: 'Craft beautiful, user-friendly interfaces tailored to your brand and optimized for performance.' },
    { title: 'Enterprise Software', desc: 'Develop scalable and robust software solutions tailored to meet the specific needs of large organizations.' },
  ];

  const techStack = ['React', 'Node.js', 'Python', 'TypeScript', 'JavaScript', 'Flutter', 'Swift', 'Kotlin', 'Go', 'PHP', 'Laravel', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'Java', 'C++'];
  const marqueeTechs = [...techStack, ...techStack];

  return (
    <PageContainer>
      <HeroSection>
        <HeroLeft>
          <SmallLabel>Our Solutions</SmallLabel>
          <HeroTitle>Tap into our <span>end-to-end</span><br /> tech solutions.</HeroTitle>
          <HeroSub>From custom mobile apps to enterprise-grade web applications, we build the future of digital business.</HeroSub>
        </HeroLeft>
        <HeroRight>
          <HeroImageWrap>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Engineering Team" 
            />
          </HeroImageWrap>
        </HeroRight>
      </HeroSection>

      <ServicesSection>
        <SectionTitle>Software Development & Design</SectionTitle>
        <Grid>
          {serviceList.map((s, idx) => (
            <ServiceCard key={idx} to="/contact">
              <CardTitle>{s.title}</CardTitle>
              <CardDesc>{s.desc}</CardDesc>
            </ServiceCard>
          ))}
        </Grid>
      </ServicesSection>

      <TechStackSection>
        <TechTitle>Yes, we cover the <span>tech stack</span> you rely on.</TechTitle>
        <TechSub>Our team has expertise in over 100+ technologies and modern software tools.</TechSub>
        <div style={{ width: '100%', overflow: 'hidden', position: 'relative', padding: '2rem 0' }}>
          <MarqueeTrack>
            {marqueeTechs.map((tech, i) => <TechItem key={i}>{tech}</TechItem>)}
          </MarqueeTrack>
        </div>
      </TechStackSection>

      <CTASection>
        <CTALeft>
          <CTATitle>Accelerate your tech roadmap with us.</CTATitle>
          <CTADesc>See how we can help you build, scale, and innovate your next big platform.</CTADesc>
          <CTAButton to="/contact">Book a Discovery Call</CTAButton>
        </CTALeft>
        <CTAImageWrap>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
            alt="Modern Tech Office" 
          />
        </CTAImageWrap>
      </CTASection>
    </PageContainer>
  );
};

export default Services;
