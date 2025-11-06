import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        {/* Open Graph pour Warpcast */}
        <meta property="og:title" content="Rock Paper Scissors - Celo" />
        <meta property="og:description" content="Play Rock Paper Scissors on-chain on Celo!" />
        <meta property="og:image" content="https://rock-paper-scissors-celo.vercel.app/splash.png" />
        <meta property="og:url" content="https://rock-paper-scissors-celo.vercel.app" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rock Paper Scissors - Celo" />
        <meta name="twitter:description" content="Play Rock Paper Scissors on-chain on Celo!" />
        <meta name="twitter:image" content="https://rock-paper-scissors-celo.vercel.app/splash.png" />
        
        <title>Rock Paper Scissors - Celo</title>
        <meta name="description" content="Play Rock Paper Scissors on-chain on Celo!" />
      </Head>
      
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
        <h1>🎮 Rock Paper Scissors On-Chain</h1>
        <p>Play directly from Farcaster and track your stats on the Celo blockchain!</p>
        
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#FCFF52', borderRadius: '8px' }}>
          <h2>How to play:</h2>
          <ol>
            <li>Share this URL in a Farcaster cast</li>
            <li>Click on Rock, Paper or Scissors</li>
            <li>The smart contract generates the computer&apos;s choice</li>
            <li>Check your stats and ranking</li>
          </ol>
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#35D07F', borderRadius: '8px', color: 'white' }}>
          <h2>Features:</h2>
          <ul>
            <li>✅ Complete on-chain statistics</li>
            <li>🔥 Win streak system</li>
            <li>🏆 Global leaderboard</li>
            <li>📈 Analyze your favorite moves</li>
            <li>🎯 Special events every 10 wins</li>
          </ul>
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fff3e0', borderRadius: '8px' }}>
          <h2>⚙️ Smart Contract:</h2>
          <p>Celo Mainnet: <code>0xDeDb830D70cE3f687cad36847Ef5b9b96823A9b0</code></p>
          <a 
            href="https://celoscan.io/address/0xDeDb830D70cE3f687cad36847Ef5b9b96823A9b0" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#1976d2' }}
          >
            View on CeloScan →
          </a>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a 
            href="/game" 
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: '#FCFF52',
              color: '#000',
              textDecoration: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}
          >
            🎮 Play Now
          </a>
        </div>
      </main>
    </>
  );
}