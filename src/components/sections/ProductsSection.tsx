import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 5rem 4rem;
  background: ${({ theme }) => theme.colors.lightBg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const SubTitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.grayText};
  margin-bottom: 3rem;
`;

const ProductGrid = styled.div`
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

const ProductCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.03);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 168, 107, 0.15);
    border-color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const ProductImageWrap = styled.div`
  width: 100%;
  height: 160px;
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

const ProductLink = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryGreen};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556742049-0a67e5572240?auto=format&fit=crop&w=700&q=80',
      name: 'Badri POS Pro',
      desc: 'A complete point-of-sale system for retail businesses with real-time analytics.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80',
      name: 'Badri Inventory Hub',
      desc: 'Cloud-based inventory management tool to track stock across multiple warehouses.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=700&q=80',
      name: 'Badri AI Chatbot',
      desc: 'An AI-powered customer support bot that integrates seamlessly with your website.',
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>
        Our <span>Flagship</span> Products.
      </SectionTitle>
      <SubTitle>Innovative tools we have built to solve real-world business problems.</SubTitle>

      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImageWrap>
              <img src={product.image} alt={product.name} />
            </ProductImageWrap>
            <div>
              <ProductName>{product.name}</ProductName>
              <ProductDesc>{product.desc}</ProductDesc>
            </div>
            <ProductLink to="/products">Learn More →</ProductLink>
          </ProductCard>
        ))}
      </ProductGrid>
    </SectionContainer>
  );
};

export default ProductsSection;
