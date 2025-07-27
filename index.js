<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example | Premium Minecraft Server</title>
    <style>
        /* CSS RESET & BASE */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg-primary: #0a0e17;
            --bg-secondary: #111827;
            --bg-card: rgba(30, 33, 58, 0.8);
            --accent-primary: #8b5cf6;
            --accent-secondary: #0ea5e9;
            --accent-tertiary: #ec4899;
            --text-primary: #f3f4f6;
            --text-secondary: #9ca3af;
            --success: #10b981;
            --warning: #f59e0b;
            --danger: #ef4444;
            --transition: all 0.3s ease;
            --border-radius: 12px;
            --shadow-sm: 0 4px 6px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.3);
            --glow-primary: 0 0 15px rgba(139, 92, 246, 0.6);
            --glow-secondary: 0 0 15px rgba(14, 165, 233, 0.6);
        }

        body {
            font-family: 'Segoe UI', system-ui, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            overflow-x: hidden;
            line-height: 1.6;
            background-image: 
                radial-gradient(circle at 10% 20%, rgba(59, 7, 100, 0.15) 0%, transparent 20%),
                radial-gradient(circle at 90% 80%, rgba(14, 165, 233, 0.1) 0%, transparent 30%);
            min-height: 100vh;
            padding-top: 80px; /* Space for fixed header */
        }

        /* TYPOGRAPHY */
        h1, h2, h3, h4 {
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 1rem;
        }

        h1 {
            font-size: 3.5rem;
            background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: var(--glow-primary);
        }

        h2 {
            font-size: 2.5rem;
            margin-bottom: 2.5rem;
            position: relative;
            display: inline-block;
        }

        h2:after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 60px;
            height: 4px;
            background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
            border-radius: 2px;
        }

        p {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
        }

        .text-gradient {
            background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* LAYOUT & CONTAINERS */
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }

        section {
            padding: 6rem 0;
            position: relative;
        }

        /* NAVIGATION */
        nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 1.5rem 0;
            z-index: 1000;
            transition: var(--transition);
            backdrop-filter: blur(10px);
            background: rgba(10, 14, 23, 0.85);
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
            border-bottom: 1px solid rgba(139, 92, 246, 0.1);
        }

        nav.scrolled {
            padding: 1rem 0;
            background: rgba(10, 14, 23, 0.95);
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--text-primary);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .logo-icon {
            color: var(--accent-primary);
            font-size: 1.5rem;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-secondary);
            font-weight: 600;
            transition: var(--transition);
            position: relative;
            padding: 0.5rem 0;
        }

        .nav-links a:after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
            transition: var(--transition);
        }

        .nav-links a:hover:after {
            width: 100%;
        }

        .nav-links a:hover {
            color: var(--text-primary);
        }

        /* HERO SECTION */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        .hero-content {
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
        }

        .hero p {
            font-size: 1.3rem;
            max-width: 600px;
            margin: 0 auto 2.5rem;
        }

        .server-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin: 2.5rem 0;
        }

        .server-info-item {
            background: var(--bg-card);
            backdrop-filter: blur(10px);
            color: var(--text-primary);
            padding: 1rem 2rem;
            border-radius: var(--border-radius);
            font-weight: 600;
            box-shadow: var(--shadow-sm);
            border: 1px solid rgba(139, 92, 246, 0.2);
            display: flex;
            align-items: center;
            gap: 0.8rem;
            transition: var(--transition);
        }

        .server-info-item:hover {
            transform: translateY(-5px);
            box-shadow: var(--glow-primary), var(--shadow-lg);
            border-color: var(--accent-primary);
        }

        .info-icon {
            font-size: 1.5rem;
            color: var(--accent-secondary);
        }

        .hero-buttons {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin-top: 2rem;
        }

        /* BUTTONS */
        .btn {
            padding: 1rem 2.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            transition: var(--transition);
            display: inline-block;
            text-align: center;
            position: relative;
            overflow: hidden;
            z-index: 1;
            border: 2px solid transparent;
            font-size: 1.1rem;
            cursor: pointer;
        }

        .btn:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            transition: var(--transition);
            opacity: 1;
        }

        .btn:hover:before {
            opacity: 0.9;
            filter: blur(3px);
        }

        .btn:hover {
            transform: translateY(-5px);
            box-shadow: var(--glow-primary), var(--shadow-lg);
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
            color: white;
            box-shadow: var(--shadow-sm);
        }

        .btn-secondary {
            background: var(--bg-card);
            color: var(--text-primary);
            border: 2px solid rgba(139, 92, 246, 0.5);
        }

        .btn-secondary:hover {
            box-shadow: var(--glow-primary), var(--shadow-lg);
            background: rgba(30, 33, 58, 0.8);
        }

        .btn-tertiary {
            background: linear-gradient(135deg, var(--accent-tertiary), #f472b6);
            color: white;
        }

        .btn-glow {
            animation: glow-pulse 2s infinite alternate;
        }

        @keyframes glow-pulse {
            0% { box-shadow: 0 0 10px rgba(139, 92, 246, 0.4); }
            100% { box-shadow: 0 0 25px rgba(139, 92, 246, 0.8); }
        }

        /* GAMEMODES SECTION */
        .gamemodes {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .gamemode-card {
            background: var(--bg-card);
            backdrop-filter: blur(10px);
            border-radius: var(--border-radius);
            padding: 2.5rem;
            text-align: center;
            box-shadow: var(--shadow-sm);
            border: 1px solid rgba(139, 92, 246, 0.1);
            transition: var(--transition);
            position: relative;
            overflow: hidden;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .gamemode-card.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .gamemode-card:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
            opacity: 0.7;
        }

        .gamemode-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--glow-primary), var(--shadow-lg);
            border-color: var(--accent-primary);
        }

        .gamemode-icon {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            display: block;
            transition: var(--transition);
        }

        .gamemode-card:hover .gamemode-icon {
            transform: scale(1.2);
        }

        .gamemode-card h3 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .gamemode-card p {
            margin-bottom: 1.5rem;
        }

        /* VOTE SECTION */
        .vote {
            background: 
                linear-gradient(rgba(10, 14, 23, 0.9), rgba(10, 14, 23, 0.9)),
                radial-gradient(circle at top right, rgba(139, 92, 246, 0.1), transparent 30%);
            text-align: center;
        }

        .vote-content {
            max-width: 700px;
            margin: 0 auto;
            padding: 4rem 2rem;
            background: var(--bg-card);
            backdrop-filter: blur(10px);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-lg);
            border: 1px solid rgba(139, 92, 246, 0.2);
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .vote-content.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .vote-content p {
            font-size: 1.2rem;
            margin-bottom: 2.5rem;
        }

        .btn-vote {
            font-size: 1.2rem;
            padding: 1.2rem 3rem;
            animation: glow-pulse 1.5s infinite alternate;
        }

        /* STORE SECTION */
        .packages {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .package-card {
            background: var(--bg-card);
            backdrop-filter: blur(10px);
            border-radius: var(--border-radius);
            padding: 2.5rem;
            text-align: center;
            box-shadow: var(--shadow-sm);
            border: 1px solid rgba(139, 92, 246, 0.1);
            transition: var(--transition);
            position: relative;
            overflow: hidden;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .package-card.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .package-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--glow-primary), var(--shadow-lg);
            border-color: var(--accent-primary);
        }

        .package-card.popular {
            transform: scale(1.05);
            border: 2px solid var(--accent-primary);
            z-index: 1;
        }

        .package-card.popular:before {
            content: 'MOST POPULAR';
            position: absolute;
            top: 20px;
            right: -35px;
            background: var(--accent-primary);
            color: white;
            padding: 0.5rem 2.5rem;
            transform: rotate(45deg);
            font-weight: 700;
            font-size: 0.8rem;
            box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
        }

        .package-card h3 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .price {
            font-size: 3rem;
            font-weight: 800;
            margin: 1.5rem 0;
            color: var(--accent-secondary);
            position: relative;
        }

        .price:before {
            content: '$';
            font-size: 1.5rem;
            position: relative;
            top: -20px;
            margin-right: 5px;
            color: var(--text-secondary);
        }

        .features {
            list-style: none;
            margin: 2rem 0;
            text-align: left;
        }

        .features li {
            padding: 0.8rem 0;
            border-bottom: 1px solid rgba(139, 92, 246, 0.1);
            display: flex;
            align-items: center;
            gap: 0.8rem;
        }

        .features li:before {
            content: '✓';
            color: var(--success);
            font-weight: 700;
        }

        /* HIRE SECTION */
        .hire {
            background: 
                linear-gradient(rgba(10, 14, 23, 0.95), rgba(10, 14, 23, 0.95)),
                radial-gradient(circle at bottom left, rgba(236, 72, 153, 0.1), transparent 30%);
            text-align: center;
        }

        .hire-content {
            max-width: 700px;
            margin: 0 auto;
            padding: 4rem 2rem;
            background: var(--bg-card);
            backdrop-filter: blur(10px);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-lg);
            border: 1px solid rgba(236, 72, 153, 0.2);
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .hire-content.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .hire-content p {
            font-size: 1.2rem;
            margin-bottom: 2.5rem;
        }

        /* FOOTER */
        footer {
            background: var(--bg-secondary);
            padding: 4rem 0 2rem;
            border-top: 1px solid rgba(139, 92, 246, 0.1);
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .footer-logo {
            font-size: 1.8rem;
            font-weight: 800;
            margin-bottom: 1rem;
        }

        .footer-about p {
            margin-bottom: 1.5rem;
        }

        .footer-links h4 {
            color: var(--text-primary);
            margin-bottom: 1.5rem;
            font-size: 1.3rem;
        }

        .footer-links ul {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 0.8rem;
        }

        .footer-links a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: var(--transition);
            display: block;
        }

        .footer-links a:hover {
            color: var(--accent-secondary);
            transform: translateX(5px);
        }

        .copyright {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(139, 92, 246, 0.1);
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        /* PARTICLES */
        #particles-js {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -1;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 992px) {
            h1 { font-size: 3rem; }
            h2 { font-size: 2.2rem; }
            .nav-links { gap: 1.5rem; }
        }

        @media (max-width: 768px) {
            h1 { font-size: 2.5rem; }
            h2 { font-size: 2rem; }
            .nav-links { display: none; }
            .hero-buttons { flex-direction: column; align-items: center; }
            .server-info { flex-direction: column; align-items: center; }
            .package-card.popular { transform: scale(1); }
        }

        @media (max-width: 576px) {
            h1 { font-size: 2rem; }
            h2 { font-size: 1.8rem; }
            .hero { padding-top: 3rem; }
            section { padding: 4rem 0; }
            .gamemode-card, .package-card { padding: 1.5rem; }
            body { padding-top: 70px; }
        }
    </style>
</head>
<body>
    <!-- Particles Background -->
    <div id="particles-js"></div>
    
    <!-- Navigation -->
    <nav id="nav">
        <div class="container nav-container">
            <a href="#" class="logo">
                <span class="logo-icon">⛏️</span>Example
            </a>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#gamemodes">Gamemodes</a></li>
                <li><a href="#vote">Vote</a></li>
                <li><a href="#store">Store</a></li>
                <li><a href="#hire">Hire Me</a></li>
            </ul>
        </div>
    </nav>
    
    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Experience Minecraft Like Never Before</h1>
                <p>Join thousands of players on our premium Minecraft server featuring unique gamemodes, custom content, and a vibrant community.</p>
                
                <div class="server-info">
                    <div class="server-info-item">
                        <span class="info-icon">🌐</span>
                        IP: play.example.net
                    </div>
                    <div class="server-info-item">
                        <span class="info-icon">👥</span>
                        124 Players Online
                    </div>
                </div>
                
                <div class="hero-buttons">
                    <a href="#" class="btn btn-primary">Join Discord</a>
                    <a href="#vote" class="btn btn-secondary">Vote for Rewards</a>
                    <a href="#store" class="btn btn-tertiary">Visit Store</a>
                    <a href="https://portfolio-yuvrajbold.netlify.app/" class="btn btn-secondary">More Works</a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Gamemodes Section -->
    <section id="gamemodes">
        <div class="container">
            <h2>Featured Gamemodes</h2>
            <p>Discover our unique game experiences designed for endless fun and competition.</p>
            
            <div class="gamemodes">
                <div class="gamemode-card">
                    <span class="gamemode-icon">⚔️</span>
                    <h3>Lifesteal</h3>
                    <p>Fight to survive and steal the hearts of your enemies! Every kill makes you stronger while weakening your opponents.</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
                
                <div class="gamemode-card">
                    <span class="gamemode-icon">🌴</span>
                    <h3>Skyblock</h3>
                    <p>Start on a small floating island with minimal resources. Expand, automate, and build your way to ultimate success!</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
                
                <div class="gamemode-card">
                    <span class="gamemode-icon">🎉</span>
                    <h3>Events</h3>
                    <p>Join our daily events with unique challenges, mini-games, and competitions with amazing rewards!</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Vote Section -->
    <section id="vote" class="vote">
        <div class="container">
            <div class="vote-content">
                <h2>Vote for Rewards</h2>
                <p>Help us grow by voting for our server! Each vote gives you amazing in-game rewards like coins, keys, and exclusive items.</p>
                <p>You can vote every 24 hours. The more you vote, the better rewards you get!</p>
                <a href="#" class="btn btn-primary btn-glow btn-vote">Vote Now</a>
            </div>
        </div>
    </section>
    
    <!-- Store Section -->
    <section id="store">
        <div class="container">
            <h2>Premium Store</h2>
            <p>Unlock amazing perks, cosmetics, and advantages to enhance your gameplay experience.</p>
            
            <div class="packages">
                <div class="package-card">
                    <h3>Starter</h3>
                    <div class="price">4.99</div>
                    <ul class="features">
                        <li>$50,000 In-Game Cash</li>
                        <li>Starter Kit</li>
                        <li>3 Treasure Keys</li>
                        <li>Basic Cosmetics</li>
                    </ul>
                    <a href="#" class="btn btn-secondary">Purchase</a>
                </div>
                
                <div class="package-card popular">
                    <h3>Premium</h3>
                    <div class="price">14.99</div>
                    <ul class="features">
                        <li>$200,000 In-Game Cash</li>
                        <li>Premium Kit</li>
                        <li>15 Treasure Keys</li>
                        <li>Exclusive Cosmetics</li>
                        <li>Special Prefix</li>
                        <li>Extra Homes</li>
                    </ul>
                    <a href="#" class="btn btn-primary">Purchase</a>
                </div>
                
                <div class="package-card">
                    <h3>Legend</h3>
                    <div class="price">29.99</div>
                    <ul class="features">
                        <li>$500,000 In-Game Cash</li>
                        <li>Legend Kit</li>
                        <li>40 Treasure Keys</li>
                        <li>Legendary Cosmetics</li>
                        <li>Special Prefix</li>
                        <li>Extra Homes</li>
                        <li>Private Island</li>
                    </ul>
                    <a href="#" class="btn btn-secondary">Purchase</a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Hire Me Section -->
    <section id="hire" class="hire">
        <div class="container">
            <div class="hire-content">
                <h2>Want a Website Like This?</h2>
                <p>This premium Minecraft server website was custom-crafted to showcase the quality of work I can deliver for your server.</p>
                <p>I specialize in creating stunning, responsive, and high-converting websites for Minecraft servers that attract and retain players.</p>
                <a href="https://stellular-bavarois-14f431.netlify.app/" class="btn btn-tertiary">Hire Me Now</a>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-about">
                    <div class="footer-logo">EXAMPLE SERVER</div>
                    <p>The most vibrant and exciting Minecraft experience you'll ever find! Join thousands of players in our unique worlds.</p>
                    <div class="server-info-item">IP: play.example.net</div>
                </div>
                
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#gamemodes">Gamemodes</a></li>
                        <li><a href="#vote">Vote</a></li>
                        <li><a href="#store">Store</a></li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Rules</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Wiki</a></li>
                        <li><a href="#">Status</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                &copy; 2023 Example Minecraft Server. All rights reserved.<br>
                This website is a demo created for Minecraft server owners.
            </div>
        </div>
    </footer>
    
    <script>
        // Particles.js configuration
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize particles
            initParticles();
            
            // Initialize scroll animations
            initScrollAnimations();
            
            // Nav scroll effect
            window.addEventListener('scroll', function() {
                const nav = document.getElementById('nav');
                if (window.scrollY > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    if (this.getAttribute('href') === '#') return;
                    
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        const headerHeight = document.querySelector('nav').offsetHeight;
                        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
        
        function initParticles() {
            const canvas = document.createElement('canvas');
            canvas.id = 'particles-canvas';
            document.getElementById('particles-js').appendChild(canvas);
            
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const particles = [];
            const particleCount = 80;
            
            // Create particles
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 255, ${Math.random() * 0.5 + 0.2})`
                });
            }
            
            // Draw particles
            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Update and draw particles
                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    
                    // Move particle
                    p.x += p.speedX;
                    p.y += p.speedY;
                    
                    // Bounce off edges
                    if (p.x <= 0 || p.x >= canvas.width) p.speedX *= -1;
                    if (p.y <= 0 || p.y >= canvas.height) p.speedY *= -1;
                    
                    // Draw particle
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.fill();
                    
                    // Draw connections
                    for (let j = i + 1; j < particles.length; j++) {
                        const p2 = particles[j];
                        const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
                        
                        if (distance < 150) {
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance/150)})`;
                            ctx.lineWidth = 0.5;
                            ctx.stroke();
                        }
                    }
                }
                
                requestAnimationFrame(draw);
            }
            
            draw();
            
            // Handle resize
            window.addEventListener('resize', function() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });
        }
        
        function initScrollAnimations() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate section content
                        if (entry.target.id === 'gamemodes') {
                            const cards = entry.target.querySelectorAll('.gamemode-card');
                            cards.forEach((card, index) => {
                                setTimeout(() => {
                                    card.classList.add('visible');
                                }, 200 * index);
                            });
                        }
                        else if (entry.target.id === 'vote') {
                            const content = entry.target.querySelector('.vote-content');
                            setTimeout(() => {
                                content.classList.add('visible');
                            }, 300);
                        }
                        else if (entry.target.id === 'store') {
                            const cards = entry.target.querySelectorAll('.package-card');
                            cards.forEach((card, index) => {
                                setTimeout(() => {
                                    card.classList.add('visible');
                                }, 200 * index);
                            });
                        }
                        else if (entry.target.id === 'hire') {
                            const content = entry.target.querySelector('.hire-content');
                            setTimeout(() => {
                                content.classList.add('visible');
                            }, 300);
                        }
                    }
                });
            }, observerOptions);
            
            // Observe sections
            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });
        }
    </script>
</body>
</html>
