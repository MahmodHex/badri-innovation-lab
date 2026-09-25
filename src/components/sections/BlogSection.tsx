import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface BlogItem {
  id: number;
  image: string;
  category: string;
  title: string;
  desc: string;
  author: string;
  date: string;
  readTime: string;
  content: {
    intro: string;
    sections: { heading: string; body: string }[];
    conclusion: string;
  };
}

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

const BlogCard = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  }
`;

const ImageWrapper = styled.div`
  height: 200px;
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

const ContentWrapper = styled.div`
  padding: 1.5rem 2rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BlogTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 0.8rem;
  line-height: 1.4;
`;

const BlogDesc = styled.p`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f1f5f9;
  padding-top: 1rem;
`;

const AuthorLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const AuthorAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #00A86B;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
`;

const AuthorName = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkText};
`;

const ReadAction = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #00A86B;
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

const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  const blogs: BlogItem[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      category: 'Software Engineering',
      title: 'Software Development Trends in 2026',
      desc: 'Explore the latest tools, frameworks, and best practices shaping the future of software engineering.',
      author: 'Badri Team',
      date: 'Jul 30, 2026',
      readTime: '6 min read',
      content: {
        intro: 'Modern software engineering is moving towards fully distributed systems, edge runtimes, and automated cloud workflows.',
        sections: [
          {
            heading: '1. Autonomous CI/CD and Edge Deployments',
            body: 'Deployments are moving closer to the user with edge networks like Vercel and Cloudflare, minimizing round-trip latency to single-digit milliseconds.'
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
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      category: 'Mobile UX',
      title: 'Why Mobile-First Design Matters',
      desc: 'Learn how designing for mobile first can drastically improve user engagement and conversion rates.',
      author: 'Badri Team',
      date: 'Jul 29, 2026',
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
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      category: 'Cloud & AI',
      title: 'AI in Modern Web Applications',
      desc: 'How artificial intelligence is being integrated into everyday web apps to automate and personalize.',
      author: 'Badri Team',
      date: 'Jul 25, 2026',
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
    },
  ];

  return (
    <SectionContainer>
      <SectionHeader>
        <Title>
          Our latest <span>insights</span>.
        </Title>
        <ViewAllLink to="/blog">Read More on Blog →</ViewAllLink>
      </SectionHeader>

      <Grid>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} onClick={() => setSelectedBlog(blog)}>
            <ImageWrapper>
              <img src={blog.image} alt={blog.title} />
            </ImageWrapper>
            <ContentWrapper>
              <div>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogDesc>{blog.desc}</BlogDesc>
              </div>
              <AuthorWrapper>
                <AuthorLeft>
                  <AuthorAvatar>BI</AuthorAvatar>
                  <AuthorName>By {blog.author}</AuthorName>
                </AuthorLeft>
                <ReadAction>Read →</ReadAction>
              </AuthorWrapper>
            </ContentWrapper>
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
    </SectionContainer>
  );
};

export default BlogSection;
