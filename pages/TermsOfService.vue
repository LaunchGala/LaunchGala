<template>
    <div class="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <header class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-6">
          <h1 class="text-4xl font-serif font-bold text-orange-800">Terms of Service</h1>
          <p class="text-orange-600 mt-2">Last Updated: January 17, 2025</p>
        </div>
      </header>
      
      <div class="container mx-auto px-4 py-12">
        <div class="flex flex-col lg:flex-row">
          <nav class="lg:w-1/4 mb-8 lg:mb-0">
            <div class="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <h2 class="text-2xl font-serif font-semibold text-orange-800 mb-4">Contents</h2>
              <div class="h-[calc(100vh-200px)] overflow-y-auto pr-4">
                <ul class="space-y-2">
                  <li v-for="section in sections" :key="section.id">
                    <a 
                      @click="scrollToSection(section.id)"
                      :class="['text-orange-600 hover:text-orange-800 cursor-pointer transition duration-300 ease-in-out', 
                               { 'font-semibold': activeSection === section.id }]"
                    >
                      {{ section.title }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
          <main class="lg:w-3/4 lg:pl-12">
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div v-for="section in sections" :key="section.id" :id="section.id" class="mb-12">
                <h2 class="text-3xl font-serif font-semibold text-orange-800 mb-6 pb-2 border-b border-orange-200">
                  {{ section.title }}
                </h2>
                <div v-html="section.content" class="prose max-w-none"></div>
              </div>
              
              <div class="mt-12 pt-6 border-t border-orange-200">
                <p class="text-orange-600 italic">
                  By using Launch Gala's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
<!--       
      <footer class="bg-orange-800 text-white py-6 mt-12">
        <div class="container mx-auto px-4 text-center">
          <p>&copy; 2025 Launch Gala, Inc. All rights reserved.</p>
          <p class="mt-2">Version: 1.0</p>
        </div>
      </footer> -->
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const activeSection = ref('introduction')
  
  const scrollToSection = (sectionId) => {
    activeSection.value = sectionId
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `
        <p>Welcome to Launch Gala ("Launch Gala," "Platform," "we," "us," or "our"), a Delaware corporation with its principal place of business at [Address], Delaware, United States. These Terms of Service ("Terms") constitute a legally binding agreement ("Agreement") between you and Launch Gala governing your access to and use of the Launch Gala website, mobile applications, and services (collectively, "Platform Services").</p>
        <p>By accessing or using Launch Gala, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Platform.</p>
      `
    },
    {
      id: 'definitions',
      title: 'Definitions',
      content: `
        <p>For the purpose of these Terms:</p>
        <ul>
          <li><strong>Content:</strong> Any text, graphics, images, music, software, audio, video, information, or other materials uploaded, posted, or displayed on the Platform.</li>
          <li><strong>Event Space:</strong> Any venue, facility, location, or service listed for rental or booking on Launch Gala.</li>
          <li><strong>Guest:</strong> A Member who books or seeks to book an Event Space through Launch Gala.</li>
          <li><strong>Host:</strong> A Member who creates, lists, and manages an Event Space on Launch Gala.</li>
          <li><strong>Listing:</strong> An Event Space that is listed by a Host on Launch Gala.</li>
          <li><strong>Member:</strong> A person or entity who completes Launch Gala's account registration process.</li>
          <li><strong>Service Fee:</strong> The fee charged by Launch Gala to Hosts (3-5%) and Guests for the use of Platform Services.</li>
          <li><strong>Tax:</strong> Any sales taxes, value added taxes (VAT), goods and services taxes (GST), and other similar municipal, state, federal and national indirect or other withholding and personal or corporate income taxes.</li>
        </ul>
      `
    },
    {
      id: 'membership',
      title: 'Membership',
      content: `
        <h3>1. Membership Fees</h3>
        <p>Launch Gala offers the following membership tiers:</p>
        <ul>
          <li><strong>Basic (Free):</strong> Limited access to Platform features</li>
          <li><strong>Pro ($9.99/month):</strong> Full access to Platform features, priority support</li>
          <li><strong>Business ($99.99/month):</strong> Multiple user accounts, advanced analytics, dedicated account manager</li>
        </ul>
        <p>All paid memberships are billed on a recurring basis and can be cancelled at any time. Refunds are provided on a prorated basis for unused time.</p>
  
        <h3>2. Verification Process</h3>
        <p>To ensure the safety and security of our community, all members must complete a verification process:</p>
        <ol>
          <li><strong>Identity Verification:</strong> 
            <ul>
              <li>Submit a government-issued ID</li>
              <li>Provide a recent photograph</li>
              <li>Complete a video call verification (for Business tier)</li>
            </ul>
          </li>
          <li><strong>Contact Information Verification:</strong>
            <ul>
              <li>Verify email address</li>
              <li>Verify phone number via SMS</li>
            </ul>
          </li>
          <li><strong>Business Verification (for Hosts):</strong>
            <ul>
              <li>Provide business registration documents</li>
              <li>Submit tax identification information</li>
              <li>Provide proof of business insurance</li>
            </ul>
          </li>
        </ol>
  
        <h3>3. Membership Requirements</h3>
        <p>To maintain an active membership on Launch Gala, members must:</p>
        <ul>
          <li>Be at least 18 years of age</li>
          <li>Provide accurate and up-to-date information</li>
          <li>Comply with all applicable laws and regulations</li>
          <li>Maintain a positive review rating (for Hosts)</li>
          <li>Respond to booking requests within 24 hours (for Hosts)</li>
          <li>Adhere to Launch Gala's community guidelines</li>
        </ul>
  
        <h3>4. Account Suspension and Termination</h3>
        <p>Launch Gala reserves the right to suspend or terminate accounts that:</p>
        <ul>
          <li>Violate these Terms of Service</li>
          <li>Engage in fraudulent activity</li>
          <li>Receive consistent negative reviews</li>
          <li>Fail to meet verification requirements</li>
          <li>Pose a risk to the Launch Gala community</li>
        </ul>
        <p>Members will be notified of any account actions and may appeal decisions through our support channels.</p>
      `
    },
    {
      id: 'guest-terms',
      title: 'Guest Terms',
      content: `
        <h3>1. Searching and Booking on Launch Gala</h3>
        <h4>1.1 Search and Discovery</h4>
        <p>Users can freely browse Listings on Launch Gala without booking. Our search functionality includes:</p>
        <ul>
          <li>Location-based search within specified radius</li>
          <li>Capacity filtering (10 to 1000+ guests)</li>
          <li>Price range selection</li>
          <li>Date and time availability</li>
          <li>Venue type (ballroom, conference center, outdoor space, etc.)</li>
          <li>Amenity filters (catering kitchen, AV equipment, parking, etc.)</li>
          <li>Accessibility features</li>
          <li>Event type suitability</li>
        </ul>
  
        <h4>1.2 Booking Process</h4>
        <p>To complete a booking, Guests must:</p>
        <ol>
          <li>Create or have an active verified account including:
            <ul>
              <li>Valid government-issued ID</li>
              <li>Email verification</li>
              <li>Phone number verification</li>
              <li>Payment method on file</li>
            </ul>
          </li>
          <li>Provide event details:
            <ul>
              <li>Event date and time (including setup and breakdown)</li>
              <li>Expected attendance number</li>
              <li>Event type and purpose</li>
              <li>Setup requirements</li>
              <li>Vendor information</li>
              <li>Insurance certificates (if required)</li>
              <li>Special permits (if required)</li>
            </ul>
          </li>
          <li>Accept venue-specific terms:
            <ul>
              <li>House rules</li>
              <li>Cancellation policy</li>
              <li>Insurance requirements</li>
              <li>Security deposit terms</li>
              <li>Vendor requirements</li>
            </ul>
          </li>
        </ol>
  
        <h4>1.3 Booking Confirmation</h4>
        <p>The booking process follows these steps:</p>
        <ol>
          <li>Guest submits booking request with required information</li>
          <li>Host has 24 hours to accept or decline</li>
          <li>Upon acceptance:
            <ul>
              <li>Guest's payment is processed</li>
              <li>Confirmation is issued</li>
              <li>Host and Guest receive detailed confirmation</li>
            </ul>
          </li>
          <li>If Host doesn't respond within 24 hours:
            <ul>
              <li>Booking is automatically cancelled</li>
              <li>No charges are made to Guest</li>
              <li>Guest is notified of cancellation</li>
            </ul>
          </li>
        </ol>
  
        <h4>1.4 Communication</h4>
        <p>All pre-booking communication must occur through Launch Gala's messaging system:</p>
        <ul>
          <li>Messages are monitored for security</li>
          <li>Personal contact information is automatically filtered</li>
          <li>Response time is tracked</li>
          <li>Message history is maintained</li>
          <li>File and image sharing is permitted through the platform</li>
        </ul>
  
        <h3>2. Cancellations, Issues, and Refunds</h3>
        <h4>2.1 Cancellation Policies</h4>
        <p>Launch Gala offers four standardized cancellation policies:</p>
        <ol>
          <li>Flexible (Events under 100 guests):
            <ul>
              <li>100% refund up to 30 days before event</li>
              <li>50% refund up to 14 days before event</li>
              <li>No refund within 14 days of event</li>
            </ul>
          </li>
          <li>Moderate (Events 100-250 guests):
            <ul>
              <li>100% refund up to 60 days before event</li>
              <li>50% refund up to 30 days before event</li>
              <li>No refund within 30 days of event</li>
            </ul>
          </li>
          <li>Strict (Events 250-500 guests):
            <ul>
              <li>100% refund up to 90 days before event</li>
              <li>50% refund up to 60 days before event</li>
              <li>No refund within 60 days of event</li>
            </ul>
          </li>
          <li>Super Strict (Events 500+ guests):
            <ul>
              <li>100% refund up to 120 days before event</li>
              <li>50% refund up to 90 days before event</li>
              <li>No refund within 90 days of event</li>
            </ul>
          </li>
        </ol>
  
        <h4>2.2 Refund Process</h4>
        <p>To request a refund, Guests must:</p>
        <ul>
          <li>Submit request through Platform</li>
          <li>Include booking reference number</li>
          <li>Provide cancellation reason</li>
          <li>Upload supporting documentation (if applicable)</li>
        </ul>
        <p>Processing timeline:</p>
        <ul>
          <li>Review within 24-48 hours</li>
          <li>Decision communication within 72 hours</li>
          <li>Refund processing 5-7 business days</li>
          <li>Refund to original payment method</li>
        </ul>
        <p>Force Majuro Events:</p>
        <ul>
          <li>Natural disasters</li>
          <li>Government restrictions</li>
          <li>Public health emergencies</li>
          <li>Civil unrest</li>
          <li>Other extraordinary circumstances</li>
        </ul>
  
        <h4>2.3 Dispute Resolution</h4>
        <p>Issue Reporting Timeline:</p>
        <ul>
          <li>Guests must report issues within 48 hours of event completion</li>
          <li>Hosts must respond within 24 hours of reported issues</li>
          <li>Platform mediates if no resolution within 72 hours</li>
        </ul>
        <p>Required Documentation:</p>
        <ul>
          <li>Photos/videos of issues</li>
          <li>Vendor statements (if applicable)</li>
          <li>Witness statements</li>
          <li>Receipts for additional costs incurred</li>
          <li>Timeline of events</li>
        </ul>
        <p>Resolution Process:</p>
        <ul>
          <li>Direct communication through Platform</li>
          <li>Platform mediation if needed</li>
          <li>Investigation period (up to 7 days)</li>
          <li>Decision and resolution</li>
          <li>Appeal window (48 hours)</li>
        </ul>
  
        <h3>3. Guest Responsibilities and Risk Assumption</h3>
        <h4>3.1 Event Management Requirements</h4>
        <p>Capacity and Safety:</p>
        <ul>
          <li>Strict adherence to venue capacity limits</li>
          <li>Maintenance of clear emergency exits</li>
          <li>Compliance with fire safety regulations</li>
          <li>Implementation of crowd control measures</li>
          <li>Following emergency protocols</li>
        </ul>
        <p>Permits and Licenses:</p>
        <ul>
          <li>Event permits</li>
          <li>Alcohol service licenses</li>
          <li>Music/entertainment permits</li>
          <li>Food service permits</li>
          <li>Special activity permits</li>
        </ul>
        <p>Insurance Requirements:</p>
        <ul>
          <li>Event liability insurance</li>
          <li>Property damage coverage</li>
          <li>Host liquor liability (if applicable)</li>
          <li>Vendor insurance certificates</li>
          <li>Worker's compensation (if applicable)</li>
        </ul>
  
        <h4>3.2 Venue Care Standards</h4>
        <p>Pre-Event Requirements:</p>
        <ul>
          <li>Venue inspection and documentation</li>
          <li>Equipment testing</li>
          <li>Safety check documentation</li>
          <li>Vendor coordination</li>
          <li>Setup plan approval</li>
        </ul>
        <p>During Event:</p>
        <ul>
          <li>Designated venue liaison</li>
          <li>Regular facility monitoring</li>
          <li>Immediate issue reporting</li>
          <li>Vendor supervision</li>
          <li>Guest conduct management</li>
        </ul>
        <p>Post-Event Requirements:</p>
        <ul>
          <li>Complete venue cleanup</li>
          <li>Equipment restoration</li>
          <li>Damage documentation</li>
          <li>Waste removal</li>
          <li>Vendor cleanup verification</li>
        </ul>
      `
    },
    {
      id: 'host-terms',
      title: 'Host Terms',
      content: `
        <h3>4. Hosting on Launch Gala</h3>
        <h4>4.1 Host Eligibility</h4>
        <p>Legal Requirements:</p>
        <ul>
          <li>Valid business registration</li>
          <li>Venue ownership/lease documentation</li>
          <li>Operating permits</li>
          <li>Certificate of occupancy</li>
          <li>Tax registration documents</li>
        </ul>
        <p>Insurance Requirements:</p>
        <ul>
          <li>Commercial general liability ($1M minimum)</li>
          <li>Property insurance</li>
          <li>Business interruption coverage</li>
          <li>Umbrella liability policy</li>
          <li>Worker's compensation</li>
        </ul>
        <p>Safety Compliance:</p>
        <ul>
          <li>Fire safety certification</li>
          <li>Health department permits</li>
          <li>Building code compliance</li>
          <li>Emergency procedures</li>
          <li>ADA compliance</li>
        </ul>
  
        <h4>4.2 Platform Service Fee</h4>
        <p>Standard Fee Structure:</p>
        <ul>
          <li>3% for venues/vendors/services registered before August 01, 2025</li>
          <li>4% for venues/vendors/services registered between August 01 - December 31, 2025</li>
          <li>5% for venues/vendors/services registered after December 31, 2025</li>
        </ul>
        <p>Fee Calculation:</p>
        <ul>
          <li>Based on total booking amount</li>
          <li>Excludes security deposits</li>
          <li>Includes cleaning fees</li>
          <li>Includes additional services</li>
          <li>Processed at time of booking</li>
        </ul>
  
        <h3>5. Managing Your Listing</h3>
        <h4>5.1 Listing Requirements</h4>
        <p>Required Information:</p>
        <ul>
          <li>Accurate square footage</li>
          <li>Maximum capacity</li>
          <li>Floor plans</li>
          <li>Parking information</li>
          <li>Accessibility features</li>
          <li>Available equipment</li>
          <li>Amenities list</li>
          <li>Operating hours</li>
          <li>Setup/breakdown times</li>
          <li>Noise restrictions</li>
        </ul>
        <p>Photo Requirements:</p>
        <ul>
          <li>Minimum 5 high-quality photos</li>
          <li>Virtual tour (coming soon)</li>
          <li>Floor plan images</li>
          <li>Exterior shots</li>
          <li>Equipment/amenity photos</li>
          <li>Different setup examples</li>
        </ul>
        <p>Pricing Details:</p>
        <ul>
          <li>Base rate structure</li>
          <li>Peak/off-peak rates</li>
          <li>Minimum booking duration</li>
          <li>Additional services pricing</li>
          <li>Security deposit amount</li>
          <li>Cleaning fee</li>
          <li>Setup/breakdown fees</li>
        </ul>
  
        <h4>5.2 Calendar Management</h4>
        <p>Availability Settings:</p>
        <ul>
          <li>Real-time calendar updates</li>
          <li>Minimum notice period</li>
          <li>Maximum advance booking</li>
          <li>Blocked dates</li>
          <li>Buffer time between events</li>
        </ul>
        <p>Booking Windows:</p>
        <ul>
          <li>Minimum booking duration</li>
          <li>Maximum booking duration</li>
          <li>Special event restrictions</li>
          <li>Holiday availability</li>
          <li>Seasonal restrictions</li>
        </ul>
      `
    },
    {
      id: 'platform-policies',
      title: 'Platform Policies',
      content: `
        <h3>6. Reviews</h3>
        <h4>6.1 Review System Rules</h4>
        <p>Timing Requirements:</p>
        <ul>
          <li>14-day review window</li>
          <li>48-hour edit period</li>
          <li>Response window: 7 days</li>
          <li>No extensions granted</li>
          <li>Automatic closure after deadline</li>
        </ul>
        <p>Content Guidelines:</p>
        <p>Must include:</p>
        <ul>
          <li>Event date</li>
          <li>Guest count</li>
          <li>Event type</li>
          <li>Venue performance</li>
          <li>Staff interaction</li>
        </ul>
        <p>Must not include:</p>
        <ul>
          <li>Personal attacks</li>
          <li>Discriminatory language</li>
          <li>Competitor mentions</li>
          <li>Promotional content</li>
          <li>Unrelated complaints</li>
        </ul>
  
        <h4>6.2 Review Management</h4>
        <p>Moderation Process:</p>
        <ul>
          <li>Automated screening</li>
          <li>Manual review if flagged</li>
          <li>Host/Guest notification</li>
          <li>Appeal opportunity</li>
          <li>Final determination</li>
        </ul>
        <p>Removal Criteria:</p>
        <ul>
          <li>False information</li>
          <li>Violation of guidelines</li>
          <li>Legal requirements</li>
          <li>Personal information</li>
          <li>Inappropriate content</li>
        </ul>
  
        <h3>7. Content</h3>
        <h4>7.1 Platform Content Rights</h4>
        <p>User-Generated Content:</p>
        <p>Users grant Launch Gala:</p>
        <ul>
          <li>Worldwide license</li>
          <li>Right to display</li>
          <li>Marketing usage rights</li>
          <li>Modification rights</li>
          <li>Distribution rights</li>
        </ul>
        <p>Content Restrictions:</p>
        <p>Prohibited content includes:</p>
        <ul>
          <li>Copyrighted material without permission</li>
          <li>Misleading information</li>
          <li>Adult content</li>
          <li>Hate speech</li>
          <li>Violence promotion</li>
        </ul>
  
        <h4>7.2 Platform Marketing Rights</h4>
        <p>Usage Rights:</p>
        <p>Launch Gala may use:</p>
        <ul>
          <li>Venue photos</li>
          <li>Event descriptions</li>
          <li>Public reviews</li>
          <li>Success stories</li>
          <li>Event statistics</li>
        </ul>
        <p>Opt-Out Options:</p>
        <ul>
          <li>Photo usage opt-out</li>
          <li>Review display preferences</li>
          <li>Marketing exclusion request</li>
          <li>Case study participation</li>
          <li>Testimonial usage</li>
        </ul>
      `
    },
    {
      id: 'legal-compliance',
      title: 'Legal Compliance',
      content: `
        <h3>8. Regulatory Compliance</h3>
        <h4>8.1 Local Regulations</h4>
        <ul>
          <li>Zoning laws</li>
          <li>Event permits</li>
          <li>Noise ordinances</li>
          <li>Occupancy limits</li>
          <li>Health regulations</li>
        </ul>
        <h4>8.2 Federal Compliance</h4>
        <ul>
          <li>ADA requirements</li>
          <li>Tax regulations</li>
          <li>Labor laws</li>
          <li>Safety standards</li>
          <li>Privacy laws</li>
        </ul>
  
        <h3>9. Liability and Insurance</h3>
        <h4>9.1 Platform Insurance Coverage</h4>
        <p>Host Protection Insurance:</p>
        <p>Coverage includes:</p>
        <ul>
          <li>Property damage: Up to $1,000,000</li>
          <li>Bodily injury: Up to $1,000,000</li>
          <li>Personal injury: Up to $1,000,000</li>
          <li>Host liability: Up to $1,000,000</li>
          <li>Business interruption: Up to $50,000</li>
        </ul>
        <p>Exclusions:</p>
        <ul>
          <li>Intentional acts</li>
          <li>Professional services</li>
          <li>Motor vehicles</li>
          <li>Employee injuries</li>
          <li>Pre-existing damage</li>
        </ul>
        <p>Claims Process:</p>
        <ol>
          <li>Initial Report (within 48 hours)</li>
          <li>Documentation Submission</li>
          <li>Investigation Period</li>
          <li>Coverage Determination</li>
          <li>Resolution/Payout</li>
        </ol>
  
        <h4>9.2 Required Host Insurance</h4>
        <p>Minimum Coverage Requirements:</p>
        <ul>
          <li>General liability: $1,000,000 per occurrence</li>
          <li>Property insurance: Venue value</li>
          <li>Business interruption: 6 months</li>
          <li>Workers compensation: As required by law</li>
          <li>Umbrella coverage: $2,000,000</li>
        </ul>
        <p>Verification Process:</p>
        <ul>
          <li>Annual certificate submission</li>
          <li>Coverage verification</li>
          <li>Policy renewal tracking</li>
          <li>Claims history review</li>
          <li>Compliance monitoring</li>
        </ul>
      `
    },
    {
      id: 'dispute-resolution',
      title: 'Dispute Resolution',
      content: `
        <h3>10. Resolution Process</h3>
        <h4>10.1 Internal Resolution</h4>
        <ul>
          <li>Direct communication</li>
          <li>Platform mediation</li>
          <li>Management review</li>
          <li>Final determination</li>
          <li>Appeal process</li>
        </ul>
        <h4>10.2 External Resolution</h4>
        <ul>
          <li>Mandatory arbitration</li>
          <li>Small claims option</li>
          <li>Legal proceedings</li>
          <li>Jurisdiction selection</li>
          <li>Governing law application</li>
        </ul>
  
        <h3>11. Arbitration Agreement</h3>
        <h4>11.1 Process Requirements</h4>
        <ul>
          <li>Written notice</li>
          <li>Arbitrator selection</li>
          <li>Cost sharing</li>
          <li>Location specification</li>
          <li>Time limitations</li>
        </ul>
        <h4>11.2 Class Action Waiver</h4>
        <ul>
          <li>Individual claims only</li>
          <li>No class proceedings</li>
          <li>No representative actions</li>
          <li>No consolidated claims</li>
          <li>Limited exceptions</li>
        </ul>
      `
    },
    {
      id: 'final-provisions',
      title: 'Final Provisions',
      content: `
        <h3>12. Governing Law</h3>
        <ul>
          <li>Delaware law governs</li>
          <li>Federal law application</li>
          <li>State law compliance</li>
          <li>International law consideration</li>
          <li>Conflict resolution</li>
        </ul>
  
        <h3>13. Severability</h3>
        <p>If any provision is found invalid:</p>
        <ul>
          <li>Provision severance</li>
          <li>Remainder intact</li>
          <li>Modification rights</li>
          <li>Interpretation guidance</li>
          <li>Legal compliance</li>
        </ul>
  
        <h3>14. Contact Information</h3>
        <p>
          Launch Gala, Inc.<br>
          [Delaware Address]<br>
          Email: support@launchgala.com<br>
          Phone: +1 415 879 3113<br>
          Hours: Monday-Friday, 9:00 AM - 5:00 PM PST
        </p>

  
        <h3>15. Effective Date and Updates</h3>
        <p>These Terms of Service were last updated on January 17, 2025, and are effective immediately for all users of the Platform.</p>
        <p>Version: 1.0</p>
      `
    }
  ]
  
  onMounted(() => {
    // Any additional setup can be done here
  })
  </script>
  
  <style>
  .prose h3 {
    @apply text-2xl font-serif font-semibold text-orange-700 mt-6 mb-4;
  }
  
  .prose h4 {
    @apply text-xl font-serif font-medium text-orange-600 mt-4 mb-2;
  }
  
  .prose ul {
    @apply list-disc pl-6 mb-4 space-y-2;
  }
  
  .prose ol {
    @apply list-decimal pl-6 mb-4 space-y-2;
  }
  
  .prose p {
    @apply mb-4 text-gray-700 leading-relaxed;
  }
  
  .prose a {
    @apply text-orange-600 hover:text-orange-800 transition duration-300 ease-in-out;
  }
  </style>