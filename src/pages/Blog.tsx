import { useState } from 'react';
import styled from 'styled-components';

interface BlogItem {
  id: number;
  title: string;
  desc: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  content: {
    intro: string;
    sections: { heading: string; body: string }[];
    conclusion: string;
  };
}

const blogData: BlogItem[] = [
  {
    id: 1,
    title: 'Software Development Trends in 2026',
    desc: 'Explore the latest tools, frameworks, and best practices shaping the future of software engineering.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    date: 'Jul 30, 2026',
    category: 'Engineering',
    readTime: '6 min read',
    content: {
      intro: 'Modern software engineering is moving towards fully distributed systems, edge runtimes, and automated cloud workflows.',
      sections: [
        {
          heading: '1. Autonomous CI/CD and Edge Deployments',
          body: 'Deployments are moving closer to the user with edge edge networks like Vercel and Cloudflare, minimizing round-trip latency to single-digit milliseconds.'
        },
        {
          heading: '2. High-Throughput Async APIs',
          body: 'Modern backends rely on async event-loops with Python FastAPI and Node.js microservices to serve thousands of concurrent requests effortlessly.'
        }
      ],
      conclusion: 'Adopting modular architecture and automated testing pipelines is essential for building sustainable digital products.'
    }
  },
  {
    id: 2,
    title: 'Why Mobile-First Design Matters',
    desc: 'Learn how designing for mobile first can drastically improve user engagement and conversion rates.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    date: 'Jul 29, 2026',
    category: 'Design & UX',
    readTime: '5 min read',
    content: {
      intro: 'Over 70% of web traffic originates from mobile devices. Structuring UI layout for handheld screens first ensures clarity and speed.',
      sections: [
        {
          heading: '1. Touch Targets and Readability',
          body: 'Designing buttons with accessible 48px touch bounding boxes avoids misclicks and provides intuitive one-hand navigation.'
        },
        {
          heading: '2. Responsive Image Scaling',
          body: 'Delivering modern image formats like WebP with adaptive responsive breakpoints cuts data payload significantly.'
        }
      ],
      conclusion: 'Mobile-first design directly correlates with higher customer retention and faster load speeds across all screen sizes.'
    }
  },
  {
    id: 3,
    title: 'AI & Automated Workflows in Modern Platforms',
    desc: 'How artificial intelligence and automated web tools streamline business operations and content processing.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    date: 'Jul 25, 2026',
    category: 'AI & Cloud',
    readTime: '7 min read',
    content: {
      intro: 'Automated background tasks and intelligent data pipelines enable businesses to scale without linear resource growth.',
      sections: [
        {
          heading: '1. Real-time Media Processing',
          body: 'Extracting, converting, and indexing digital assets using asynchronous queue workers delivers instant user results.'
        },
        {
          heading: '2. Continuous Monitoring',
          body: 'Automated telemetry detects network anomalies and guarantees high uptime across client services.'
        }
      ],
      conclusion: 'Integrating automation early in the engineering cycle creates robust, reliable, and competitive solutions.'
    }
  }
];

const Container = styled.div`
  padding: 5rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  margin-bottom: 0.5rem;

  span { color: ${({ theme }) => theme.colors.primaryGreen}; }
`;

const SubTitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.grayText};
  margin-bottom: 4rem;
  font-size: 1.1rem;
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

const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 168, 107, 0.15);
  }
`;

const ImageWrapper = styled.div`
  height: 220px;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${BlogCard}:hover & img {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 1.5rem 2rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BlogTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0B132B;
  margin-bottom: 0.8rem;
  line-height: 1.4;
`;

const BlogDesc = styled.p`
  color: #64748B;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 1rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.grayText};

  span:last-child {
    color: ${({ theme }) => theme.colors.primaryGreen};
    font-weight: 600;
  }
`;

const DateText = styled.span`
  font-weight: 500;
`;

/* ===== Pop-up Modal Styles ===== */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 1000;
`;

const ModalCard = styled.div`
  background: #ffffff;
  width: 100%;
  max-width: 780px;
  max-height: 85vh;
  overflow-y: auto;
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #f1f5f9;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  color: #475569;
  transition: all 0.2s;

  &:hover {
    background: #e2e8f0;
    color: #0f172a;
  }
`;

const ModalMeta = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 0.8rem;

  span.cat {
    color: #00A86B;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 16px;
  margin: 1.5rem 0;
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  font-style: italic;
  color: #334155;
  border-left: 4px solid #00A86B;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const SectionBlock = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 0.5rem;
  }

  p {
    color: #475569;
    line-height: 1.7;
    font-size: 0.98rem;
  }
`;

const KeyTakeaway = styled.div`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 14px;
  padding: 1.2rem;
  margin-top: 1.5rem;

  h5 {
    color: #15803d;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }

  p {
    color: #166534;
    font-size: 0.92rem;
    line-height: 1.5;
  }
`;

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  return (
    <Container>
      <Title>Our <span>Insights</span></Title>
      <SubTitle>Read the latest articles from the Badri Innovation Lab team.</SubTitle>

      <Grid>
        {blogData.map((blog) => (
          <BlogCard key={blog.id} onClick={() => setSelectedBlog(blog)}>
            <ImageWrapper>
              <img src={blog.image} alt={blog.title} />
            </ImageWrapper>
            <Content>
              <div>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogDesc>{blog.desc}</BlogDesc>
              </div>
              <MetaInfo>
                <DateText>{blog.date}</DateText>
                <span>Read article →</span>
              </MetaInfo>
            </Content>
          </BlogCard>
        ))}
      </Grid>

      {/* Pop-up Modal */}
      {selectedBlog && (
        <ModalOverlay onClick={() => setSelectedBlog(null)}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedBlog(null)}>✕</CloseButton>
            
            <ModalMeta>
              <span className="cat">{selectedBlog.category}</span>
              <span>•</span>
              <span>{selectedBlog.date}</span>
              <span>•</span>
              <span>{selectedBlog.readTime}</span>
            </ModalMeta>

            <h2 style={{ fontSize: '1.8rem', color: '#0f172a', lineHeight: 1.3 }}>
              {selectedBlog.title}
            </h2>

            <ModalImage src={selectedBlog.image} alt={selectedBlog.title} />

            <IntroText>{selectedBlog.content.intro}</IntroText>

            {selectedBlog.content.sections.map((sec, idx) => (
              <SectionBlock key={idx}>
                <h4>{sec.heading}</h4>
                <p>{sec.body}</p>
              </SectionBlock>
            ))}

            <KeyTakeaway>
              <h5>Key Takeaway</h5>
              <p>{selectedBlog.content.conclusion}</p>
            </KeyTakeaway>
          </ModalCard>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Blog;
