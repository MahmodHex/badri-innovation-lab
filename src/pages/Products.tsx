import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`;

// 1. Hero Section
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
  margin-bottom: 1.5rem;

  span {
    color: ${({ theme }) => theme.colors.primaryGreen};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const HeroSub = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.grayText};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const HeroRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const HeroImageWrap = styled.div`
  width: 100%;
  max-width: 500px;
  height: 320px;
  background: ${({ theme }) => theme.colors.lightGreenAccent};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 220px;
  }
`;

// 2. Products Grid
const ProductsSectionContainer = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 4rem 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 3rem;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(Link)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  border: 1px solid #f1f5f9;
  text-decoration: none;
  color: inherit;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 35px rgba(0, 168, 107, 0.15);
    border-color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const ProductImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${ProductCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProductName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 0.5rem;
`;

const ProductDesc = styled.p`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const LearnMoreText = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryGreen};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${ProductCard}:hover & {
    text-decoration: underline;
  }
`;

// 3. CTA Section
const CTASection = styled.section`
  background: ${({ theme }) => theme.colors.primaryGreen};
  padding: 5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  color: white;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: 3rem 2rem;
    gap: 2rem;
  }
`;

const CTATitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const CTAButton = styled(Link)`
  background: ${({ theme }) => theme.colors.darkText};
  color: white;
  padding: 0.8rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Products = () => {
  const productList = [
    {
      id: 1,
      name: 'Badri POS Pro',
      desc: 'A complete point-of-sale system for retail businesses with real-time analytics and inventory synchronization.',
      image: 'https://images.unsplash.com/photo-1556742049-0a67e5572240?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 2,
      name: 'Badri Inventory Hub',
      desc: 'Cloud-based inventory management tool to track stock and asset lifecycles across multiple distributed facilities.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 3,
      name: 'Badri AI Chatbot',
      desc: 'An AI-powered customer support bot that integrates seamlessly with your web platforms and mobile apps.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=700&q=80'
    }
  ];

  return (
    <PageContainer>
      {/* 1. Hero */}
      <HeroSection>
        <HeroLeft>
          <SmallLabel>Our Products</SmallLabel>
          <HeroTitle>
            Innovative tools built to <span>solve</span><br /> real-world problems.
          </HeroTitle>
          <HeroSub>
            We build cutting-edge software products that help businesses automate, scale, and grow.
          </HeroSub>
        </HeroLeft>
        <HeroRight>
          <HeroImageWrap>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
              alt="Products Showcase" 
            />
          </HeroImageWrap>
        </HeroRight>
      </HeroSection>

      {/* 2. Product Grid */}
      <ProductsSectionContainer>
        <SectionTitle>
          Our <span>Flagship</span> Products.
        </SectionTitle>
        <Grid>
          {productList.map((product) => (
            <ProductCard key={product.id} to="/contact">
              <ProductImageWrapper>
                <img src={product.image} alt={product.name} />
              </ProductImageWrapper>
              <div>
                <ProductName>{product.name}</ProductName>
                <ProductDesc>{product.desc}</ProductDesc>
              </div>
              <LearnMoreText>Learn More →</LearnMoreText>
            </ProductCard>
          ))}
        </Grid>
      </ProductsSectionContainer>

      {/* 3. CTA Section */}
      <CTASection>
        <div>
          <CTATitle>
            Ready to build your <br /> next big product?
          </CTATitle>
          <CTAButton to="/contact">Schedule a Call</CTAButton>
        </div>
      </CTASection>
    </PageContainer>
  );
};

export default Products;
