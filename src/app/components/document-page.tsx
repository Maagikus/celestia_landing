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
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </TechParagraph>

      <TechSection>Configuration</TechSection>
      <TechParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </TechParagraph>

      <TechSubheading>3. API Reference</TechSubheading>
      
      <TechSection>Core Methods</TechSection>
      <TechParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </TechParagraph>

      <TechSubheading>4. Advanced Usage</TechSubheading>
      
      <TechSection>Custom Strategies</TechSection>
      <TechParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </TechParagraph>

      <TechSection>Event Listeners</TechSection>
      <TechParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </TechParagraph>

      <TechSubheading>5. Best Practices</TechSubheading>
      <TechParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat.
      </TechParagraph>
    </TextPageLayout>
  );
}