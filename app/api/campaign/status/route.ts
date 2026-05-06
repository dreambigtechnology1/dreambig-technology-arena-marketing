import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const revalidate = 30;

export async function GET() {
  try {
    // TODO: Query CrowdfundingEscrow.sol for real-time campaign status
    // getCurrentAmount(), fundingGoal, deadline, goalMet
    
    const campaignDeadline = new Date('2026-06-15T00:00:00Z').getTime();
    const now = Date.now();
    const timeRemaining = Math.max(0, campaignDeadline - now);
    
    const status = {
      currentAmount: '3200000',
      currentAmountUSD: '$3.2M',
      currentAmountETH: '3200.00 ETH',
      fundingGoal: '15000000',
      fundingGoalUSD: '$15M',
      fundingGoalETH: '15000.00 ETH',
      percentageFunded: 21.33,
      timeRemaining: timeRemaining,
      daysRemaining: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
      hoursRemaining: Math.floor(timeRemaining / (1000 * 60 * 60)),
      deadline: campaignDeadline,
      goalMet: false,
      leadingArtist: {
        id: 8,
        name: 'Drake',
        votes: '2700000',
        votesUSD: '$2.7M',
        percentage: 18.0,
      },
      stats: {
        totalContributors: 3247,
        totalTicketsSold: 47293,
        totalVotes: 28500000, // Total across all artists
        leviathans: 10,
        orcas: 39,
        dolphins: 51,
      },
    };
    
    return NextResponse.json({
      success: true,
      data: status,
      timestamp: Date.now(),
    }, {
      headers: {
        'Cache-Control': 's-maxage=30, stale-while-revalidate=60',
        'CDN-Cache-Control': 'max-age=30',
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch campaign status',
      message: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
