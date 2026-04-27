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
      <TechHeading>Lorem Ipsum Documentation</TechHeading>
      
      <TechParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </TechParagraph>

      <TechSubheading>1. Introduction</TechSubheading>
      <TechParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TechParagraph>

      <TechSection>Key Features</TechSection>
      <TechList>
        <TechListItem>Lorem ipsum dolor sit amet, consectetur adipiscing</TechListItem>
        <TechListItem>Sed do eiusmod tempor incididunt ut labore</TechListItem>
        <TechListItem>Ut enim ad minim veniam, quis nostrud</TechListItem>
        <TechListItem>Duis aute irure dolor in reprehenderit</TechListItem>
        <TechListItem>Excepteur sint occaecat cupidatat non proident</TechListItem>
      </TechList>

      <TechSubheading>2. Getting Started</TechSubheading>
      
      <TechSection>Installation</TechSection>
      <TechParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.
      </TechParagraph>

      <TechCode>
        {`npm install lorem-ipsum-package

// Initialize
import { Lorem } from 'lorem-ipsum-package';

const instance = new Lorem({
  apiKey: 'YOUR_API_KEY',
  network: 'mainnet',
  autoSync: true
});`}
      </TechCode>

      <TechSection>Configuration</TechSection>
      <TechParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </TechParagraph>
      <TechList>
        <TechListItem>
          <TechHighlight>apiKey</TechHighlight> - Lorem ipsum dolor sit amet
        </TechListItem>
        <TechListItem>
          <TechHighlight>network</TechHighlight> - Lorem ipsum dolor sit amet
        </TechListItem>
        <TechListItem>
          <TechHighlight>autoSync</TechHighlight> - Lorem ipsum dolor sit amet
        </TechListItem>
        <TechListItem>
          <TechHighlight>rpcEndpoint</TechHighlight> - Lorem ipsum dolor sit amet
        </TechListItem>
      </TechList>

      <TechSubheading>3. API Reference</TechSubheading>
      
      <TechSection>Core Methods</TechSection>
      <TechParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </TechParagraph>

      <TechCode>
        {`// Get data
const data = await instance.getData({
  id: 'example',
  timeframe: '24h'
});

// Process
const result = await instance.process({
  input: 'data-id',
  mode: 'standard'
});

// Fetch
const response = await instance.fetch({
  endpoint: '/api/example'
});`}
      </TechCode>

      <TechSubheading>4. Advanced Usage</TechSubheading>
      
      <TechSection>Custom Strategies</TechSection>
      <TechParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </TechParagraph>

      <TechCode>
        {`const customStrategy = instance.createStrategy({
  name: 'custom-strategy',
  rules: [
    { condition: 'value > 100', action: 'process', amount: 50 },
    { condition: 'result > 10%', action: 'output', amount: 'all' }
  ],
  riskLevel: 'medium'
});

await instance.deployStrategy(customStrategy);`}
      </TechCode>

      <TechSection>Event Listeners</TechSection>
      <TechParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </TechParagraph>

      <TechCode>
        {`instance.on('event-name', (data) => {
  console.log('Event:', data);
});

instance.on('notification', (message) => {
  console.log('Notification:', message);
});`}
      </TechCode>

      <TechSubheading>5. Best Practices</TechSubheading>
      <TechParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </TechParagraph>
      <TechList>
        <TechListItem>Lorem ipsum dolor sit amet, consectetur adipiscing</TechListItem>
        <TechListItem>Sed do eiusmod tempor incididunt ut labore</TechListItem>
        <TechListItem>Ut enim ad minim veniam, quis nostrud</TechListItem>
        <TechListItem>Duis aute irure dolor in reprehenderit</TechListItem>
        <TechListItem>Excepteur sint occaecat cupidatat non proident</TechListItem>
      </TechList>

      <TechSubheading>6. Support & Resources</TechSubheading>
      <TechParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </TechParagraph>
      <TechList>
        <TechListItem>Documentation: https://example.com/docs</TechListItem>
        <TechListItem>GitHub Repository: https://github.com/example</TechListItem>
        <TechListItem>Discord Community: discord.gg/example</TechListItem>
        <TechListItem>Email Support: support@example.com</TechListItem>
      </TechList>
    </TextPageLayout>
  );
}