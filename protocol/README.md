# Protocol-Specific Content Archive

This folder contains all InTown Metaverse Protocol infrastructure content that was removed from the DreamBIG Technology Arena fundraising site.

This content will be ported to the dedicated protocol documentation site.

## Contents:
- Node operator/host pages and components
- Protocol infrastructure documentation
- Technical architecture components
- Network health and validation systems

## Files Archived:

### Pages:
- `node-hosts-page.tsx` - Node hosts landing page

### Components:
- `NodeRoleBreakdown.tsx` - Node role explanations
- `NodeServiceFeeEstimator.tsx` - Service fee calculator
- `TechnicalRequirementsTable.tsx` - Hardware requirements
- `SetupWizard.tsx` - Node setup wizard
- `NetworkHealthBadges.tsx` - Network health indicators
- `TechnicalSecurityBadges.tsx` - Security badges

### Documentation:
- `NODE_HOSTS_PAGE.md` - Node hosts page documentation
- `NODE_UTILITY_FRAMEWORK.md` - Node utility framework
- `INFRASTRUCTURE_POSITIONING.md` - Infrastructure positioning guide

## Note:
The fundraising site focuses exclusively at DreamBIG Technology Arena (the venue application layer).
Protocol infrastructure is documented separately.

## Separation Principle:
**Layer 1 Protocol** (this archive) vs **Application Layer** (DreamBIG Technology Arena)
- Protocol = Infrastructure primitives that exist regardless of any venue
- Application = DreamBIG Technology Arena as a specific venue implementation

The fundraising site should only mention: "DreamBIG Technology Arena lives at DreamBIG Technology Arena in InTown Metaverse"
