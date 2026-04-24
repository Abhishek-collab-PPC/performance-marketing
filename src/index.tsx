import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Serve favicon
app.get('/favicon.ico', serveStatic({ root: './public', path: '/static/favicon.svg' }))

// Main page
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Abhishek J. – Performance Marketing Expert | Google Ads & Meta Ads</title>
  <meta name="description" content="Google-certified Performance Marketing Expert with 6+ years managing Google Ads, Meta Ads, and Microsoft Ads for eCommerce brands. $100M+ revenue generated. Top Rated on Upwork.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css">
  <link rel="icon" type="image/svg+xml" href="/static/favicon.svg">
  <link rel="stylesheet" href="/static/style.css">
</head>
<body>

  <!-- ========== NAVIGATION ========== -->
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#" class="nav-logo">
        <span class="logo-icon"><i class="fas fa-chart-line"></i></span>
        <span class="logo-text">Abhishek<span class="logo-accent">.</span></span>
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#services" class="nav-link">Services</a></li>
        <li><a href="#results" class="nav-link">Results</a></li>
        <li><a href="#case-studies" class="nav-link">Case Studies</a></li>
        <li><a href="#testimonials" class="nav-link">Testimonials</a></li>
        <li><a href="#contact" class="nav-cta">Let's Talk</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- ========== HERO SECTION ========== -->
  <section class="hero" id="hero">
    <div class="hero-bg">
      <div class="hero-grid"></div>
      <div class="hero-blob blob-1"></div>
      <div class="hero-blob blob-2"></div>
      <div class="hero-blob blob-3"></div>
    </div>
    <div class="container hero-content">
      <div class="hero-badge animate-in" data-delay="0">
        <i class="fas fa-star"></i>
        <span>Top Rated on Upwork · 100% Job Success Score</span>
      </div>
      <h1 class="hero-title animate-in" data-delay="1">
        Turning Ad Spend Into<br>
        <span class="gradient-text">Predictable Revenue</span>
      </h1>
      <p class="hero-subtitle animate-in" data-delay="2">
        Google-certified Paid Media Strategist with 6+ years scaling eCommerce brands and lead gen businesses across the US, UK, Canada, Australia, UAE &amp; Europe.<br>
        <strong>$100M+ revenue generated. 100+ accounts managed.</strong>
      </p>
      <div class="hero-actions animate-in" data-delay="3">
        <a href="#contact" class="btn-primary">
          <i class="fas fa-rocket"></i>
          Get a Free Strategy Call
        </a>
        <a href="#case-studies" class="btn-secondary">
          <i class="fas fa-chart-bar"></i>
          View Case Studies
        </a>
      </div>
      <div class="hero-trust animate-in" data-delay="4">
        <div class="trust-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png" alt="Google Partner" class="trust-logo">
          <span>Certified</span>
        </div>
        <div class="trust-divider"></div>
        <div class="trust-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Meta_Platforms_Inc._logo.svg/220px-Meta_Platforms_Inc._logo.svg.png" alt="Meta Partner" class="trust-logo">
          <span>Expert</span>
        </div>
        <div class="trust-divider"></div>
        <div class="trust-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Upwork_logo.svg/220px-Upwork_logo.svg.png" alt="Upwork Top Rated" class="trust-logo">
          <span>Top Rated</span>
        </div>
      </div>
    </div>
    <div class="hero-scroll-indicator">
      <div class="scroll-dot"></div>
    </div>
  </section>

  <!-- ========== STATS SECTION ========== -->
  <section class="stats-section" id="results">
    <div class="container">
      <div class="stats-header">
        <p class="section-label">Proven Track Record</p>
        <h2 class="section-title">Numbers That Speak<br><span class="gradient-text">For Themselves</span></h2>
      </div>
      <div class="stats-grid">
        <div class="stat-card animate-on-scroll">
          <div class="stat-icon"><i class="fas fa-dollar-sign"></i></div>
          <div class="stat-number" data-target="100" data-suffix="M+">$0</div>
          <div class="stat-label">Revenue Generated</div>
          <div class="stat-desc">Across all clients through strategic paid media campaigns</div>
        </div>
        <div class="stat-card animate-on-scroll">
          <div class="stat-icon"><i class="fas fa-chart-line"></i></div>
          <div class="stat-number" data-target="300" data-suffix="%">0%</div>
          <div class="stat-label">Peak ROAS Achieved</div>
          <div class="stat-desc">Sustained on a $3.1M annual budget for AU furniture brand</div>
        </div>
        <div class="stat-card animate-on-scroll">
          <div class="stat-icon"><i class="fas fa-briefcase"></i></div>
          <div class="stat-number" data-target="100" data-suffix="+">0</div>
          <div class="stat-label">Accounts Managed</div>
          <div class="stat-desc">Including 50+ DTC brands with consistent YoY ROAS growth</div>
        </div>
        <div class="stat-card animate-on-scroll">
          <div class="stat-icon"><i class="fas fa-trending-up"></i></div>
          <div class="stat-number" data-target="25" data-suffix="%">0%</div>
          <div class="stat-label">Revenue Growth MoM</div>
          <div class="stat-desc">Consistent month-over-month gains for eCommerce clients</div>
        </div>
        <div class="stat-card animate-on-scroll">
          <div class="stat-icon"><i class="fas fa-globe"></i></div>
          <div class="stat-number" data-target="450" data-suffix="K">$0</div>
          <div class="stat-label">Max Monthly Budget</div>
          <div class="stat-desc">Managed campaigns up to $450K/month across verticals</div>
        </div>
        <div class="stat-card animate-on-scroll">
          <div class="stat-icon"><i class="fas fa-star"></i></div>
          <div class="stat-number" data-target="100" data-suffix="%">0%</div>
          <div class="stat-label">Upwork JSS</div>
          <div class="stat-desc">100% Job Success Score — Top Rated Freelancer</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== ABOUT SECTION ========== -->
  <section class="about-section" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-visual animate-on-scroll">
          <div class="about-image-wrap">
            <div class="about-image-placeholder">
              <div class="profile-avatar">
                <i class="fas fa-user-tie"></i>
              </div>
              <div class="platform-badges">
                <div class="platform-badge google"><i class="fab fa-google"></i> Google Ads</div>
                <div class="platform-badge meta"><i class="fab fa-meta"></i> Meta Ads</div>
                <div class="platform-badge ms"><i class="fab fa-microsoft"></i> Microsoft Ads</div>
                <div class="platform-badge amazon"><i class="fab fa-amazon"></i> Amazon Ads</div>
              </div>
            </div>
            <div class="experience-badge">
              <span class="exp-number">6+</span>
              <span class="exp-text">Years<br>Experience</span>
            </div>
          </div>
        </div>
        <div class="about-content animate-on-scroll">
          <p class="section-label">About Me</p>
          <h2 class="section-title">Most Paid Media Accounts Have a <span class="gradient-text">Systems Problem</span></h2>
          <p class="about-text">
            Broken tracking. Underperforming feeds. Performance Max running without clean signals. Creative and bidding misaligned. That's where growth stalls — and that's exactly where I come in.
          </p>
          <p class="about-text">
            I'm a paid media strategist with <strong>6+ years</strong> managing Google Ads, Meta Ads, and Microsoft Ads for eCommerce brands and lead generation businesses across the US, UK, Canada, and Australia. Currently Head of Marketing at Advance and Beyond, previously at ShoppingIQ (a Google CSS Partner).
          </p>
          <div class="pillars-list">
            <h3 class="pillars-title">My 5 Core Pillars</h3>
            <div class="pillar-item">
              <div class="pillar-icon"><i class="fas fa-code-branch"></i></div>
              <div>
                <strong>Tracking Architecture</strong>
                <span>GA4, GTM, CAPI, Enhanced Conversions, UET — that actually works</span>
              </div>
            </div>
            <div class="pillar-item">
              <div class="pillar-icon"><i class="fas fa-store"></i></div>
              <div>
                <strong>Product Feed Engineering</strong>
                <span>Merchant Center optimization for maximum auction eligibility</span>
              </div>
            </div>
            <div class="pillar-item">
              <div class="pillar-icon"><i class="fas fa-sitemap"></i></div>
              <div>
                <strong>Structured Campaign Frameworks</strong>
                <span>Search, Shopping, and Performance Max built for scale</span>
              </div>
            </div>
            <div class="pillar-item">
              <div class="pillar-icon"><i class="fas fa-search"></i></div>
              <div>
                <strong>Query-Level Refinement</strong>
                <span>Signal quality improvements that unlock machine learning efficiency</span>
              </div>
            </div>
            <div class="pillar-item">
              <div class="pillar-icon"><i class="fas fa-magic"></i></div>
              <div>
                <strong>Creative & Bidding Alignment</strong>
                <span>Matching creative strategy with bid intelligence for maximum performance</span>
              </div>
            </div>
          </div>
          <div class="about-actions">
            <a href="#contact" class="btn-primary"><i class="fas fa-calendar"></i> Book a Strategy Call</a>
            <a href="https://www.linkedin.com/in/abhishek-ppc-expert/" target="_blank" class="btn-ghost"><i class="fab fa-linkedin"></i> LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== SERVICES SECTION ========== -->
  <section class="services-section" id="services">
    <div class="container">
      <div class="section-header">
        <p class="section-label">What I Do</p>
        <h2 class="section-title">Full-Funnel Paid Media<br><span class="gradient-text">Services</span></h2>
        <p class="section-subtitle">End-to-end performance marketing systems built for sustainable, profitable growth</p>
      </div>
      <div class="services-grid">
        <div class="service-card animate-on-scroll featured">
          <div class="service-badge">Most Popular</div>
          <div class="service-icon"><i class="fab fa-google"></i></div>
          <h3>Google Ads Management</h3>
          <p>Full-funnel Google Ads strategy covering Search, Shopping, Performance Max, Display, and Video campaigns. Structured for scale with rigorous query-level management.</p>
          <ul class="service-features">
            <li><i class="fas fa-check"></i> Search &amp; Shopping Campaign Architecture</li>
            <li><i class="fas fa-check"></i> Performance Max Optimization</li>
            <li><i class="fas fa-check"></i> Negative Keyword Mining</li>
            <li><i class="fas fa-check"></i> Bid Strategy Management</li>
            <li><i class="fas fa-check"></i> Weekly Performance Reporting</li>
          </ul>
          <a href="#contact" class="service-cta">Get Started <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card animate-on-scroll">
          <div class="service-icon"><i class="fab fa-meta"></i></div>
          <h3>Meta Ads (Facebook &amp; Instagram)</h3>
          <p>Strategic Meta advertising with advanced audience architecture, creative testing frameworks, and CAPI implementation for accurate conversion tracking.</p>
          <ul class="service-features">
            <li><i class="fas fa-check"></i> Audience Architecture &amp; Segmentation</li>
            <li><i class="fas fa-check"></i> Creative Testing Frameworks</li>
            <li><i class="fas fa-check"></i> Conversions API (CAPI) Setup</li>
            <li><i class="fas fa-check"></i> Retargeting &amp; Lookalike Campaigns</li>
            <li><i class="fas fa-check"></i> Attribution Modelling</li>
          </ul>
          <a href="#contact" class="service-cta">Get Started <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card animate-on-scroll">
          <div class="service-icon"><i class="fas fa-cogs"></i></div>
          <h3>Tracking Architecture</h3>
          <p>End-to-end conversion tracking setup ensuring every click, lead, and sale is properly attributed — the foundation of every data-driven decision.</p>
          <ul class="service-features">
            <li><i class="fas fa-check"></i> GA4 Setup &amp; Configuration</li>
            <li><i class="fas fa-check"></i> Google Tag Manager</li>
            <li><i class="fas fa-check"></i> Enhanced Conversions</li>
            <li><i class="fas fa-check"></i> Facebook Pixel + CAPI</li>
            <li><i class="fas fa-check"></i> UET for Microsoft Ads</li>
          </ul>
          <a href="#contact" class="service-cta">Get Started <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card animate-on-scroll">
          <div class="service-icon"><i class="fas fa-shopping-cart"></i></div>
          <h3>Product Feed Engineering</h3>
          <p>Merchant Center optimization and product feed engineering to improve auction eligibility, Shopping performance, and CSS advantage utilization.</p>
          <ul class="service-features">
            <li><i class="fas fa-check"></i> Google Merchant Center Setup</li>
            <li><i class="fas fa-check"></i> Feed Attribute Optimization</li>
            <li><i class="fas fa-check"></i> Google CSS Partner Benefits</li>
            <li><i class="fas fa-check"></i> Product Title &amp; Description Optimization</li>
            <li><i class="fas fa-check"></i> Disapproval Resolution</li>
          </ul>
          <a href="#contact" class="service-cta">Get Started <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card animate-on-scroll">
          <div class="service-icon"><i class="fas fa-users"></i></div>
          <h3>Lead Generation Campaigns</h3>
          <p>High-converting lead gen campaigns across Google and Meta for service businesses in roofing, healthcare, real estate, and B2B sectors.</p>
          <ul class="service-features">
            <li><i class="fas fa-check"></i> Lead Magnet Strategy</li>
            <li><i class="fas fa-check"></i> Landing Page CRO</li>
            <li><i class="fas fa-check"></i> CPL Optimization</li>
            <li><i class="fas fa-check"></i> Lead Quality Scoring</li>
            <li><i class="fas fa-check"></i> Multi-Platform Attribution</li>
          </ul>
          <a href="#contact" class="service-cta">Get Started <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card animate-on-scroll">
          <div class="service-icon"><i class="fas fa-chart-pie"></i></div>
          <h3>Performance Audit &amp; Strategy</h3>
          <p>Comprehensive audit of your existing paid media accounts identifying wasted spend, missed opportunities, and a 90-day growth roadmap.</p>
          <ul class="service-features">
            <li><i class="fas fa-check"></i> Full Account Audit</li>
            <li><i class="fas fa-check"></i> Competitor Analysis</li>
            <li><i class="fas fa-check"></i> 90-Day Growth Roadmap</li>
            <li><i class="fas fa-check"></i> Budget Allocation Strategy</li>
            <li><i class="fas fa-check"></i> Quick-Win Identification</li>
          </ul>
          <a href="#contact" class="service-cta">Get Started <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== APPROACH SECTION ========== -->
  <section class="approach-section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">My Methodology</p>
        <h2 class="section-title">A <span class="gradient-text">Data-First</span> Approach<br>to Paid Media</h2>
      </div>
      <div class="approach-steps">
        <div class="approach-step animate-on-scroll">
          <div class="step-number">01</div>
          <div class="step-icon"><i class="fas fa-microscope"></i></div>
          <h3>Deep Audit &amp; Discovery</h3>
          <p>Full account audit — tracking health, campaign structure, feed quality, signal cleanliness, budget allocation, and competitor landscape.</p>
        </div>
        <div class="approach-connector"></div>
        <div class="approach-step animate-on-scroll">
          <div class="step-number">02</div>
          <div class="step-icon"><i class="fas fa-drafting-compass"></i></div>
          <h3>Infrastructure Build</h3>
          <p>Fix tracking, optimize feeds, restructure campaigns. Build the foundation that makes machine learning efficient and data reliable.</p>
        </div>
        <div class="approach-connector"></div>
        <div class="approach-step animate-on-scroll">
          <div class="step-number">03</div>
          <div class="step-icon"><i class="fas fa-rocket"></i></div>
          <h3>Launch &amp; Scale</h3>
          <p>Methodical launch with controlled budget scaling. Test creatives, validate signals, refine queries — scale what works, cut what doesn't.</p>
        </div>
        <div class="approach-connector"></div>
        <div class="approach-step animate-on-scroll">
          <div class="step-number">04</div>
          <div class="step-icon"><i class="fas fa-sync-alt"></i></div>
          <h3>Optimize &amp; Report</h3>
          <p>Continuous optimization with weekly transparent reporting. ROAS, CPL, revenue — every metric tied to business outcomes.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== CASE STUDIES SECTION ========== -->
  <section class="case-studies-section" id="case-studies">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Case Studies</p>
        <h2 class="section-title">Real Campaigns.<br><span class="gradient-text">Real Results.</span></h2>
        <p class="section-subtitle">A selection of performance marketing wins across eCommerce, fashion, and lead generation</p>
      </div>
      <div class="case-studies-grid">

        <div class="case-study-card animate-on-scroll featured-case">
          <div class="case-study-header">
            <div class="case-tag ecommerce">eCommerce</div>
            <div class="case-location"><i class="fas fa-map-marker-alt"></i> Australia</div>
          </div>
          <div class="case-study-icon"><i class="fas fa-couch"></i></div>
          <h3 class="case-study-title">Furniture eCommerce Scale-Up</h3>
          <p class="case-study-desc">Scaled an Australia-based furniture store through strategic Google Shopping and Performance Max campaigns, achieving sustained profitability at significant scale over 12 months.</p>
          <div class="case-metrics">
            <div class="metric-item">
              <span class="metric-value highlight">300%</span>
              <span class="metric-label">ROAS Sustained</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">$3.1M</span>
              <span class="metric-label">Annual Budget</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">12 mo</span>
              <span class="metric-label">Duration</span>
            </div>
          </div>
          <div class="case-tags">
            <span>Google Shopping</span><span>Performance Max</span><span>Feed Optimization</span>
          </div>
        </div>

        <div class="case-study-card animate-on-scroll">
          <div class="case-study-header">
            <div class="case-tag ecommerce">eCommerce</div>
            <div class="case-location"><i class="fas fa-map-marker-alt"></i> United Kingdom</div>
          </div>
          <div class="case-study-icon"><i class="fas fa-puzzle-piece"></i></div>
          <h3 class="case-study-title">Lego Business UK Growth</h3>
          <p class="case-study-desc">Architected and optimized Search, Shopping, and Performance Max structures for a UK-based Lego specialist, driving substantial revenue with consistent year-over-year improvement.</p>
          <div class="case-metrics">
            <div class="metric-item">
              <span class="metric-value highlight">£7.5M+</span>
              <span class="metric-label">Revenue (12 mo)</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">11%</span>
              <span class="metric-label">YoY Growth</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">12 mo</span>
              <span class="metric-label">Duration</span>
            </div>
          </div>
          <div class="case-tags">
            <span>Google Search</span><span>Shopping</span><span>PMax</span>
          </div>
        </div>

        <div class="case-study-card animate-on-scroll">
          <div class="case-study-header">
            <div class="case-tag fashion">Fashion</div>
            <div class="case-location"><i class="fas fa-map-marker-alt"></i> France</div>
          </div>
          <div class="case-study-icon"><i class="fas fa-tshirt"></i></div>
          <h3 class="case-study-title">French Clothing Brand Expansion</h3>
          <p class="case-study-desc">Generated massive revenue growth in just 90 days through Google Ads for a France-based fashion brand expanding into new European markets with aggressive scaling strategy.</p>
          <div class="case-metrics">
            <div class="metric-item">
              <span class="metric-value highlight">€1.5M+</span>
              <span class="metric-label">Revenue (90 days)</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">960%</span>
              <span class="metric-label">Revenue Growth</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">90 days</span>
              <span class="metric-label">Duration</span>
            </div>
          </div>
          <div class="case-tags">
            <span>Google Ads</span><span>European Expansion</span><span>Shopping</span>
          </div>
        </div>

        <div class="case-study-card animate-on-scroll">
          <div class="case-study-header">
            <div class="case-tag fashion">Fashion</div>
            <div class="case-location"><i class="fas fa-map-marker-alt"></i> UAE</div>
          </div>
          <div class="case-study-icon"><i class="fas fa-swimmer"></i></div>
          <h3 class="case-study-title">UAE Swimwear Brand Growth</h3>
          <p class="case-study-desc">Drove significant revenue through strategic paid ads management for a UAE-based clothing brand specializing in swimwear, leveraging cross-platform campaign management.</p>
          <div class="case-metrics">
            <div class="metric-item">
              <span class="metric-value highlight">AED 7M</span>
              <span class="metric-label">Revenue (2025)</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">UAE</span>
              <span class="metric-label">Market</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">2025</span>
              <span class="metric-label">Year</span>
            </div>
          </div>
          <div class="case-tags">
            <span>Meta Ads</span><span>Google Ads</span><span>Fashion</span>
          </div>
        </div>

        <div class="case-study-card animate-on-scroll">
          <div class="case-study-header">
            <div class="case-tag dtc">DTC</div>
            <div class="case-location"><i class="fas fa-map-marker-alt"></i> United States</div>
          </div>
          <div class="case-study-icon"><i class="fas fa-box-open"></i></div>
          <h3 class="case-study-title">DTC Brand Revenue Growth</h3>
          <p class="case-study-desc">Implemented full-funnel marketing strategy for a US direct-to-consumer brand, achieving consistent month-over-month revenue increases while reducing customer acquisition cost.</p>
          <div class="case-metrics">
            <div class="metric-item">
              <span class="metric-value highlight">25% MoM</span>
              <span class="metric-label">Revenue Growth</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">$500K+</span>
              <span class="metric-label">Revenue Lift</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">35%</span>
              <span class="metric-label">CAC Reduction</span>
            </div>
          </div>
          <div class="case-tags">
            <span>Full-Funnel</span><span>Meta + Google</span><span>DTC</span>
          </div>
        </div>

        <div class="case-study-card animate-on-scroll">
          <div class="case-study-header">
            <div class="case-tag leadgen">Lead Gen</div>
            <div class="case-location"><i class="fas fa-map-marker-alt"></i> United States</div>
          </div>
          <div class="case-study-icon"><i class="fas fa-funnel-dollar"></i></div>
          <h3 class="case-study-title">Multi-Vertical Lead Generation</h3>
          <p class="case-study-desc">Optimized lead generation campaigns across roofing, healthcare, and real estate verticals. Significantly reduced cost per lead while maintaining and improving lead quality scores.</p>
          <div class="case-metrics">
            <div class="metric-item">
              <span class="metric-value highlight">50%</span>
              <span class="metric-label">CPL Reduction</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">10K+</span>
              <span class="metric-label">Leads Generated</span>
            </div>
            <div class="metric-item">
              <span class="metric-value">18%</span>
              <span class="metric-label">Conversion Rate</span>
            </div>
          </div>
          <div class="case-tags">
            <span>Lead Gen</span><span>Roofing</span><span>Healthcare</span><span>Real Estate</span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ========== TESTIMONIALS ========== -->
  <section class="testimonials-section" id="testimonials">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Client Testimonials</p>
        <h2 class="section-title">What Clients Say<br><span class="gradient-text">About Working With Me</span></h2>
        <div class="upwork-badge-row">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Upwork_logo.svg/220px-Upwork_logo.svg.png" alt="Upwork" class="upwork-logo">
          <span class="jss-badge"><i class="fas fa-star"></i> 100% Job Success Score · Top Rated</span>
        </div>
      </div>
      <div class="testimonials-grid">

        <div class="testimonial-card animate-on-scroll featured-testimonial">
          <div class="testimonial-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <blockquote>"Abhishek scaled our paid media from a modest budget to $3.1M annually while maintaining a consistent 300% ROAS. His data-driven approach and transparent reporting made all the difference. He doesn't just manage ads — he builds systems."</blockquote>
          <div class="testimonial-author">
            <div class="author-avatar"><i class="fas fa-user"></i></div>
            <div class="author-info">
              <strong>eCommerce Director</strong>
              <span>Australia-Based Furniture Brand</span>
              <div class="platform-tag direct"><i class="fas fa-handshake"></i> Direct Client</div>
            </div>
          </div>
        </div>

        <div class="testimonial-card animate-on-scroll">
          <div class="testimonial-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <blockquote>"In just 12 months, Abhishek helped us reach £7.5M+ in revenue with an 11% year-over-year improvement. His expertise in Performance Max and Shopping campaigns is unmatched. Truly a strategic partner, not just an ads manager."</blockquote>
          <div class="testimonial-author">
            <div class="author-avatar"><i class="fas fa-user"></i></div>
            <div class="author-info">
              <strong>Founder &amp; CEO</strong>
              <span>UK Lego Business</span>
              <div class="platform-tag direct"><i class="fas fa-handshake"></i> Direct Client</div>
            </div>
          </div>
        </div>

        <div class="testimonial-card animate-on-scroll">
          <div class="testimonial-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <blockquote>"Really great working with Abhishek. He knows his craft, communication is super. Serious improvement in many stores' results. He took the time to understand our business goals before touching a single setting. Highly recommended!"</blockquote>
          <div class="testimonial-author">
            <div class="author-avatar"><i class="fas fa-user"></i></div>
            <div class="author-info">
              <strong>eCommerce Store Owner</strong>
              <span>eCommerce &amp; Dropshipping</span>
              <div class="platform-tag upwork"><i class="fas fa-briefcase"></i> Upwork Client</div>
            </div>
          </div>
        </div>

        <div class="testimonial-card animate-on-scroll">
          <div class="testimonial-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <blockquote>"The tracking setup Abhishek built for us completely transformed how we make decisions. For the first time, we had clean, reliable data flowing from every touchpoint. Our ROAS improved 40% just from fixing attribution."</blockquote>
          <div class="testimonial-author">
            <div class="author-avatar"><i class="fas fa-user"></i></div>
            <div class="author-info">
              <strong>Head of Digital</strong>
              <span>US-Based SaaS Brand</span>
              <div class="platform-tag upwork"><i class="fas fa-briefcase"></i> Upwork Client</div>
            </div>
          </div>
        </div>

        <div class="testimonial-card animate-on-scroll">
          <div class="testimonial-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <blockquote>"We were burning budget on a poorly structured PMax campaign. Abhishek audited, rebuilt, and within 60 days we saw our cost-per-acquisition drop by 45% while revenue held steady. Exactly what we needed."</blockquote>
          <div class="testimonial-author">
            <div class="author-avatar"><i class="fas fa-user"></i></div>
            <div class="author-info">
              <strong>Marketing Manager</strong>
              <span>Fashion Brand, Europe</span>
              <div class="platform-tag direct"><i class="fas fa-handshake"></i> Direct Client</div>
            </div>
          </div>
        </div>

        <div class="testimonial-card animate-on-scroll">
          <div class="testimonial-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <blockquote>"Professional, proactive, and results-focused. Abhishek doesn't just send reports — he tells you what they mean and what to do next. Our lead volume doubled in 3 months with a 30% lower CPL. He exceeded every expectation."</blockquote>
          <div class="testimonial-author">
            <div class="author-avatar"><i class="fas fa-user"></i></div>
            <div class="author-info">
              <strong>Business Owner</strong>
              <span>Home Services, USA</span>
              <div class="platform-tag upwork"><i class="fas fa-briefcase"></i> Upwork Client</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ========== CREDENTIALS SECTION ========== -->
  <section class="credentials-section" id="credentials">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Credentials &amp; Expertise</p>
        <h2 class="section-title">Certified, Experienced,<br><span class="gradient-text">and Results-Driven</span></h2>
      </div>
      <div class="credentials-grid">
        <div class="credentials-left animate-on-scroll">
          <h3>Google Certifications</h3>
          <div class="cert-list">
            <div class="cert-item">
              <div class="cert-icon google"><i class="fab fa-google"></i></div>
              <div class="cert-info">
                <strong>Google Ads Search Certification</strong>
                <span>Google Digital Academy (Skillshop) · 2025–2026</span>
              </div>
              <div class="cert-status active">Active</div>
            </div>
            <div class="cert-item">
              <div class="cert-icon google"><i class="fab fa-google"></i></div>
              <div class="cert-info">
                <strong>AI-Powered Shopping Ads Certification</strong>
                <span>Google Digital Academy (Skillshop) · 2025–2026</span>
              </div>
              <div class="cert-status active">Active</div>
            </div>
            <div class="cert-item">
              <div class="cert-icon google"><i class="fab fa-google"></i></div>
              <div class="cert-info">
                <strong>Google Ads Display Certification</strong>
                <span>Google Digital Academy (Skillshop) · 2025–2026</span>
              </div>
              <div class="cert-status active">Active</div>
            </div>
            <div class="cert-item">
              <div class="cert-icon google"><i class="fab fa-google"></i></div>
              <div class="cert-info">
                <strong>Google Ads Video Certification</strong>
                <span>Google Digital Academy (Skillshop) · 2025–2026</span>
              </div>
              <div class="cert-status active">Active</div>
            </div>
            <div class="cert-item">
              <div class="cert-icon google"><i class="fab fa-google"></i></div>
              <div class="cert-info">
                <strong>Google Ads Measurement Certification</strong>
                <span>Google Digital Academy (Skillshop) · 2025</span>
              </div>
              <div class="cert-status active">Active</div>
            </div>
            <div class="cert-item">
              <div class="cert-icon google"><i class="fab fa-google"></i></div>
              <div class="cert-info">
                <strong>Google Ads Apps Certification</strong>
                <span>Google Digital Academy (Skillshop) · 2025–2026</span>
              </div>
              <div class="cert-status active">Active</div>
            </div>
            <div class="cert-item">
              <div class="cert-icon google"><i class="fab fa-google"></i></div>
              <div class="cert-info">
                <strong>Search Ads 360 Certification</strong>
                <span>Google Digital Academy (Skillshop) · 2025–2026</span>
              </div>
              <div class="cert-status active">Active</div>
            </div>
            <div class="cert-item">
              <div class="cert-icon amazon"><i class="fab fa-amazon"></i></div>
              <div class="cert-info">
                <strong>Amazon Ads Foundations Certification</strong>
                <span>Amazon · 2025–2027</span>
              </div>
              <div class="cert-status active">Active</div>
            </div>
          </div>
        </div>
        <div class="credentials-right animate-on-scroll">
          <div class="skills-section">
            <h3>Core Skills &amp; Platforms</h3>
            <div class="skills-cloud">
              <span class="skill-tag primary">Google Ads</span>
              <span class="skill-tag primary">Meta Ads</span>
              <span class="skill-tag primary">Performance Max</span>
              <span class="skill-tag">Google Shopping</span>
              <span class="skill-tag">Microsoft Ads</span>
              <span class="skill-tag">GA4</span>
              <span class="skill-tag">Google Tag Manager</span>
              <span class="skill-tag">Conversions API</span>
              <span class="skill-tag">Enhanced Conversions</span>
              <span class="skill-tag primary">Product Feed Engineering</span>
              <span class="skill-tag">Google Merchant Center</span>
              <span class="skill-tag">Amazon Ads</span>
              <span class="skill-tag">Search Ads 360</span>
              <span class="skill-tag">eCommerce Strategy</span>
              <span class="skill-tag primary">Lead Generation</span>
              <span class="skill-tag">UET (Microsoft)</span>
              <span class="skill-tag">Shopify</span>
              <span class="skill-tag">WordPress / WooCommerce</span>
            </div>
          </div>
          <div class="industries-section">
            <h3>Industries Served</h3>
            <div class="industries-grid">
              <div class="industry-item"><i class="fas fa-shopping-bag"></i> Fashion &amp; Apparel</div>
              <div class="industry-item"><i class="fas fa-couch"></i> Furniture &amp; Home</div>
              <div class="industry-item"><i class="fas fa-home"></i> Real Estate</div>
              <div class="industry-item"><i class="fas fa-heartbeat"></i> Healthcare</div>
              <div class="industry-item"><i class="fas fa-hammer"></i> Home Services</div>
              <div class="industry-item"><i class="fas fa-box"></i> DTC / eCommerce</div>
              <div class="industry-item"><i class="fas fa-laptop"></i> SaaS / Tech</div>
              <div class="industry-item"><i class="fas fa-gamepad"></i> Toys &amp; Hobbies</div>
            </div>
          </div>
          <div class="experience-timeline">
            <h3>Career Timeline</h3>
            <div class="timeline">
              <div class="timeline-item current">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <strong>Head of Marketing</strong>
                  <span>Advance and Beyond — Google Ads eCommerce Agency</span>
                  <time>Mar 2026 – Present</time>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <strong>Paid Media Specialist</strong>
                  <span>ShoppingIQ — Google CSS Partner (UK &amp; EU Markets)</span>
                  <time>Sep 2024 – Feb 2026</time>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <strong>Sr. PPC Specialist</strong>
                  <span>YDreamz Solutions — 100+ Accounts, $450K/mo Budgets</span>
                  <time>May 2022 – Aug 2024</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== CONTACT SECTION ========== -->
  <section class="contact-section" id="contact">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Let's Work Together</p>
        <h2 class="section-title">Ready to Turn Your Ad Spend<br>Into <span class="gradient-text">Profitable Revenue?</span></h2>
        <p class="section-subtitle">Whether you're an eCommerce brand, a lead gen business, or a founder looking to build a paid media engine that performs consistently — let's talk.</p>
      </div>
      <div class="contact-grid">
        <div class="contact-info animate-on-scroll">
          <div class="contact-card">
            <div class="contact-item">
              <div class="contact-icon"><i class="fas fa-globe"></i></div>
              <div>
                <strong>Available Worldwide</strong>
                <span>US · UK · Canada · Australia · UAE · Europe</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon"><i class="fas fa-clock"></i></div>
              <div>
                <strong>Quick Response</strong>
                <span>Typically responds within 24 hours</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon"><i class="fas fa-check-circle"></i></div>
              <div>
                <strong>Free Strategy Call</strong>
                <span>30-minute audit + roadmap for your account</span>
              </div>
            </div>
          </div>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/abhishek-ppc-expert/" target="_blank" class="social-link linkedin">
              <i class="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://www.upwork.com/freelancers/ppcbyabhishek" target="_blank" class="social-link upwork-link">
              <i class="fas fa-briefcase"></i>
              <span>Upwork Profile</span>
            </a>
          </div>
          <div class="contact-quote">
            <i class="fas fa-quote-left"></i>
            <p>"I don't believe in just increasing budgets. I believe in building the infrastructure that makes scale sustainable."</p>
            <cite>— Abhishek J.</cite>
          </div>
        </div>
        <div class="contact-form-wrap animate-on-scroll">
          <form class="contact-form" id="contactForm">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Your Name *</label>
                <input type="text" id="name" name="name" placeholder="John Smith" required>
              </div>
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="john@company.com" required>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="business">Business / Website</label>
                <input type="text" id="business" name="business" placeholder="mystore.com">
              </div>
              <div class="form-group">
                <label for="budget">Monthly Ad Budget</label>
                <select id="budget" name="budget">
                  <option value="">Select budget range</option>
                  <option value="under5k">Under $5,000/mo</option>
                  <option value="5k-20k">$5,000 – $20,000/mo</option>
                  <option value="20k-50k">$20,000 – $50,000/mo</option>
                  <option value="50k-100k">$50,000 – $100,000/mo</option>
                  <option value="over100k">Over $100,000/mo</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="service">Service Needed</label>
              <select id="service" name="service">
                <option value="">Select a service</option>
                <option value="google-ads">Google Ads Management</option>
                <option value="meta-ads">Meta Ads (Facebook/Instagram)</option>
                <option value="tracking">Tracking Architecture Setup</option>
                <option value="feed">Product Feed Engineering</option>
                <option value="lead-gen">Lead Generation Campaigns</option>
                <option value="audit">Performance Audit &amp; Strategy</option>
                <option value="full-service">Full-Service Paid Media</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Tell Me About Your Goals *</label>
              <textarea id="message" name="message" rows="4" placeholder="What are you currently spending? What results are you getting? What's your goal?" required></textarea>
            </div>
            <button type="submit" class="btn-primary btn-full" id="submitBtn">
              <i class="fas fa-paper-plane"></i>
              Send Message &amp; Get Free Audit
            </button>
            <p class="form-note"><i class="fas fa-lock"></i> Your information is 100% confidential. No spam, ever.</p>
          </form>
          <div class="form-success" id="formSuccess" style="display:none">
            <div class="success-icon"><i class="fas fa-check-circle"></i></div>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. I'll review your details and get back to you within 24 hours with a personalized strategy overview.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== FOOTER ========== -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#" class="nav-logo">
            <span class="logo-icon"><i class="fas fa-chart-line"></i></span>
            <span class="logo-text">Abhishek<span class="logo-accent">.</span></span>
          </a>
          <p>Paid Media Strategist for eCommerce &amp; Lead Gen. Building performance systems that scale profitably.</p>
          <div class="footer-social">
            <a href="https://www.linkedin.com/in/abhishek-ppc-expert/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.upwork.com/freelancers/ppcbyabhishek" target="_blank"><i class="fas fa-briefcase"></i></a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Google Ads Management</a></li>
            <li><a href="#services">Meta Ads</a></li>
            <li><a href="#services">Tracking Architecture</a></li>
            <li><a href="#services">Product Feed Engineering</a></li>
            <li><a href="#services">Lead Generation</a></li>
            <li><a href="#services">Performance Audit</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Markets</h4>
          <ul>
            <li><a href="#contact">United States</a></li>
            <li><a href="#contact">United Kingdom</a></li>
            <li><a href="#contact">Canada</a></li>
            <li><a href="#contact">Australia</a></li>
            <li><a href="#contact">UAE</a></li>
            <li><a href="#contact">Europe</a></li>
          </ul>
        </div>
        <div class="footer-cta-block">
          <h4>Ready to Scale?</h4>
          <p>Get a free 30-minute strategy call and paid media audit.</p>
          <a href="#contact" class="btn-primary">Book Free Call</a>
          <div class="footer-trust">
            <div class="trust-row">
              <i class="fas fa-star"></i>
              <span>100% Job Success Score on Upwork</span>
            </div>
            <div class="trust-row">
              <i class="fas fa-certificate"></i>
              <span>Google Certified Expert</span>
            </div>
            <div class="trust-row">
              <i class="fas fa-globe"></i>
              <span>Serving Clients Worldwide</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Abhishek J. · Performance Marketing Expert · All rights reserved.</p>
        <p>Built with data-driven precision — just like your campaigns.</p>
      </div>
    </div>
  </footer>

  <script src="/static/app.js"></script>
</body>
</html>`)
})

// Contact form API endpoint
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    const { name, email, business, budget, service, message } = body

    if (!name || !email || !message) {
      return c.json({ success: false, error: 'Please fill in all required fields.' }, 400)
    }

    // In production, integrate with email service (e.g., Resend, SendGrid)
    console.log('Contact form submission:', { name, email, business, budget, service, message })

    return c.json({
      success: true,
      message: 'Thank you! Your message has been received. I will respond within 24 hours.'
    })
  } catch (e) {
    return c.json({ success: false, error: 'Something went wrong. Please try again.' }, 500)
  }
})

export default app
