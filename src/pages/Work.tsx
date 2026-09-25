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
    gap: 2rem;
  }
`;
const HeroLeft = styled.div`
  flex: 1; 
  max-width: 600px;
`;
const SmallLabel = styled.p`
  color: #64748B; 
  text-transform: uppercase; 
  letter-spacing: 2px; 
  font-size: 0.9rem; 
  font-weight: 600; 
  margin-bottom: 0.5rem;
`;
const HeroTitle = styled.h1`
  font-size: 3.5rem; 
  font-weight: 800; 
  color: #0B132B; 
  line-height: 1.1; 
  margin-bottom: 1.5rem;
  span { color: #00A86B; }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { font-size: 2.5rem; }
`;
const HeroSub = styled.p`
  font-size: 1.2rem; 
  color: #64748B; 
  margin-bottom: 2rem; 
  line-height: 1.6;
`;
const HeroRight = styled.div`
  flex: 1; 
  display: flex; 
  justify-content: flex-end;
`;

// Grid
const PortfolioSection = styled.section`
  max-width: 1400px; 
  margin: 0 auto; 
  padding: 2rem 4rem 5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { padding: 2rem; }
`;
const Grid = styled.div`
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 1.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { grid-template-columns: 1fr; }
`;
const ProjectCard = styled.div`
  position: relative; 
  border-radius: 16px; 
  overflow: hidden; 
  height: 320px;
  background: #E6F4EA; 
  border: 1px solid #f1f5f9; 
  transition: all 0.3s ease;
  &:hover { 
    transform: translateY(-8px); 
    box-shadow: 0 12px 30px rgba(0, 168, 107, 0.2); 
  }
  &:nth-child(2), &:nth-child(5) { height: 400px; }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { height: 260px !important; }
  img { 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    transition: transform 0.5s ease;
  }
  &:hover img {
    transform: scale(1.05);
  }
`;
const CardOverlay = styled.div`
  position: absolute; 
  bottom: 0; 
  left: 0; 
  width: 100%; 
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(11, 19, 43, 0.92) 20%, rgba(11, 19, 43, 0.4) 70%, transparent); 
  color: white;
  display: flex; 
  justify-content: space-between; 
  align-items: flex-end;
  gap: 1rem;
`;
const ClientName = styled.h3`
  font-size: 1.3rem; 
  font-weight: 700; 
  margin: 0;
  line-height: 1.3;
`;
const ViewLink = styled.a`
  color: white; 
  font-size: 0.85rem; 
  font-weight: 600; 
  text-decoration: none;
  background: rgba(255,255,255,0.2); 
  padding: 0.5rem 1.1rem; 
  border-radius: 50px; 
  transition: all 0.3s ease;
  white-space: nowrap;
  backdrop-filter: blur(4px);
  &:hover { 
    background: #00A86B; 
    transform: scale(1.05);
  }
`;

// Review
const ReviewSection = styled.section`
  max-width: 1400px; 
  margin: 0 auto; 
  padding: 2rem 4rem 4rem;
  display: flex; 
  justify-content: flex-end; 
  align-items: center; 
  gap: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { 
    flex-direction: column; 
    align-items: flex-start; 
    padding: 2rem; 
  }
`;
const ReviewBadge = styled.div`
  background: white; 
  padding: 1.5rem 2rem; 
  border-radius: 16px; 
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  max-width: 200px; 
  border: 1px solid #f1f5f9;
`;
const Stars = styled.div`
  color: #f59e0b; 
  font-size: 1.2rem; 
  letter-spacing: 2px; 
  margin: 0.5rem 0;
`;
const ReviewTitle = styled.p`
  font-weight: 600; 
  color: #0B132B; 
  margin: 0; 
  font-size: 0.95rem;
`;
const ReviewLink = styled.a`
  color: #00A86B; 
  font-weight: 600; 
  text-decoration: none; 
  border-bottom: 2px solid #00A86B; 
  padding-bottom: 2px;
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
  margin-bottom: 1.5rem; 
  line-height: 1.2;
  span { color: #00A86B; }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { font-size: 2rem; }
`;
const CTAButton = styled.a`
  background: #00A86B; 
  color: white; 
  padding: 0.8rem 2rem; 
  border-radius: 50px; 
  font-weight: 600; 
  text-decoration: none; 
  display: inline-block; 
  transition: transform 0.3s;
  &:hover { transform: translateY(-3px); }
`;
const CTAImageWrap = styled.div`
  flex: 1; 
  display: flex; 
  justify-content: flex-end;
  img { 
    width: 100%; 
    max-width: 450px; 
    height: 280px; 
    object-fit: cover; 
    border-radius: 20px; 
  }
`;

const Work = () => {
  // 🔥 আপনার আসল লাইভ প্রজেক্ট এবং রিয়েল হাই-কোয়ালিটি ইমেজ
  const projects = [
    { 
      id: 1, 
      title: 'Badri Innovation Lab', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', 
      link: 'https://badriinnovationlab.pro.bd/' 
    },
    { 
      id: 2, 
      title: 'Creator Stock App', 
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80', 
      link: 'https://play.google.com/store/apps/details?id=com.creatorstock.app' 
    },
    { 
      id: 3, 
      title: 'All Media Downloader', 
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', 
      link: 'https://allmediadownloader.pro.bd/' 
    },
    { 
      id: 4, 
      title: 'Advanced QR Suite', 
      image: 'https://images.unsplash.com/photo-1595079672139-6db726e6ef12?auto=format&fit=crop&w=800&q=80', 
      link: 'https://advancedqrsuite.pro.bd/' 
    },
    { 
      id: 5, 
      title: 'Maktabatut Tasnif', 
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80', 
      link: 'https://maktabatut-tasnif-eight.vercel.app/' 
    },
    { 
      id: 6, 
      title: 'AWC All-in-One Platform', 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', 
      link: 'https://awc-all-in-one.vercel.app/' 
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroLeft>
          <SmallLabel>Our Work</SmallLabel>
          <HeroTitle>Over 100+ successful <span>projects</span><br /> delivered globally.</HeroTitle>
          <HeroSub>From startups to enterprises, we have built custom solutions that drive real business growth.</HeroSub>
        </HeroLeft>
        <HeroRight>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="Showcase Team" 
            style={{ width: '100%', maxWidth: '500px', height: '300px', borderRadius: '20px', objectFit: 'cover' }} 
          />
        </HeroRight>
      </HeroSection>

      <PortfolioSection>
        <Grid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <img src={project.image} alt={project.title} />
              <CardOverlay>
                <ClientName>{project.title}</ClientName>
                <ViewLink href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit Live →
                </ViewLink>
              </CardOverlay>
            </ProjectCard>
          ))}
        </Grid>
      </PortfolioSection>

      <ReviewSection>
        <ReviewBadge>
          <span style={{ fontWeight: 'bold', color: '#64748b', fontSize: '0.8rem' }}>REVIEWED ON</span>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#0B132B' }}>Clutch</div>
          <Stars>★★★★★</Stars>
          <ReviewTitle>4.9 Rating</ReviewTitle>
        </ReviewBadge>
        <ReviewLink href="https://badriinnovationlab.pro.bd/" target="_blank" rel="noopener noreferrer">
          Read client case studies & reviews →
        </ReviewLink>
      </ReviewSection>

      <CTASection>
        <CTALeft>
          <CTATitle>Ready to build your next <span>breakthrough</span> platform?</CTATitle>
          <CTAButton href="https://badriinnovationlab.pro.bd/#contact" target="_blank" rel="noopener noreferrer">
            Book a Discovery Call
          </CTAButton>
        </CTALeft>
        <CTAImageWrap>
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
            alt="Tech Strategy Meeting" 
          />
        </CTAImageWrap>
      </CTASection>
    </PageContainer>
  );
};

export default Work;
