import { Link } from 'react-router-dom';
import styled from 'styled-components';

// --- STYLES ---
const SectionContainer = styled.section`
  padding: 5rem 4rem;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};

  span {
    color: ${({ theme }) => theme.colors.primaryGreen};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const ViewAllLink = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryGreen};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryGreen};
  padding-bottom: 4px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

// ব্যাকগ্রাউন্ড ইমেজ ও রিচ টেক্সচার যুক্ত কার্ড
const ServiceCard = styled.div<{ $bgImg: string }>`
  position: relative;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.88) 100%), url(${({ $bgImg }) => $bgImg});
  background-size: cover;
  background-position: center;
  transition: all 0.35s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 290px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 35px rgba(0, 168, 107, 0.16);
    border-color: ${({ theme }) => theme.colors.primaryGreen};
    background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 253, 244, 0.92) 100%), url(${({ $bgImg }) => $bgImg});
  }
`;

const IconWrapper = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 16px;
  background: #ffffff;
  color: ${({ theme }) => theme.colors.primaryGreen};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    background: ${({ theme }) => theme.colors.primaryGreen};
    color: #ffffff;
    transform: scale(1.08);
    box-shadow: 0 6px 18px rgba(0, 168, 107, 0.3);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: #0B132B;
  margin-bottom: 0.8rem;
`;

const CardDesc = styled.p`
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: #ffffff;
  color: #00A86B;
  border: 1px solid rgba(0, 168, 107, 0.3);
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(0,0,0,0.02);
`;

// --- COMPONENT ---
const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <i className="fa-solid fa-laptop-code"></i>,
      title: 'Software Development',
      desc: 'Build modern, scalable custom software solutions tailored to your business needs.',
      tags: ['Web', 'Desktop', 'API'],
      bgImg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 2,
      icon: <i className="fa-solid fa-mobile-screen-button"></i>,
      title: 'Mobile App Development',
      desc: 'Launch iOS and Android apps with smooth performance and intuitive user experiences.',
      tags: ['Flutter', 'iOS', 'Android'],
      bgImg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 3,
      icon: <i className="fa-solid fa-globe"></i>,
      title: 'Website Development',
      desc: 'Create high-performance, SEO-optimized websites that convert visitors into customers.',
      tags: ['React', 'Node.js', 'HTML/CSS'],
      bgImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 4,
      icon: <i className="fa-solid fa-pen-ruler"></i>,
      title: 'UI/UX Design',
      desc: 'Design modern, user-centric interfaces that are accessible and visually stunning.',
      tags: ['Figma', 'Prototyping', 'Research'],
      bgImg: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 5,
      icon: <i className="fa-solid fa-cart-shopping"></i>,
      title: 'E-commerce Solutions',
      desc: 'Build robust online stores with secure payment gateways and seamless inventory management.',
      tags: ['Shopify', 'WooCommerce', 'Payment'],
      bgImg: 'https://images.unsplash.com/photo-1556742049-0a67e5572240?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 6,
      icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
      title: 'Maintenance & Support',
      desc: 'Keep your software running smoothly with 24/7 monitoring and continuous optimization.',
      tags: ['Monitoring', 'Updates', 'Security'],
      bgImg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80',
    },
  ];

  return (
    <SectionContainer>
      <SectionHeader>
        <Title>
          What we <span>build</span> for you.
        </Title>
        <ViewAllLink to="/services">View All Services →</ViewAllLink>
      </SectionHeader>

      <Grid>
        {services.map((service) => (
          <ServiceCard key={service.id} $bgImg={service.bgImg}>
            <div>
              <IconWrapper>{service.icon}</IconWrapper>
              <CardTitle>{service.title}</CardTitle>
              <CardDesc>{service.desc}</CardDesc>
            </div>
            <TagContainer>
              {service.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagContainer>
          </ServiceCard>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default ServicesSection;
