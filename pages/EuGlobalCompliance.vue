<template>
    <div class="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-orange-600 mb-4">EU & Global Compliance</h1>
        <p class="text-sm text-gray-600 mb-8">Last Updated: January 19, 2025</p>
  
        <nav class="bg-orange-100 p-4 rounded-lg mb-8">
          <h2 class="text-lg font-semibold text-orange-800 mb-2">Table of Contents</h2>
          <ul class="space-y-1">
            <li v-for="(section, index) in sections" :key="index">
              <a :href="`#section-${index + 1}`" class="text-orange-600 hover:text-orange-800 transition-colors duration-200">
                {{ index + 1 }}. {{ section.title }}
              </a>
            </li>
          </ul>
        </nav>
  
        <div class="space-y-8">
          <section v-for="(section, index) in sections" :key="index" :id="`section-${index + 1}`">
            <h2 class="text-2xl font-bold text-orange-600 mb-4">{{ index + 1 }}. {{ section.title }}</h2>
            <div v-html="section.content" class="prose max-w-none"></div>
          </section>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const sections = ref([
    {
      title: "Overview",
      content: `
        <p>Launch Gala is committed to compliance with global data protection and privacy regulations, with particular attention to European Union (EU) requirements and other international standards. This document outlines our compliance measures and commitment to protecting your rights.</p>
      `
    },
    {
      title: "GDPR Compliance",
      content: `
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">Data Protection Principles</h3>
        <p>We adhere to the following principles under GDPR:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Lawfulness, fairness, and transparency in data processing</li>
          <li>Purpose limitation and data minimization</li>
          <li>Accuracy and data quality maintenance</li>
          <li>Storage limitation and secure processing</li>
          <li>Accountability and confidentiality</li>
        </ul>
  
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">Legal Basis for Processing</h3>
        <p>We process personal data only when:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>We have received explicit consent</li>
          <li>Processing is necessary for contract fulfillment</li>
          <li>We have legitimate business interests</li>
          <li>We must comply with legal obligations</li>
        </ul>
  
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">Data Subject Rights</h3>
        <p>We protect your rights to:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Access your personal data</li>
          <li>Rectify inaccurate information</li>
          <li>Erase your data ("right to be forgotten")</li>
          <li>Restrict processing</li>
          <li>Data portability</li>
          <li>Object to processing</li>
          <li>Withdraw consent</li>
        </ul>
      `
    },
    {
      title: "International Data Transfers",
      content: `
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">Data Transfer Mechanisms</h3>
        <ul class="list-disc pl-6 mt-2">
          <li>EU-approved Standard Contractual Clauses (SCCs)</li>
          <li>Adequacy decisions where applicable</li>
          <li>Additional safeguards as required</li>
          <li>Regular security assessments</li>
        </ul>
  
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">Cross-Border Data Protection</h3>
        <ul class="list-disc pl-6 mt-2">
          <li>Encryption during transit and storage</li>
          <li>Data localization where required</li>
          <li>Vendor assessment and compliance verification</li>
          <li>Regular compliance audits</li>
        </ul>
      `
    },
    {
      title: "Additional Global Compliance",
      content: `
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">Privacy Laws We Comply With</h3>
        <ul class="list-disc pl-6 mt-2">
          <li>EU General Data Protection Regulation (GDPR)</li>
          <li>UK GDPR</li>
          <li>California Consumer Privacy Act (CCPA)</li>
          <li>Brazilian General Data Protection Law (LGPD)</li>
          <li>Australian Privacy Principles (APPs)</li>
          <li>Canadian Personal Information Protection and Electronic Documents Act (PIPEDA)</li>
        </ul>
  
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">Security Measures</h3>
        <ul class="list-disc pl-6 mt-2">
          <li>ISO 27001 compliance framework</li>
          <li>Regular security audits</li>
          <li>Employee training programs</li>
          <li>Incident response procedures</li>
          <li>Data breach notification protocols</li>
        </ul>
      `
    },
    {
      title: "Event-Specific Compliance",
      content: `
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">Event Registration & Management</h3>
        <ul class="list-disc pl-6 mt-2">
          <li>Transparent data collection practices</li>
          <li>Secure payment processing</li>
          <li>Attendee privacy protection</li>
          <li>Marketing consent management</li>
          <li>Special categories data handling</li>
        </ul>
  
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">Vendor Management</h3>
        <ul class="list-disc pl-6 mt-2">
          <li>Vendor compliance verification</li>
          <li>Data processing agreements</li>
          <li>Regular assessments</li>
          <li>Security certifications requirements</li>
        </ul>
      `
    },
    {
      title: "Monitoring & Updates",
      content: `
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">Compliance Maintenance</h3>
        <ul class="list-disc pl-6 mt-2">
          <li>Regular policy reviews</li>
          <li>Update notifications</li>
          <li>Stakeholder communications</li>
          <li>Documentation maintenance</li>
          <li>Training updates</li>
        </ul>
  
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">Regulatory Changes</h3>
        <p>We actively monitor and implement changes required by:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>EU regulatory bodies</li>
          <li>National data protection authorities</li>
          <li>International privacy frameworks</li>
          <li>Industry standards organizations</li>
        </ul>
      `
    },
    {
      title: "Contact Information",
      content: `
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">Data Protection Officer</h3>
        <p>[Insert DPO Name]</p>
        <p>Email: [Insert Email]</p>
        <p>Phone: [Insert Phone]</p>
  
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">EU Representative</h3>
        <p>[Insert EU Representative Details]</p>
        <p>Address: [Insert Address]</p>
        <p>Email: [Insert Email]</p>
  
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">Compliance Team</h3>
        <p>For compliance inquiries:</p>
        <p>Email: compliance@launchgala.com</p>
        <p>Phone: [Insert Phone]</p>
      `
    },
    {
      title: "Reporting & Complaints",
      content: `
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">How to Report Concerns</h3>
        <ul class="list-disc pl-6 mt-2">
          <li>Email our compliance team</li>
          <li>Use our secure reporting form</li>
          <li>Contact our DPO directly</li>
          <li>Submit through our website</li>
        </ul>
  
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">Complaint Resolution</h3>
        <ul class="list-disc pl-6 mt-2">
          <li>Acknowledgment within 24 hours</li>
          <li>Initial assessment within 48 hours</li>
          <li>Regular progress updates</li>
          <li>Resolution timeline commitment</li>
        </ul>
      `
    },
    {
      title: "Declaration of Compliance",
      content: `
        <p>Launch Gala maintains this compliance program in accordance with EU and global privacy regulations. We regularly review and update our practices to ensure ongoing compliance with evolving requirements.</p>
        <p class="mt-4">For specific inquiries or to exercise your rights, please contact our Data Protection Officer or EU Representative listed above.</p>
      `
    }
  ]);
  </script>
  
  <style scoped>
  html {
    scroll-behavior: smooth;
  }
  </style>