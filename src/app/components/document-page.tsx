import { 
  TextPageLayout, 
  TechHeading, 
  TechSubheading, 
  TechSection, 
  TechParagraph, 
  TechList, 
  TechListItem,
  TechCode,
  TechHighlight
} from './text-page-layout';

interface DocumentPageProps {
  onBack: () => void;
}

export function DocumentPage({ onBack }: DocumentPageProps) {
  return (
    <TextPageLayout onBack={onBack}>
      <TechHeading>Celestia AI Assistant - Technical Documentation</TechHeading>
      
      <TechParagraph>
        Welcome to the comprehensive technical documentation for Celestia AI Assistant. 
        This document provides detailed information about the system architecture, 
        integration methods, and API usage for StarAtlas ecosystem.
      </TechParagraph>

      <TechSubheading>1. Introduction</TechSubheading>
      <TechParagraph>
        Celestia is an advanced AI-powered assistant designed specifically for the StarAtlas 
        metaverse. It leverages cutting-edge machine learning algorithms and blockchain 
        technology to provide seamless navigation, resource management, and strategic guidance.
      </TechParagraph>

      <TechSection>Key Features</TechSection>
      <TechList>
        <TechListItem>Real-time market analysis and trading recommendations</TechListItem>
        <TechListItem>Automated fleet management with AI-driven optimization</TechListItem>
        <TechListItem>Advanced resource allocation algorithms</TechListItem>
        <TechListItem>Predictive analytics for strategic decision-making</TechListItem>
        <TechListItem>Integration with Solana blockchain for secure transactions</TechListItem>
      </TechList>

      <TechSubheading>2. Getting Started</TechSubheading>
      
      <TechSection>Installation</TechSection>
      <TechParagraph>
        To integrate Celestia into your StarAtlas environment, follow these steps:
      </TechParagraph>

      <TechCode>
        {`npm install @celestia/ai-assistant
        
// Initialize Celestia
import { Celestia } from '@celestia/ai-assistant';

const assistant = new Celestia({
  apiKey: 'YOUR_API_KEY',
  network: 'mainnet-beta',
  autoSync: true
});`}
      </TechCode>

      <TechSection>Configuration</TechSection>
      <TechParagraph>
        Configure your Celestia instance with the following parameters:
      </TechParagraph>
      <TechList>
        <TechListItem>
          <TechHighlight>apiKey</TechHighlight> - Your unique API authentication key
        </TechListItem>
        <TechListItem>
          <TechHighlight>network</TechHighlight> - Solana network (mainnet-beta, testnet, devnet)
        </TechListItem>
        <TechListItem>
          <TechHighlight>autoSync</TechHighlight> - Enable automatic data synchronization
        </TechListItem>
        <TechListItem>
          <TechHighlight>rpcEndpoint</TechHighlight> - Custom RPC endpoint (optional)
        </TechListItem>
      </TechList>

      <TechSubheading>3. API Reference</TechSubheading>
      
      <TechSection>Core Methods</TechSection>
      <TechParagraph>
        The Celestia API provides several core methods for interacting with the assistant:
      </TechParagraph>

      <TechCode>
        {`// Get market analysis
const analysis = await assistant.getMarketAnalysis({
  asset: 'ATLAS',
  timeframe: '24h'
});

// Optimize fleet configuration
const optimization = await assistant.optimizeFleet({
  fleetId: 'your-fleet-id',
  objective: 'maximize-efficiency'
});

// Predict resource requirements
const forecast = await assistant.predictResources({
  duration: '7d',
  activities: ['mining', 'trading']
});`}
      </TechCode>

      <TechSubheading>4. Advanced Usage</TechSubheading>
      
      <TechSection>Custom Strategies</TechSection>
      <TechParagraph>
        Celestia supports custom trading and management strategies. You can define your own 
        logic using our strategy builder:
      </TechParagraph>

      <TechCode>
        {`const customStrategy = assistant.createStrategy({
  name: 'aggressive-growth',
  rules: [
    { condition: 'price < 0.01', action: 'buy', amount: 1000 },
    { condition: 'profit > 15%', action: 'sell', amount: 'all' }
  ],
  riskLevel: 'high'
});

await assistant.deployStrategy(customStrategy);`}
      </TechCode>

      <TechSection>Event Listeners</TechSection>
      <TechParagraph>
        Monitor real-time events and notifications:
      </TechParagraph>

      <TechCode>
        {`assistant.on('market-alert', (alert) => {
  console.log('Market Alert:', alert);
});

assistant.on('resource-low', (resource) => {
  console.log('Low Resource:', resource);
});`}
      </TechCode>

      <TechSubheading>5. Best Practices</TechSubheading>
      <TechParagraph>
        For optimal performance and security, follow these recommended practices:
      </TechParagraph>
      <TechList>
        <TechListItem>Always use environment variables for API keys</TechListItem>
        <TechListItem>Implement proper error handling for all async operations</TechListItem>
        <TechListItem>Enable rate limiting to prevent API throttling</TechListItem>
        <TechListItem>Regularly update to the latest version for security patches</TechListItem>
        <TechListItem>Use webhooks for real-time notifications instead of polling</TechListItem>
      </TechList>

      <TechSubheading>6. Support & Resources</TechSubheading>
      <TechParagraph>
        For additional help and resources, please visit our official channels:
      </TechParagraph>
      <TechList>
        <TechListItem>Documentation: https://docs.celestia.ai</TechListItem>
        <TechListItem>GitHub Repository: https://github.com/celestia-ai</TechListItem>
        <TechListItem>Discord Community: discord.gg/celestia</TechListItem>
        <TechListItem>Email Support: support@celestia.ai</TechListItem>
      </TechList>
    </TextPageLayout>
  );
}
