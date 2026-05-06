import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const revalidate = 30;

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { searchParams } = new URL(request.url);
    const address = searchParams.get('address');
    
    if (!id) {
      return NextResponse.json({
        success: false,
        error: 'Missing ticket ID',
      }, { status: 400 });
    }
    
    // TODO: Query CampaignTicket.sol ownerOf(tokenId)
    // Verify the ticket exists and belongs to the address
    
    const mockTicket = {
      ticketId: id,
      owner: address || '0x4f2a...b3c1',
      tier: 'VIP',
      tierLevel: 2,
      price: '100',
      priceUSD: '$100',
      priceETH: '0.1 ETH',
      mintedAt: Date.now() - 86400000, // 1 day ago
      eventAccess: true,
      perks: [
        'Event Access',
        'VIP Lounge',
        'Exclusive NFT',
      ],
    };
    
    const isValid = address ? mockTicket.owner === address : true;
    
    return NextResponse.json({
      success: true,
      valid: isValid,
      data: isValid ? mockTicket : null,
      message: isValid ? 'Ticket verified' : 'Ticket does not belong to this address',
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
      error: 'Failed to verify ticket',
      message: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
