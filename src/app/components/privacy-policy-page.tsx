import { 
  TextPageLayout, 
  FormalHeading, 
  FormalSubheading, 
  FormalParagraph, 
  FormalList, 
  FormalListItem,
  FormalQuote,
  FormalDate,
  FormalDivider
} from './text-page-layout';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export function PrivacyPolicyPage({ onBack }: PrivacyPolicyPageProps) {
  return (
    <TextPageLayout onBack={onBack}>
      <FormalHeading>Privacy Policy</FormalHeading>
      
      <FormalDate>Last Updated: January 10, 2026</FormalDate>

      <FormalQuote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </FormalQuote>

      <FormalSubheading>1. Information We Collect</FormalSubheading>
      
      <FormalParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </FormalParagraph>

      <FormalList>
        <FormalListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </FormalListItem>
        <FormalListItem>
          Sed do eiusmod tempor incididunt ut labore et dolore.
        </FormalListItem>
        <FormalListItem>
          Ut enim ad minim veniam, quis nostrud exercitation.
        </FormalListItem>
        <FormalListItem>
          Duis aute irure dolor in reprehenderit in voluptate.
        </FormalListItem>
      </FormalList>

      <FormalDivider />

      <FormalSubheading>2. How We Use Your Information</FormalSubheading>
      
      <FormalParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </FormalParagraph>

      <FormalList>
        <FormalListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </FormalListItem>
        <FormalListItem>
          Sed do eiusmod tempor incididunt ut labore et dolore.
        </FormalListItem>
        <FormalListItem>
          Ut enim ad minim veniam, quis nostrud exercitation.
        </FormalListItem>
        <FormalListItem>
          Duis aute irure dolor in reprehenderit in voluptate.
        </FormalListItem>
        <FormalListItem>
          Excepteur sint occaecat cupidatat non proident.
        </FormalListItem>
      </FormalList>

      <FormalDivider />

      <FormalSubheading>3. Data Security and Protection</FormalSubheading>
      
      <FormalParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </FormalParagraph>

      <FormalParagraph>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </FormalParagraph>

      <FormalDivider />

      <FormalSubheading>4. Information Sharing and Disclosure</FormalSubheading>
      
      <FormalParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </FormalParagraph>

      <FormalList>
        <FormalListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </FormalListItem>
        <FormalListItem>
          Sed do eiusmod tempor incididunt ut labore et dolore.
        </FormalListItem>
        <FormalListItem>
          Ut enim ad minim veniam, quis nostrud exercitation.
        </FormalListItem>
        <FormalListItem>
          Duis aute irure dolor in reprehenderit in voluptate.
        </FormalListItem>
      </FormalList>

      <FormalDivider />

      <FormalSubheading>5. Your Rights and Choices</FormalSubheading>
      
      <FormalParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </FormalParagraph>

      <FormalList>
        <FormalListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </FormalListItem>
        <FormalListItem>
          Sed do eiusmod tempor incididunt ut labore et dolore.
        </FormalListItem>
        <FormalListItem>
          Ut enim ad minim veniam, quis nostrud exercitation.
        </FormalListItem>
        <FormalListItem>
          Duis aute irure dolor in reprehenderit in voluptate.
        </FormalListItem>
        <FormalListItem>
          Excepteur sint occaecat cupidatat non proident.
        </FormalListItem>
      </FormalList>

      <FormalDivider />

      <FormalSubheading>6. Cookies and Tracking Technologies</FormalSubheading>
      
      <FormalParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </FormalParagraph>

      <FormalDivider />

      <FormalSubheading>7. Changes to This Privacy Policy</FormalSubheading>
      
      <FormalParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </FormalParagraph>

      <FormalDivider />

      <FormalSubheading>8. Contact Information</FormalSubheading>
      
      <FormalParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua.
      </FormalParagraph>

      <FormalParagraph>
        Lorem Ipsum Company<br />
        Email: support@example.com<br />
        Address: 123 Lorem Street, Ipsum City<br />
        Response Time: Within 48 hours for all inquiries
      </FormalParagraph>

      <FormalQuote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </FormalQuote>
    </TextPageLayout>
  );
}