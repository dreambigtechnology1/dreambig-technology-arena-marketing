# Venue-Only Refactoring Progress

## Objective
Remove all protocol infrastructure references from the fundraising site. The site should focus exclusively at DreamBIG Technology Arena as a venue application.

## Key Principle
**"DreamBIG Technology Arena lives at DreamBIG Technology Arena in InTown Metaverse"** - This is the ONLY reference to the broader metaverse context.

## Completed Tasks

### ✅ Phase 1: Archive Protocol Files
- Created `protocol/` folder for archiving
- Moved node-hosts page to `protocol/node-hosts-page.tsx`
- Moved all protocol components to protocol folder:
  - NodeRoleBreakdown.tsx
  - NodeServiceFeeEstimator.tsx
  - TechnicalRequirementsTable.tsx
  - SetupWizard.tsx
  - NetworkHealthBadges.tsx
  - TechnicalSecurityBadges.tsx
- Moved protocol documentation:
  - NODE_HOSTS_PAGE.md
  - NODE_UTILITY_FRAMEWORK.md
  - INFRASTRUCTURE_POSITIONING.md
- Removed `/app/node-hosts` directory

### ✅ Phase 2: Update Navigation
- Removed "Node Hosts" link from Navigation component
- Navigation now shows: Home, Fans, Economy, Sponsors, Promoters

### ✅ Phase 3: Refactor Home Page (Partial)
- Changed "infrastructure capacity: 250 million simultaneous connections" → "venue capacity: 250 million seats"
- Changed "What Is DreamBIG Technology Arena?" → "What Is DreamBIG Technology Arena?"
- Updated description to include "DreamBIG Technology Arena lives at DreamBIG Technology Arena in InTown Metaverse"
- Removed "InTown Metaverse protocol" reference, changed to "venue"
- Updated Sponsors card: "250 million-capacity infrastructure" → "250 Million seat venue"
- Updated Promoters card: "Promoters & Hosts" → "Promoters"
- Updated Promoters description: removed "host infrastructure" and "protocol fees"

## Remaining Tasks

### 🔄 Phase 3: Complete Home Page Refactoring
- [ ] Update footer "About" section to remove "infrastructure capacity" language
- [ ] Change to venue-focused language throughout

### 📋 Phase 4: Refactor Fans Page
- [ ] Remove "InTown Metaverse Protocol" references
- [ ] Remove "Livable Digital City" protocol framing
- [ ] Change "infrastructure capacity" → "venue capacity"
- [ ] Remove protocol-level technical details
- [ ] Update all components used in Fans page

### 📋 Phase 5: Refactor Economy Page
- [ ] Remove TechnicalSecurityBadges import and usage (component moved to protocol/)
- [ ] Change title from "DreamBIG Technology Arena Decentralized Stadium Economy" → "DreamBIG Technology Arena Economy"
- [ ] Remove node operator roles and protocol fees
- [ ] Remove infrastructure layer positioning
- [ ] Change "infrastructure capacity" → "venue capacity"
- [ ] Update EconomicLayerCard component
- [ ] Update OpportunityTable component
- [ ] Focus on venue-specific revenue streams

### 📋 Phase 6: Refactor Sponsors Page
- [ ] Change "Infrastructure Capacity Portal" title
- [ ] Remove "64,203 Active Nodes" metrics
- [ ] Remove PoT (Proof of Transport) details
- [ ] Remove Node Host network validation
- [ ] Remove ATM-to-AMM relay technical details
- [ ] Change "infrastructure capacity" → "venue capacity"
- [ ] Update SponsorshipBreakdown component
- [ ] Update MediaValueCalculator component
- [ ] Update PerformanceBasedFees component
- [ ] Frame as venue analytics, not protocol validation

### 📋 Phase 7: Refactor Promoters Page
- [ ] Change "Event Orchestrator" title
- [ ] Remove "General Contractor of the digital stadium" with protocol context
- [ ] Remove node network and relay infrastructure details
- [ ] Remove protocol fee structures
- [ ] Change "orchestrator" → "promoter" or "event manager"
- [ ] Change "infrastructure" → "venue operations"
- [ ] Update PromoterEarningsBreakdown component
- [ ] Update HostPerksTable component
- [ ] Focus on event success, not protocol management

### 📋 Phase 8: Update Shared Components
- [ ] EconomicLayerCard.tsx - Remove protocol references
- [ ] OpportunityTable.tsx - Focus on venue roles only
- [ ] RevenueCalculator.tsx - Venue revenue, not protocol fees
- [ ] SponsorshipBreakdown.tsx - Remove protocol references
- [ ] MediaValueCalculator.tsx - Venue-based calculations
- [ ] PerformanceBasedFees.tsx - Venue service fees
- [ ] PromoterEarningsBreakdown.tsx - Venue-based earnings
- [ ] HostPerksTable.tsx - Venue management tools

### 📋 Phase 9: Global Search & Replace
Terms to find and replace across all files:
- [ ] "InTown Metaverse Protocol" → Remove or replace with "DreamBIG Technology Arena"
- [ ] "infrastructure capacity" → "venue capacity"
- [ ] "protocol fees" → "venue revenue" or "service fees"
- [ ] "node operators" → Remove entirely
- [ ] "decentralized" → Remove or replace with "digital"
- [ ] "PoT" / "Proof of Transport" → Remove entirely
- [ ] "relay network" → Remove entirely
- [ ] "P2P" → Remove entirely

### 📋 Phase 10: Update All Page Footers
- [ ] Remove protocol references from all footers
- [ ] Remove node/infrastructure links
- [ ] Focus on venue, Genesis Event, and business opportunities
- [ ] Update email addresses (remove nodes@...)

### 📋 Phase 11: Final Verification
- [ ] No mentions of "protocol" except in the one allowed context
- [ ] No node operator/host content anywhere
- [ ] No technical infrastructure details (PoT, relay, P2P, etc.)
- [ ] All "infrastructure capacity" changed to "venue capacity"
- [ ] All pages focus on venue experience, not protocol primitives
- [ ] Test all pages for broken imports
- [ ] Verify navigation works correctly

## Files Archived in protocol/ Folder
- node-hosts-page.tsx
- NodeRoleBreakdown.tsx
- NodeServiceFeeEstimator.tsx
- TechnicalRequirementsTable.tsx
- SetupWizard.tsx
- NetworkHealthBadges.tsx
- TechnicalSecurityBadges.tsx
- NODE_HOSTS_PAGE.md
- NODE_UTILITY_FRAMEWORK.md
- INFRASTRUCTURE_POSITIONING.md

## Expected Outcome
**Before:** "We're building a decentralized protocol with node operators, and DreamBIG Technology Arena is one application"

**After:** "DreamBIG Technology Arena is the world's largest digital venue. The Genesis Event is our inaugural concert. Buy tickets, sponsor the venue, promote events, experience the show."
