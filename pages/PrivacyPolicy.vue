<template>
    <div class="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div class="p-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p class="text-gray-600 mb-8">Last Updated: {{ lastUpdated }}</p>
  
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Key Information Summary</h2>
            <div class="bg-orange-100 rounded-lg p-4">
              <p><strong>Data Controller:</strong> Launch Gala, Inc. [Delaware Address]</p>
              <p><strong>Data Protection Officer:</strong> privacy@launchgala.com</p>
              <p><strong>Main Establishments:</strong></p>
              <ul class="list-disc list-inside ml-4">
                <li>USA: [Delaware Address]</li>
                <li>EU: [EU Representative Address]</li>
                <li>UK: [UK Representative Address]</li>
              </ul>
            </div>
          </div>
  
          <div v-for="(section, index) in sections" :key="index" class="mb-6">
            <button 
              @click="toggleSection(index)"
              class="w-full flex justify-between items-center p-4 bg-orange-200 hover:bg-orange-300 transition-colors duration-300 rounded-lg"
            >
              <h2 class="text-2xl font-semibold text-gray-900">{{ section.title }}</h2>
              <ChevronDown 
                :class="{'transform rotate-180': section.isOpen}"
                class="w-6 h-6 text-gray-600 transition-transform duration-300"
              />
            </button>
            <div v-show="section.isOpen" class="mt-4 pl-4 border-l-2 border-orange-200">
              <div v-html="section.content"></div>
            </div>
          </div>
  
          <div class="mt-12 pt-8 border-t border-gray-200">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p class="text-gray-600 mb-2">Launch Gala, Inc. [Delaware Address]</p>
            <div class="space-y-2">
              <div class="flex items-center">
                <Mail class="h-5 w-5 text-orange-500 mr-2" />
                <a href="mailto:privacy@launchgala.com" class="text-orange-600 hover:text-orange-800 transition-colors duration-300">
                    support@launchgala.com
                </a>
              </div>
              <!-- <div class="flex items-center">
                <Mail class="h-5 w-5 text-orange-500 mr-2" />
                <a href="mailto:dpo@launchgala.com" class="text-orange-600 hover:text-orange-800 transition-colors duration-300">
                    support@launchgala.com
                </a>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Mail, ChevronDown } from 'lucide-vue-next'
  
  const lastUpdated = ref('January 17, 2025')
  
  const sections = ref([
    {
      title: '1. Information We Collect',
      isOpen: false,
      content: `
        <h3 class="text-xl font-semibold mb-2">1.1 Personal Information You Provide</h3>
        <ul class="list-disc list-inside ml-4 mb-4">
          <li>Account Information (name, email, phone, address, etc.)</li>
          <li>Payment Information</li>
          <li>Venue Information (for Hosts)</li>
          <li>Communication data</li>
        </ul>
        <h3 class="text-xl font-semibold mb-2">1.2 Information Automatically Collected</h3>
        <ul class="list-disc list-inside ml-4">
          <li>Device Information</li>
          <li>Usage Data</li>
          <li>Location Data</li>
          <li>Cookies and Similar Technologies</li>
        </ul>
      `
    },
    {
      title: '2. How We Use Your Information',
      isOpen: false,
      content: `
        <h3 class="text-xl font-semibold mb-2">2.1 Primary Purposes</h3>
        <ul class="list-disc list-inside ml-4 mb-4">
          <li>Service Provision</li>
          <li>Platform Improvement</li>
        </ul>
        <h3 class="text-xl font-semibold mb-2">2.2 Secondary Purposes</h3>
        <ul class="list-disc list-inside ml-4">
          <li>Marketing (with consent)</li>
          <li>Analytics</li>
        </ul>
      `
    },
    {
      title: '3. Legal Bases for Processing (GDPR)',
      isOpen: false,
      content: `
        <ul class="list-disc list-inside ml-4">
          <li>Contract Performance</li>
          <li>Legal Obligations</li>
          <li>Legitimate Interests</li>
          <li>Consent</li>
        </ul>
      `
    },
    {
      title: '4. Information Sharing',
      isOpen: false,
      content: `
        <h3 class="text-xl font-semibold mb-2">4.1 Internal Sharing</h3>
        <ul class="list-disc list-inside ml-4 mb-4">
          <li>Employees (need-to-know basis)</li>
          <li>Subsidiaries and Affiliated companies</li>
        </ul>
        <h3 class="text-xl font-semibold mb-2">4.2 External Sharing</h3>
        <ul class="list-disc list-inside ml-4">
          <li>Service Providers</li>
          <li>Legal Requirements</li>
        </ul>
      `
    },
    {
      title: '5. Regional Privacy Rights',
      isOpen: false,
      content: `
        <h3 class="text-xl font-semibold mb-2">5.1 European Union (GDPR)</h3>
        <p class="mb-2">Rights include: Access, Rectification, Erasure, Portability, etc.</p>
        <h3 class="text-xl font-semibold mb-2">5.2 California (CCPA/CPRA)</h3>
        <p class="mb-2">Rights include: Know/Access, Delete, Correct, Opt-out of sale, etc.</p>
        <h3 class="text-xl font-semibold mb-2">5.3 Rest of World</h3>
        <p>Rights vary by jurisdiction but generally include: Access, Correction, Deletion, etc.</p>
      `
    },
    {
      title: '6. Data Security',
      isOpen: false,
      content: `
        <h3 class="text-xl font-semibold mb-2">6.1 Technical Measures</h3>
        <ul class="list-disc list-inside ml-4 mb-4">
          <li>Encryption (in-transit and at-rest)</li>
          <li>Firewalls</li>
          <li>Access controls</li>
          <li>Intrusion detection</li>
          <li>Security monitoring</li>
        </ul>
        <h3 class="text-xl font-semibold mb-2">6.2 Organizational Measures</h3>
        <ul class="list-disc list-inside ml-4">
          <li>Employee training</li>
          <li>Access limitations</li>
          <li>Security policies</li>
          <li>Incident response</li>
          <li>Regular audits</li>
        </ul>
      `
    },
    {
      title: '7. International Data Transfers',
      isOpen: false,
      content: `
        <h3 class="text-xl font-semibold mb-2">7.1 Transfer Mechanisms</h3>
        <ul class="list-disc list-inside ml-4 mb-4">
          <li>Standard Contractual Clauses</li>
          <li>Adequacy decisions</li>
          <li>Privacy Shield (where applicable)</li>
          <li>Binding Corporate Rules</li>
          <li>Explicit consent</li>
        </ul>
        <h3 class="text-xl font-semibold mb-2">7.2 Transfer Safeguards</h3>
        <ul class="list-disc list-inside ml-4">
          <li>Data encryption</li>
          <li>Access controls</li>
          <li>Transfer impact assessments</li>
          <li>Recipient vetting</li>
          <li>Monitoring systems</li>
        </ul>
      `
    },
    {
      title: '8. Data Retention',
      isOpen: false,
      content: `
        <h3 class="text-xl font-semibold mb-2">8.1 Retention Periods</h3>
        <ul class="list-disc list-inside ml-4 mb-4">
          <li>Active accounts: Duration of relationship</li>
          <li>Closed accounts: 7 years</li>
          <li>Financial records: 7 years</li>
          <li>Marketing data: 2 years</li>
          <li>Security logs: 1 year</li>
        </ul>
        <h3 class="text-xl font-semibold mb-2">8.2 Deletion Procedures</h3>
        <ul class="list-disc list-inside ml-4">
          <li>Secure erasure</li>
          <li>Backup removal</li>
          <li>Third-party notification</li>
          <li>Verification process</li>
          <li>Documentation</li>
        </ul>
      `
    },
    {
      title: '9. Children\'s Privacy',
      isOpen: false,
      content: `
        <ul class="list-disc list-inside ml-4">
          <li>Minimum age: 18 years</li>
          <li>No intentional collection</li>
          <li>Parental consent requirements</li>
          <li>Deletion upon discovery</li>
          <li>Verification procedures</li>
        </ul>
      `
    },
    {
      title: '10. Changes to Privacy Policy',
      isOpen: false,
      content: `
        <h3 class="text-xl font-semibold mb-2">10.1 Update Process</h3>
        <ul class="list-disc list-inside ml-4 mb-4">
          <li>Policy review</li>
          <li>Change notification</li>
          <li>User communication</li>
          <li>Implementation period</li>
          <li>Documentation</li>
        </ul>
        <h3 class="text-xl font-semibold mb-2">10.2 Notification Methods</h3>
        <ul class="list-disc list-inside ml-4">
          <li>Email notification</li>
          <li>Platform announcement</li>
          <li>Website update</li>
          <li>App notification</li>
          <li>Support communication</li>
        </ul>
      `
    },
    {
      title: '11. Supervisory Authority Contacts',
      isOpen: false,
      content: `
        <ul class="list-disc list-inside ml-4">
          <li>EU: [Relevant DPA Contact]</li>
          <li>UK: Information Commissioner's Office</li>
          <li>US: Federal Trade Commission</li>
          <li>California: Attorney General's Office</li>
        </ul>
      `
    }
  ])
  
  const toggleSection = (index) => {
    sections.value[index].isOpen = !sections.value[index].isOpen
  }
  </script>