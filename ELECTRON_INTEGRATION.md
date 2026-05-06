# 🔌 Electron App ↔ Box Office Integration Guide

## Overview

This document explains how the **InTown Metaverse Electron App** integrates with the **Box Office Web Portal** to create a seamless user experience from ticket purchase to metaverse entry.

---

## 🎯 The User Journey

### Phase 1: Discovery & Purchase (Web)
1. User discovers campaign via social media
2. Lands on `boxoffice.intown.com`
3. Connects Metamask wallet
4. Votes for artist with ETH
5. Purchases ticket NFT ($50-$500)
6. Sees post-purchase modal: "Download App to Enter"

### Phase 2: Transition (Web → App)
7. User clicks "Open App" button
8. Deep link launches Electron app: `intown://verify?ticket=12345&wallet=0x...`
9. App opens to Entry Screen

### Phase 3: Verification (App)
10. App calls Box Office API to verify ticket
11. App calls Box Office API to get whale rank
12. Entry screen shows: "Welcome, Rank #47 - ORCA"
13. User clicks "Enter Metaverse"

### Phase 4: Experience (App)
14. User enters 3D venue
15. App periodically polls Box Office API for campaign updates
16. User sees in-app: "Drake is leading with $2.7M votes"

---

## 🔗 Deep Link Protocol

### URL Scheme
```
intown://verify?ticket=[TICKET_ID]&wallet=[WALLET_ADDRESS]
```

### Parameters
- `ticket`: NFT token ID from CampaignTicket.sol
- `wallet`: Ethereum address that owns the ticket

### Example
```
intown://verify?ticket=12345&wallet=0x4f2a1b3c1d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a
```

### Electron App Handler
```typescript
// electron-app/main.js
import { app, protocol } from 'electron';

app.setAsDefaultProtocolClient('intown');

app.on('open-url', (event, url) => {
  event.preventDefault();
  
  const parsedUrl = new URL(url);
  const ticket = parsedUrl.searchParams.get('ticket');
  const wallet = parsedUrl.searchParams.get('wallet');
  
  if (parsedUrl.hostname === 'verify' && ticket && wallet) {
    // Open entry screen with verification
    mainWindow.webContents.send('verify-entry', { ticket, wallet });
  }
});
```

---

## 📡 API Integration

### BoxOfficeAPI Service

```typescript
// electron-app/src/services/BoxOfficeAPI.ts
export class BoxOfficeAPI {
  private baseURL = 'https://boxoffice.intown.com/api';
  private cache = new Map<string, { data: any; expiry: number }>();
  
  // Cache wrapper
  private async fetchWithCache(url: string, ttl: number = 30000) {
    const cached = this.cache.get(url);
    if (cached && Date.now() < cached.expiry) {
      return cached.data;
    }
    
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const data = await response.json();
    this.cache.set(url, { data, expiry: Date.now() + ttl });
    
    return data;
  }
  
  // Verify ticket ownership
  async verifyTicket(ticketId: string, address: string) {
    const url = `${this.baseURL}/tickets/verify/${ticketId}?address=${address}`;
    return this.fetchWithCache(url, 60000); // 1 min cache
  }
  
  // Get user's whale rank
  async getUserRank(address: string) {
    const url = `${this.baseURL}/whales/rank/${address}`;
    return this.fetchWithCache(url, 30000); // 30s cache
  }
  
  // Get campaign status
  async getCampaignStatus() {
    const url = `${this.baseURL}/campaign/status`;
    return this.fetchWithCache(url, 30000);
  }
  
  // Get leading artist
  async getLeadingArtist() {
    const url = `${this.baseURL}/artists/leader`;
    return this.fetchWithCache(url, 30000);
  }
  
  // Get top whales
  async getTopWhales(count: number = 10) {
    const url = `${this.baseURL}/whales/top/${count}`;
    return this.fetchWithCache(url, 30000);
  }
}
```

---

## 🎬 Entry Screen Implementation

### React Component
```typescript
// electron-app/src/screens/EntryScreen.tsx
import { useState, useEffect } from 'react';
import { BoxOfficeAPI } from '../services/BoxOfficeAPI';

interface EntryScreenProps {
  ticketId: string;
  walletAddress: string;
}

export function EntryScreen({ ticketId, walletAddress }: EntryScreenProps) {
  const [status, setStatus] = useState<'loading' | 'verified' | 'error'>('loading');
  const [ticket, setTicket] = useState(null);
  const [rank, setRank] = useState(null);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const api = new BoxOfficeAPI();
    
    async function verify() {
      try {
        // Step 1: Verify ticket
        const ticketResult = await api.verifyTicket(ticketId, walletAddress);
        
        if (!ticketResult.success || !ticketResult.valid) {
          throw new Error('Invalid ticket or ownership');
        }
        
        setTicket(ticketResult.data);
        
        // Step 2: Get whale rank
        const rankResult = await api.getUserRank(walletAddress);
        
        if (!rankResult.success) {
          throw new Error('Failed to fetch rank');
        }
        
        setRank(rankResult.data);
        setStatus('verified');
        
      } catch (err) {
        console.error('Verification failed:', err);
        setError(err.message);
        setStatus('error');
      }
    }
    
    verify();
  }, [ticketId, walletAddress]);
  
  if (status === 'loading') {
    return (
      <div className="entry-screen loading">
        <div className="spinner"></div>
        <h2>Verifying Ticket...</h2>
        <p>Please wait while we confirm your entry</p>
      </div>
    );
  }
  
  if (status === 'error') {
    return (
      <div className="entry-screen error">
        <div className="error-icon">❌</div>
        <h2>Access Denied</h2>
        <p>{error}</p>
        <button onClick={() => window.open('https://boxoffice.intown.com')}>
          Purchase Ticket
        </button>
      </div>
    );
  }
  
  return (
    <div className="entry-screen verified">
      {/* Header */}
      <div className="header">
        <h1>Welcome to InTown Metaverse</h1>
        <p className="subtitle">Genesis Event</p>
      </div>
      
      {/* Whale Status */}
      <div className="whale-status">
        <div className="rank-display">
          <span className="rank-number">#{rank.rank}</span>
          <span className="rank-label">Global Rank</span>
        </div>
        
        <div className={`badge badge-${rank.badge.toLowerCase()}`}>
          {rank.badge}
        </div>
        
        <div className="contribution">
          <span className="amount">{rank.contributionUSD}</span>
          <span className="label">Total Contribution</span>
        </div>
      </div>
      
      {/* Ticket Info */}
      <div className="ticket-info">
        <h3>{ticket.tier} Ticket</h3>
        <ul className="perks">
          {ticket.perks.map((perk, i) => (
            <li key={i}>✓ {perk}</li>
          ))}
        </ul>
      </div>
      
      {/* Enter Button */}
      <button 
        className="enter-button"
        onClick={() => enterMetaverse()}
      >
        Enter Metaverse
      </button>
      
      {/* Campaign Status */}
      <div className="campaign-status">
        <p>Drake is leading with $2.7M votes</p>
        <p>$3.2M / $15M raised (21%)</p>
      </div>
    </div>
  );
}
```

### Styling (CSS)
```css
/* electron-app/src/screens/EntryScreen.css */
.entry-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0B0B0B 0%, #1a1a1a 100%);
  color: white;
  padding: 40px;
}

.whale-status {
  display: flex;
  gap: 40px;
  align-items: center;
  margin: 40px 0;
  padding: 30px;
  background: rgba(11, 11, 11, 0.8);
  border: 2px solid #C6FF00;
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(198, 255, 0, 0.3);
}

.rank-display {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rank-number {
  font-size: 48px;
  font-weight: bold;
  color: #C6FF00;
  text-shadow: 0 0 20px rgba(198, 255, 0, 0.6);
}

.badge {
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 18px;
  border: 2px solid currentColor;
}

.badge-leviathan {
  color: #C6FF00;
  background: rgba(198, 255, 0, 0.1);
  box-shadow: 0 0 30px rgba(198, 255, 0, 0.5);
}

.badge-orca {
  color: #00F0FF;
  background: rgba(0, 240, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
}

.badge-dolphin {
  color: #4B21FF;
  background: rgba(75, 33, 255, 0.1);
  box-shadow: 0 0 15px rgba(75, 33, 255, 0.3);
}

.enter-button {
  padding: 20px 60px;
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(90deg, #4B21FF 0%, #C6FF00 100%);
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 0 30px rgba(198, 255, 0, 0.4);
}

.enter-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px rgba(198, 255, 0, 0.6);
}
```

---

## 🔄 Real-Time Updates in App

### Polling Strategy
```typescript
// electron-app/src/hooks/useCampaignStatus.ts
import { useState, useEffect } from 'react';
import { BoxOfficeAPI } from '../services/BoxOfficeAPI';

export function useCampaignStatus() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const api = new BoxOfficeAPI();
    
    async function fetchStatus() {
      try {
        const result = await api.getCampaignStatus();
        if (result.success) {
          setStatus(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch campaign status:', error);
      } finally {
        setLoading(false);
      }
    }
    
    // Initial fetch
    fetchStatus();
    
    // Poll every 30 seconds
    const interval = setInterval(fetchStatus, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  return { status, loading };
}
```

### In-App Display
```typescript
// electron-app/src/components/CampaignBanner.tsx
import { useCampaignStatus } from '../hooks/useCampaignStatus';

export function CampaignBanner() {
  const { status, loading } = useCampaignStatus();
  
  if (loading || !status) return null;
  
  return (
    <div className="campaign-banner">
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${status.percentageFunded}%` }}
        />
      </div>
      
      <div className="stats">
        <span className="raised">{status.currentAmountUSD}</span>
        <span className="separator">/</span>
        <span className="goal">{status.fundingGoalUSD}</span>
        <span className="percentage">({status.percentageFunded}%)</span>
      </div>
      
      <div className="leader">
        <span className="label">Leading Artist:</span>
        <span className="name">{status.leadingArtist.name}</span>
        <span className="votes">{status.leadingArtist.votesUSD}</span>
      </div>
      
      <div className="countdown">
        <span className="label">Time Remaining:</span>
        <span className="days">{status.daysRemaining} days</span>
      </div>
    </div>
  );
}
```

---

## 🎨 Shared Design System

### Creating a Shared Package
```bash
# Create shared design system
mkdir -p packages/design-system
cd packages/design-system
npm init -y
```

### Badge Component
```typescript
// packages/design-system/src/components/WhaleBadge.tsx
import React from 'react';
import './WhaleBadge.css';

interface WhaleBadgeProps {
  tier: 'LEVIATHAN' | 'ORCA' | 'DOLPHIN' | 'CITIZEN';
  size?: 'small' | 'medium' | 'large';
}

export function WhaleBadge({ tier, size = 'medium' }: WhaleBadgeProps) {
  return (
    <div className={`whale-badge whale-badge-${tier.toLowerCase()} whale-badge-${size}`}>
      {tier}
    </div>
  );
}
```

### Using in Both Apps
```typescript
// Web (Next.js)
import { WhaleBadge } from '@intown/design-system';

export function WhaleCard({ whale }) {
  return (
    <div className="whale-card">
      <WhaleBadge tier={whale.badge} />
      <span>{whale.address}</span>
    </div>
  );
}

// Electron App
import { WhaleBadge } from '@intown/design-system';

export function EntryScreen({ rank }) {
  return (
    <div className="entry-screen">
      <WhaleBadge tier={rank.badge} size="large" />
    </div>
  );
}
```

---

## 🔐 Security Considerations

### Ticket Verification
1. **Always verify on-chain**: API is convenience layer only
2. **Check ownership**: Ensure wallet owns the ticket NFT
3. **Validate tier**: Confirm ticket tier grants appropriate access
4. **Check expiry**: Ensure ticket is valid for current event

### Example Verification
```typescript
async function verifyTicketOnChain(ticketId: string, address: string) {
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  const contract = new ethers.Contract(TICKET_CONTRACT, ABI, provider);
  
  try {
    // Check ownership
    const owner = await contract.ownerOf(ticketId);
    if (owner.toLowerCase() !== address.toLowerCase()) {
      throw new Error('Not ticket owner');
    }
    
    // Check tier
    const tier = await contract.getTicketTier(ticketId);
    if (tier < 1) {
      throw new Error('Invalid ticket tier');
    }
    
    return { valid: true, tier };
  } catch (error) {
    return { valid: false, error: error.message };
  }
}
```

---

## 📊 Error Handling

### Common Errors
```typescript
enum EntryError {
  INVALID_TICKET = 'Ticket does not exist',
  WRONG_OWNER = 'Ticket belongs to different wallet',
  API_TIMEOUT = 'Box Office API timeout',
  NETWORK_ERROR = 'Network connection failed',
  INVALID_TIER = 'Ticket tier insufficient',
}

function handleEntryError(error: EntryError) {
  switch (error) {
    case EntryError.INVALID_TICKET:
    case EntryError.WRONG_OWNER:
      return {
        title: 'Access Denied',
        message: 'Please purchase a valid ticket',
        action: 'Go to Box Office',
        url: 'https://boxoffice.intown.com',
      };
      
    case EntryError.API_TIMEOUT:
    case EntryError.NETWORK_ERROR:
      return {
        title: 'Connection Error',
        message: 'Please check your internet connection',
        action: 'Retry',
        retry: true,
      };
      
    default:
      return {
        title: 'Unknown Error',
        message: 'Please contact support',
        action: 'Get Help',
        url: 'https://support.intownmetaverse.com',
      };
  }
}
```

---

## 🚀 Deployment Checklist

### Web Portal (Box Office)
- [ ] Deploy to Vercel with Edge functions
- [ ] Configure custom domain: `boxoffice.intown.com`
- [ ] Set up environment variables (contract addresses)
- [ ] Enable CDN caching
- [ ] Configure rate limiting
- [ ] Set up monitoring (Vercel Analytics)

### Electron App
- [ ] Register `intown://` protocol handler
- [ ] Configure API base URL
- [ ] Implement retry logic
- [ ] Add offline mode handling
- [ ] Test deep link on all platforms (Windows, Mac, Linux)
- [ ] Code sign application
- [ ] Create installers

---

## 📞 Support

### For Web Developers
- API Docs: `/API_DOCUMENTATION.md`
- GitHub: `github.com/intown-metaverse/fundraising`

### For Electron Developers
- Integration Guide: This document
- Example Code: `github.com/intown-metaverse/electron-app`
- Discord: `discord.gg/intownmetaverse`

---

*Last Updated: April 30, 2026*  
*Integration Version: 1.0.0*
