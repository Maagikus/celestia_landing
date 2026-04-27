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
        At Celestia AI Assistant, we are committed to protecting your privacy and ensuring 
        the security of your personal information. This Privacy Policy explains how we collect, 
        use, and safeguard your data when you use our services within the StarAtlas ecosystem.
      </FormalQuote>

      <FormalSubheading>1. Information We Collect</FormalSubheading>
      
      <FormalParagraph>
        We collect various types of information in connection with the services we provide, 
        including information you provide directly to us, information we collect automatically, 
        and information we receive from third-party sources. The types of information we may 
        collect include but are not limited to the following categories:
      </FormalParagraph>

      <FormalList>
        <FormalListItem>
          Personal identification information such as your name, email address, and wallet address 
          used for authentication and account management purposes.
        </FormalListItem>
        <FormalListItem>
          Transaction data including your trading history, asset holdings, and blockchain 
          interactions within the StarAtlas metaverse.
        </FormalListItem>
        <FormalListItem>
          Usage information such as your interaction patterns with the AI assistant, feature 
          preferences, and system performance metrics.
        </FormalListItem>
        <FormalListItem>
          Technical data including IP addresses, device information, browser type, and 
          operating system details for security and optimization purposes.
        </FormalListItem>
      </FormalList>

      <FormalDivider />

      <FormalSubheading>2. How We Use Your Information</FormalSubheading>
      
      <FormalParagraph>
        The information we collect serves multiple purposes designed to enhance your experience 
        and provide you with the highest quality of service. We use your personal information 
        in the following ways, always in accordance with applicable data protection laws and 
        regulations:
      </FormalParagraph>

      <FormalList>
        <FormalListItem>
          To provide, maintain, and improve our AI assistant services, including personalized 
          recommendations and strategic insights tailored to your specific needs.
        </FormalListItem>
        <FormalListItem>
          To process your transactions securely and efficiently on the Solana blockchain, 
          ensuring the integrity and accuracy of all operations.
        </FormalListItem>
        <FormalListItem>
          To communicate with you regarding service updates, security alerts, and important 
          notifications related to your account and activities.
        </FormalListItem>
        <FormalListItem>
          To analyze usage patterns and improve our algorithms, enhancing the overall 
          performance and accuracy of our AI-driven features.
        </FormalListItem>
        <FormalListItem>
          To detect, prevent, and address technical issues, security vulnerabilities, and 
          potential fraudulent activities that may compromise user safety.
        </FormalListItem>
      </FormalList>

      <FormalDivider />

      <FormalSubheading>3. Data Security and Protection</FormalSubheading>
      
      <FormalParagraph>
        We implement industry-standard security measures to protect your personal information 
        from unauthorized access, disclosure, alteration, or destruction. Our security infrastructure 
        includes advanced encryption protocols, secure data storage systems, and regular security 
        audits conducted by independent third-party experts. We employ multiple layers of security 
        to ensure that your data remains confidential and protected at all times.
      </FormalParagraph>

      <FormalParagraph>
        All sensitive data, including wallet addresses and transaction information, is encrypted 
        both in transit and at rest using state-of-the-art cryptographic standards. We utilize 
        secure socket layer (SSL) technology and blockchain-based security mechanisms to prevent 
        unauthorized access and maintain the integrity of your information throughout all 
        interactions with our platform.
      </FormalParagraph>

      <FormalDivider />

      <FormalSubheading>4. Information Sharing and Disclosure</FormalSubheading>
      
      <FormalParagraph>
        We respect your privacy and do not sell, rent, or trade your personal information to 
        third parties for marketing purposes. However, we may share your information in the 
        following limited circumstances, always ensuring that appropriate safeguards are in place:
      </FormalParagraph>

      <FormalList>
        <FormalListItem>
          With service providers and partners who assist us in operating our platform, conducting 
          our business, or servicing you, provided that these parties agree to keep this 
          information confidential and use it only for the purposes we specify.
        </FormalListItem>
        <FormalListItem>
          When required by law, regulation, legal process, or governmental request, or when we 
          believe disclosure is necessary to protect our rights, your safety, or the safety of 
          others.
        </FormalListItem>
        <FormalListItem>
          In connection with a merger, acquisition, or sale of all or a portion of our assets, 
          in which case users will be notified via email and/or prominent notice on our platform 
          regarding any changes in ownership or use of personal information.
        </FormalListItem>
        <FormalListItem>
          With your explicit consent or at your direction, when you choose to share information 
          with specific third-party applications or services integrated with our platform.
        </FormalListItem>
      </FormalList>

      <FormalDivider />

      <FormalSubheading>5. Your Rights and Choices</FormalSubheading>
      
      <FormalParagraph>
        You have certain rights regarding your personal information, and we are committed to 
        facilitating the exercise of these rights in accordance with applicable data protection 
        laws. Depending on your jurisdiction, these rights may include:
      </FormalParagraph>

      <FormalList>
        <FormalListItem>
          The right to access and receive a copy of the personal information we hold about you, 
          including details about how we process and use your data.
        </FormalListItem>
        <FormalListItem>
          The right to request correction of any inaccurate or incomplete personal information, 
          ensuring that your data remains accurate and up-to-date.
        </FormalListItem>
        <FormalListItem>
          The right to request deletion of your personal information, subject to certain legal 
          exceptions and requirements for record retention.
        </FormalListItem>
        <FormalListItem>
          The right to object to or restrict certain types of processing of your personal 
          information, including automated decision-making and profiling.
        </FormalListItem>
        <FormalListItem>
          The right to data portability, allowing you to receive your personal information in a 
          structured, commonly used, and machine-readable format.
        </FormalListItem>
      </FormalList>

      <FormalDivider />

      <FormalSubheading>6. Cookies and Tracking Technologies</FormalSubheading>
      
      <FormalParagraph>
        We use cookies and similar tracking technologies to enhance your experience, analyze 
        usage patterns, and provide personalized content. Cookies are small data files stored 
        on your device that help us recognize you and remember your preferences. You can control 
        cookie settings through your browser preferences, though disabling certain cookies may 
        limit some functionality of our services.
      </FormalParagraph>

      <FormalDivider />

      <FormalSubheading>7. Changes to This Privacy Policy</FormalSubheading>
      
      <FormalParagraph>
        We reserve the right to update or modify this Privacy Policy at any time to reflect 
        changes in our practices, technologies, legal requirements, or other factors. When we make 
        material changes to this policy, we will notify you by email or through a prominent notice 
        on our platform prior to the changes taking effect. We encourage you to review this Privacy 
        Policy periodically to stay informed about how we protect your information.
      </FormalParagraph>

      <FormalDivider />

      <FormalSubheading>8. Contact Information</FormalSubheading>
      
      <FormalParagraph>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our 
        data practices, please contact us using the following information:
      </FormalParagraph>

      <FormalParagraph>
        Celestia AI Assistant<br />
        Email: privacy@celestia.ai<br />
        Address: StarAtlas Metaverse, Solana Blockchain<br />
        Response Time: Within 48 hours for all inquiries
      </FormalParagraph>

      <FormalQuote>
        By using Celestia AI Assistant, you acknowledge that you have read, understood, and 
        agree to be bound by this Privacy Policy. Your continued use of our services following 
        any changes to this policy constitutes your acceptance of such changes.
      </FormalQuote>
    </TextPageLayout>
  );
}
