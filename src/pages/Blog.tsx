import { useState } from 'react';
import styled from 'styled-components';

interface BlogSection {
  heading: string;
  body: string;
  codeSnippet?: string;
  points?: string[];
}

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
    sections: BlogSection[];
    conclusion: string;
  };
}

const blogData: BlogItem[] = [
  {
    id: 1,
    title: 'Software Development & Distributed Architecture Trends in 2026',
    desc: 'An exhaustive technical exploration of Edge Runtimes, Autonomous GitOps Pipelines, Event-Driven Microservices, and Async I/O Engineering.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    date: 'Jul 30, 2026',
    category: 'Engineering Architecture',
    readTime: '15 min read',
    content: {
      intro: 'The software engineering paradigm in 2026 has definitively moved away from centralized monolithic instances and manual deployment cycles. As modern web applications demand sub-10ms response times for users worldwide, engineering teams are transitioning toward distributed edge computing, ephemeral micro-VM execution, zero-trust cloud network layers, and autonomous GitOps workflows.',
      sections: [
        {
          heading: '1. The Edge Computing Shift: Moving Compute Adjacent to Data',
          body: 'Traditional server models routing every query to centralized cloud data centers (such as AWS us-east-1) impose unacceptable latency overheads for regional consumers. In 2026, Edge Runtimes (such as Vercel Edge Middleware, Cloudflare Workers, and Deno Deploy) compile serverless logic into lightweight V8 isolates rather than booting heavy container runtimes.',
          points: [
            'Zero Cold Starts: V8 isolates initialize in less than 5 milliseconds, completely eliminating traditional container initialization penalties.',
            'Global Geo-routing: Incoming DNS handshakes terminate at the physically nearest edge node, executing authorization and header inspection instantaneously.',
            'State Locality: Leveraging geo-replicated read replicas (e.g., Neon serverless Postgres, Upstash Redis) ensures edge compute reads data without transatlantic roundtrips.'
          ]
        },
        {
          heading: '2. High-Throughput Async Pipelines & ASGI Microservices',
          body: 'Synchronous blocking architectures (such as WSGI with Flask/Django) hold server worker threads captive during database transactions or third-party HTTP requests. High-throughput utilities—like our media extraction and conversion platforms—utilize asynchronous non-blocking event loops built upon Python FastAPI and uvloop.',
          codeSnippet: `# Production High-Throughput Async Endpoint
from fastapi import FastAPI, Depends, HTTPException, status
from pydantic import BaseModel, HttpUrl
import httpx
import asyncio

app = FastAPI(title="Edge Extraction API", version="2.0")

class ExtractionPayload(BaseModel):
    target_url: HttpUrl
    max_resolution: str = "1080p"

async def get_http_pool():
    limits = httpx.Limits(max_keepalive_connections=50, max_connections=200)
    async with httpx.AsyncClient(limits=limits, timeout=12.0) as client:
        yield client

@app.post("/api/v2/process", status_code=status.HTTP_200_OK)
async def process_media_stream(
    payload: ExtractionPayload, 
    client: httpx.AsyncClient = Depends(get_http_pool)
):
    try:
        # Non-blocking async I/O call
        upstream_resp = await client.head(str(payload.target_url))
        if upstream_resp.status_code >= 400:
            raise HTTPException(status_code=400, detail="Invalid media stream target.")
        
        return {
            "status": "processing",
            "stream_size_bytes": upstream_resp.headers.get("content-length", "unknown"),
            "protocol": "HTTP/3 Quic"
        }
    except asyncio.TimeoutError:
        raise HTTPException(status_code=504, detail="Upstream gateway timed out.")`,
          points: [
            'Handles up to 25,000 concurrent HTTP keep-alive connections on modest dual-core hardware.',
            'Replaces heavy multithreading with cooperative multitasking on single-threaded event loops.',
            'Integrated Pydantic validation ensures zero runtime crashes from malformed payloads.'
          ]
        },
        {
          heading: '3. Autonomous GitOps and Zero-Downtime Atomic Releases',
          body: 'Manual SSH deployments and ad-hoc scripts are relics of the past. Modern production pipelines employ automated GitOps with trunk-based development. Every single push initiates cryptographic linting, TypeScript static analysis, automated end-to-end headless browser suites, and immutable preview environments.',
          points: [
            'Preview Branch Parity: Every Pull Request generates an ephemeral, isolated build URL replicating production configurations.',
            'Instant Rollback Safeguards: If synthetic canary health-checks detect 5xx error spikes over 0.5%, traffic shifts back to the previous immutable hash in 1.2 seconds.',
            'Database Schema Migrations: Automated zero-lock migrations using tools like Prisma and Flyway run before traffic cutover.'
          ]
        },
        {
          heading: '4. Zero-Trust Security at the Application Layer',
          body: 'Perimeter defenses are no longer sufficient. Enterprise web platforms enforce strict Content Security Policies (CSP), sub-resource integrity, automated JWT rotation, and distributed rate limiting to neutralize OWASP Top 10 vulnerabilities.',
          codeSnippet: `// Example Production Security Headers Configuration (vercel.json)
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
      ]
    }
  ]
}`
        }
      ],
      conclusion: 'Building software in 2026 is an exercise in architectural resilience. By coupling asynchronous API runtimes with global edge caching, strict security headers, and automated GitOps verification, modern engineering teams build platforms that remain blazingly fast, stable, and secure under massive global load.'
    }
  },
  {
    id: 2,
    title: 'Modern Mobile-First Engineering: Beyond Fluid Layouts & Responsive Media',
    desc: 'A comprehensive architectural blueprint for building native-speed mobile web applications, touch UX ergonomics, adaptive network loading, and PWA offline persistence.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    date: 'Jul 29, 2026',
    category: 'Mobile UX & Systems',
    readTime: '13 min read',
    content: {
      intro: 'With over 76% of total global internet traffic originating from smartphones and handheld embedded devices, treating mobile design as an afterthought desktop resize is a recipe for product failure. True mobile-first development is not merely writing CSS media queries; it requires rethinking the critical rendering path, thumb-zone ergonomics, hardware-accelerated animations, and degraded-network resiliency.',
      sections: [
        {
          heading: '1. Ergonomics and The "Thumb Zone" Navigation Model',
          body: 'Human hands hold modern smartphones in predictable ways: one-handed thumb interaction dominates over 60% of daily device usage. Positioning key interactive elements (primary action triggers, modal dismissals, and navigation switches) in the bottom 40% of the viewport directly reduces user physical strain and boosts conversion metrics.',
          points: [
            'Bottom Sheets over Centered Dialogs: Drawers sliding from the bottom viewport are effortlessly reachable compared to top-right close buttons.',
            'Minimum 48x48px Touch Targets: Enforcing touch margins ensures users never misclick adjacent links or tiny icon buttons.',
            'Haptic and Micro-Feedback: Subtle CSS active scaling transforms flat web interfaces into tactile, native-feeling experiences.'
          ]
        },
        {
          heading: '2. The Critical Rendering Path & 60 FPS Mobile Compositing',
          body: 'Mobile processors encounter severe thermal and power throttling under heavy JavaScript workloads. Triggering CSS layout recalculations (such as animating "top", "left", "width", or "height") drops rendering framerates down to 20 FPS on budget devices. Modern mobile code exclusively animates composite-layer properties: "transform" and "opacity".',
          codeSnippet: `/* High-Performance 60 FPS Mobile Animation CSS */
.mobile-card {
  will-change: transform, opacity;
  transform: translateZ(0); /* Promotes layer to GPU hardware compositor */
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
              opacity 0.25s ease-out;
}

.mobile-card:active {
  transform: scale(0.97) translateY(2px);
}`,
          points: [
            'Bypasses CPU Paint and Reflow cycles, offloading animations directly to the mobile GPU compositor.',
            'Eliminates input lag and stuttering during complex scroll gestures on 90Hz and 120Hz mobile OLED screens.',
            'Reduces mobile battery drain during prolonged application sessions.'
          ]
        },
        {
          heading: '3. Adaptive Network Loading & Image Transcoding',
          body: 'Mobile devices frequently oscillate between ultra-fast 5G, congested public Wi-Fi, and spotty 3G cellular signals. Modern web applications utilize the Network Information API to adaptively serve compressed assets or disable heavy video backgrounds when "Save-Data" headers are detected.',
          points: [
            'Modern Format Compression: Serving AVIF or modern WebP images cuts payload sizes by 70% compared to legacy JPEGs.',
            'Responsive Srcsets: Ensuring a 400px mobile display never downloads a 2000px desktop asset.',
            'Lazy Loading with IntersectionObserver: Defers images outside the initial viewport until within 150px of entering user view.'
          ]
        },
        {
          heading: '4. Offline First: Service Workers and Cache-First Strategy',
          body: 'Network dropouts should never present a blank error screen. By embedding lightweight Service Workers, static application shells (HTML, CSS, core JS, and brand vectors) remain permanently accessible offline, syncing dynamic requests once connectivity resumes.'
        }
      ],
      conclusion: 'Mobile-first is an engineering mindset encompassing GPU rendering optimization, touch ergonomics, and extreme network frugality. Prioritizing mobile constraints yields an application that is blisteringly fast on mobile devices and practically instantaneous on desktops.'
    }
  },
  {
    id: 3,
    title: 'Enterprise AI & Automated Microservices in Production Web Platforms',
    desc: 'How production platforms integrate asynchronous queue workers, automated webhook processors, vector semantic caching, and LLM inference pipelines.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    date: 'Jul 25, 2026',
    category: 'Cloud & AI Automation',
    readTime: '16 min read',
    content: {
      intro: 'Integrating Artificial Intelligence into modern web platforms has progressed far beyond rudimentary ChatGPT API wrapper calls. Enterprise solutions in 2026 require specialized, distributed background workers capable of semantic document chunking, streaming token responses through Server-Sent Events (SSE), and preventing multi-thousand dollar API bills using vector-based semantic caching.',
      sections: [
        {
          heading: '1. Asynchronous Task Queues vs Synchronous HTTP Wait Cycles',
          body: 'AI model generation and media extraction can take between 2 to 45 seconds to finish. Forcing an open HTTP socket to wait for completion causes reverse proxy timeouts (Cloudflare 524 errors) and degrades server capacity. Enterprise setups leverage Redis-backed asynchronous broker queues (such as Celery, BullMQ, or ARQ).',
          codeSnippet: `# Asynchronous Job Dispatcher Architecture
from celery import Celery
import time

broker_url = "redis://redis-cluster.internal:6379/0"
celery_app = Celery("media_ai_tasks", broker=broker_url, backend=broker_url)

@celery_app.task(bind=True, max_retries=3, default_retry_delay=5)
def execute_ai_media_enrichment(self, asset_id: str, media_url: str):
    try:
        # Long-running extraction & multi-modal embedding generation
        print(f"Starting pipeline extraction for asset: {asset_id}")
        time.sleep(4) # Simulated heavy ML inference
        return {"status": "completed", "asset_id": asset_id, "embedding_dim": 1536}
    except Exception as exc:
        raise self.retry(exc=exc)`,
          points: [
            'Immediate Client Handshake: The web server responds in 15ms with an HTTP 202 Accepted status and a unique tracking job ID.',
            'Progress Telemetry: Frontends poll or listen via WebSockets/SSE to track real-time pipeline status (0% -> 50% -> 100%).',
            'Worker Auto-Scaling: Background compute workers automatically scale up during traffic spikes without choking user-facing web servers.'
          ]
        },
        {
          heading: '2. Semantic Vector Caching: Sashing Inference Costs by 80%',
          body: 'Many users query similar questions or process identical media streams. Traditional key-value caches fail because user phrasing varies slightly. Vector databases (such as Qdrant, Pinecone, or pgvector in PostgreSQL) calculate cosine similarity between incoming query embeddings and cached historical answers.',
          points: [
            'Cosine Similarity Matching: Queries with a similarity score >= 0.94 return cached vector representations in under 12 milliseconds.',
            'Drastic Cost Reduction: Bypasses expensive LLM token usage for frequent platform inquiries.',
            'Deterministic Latency: Delivers instantaneous answers for high-traffic FAQ and support automation.'
          ]
        },
        {
          heading: '3. Real-Time Streaming Responses via Server-Sent Events (SSE)',
          body: 'Waiting for an entire 600-word response to generate before rendering destroys perceived performance. Using HTTP Chunked Transfer and Server-Sent Events (SSE) allows platforms to stream tokens character-by-character to user screens immediately as they are generated by the model.'
        }
      ],
      conclusion: 'The winning formula for AI-driven platforms in 2026 relies on decoupling heavy compute from user-facing endpoints using resilient message brokers, optimizing response latency with streaming protocols, and shielding budget thresholds via semantic caching.'
    }
  }
];

// Styled Components
const Container = styled.div`
  padding: 5rem 4rem;
  max-width: 1300px;
  margin: 0 auto;
  min-height: 80vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  margin-bottom: 0.5rem;

  span { color: ${({ theme }) => theme.colors.primaryGreen}; }
`;

const SubTitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.grayText};
  margin-bottom: 4rem;
  font-size: 1.15rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
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
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  border: 1px solid #f1f5f9;
  overflow: hidden;
  transition: all 0.35s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 35px rgba(0, 168, 107, 0.15);
    border-color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const ImageWrapper = styled.div`
  height: 230px;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${BlogCard}:hover & img {
    transform: scale(1.06);
  }
`;

const Content = styled.div`
  padding: 1.8rem 2rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CategoryBadge = styled.span`
  color: #00A86B;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.6rem;
  display: inline-block;
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
  border-top: 1px solid #f1f5f9;
  padding-top: 1.2rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.grayText};

  span:last-child {
    color: ${({ theme }) => theme.colors.primaryGreen};
    font-weight: 700;
  }
`;

const DateText = styled.span`
  font-weight: 500;
`;

/* ===== Pop-up Modal Styles ===== */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(11, 19, 43, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 1000;
`;

const ModalCard = styled.div`
  background: #ffffff;
  width: 100%;
  max-width: 860px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 24px;
  padding: 3rem;
  position: relative;
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.3);

  @media (max-width: 640px) {
    padding: 1.8rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.8rem;
  right: 1.8rem;
  background: #f1f5f9;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
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
    transform: scale(1.05);
  }
`;

const ModalMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.88rem;
  color: #64748b;
  margin-bottom: 1rem;

  span.cat {
    color: #00A86B;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 18px;
  margin: 1.8rem 0;
  box-shadow: 0 8px 25px rgba(0,0,0,0.06);

  @media (max-width: 640px) {
    height: 220px;
  }
`;

const IntroText = styled.p`
  font-size: 1.15rem;
  font-style: italic;
  color: #1e293b;
  border-left: 4px solid #00A86B;
  padding-left: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.7;
  background: #f0fdf4;
  padding: 1.2rem 1.4rem;
  border-radius: 0 14px 14px 0;
`;

const SectionBlock = styled.div`
  margin-bottom: 2.2rem;

  h4 {
    font-size: 1.35rem;
    font-weight: 800;
    color: #0B132B;
    margin-bottom: 0.8rem;
    line-height: 1.3;
  }

  p {
    color: #475569;
    line-height: 1.8;
    font-size: 1.02rem;
  }
`;

const CodeContainer = styled.div`
  background: #0f172a;
  border-radius: 14px;
  padding: 1.2rem 1.5rem;
  margin: 1.2rem 0;
  overflow-x: auto;
  border: 1px solid #1e293b;

  pre {
    color: #e2e8f0;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 0.88rem;
    line-height: 1.6;
    margin: 0;
  }
`;

const BulletList = styled.ul`
  margin-top: 1rem;
  padding-left: 1.2rem;
  space-y: 0.8rem;

  li {
    color: #475569;
    font-size: 0.98rem;
    line-height: 1.6;
    margin-bottom: 0.6rem;
  }
`;

const KeyTakeaway = styled.div`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 16px;
  padding: 1.5rem 1.8rem;
  margin-top: 2.5rem;

  h5 {
    color: #15803d;
    font-weight: 800;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: #166534;
    font-size: 0.98rem;
    line-height: 1.6;
    margin: 0;
  }
`;

const ModalFooter = styled.div`
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #f1f5f9;
  display: flex;
  justify-content: flex-end;
`;

const CloseActionButton = styled.button`
  background: #00A86B;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #008f5a;
    transform: translateY(-2px);
  }
`;

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  return (
    <Container>
      <Title>Our <span>Insights</span> & Engineering Articles</Title>
      <SubTitle>
        In-depth technical guides, production case studies, and architecture insights from the Badri Innovation Lab team.
      </SubTitle>

      <Grid>
        {blogData.map((blog) => (
          <BlogCard key={blog.id} onClick={() => setSelectedBlog(blog)}>
            <ImageWrapper>
              <img src={blog.image} alt={blog.title} />
            </ImageWrapper>
            <Content>
              <div>
                <CategoryBadge>{blog.category}</CategoryBadge>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogDesc>{blog.desc}</BlogDesc>
              </div>
              <MetaInfo>
                <DateText>{blog.date} • {blog.readTime}</DateText>
                <span>Read Full Article →</span>
              </MetaInfo>
            </Content>
          </BlogCard>
        ))}
      </Grid>

      {/* Pop-up Deep-Dive Modal */}
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

            <h2 style={{ fontSize: '2.1rem', color: '#0B132B', lineHeight: 1.25, fontWeight: 800 }}>
              {selectedBlog.title}
            </h2>

            <ModalImage src={selectedBlog.image} alt={selectedBlog.title} />

            <IntroText>"{selectedBlog.content.intro}"</IntroText>

            {selectedBlog.content.sections.map((sec, idx) => (
              <SectionBlock key={idx}>
                <h4>{sec.heading}</h4>
                <p>{sec.body}</p>

                {sec.codeSnippet && (
                  <CodeContainer>
                    <pre>{sec.codeSnippet}</pre>
                  </CodeContainer>
                )}

                {sec.points && (
                  <BulletList>
                    {sec.points.map((pt, pIdx) => (
                      <li key={pIdx}><strong>•</strong> {pt}</li>
                    ))}
                  </BulletList>
                )}
              </SectionBlock>
            ))}

            <KeyTakeaway>
              <h5>📌 Architecture Conclusion</h5>
              <p>{selectedBlog.content.conclusion}</p>
            </KeyTakeaway>

            <ModalFooter>
              <CloseActionButton onClick={() => setSelectedBlog(null)}>
                Close Article
              </CloseActionButton>
            </ModalFooter>
          </ModalCard>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Blog;
