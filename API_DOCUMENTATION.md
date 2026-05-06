# 📡 InTown Box Office API Documentation

## Overview

The **Box Office API** is a REST-only interface that powers both the web portal and the Electron metaverse app. All endpoints are deployed to **Vercel Edge** for global low-latency access.

**Base URL**: `https://boxoffice.intown.com/api`  
**Protocol**: REST (JSON)  
**Authentication**: None (public read-only endpoints)  
**Rate Limit**: 100 requests/minute per IP  
**Cache**: 30-second CDN cache on all endpoints

---

## 🎯 Core Endpoints

### Artists

#### `GET /api/artists/list`
Get all 20 artists with current vote counts.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 8,
      "name": "Drake",
      "votes": "2700000",
      "votesUSD": "$2.7M",
      "votesETH": "2700.00 ETH",
      "image": "/artists/drake.jpg"
    }
  ],
  "timestamp": 1714507200000,
  "cached": true,
  "cacheExpiry": 1714507230000
}
```

#### `GET /api/artists/leader`
Get the current leading artist.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 8,
    "name": "Drake",
    "votes": "2700000",
    "votesUSD": "$2.7M",
    "votesETH": "2700.00 ETH",
    "image": "/artists/drake.jpg",
    "percentage": 18.0
  },
  "timestamp": 1714507200000
}
```

---

### Whales

#### `GET /api/whales/top/[count]`
Get top N contributors (1-100).

**Parameters:**
- `count` (path): Number of whales to return (1-100)

**Example:** `/api/whales/top/10`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "rank": 1,
      "address": "0x4f2a...b3c1",
      "contribution": "475000",
      "contributionUSD": "$475K",
      "contributionETH": "475.00 ETH",
      "badge": "LEVIATHAN"
    }
  ],
  "count": 10,
  "timestamp": 1714507200000,
  "cached": true,
  "cacheExpiry": 1714507230000
}
```

#### `GET /api/whales/rank/[address]`
Get a specific user's whale rank and badge.

**Parameters:**
- `address` (path): Ethereum address (0x...)

**Example:** `/api/whales/rank/0x4f2a1b3c1d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a`

**Response:**
```json
{
  "success": true,
  "data": {
    "address": "0x4f2a...b3c1",
    "rank": 47,
    "contribution": "24500",
    "contributionUSD": "$24.5K",
    "contributionETH": "24.50 ETH",
    "badge": "ORCA",
    "nextBadge": {
      "name": "LEVIATHAN",
      "threshold": "100000",
      "amountNeeded": "75500",
      "amountNeededUSD": "$75.5K"
    },
    "nextRank": {
      "rank": 46,
      "amountNeeded": "1500",
      "amountNeededUSD": "$1.5K"
    }
  },
  "timestamp": 1714507200000
}
```

---

### Tickets

#### `GET /api/tickets/verify/[id]?address=[address]`
Verify ticket ownership for Electron app entry.

**Parameters:**
- `id` (path): Ticket NFT ID
- `address` (query, optional): Ethereum address to verify ownership

**Example:** `/api/tickets/verify/12345?address=0x4f2a...b3c1`

**Response:**
```json
{
  "success": true,
  "valid": true,
  "data": {
    "ticketId": "12345",
    "owner": "0x4f2a...b3c1",
    "tier": "VIP",
    "tierLevel": 2,
    "price": "100",
    "priceUSD": "$100",
    "priceETH": "0.1 ETH",
    "mintedAt": 1714420800000,
    "eventAccess": true,
    "perks": [
      "Event Access",
      "VIP Lounge",
      "Exclusive NFT"
    ]
  },
  "message": "Ticket verified",
  "timestamp": 1714507200000
}
```

---

### Campaign

#### `GET /api/campaign/status`
Get real-time campaign progress toward $15M goal.

**Response:**
```json
{
  "success": true,
  "data": {
    "currentAmount": "3200000",
    "currentAmountUSD": "$3.2M",
    "currentAmountETH": "3200.00 ETH",
    "fundingGoal": "15000000",
    "fundingGoalUSD": "$15M",
    "fundingGoalETH": "15000.00 ETH",
    "percentageFunded": 21.33,
    "timeRemaining": 2764800000,
    "daysRemaining": 32,
    "hoursRemaining": 768,
    "deadline": 1750118400000,
    "goalMet": false,
    "leadingArtist": {
      "id": 8,
      "name": "Drake",
      "votes": "2700000",
      "votesUSD": "$2.7M",
      "percentage": 18.0
    },
    "stats": {
      "totalContributors": 3247,
      "totalTicketsSold": 47293,
      "totalVotes": 28500000,
      "leviathans": 10,
      "orcas": 39,
      "dolphins": 51
    }
  },
  "timestamp": 1714507200000
}
```

---

## 🔌 Electron App Integration

### How the Electron App Consumes the API

```typescript
// electron-app/src/services/BoxOfficeAPI.ts
const BOX_OFFICE_URL = 'https://boxoffice.intown.com/api';

export class BoxOfficeAPI {
  private baseURL: string;
  
  constructor(baseURL: string = BOX_OFFICE_URL) {
    this.baseURL = baseURL;
  }
  
  // Get user's whale rank
  async getUserRank(address: string) {
    const response = await fetch(`${this.baseURL}/whales/rank/${address}`);
    if (!response.ok) throw new Error('Failed to fetch rank');
    return response.json();
  }
  
  // Verify ticket ownership
  async verifyTicket(ticketId: string, address: string) {
    const response = await fetch(
      `${this.baseURL}/tickets/verify/${ticketId}?address=${address}`
    );
    if (!response.ok) throw new Error('Failed to verify ticket');
    return response.json();
  }
  
  // Get campaign status
  async getCampaignStatus() {
    const response = await fetch(`${this.baseURL}/campaign/status`);
    if (!response.ok) throw new Error('Failed to fetch status');
    return response.json();
  }
  
  // Get leading artist
  async getLeadingArtist() {
    const response = await fetch(`${this.baseURL}/artists/leader`);
    if (!response.ok) throw new Error('Failed to fetch leader');
    return response.json();
  }
  
  // Get top whales
  async getTopWhales(count: number = 10) {
    const response = await fetch(`${this.baseURL}/whales/top/${count}`);
    if (!response.ok) throw new Error('Failed to fetch whales');
    return response.json();
  }
}
```

### Entry Flow Example

```typescript
// electron-app/src/screens/EntryScreen.tsx
import { BoxOfficeAPI } from '../services/BoxOfficeAPI';
import { WhaleBadge } from '@intown/design-system';

export function EntryScreen({ wallet, ticketId }) {
  const [verified, setVerified] = useState(false);
  const [rank, setRank] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const api = new BoxOfficeAPI();
    
    async function verifyEntry() {
      try {
        // Step 1: Verify ticket
        const ticketResult = await api.verifyTicket(ticketId, wallet.address);
        
        if (!ticketResult.valid) {
          throw new Error('Invalid ticket');
        }
        
        setVerified(true);
        
        // Step 2: Get whale rank
        const rankResult = await api.getUserRank(wallet.address);
        setRank(rankResult.data);
        
      } catch (error) {
        console.error('Entry verification failed:', error);
        // Show error modal
      } finally {
        setLoading(false);
      }
    }
    
    verifyEntry();
  }, [wallet, ticketId]);
  
  if (loading) {
    return (
      <div className="entry-screen loading">
        <div className="spinner"></div>
        <p>Verifying ticket...</p>
      </div>
    );
  }
  
  if (!verified) {
    return (
      <div className="entry-screen error">
        <h1>Access Denied</h1>
        <p>Please purchase a ticket at boxoffice.intown.com</p>
      </div>
    );
  }
  
  return (
    <div className="entry-screen verified">
      <h1>Welcome, Rank #{rank.rank}</h1>
      <WhaleBadge tier={rank.badge} />
      <p className="contribution">
        You've contributed {rank.contributionUSD}
      </p>
      <button 
        className="enter-button"
        onClick={() => enterVenue()}
      >
        Enter Metaverse
      </button>
    </div>
  );
}
```

---

## 🚀 Performance Characteristics

### Edge Deployment
- **Latency**: <50ms globally (Vercel Edge)
- **Throughput**: 10,000+ req/s per endpoint
- **Availability**: 99.99% uptime SLA

### Caching Strategy
```
Browser → CDN (30s) → Edge Function (30s ISR) → Smart Contract
```

- **CDN Cache**: 30 seconds (`s-maxage=30`)
- **Stale-While-Revalidate**: 60 seconds
- **ISR**: Incremental Static Regeneration every 30s

### Rate Limiting
- **Limit**: 100 requests/minute per IP
- **Response**: `429 Too Many Requests`
- **Headers**: `X-RateLimit-Limit`, `X-RateLimit-Remaining`

---

## 🔐 Security

### Input Validation
- Ethereum addresses validated with regex: `/^0x[a-fA-F0-9]{40}$/`
- Count parameters clamped: 1-100
- Ticket IDs sanitized

### CORS
```typescript
headers: {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}
```

### No Authentication Required
All endpoints are **public read-only**. Write operations (voting, ticket minting) happen directly on-chain via Web3.

---

## 📊 Error Handling

### Standard Error Response
```json
{
  "success": false,
  "error": "Error type",
  "message": "Detailed error message"
}
```

### HTTP Status Codes
- `200` - Success
- `400` - Bad Request (invalid parameters)
- `404` - Not Found
- `429` - Rate Limit Exceeded
- `500` - Internal Server Error

---

## 🧪 Testing

### cURL Examples

**Get campaign status:**
```bash
curl https://boxoffice.intown.com/api/campaign/status
```

**Get user rank:**
```bash
curl https://boxoffice.intown.com/api/whales/rank/0x4f2a1b3c1d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a
```

**Verify ticket:**
```bash
curl "https://boxoffice.intown.com/api/tickets/verify/12345?address=0x4f2a...b3c1"
```

### JavaScript Example
```javascript
// Fetch campaign status
const response = await fetch('https://boxoffice.intown.com/api/campaign/status');
const data = await response.json();

console.log(`Raised: ${data.data.currentAmountUSD}`);
console.log(`Goal: ${data.data.fundingGoalUSD}`);
console.log(`Progress: ${data.data.percentageFunded}%`);
```

---

## 🔄 Real-Time Updates

### Polling Strategy (Recommended)
```typescript
// Poll every 30 seconds (matches cache TTL)
setInterval(async () => {
  const status = await api.getCampaignStatus();
  updateUI(status.data);
}, 30000);
```

### Why No WebSockets?
- **Stateless**: Easier to scale horizontally
- **CDN-Friendly**: Edge caching works seamlessly
- **Simpler**: No connection management overhead
- **Cost-Effective**: No persistent connections

---

## 📈 Monitoring

### Health Check
```bash
curl https://boxoffice.intown.com/api/health
```

### Metrics to Track
- **Response Time**: p50, p95, p99
- **Error Rate**: 4xx, 5xx responses
- **Cache Hit Rate**: CDN effectiveness
- **Rate Limit Hits**: Potential abuse

---

## 🎯 Best Practices

### For Electron App Developers

1. **Cache Locally**: Store API responses in memory for 30s
2. **Handle Errors**: Always catch and display user-friendly messages
3. **Retry Logic**: Implement exponential backoff for failed requests
4. **Respect Rate Limits**: Don't poll faster than 30s intervals
5. **Validate Data**: Check `success` field before using `data`

### Example with Error Handling
```typescript
async function fetchWithRetry(url: string, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (!data.success) throw new Error(data.message);
      return data;
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
    }
  }
}
```

---

## 🌐 Deployment

### Vercel Configuration
```json
{
  "functions": {
    "app/api/**/*.ts": {
      "runtime": "edge",
      "regions": ["iad1", "sfo1", "lhr1", "hnd1"]
    }
  }
}
```

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://boxoffice.intown.com/api
ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/YOUR_KEY
ARTIST_VOTING_CONTRACT=0x...
WHALE_RANKINGS_CONTRACT=0x...
ESCROW_CONTRACT=0x...
```

---

## 📞 Support

### Issues
- GitHub: `github.com/intown-metaverse/fundraising/issues`
- Email: `api@intownmetaverse.com`

### Rate Limit Increase
Contact `enterprise@intownmetaverse.com` for custom rate limits.

---

*Last Updated: April 30, 2026*  
*API Version: 1.0.0*  
*Built with Next.js 14 + Vercel Edge*
