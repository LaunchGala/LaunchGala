<template>
    <div class="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-orange-600 mb-4">Cookies & Other Policies</h1>
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
      title: "Introduction",
      content: `<p>Welcome to Launch Gala ("we," "our," or "us"). This policy explains how we use cookies and similar technologies on our website to enhance your browsing experience while protecting your privacy.</p>`
    },
    {
      title: "What Are Cookies?",
      content: `<p>Cookies are small text files that are placed on your device when you visit our website. They help us recognize your device and store information about your preferences or past actions on our website.</p>`
    },
    {
      title: "Types of Cookies We Use",
      content: `
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">3.1 Essential Cookies</h3>
        <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</p>
        
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">3.2 Performance Cookies</h3>
        <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve our website's performance.</p>
        
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">3.3 Functionality Cookies</h3>
        <p>These cookies allow the website to remember choices you make (such as your language preference or login details) and provide enhanced, more personal features.</p>
        
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">3.4 Marketing Cookies</h3>
        <p>These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an advertisement.</p>
      `
    },
    {
      title: "Third-Party Cookies",
      content: `
        <p>Some cookies are placed by third-party services that appear on our pages. We use trusted third-party services for:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Analytics (Google Analytics)</li>
          <li>Social media integration</li>
          <li>Payment processing</li>
          <li>Event registration systems</li>
        </ul>
      `
    },
    {
      title: "Cookie Management",
      content: `
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">5.1 How to Control Cookies</h3>
        <p>Most web browsers allow you to control cookies through their settings preferences. You can:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Delete all cookies</li>
          <li>Block all cookies</li>
          <li>Allow all cookies</li>
          <li>Block third-party cookies</li>
          <li>Clear all cookies when you close the browser</li>
          <li>Open a 'private browsing' session</li>
          <li>Install add-ons and plugins to extend browser functionality</li>
        </ul>
  
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">5.2 Cookie Consent</h3>
        <p>When you first visit our website, you will be asked to accept or decline cookies. You can change your preferences at any time through our Cookie Settings panel.</p>
      `
    },
    {
      title: "Data Collection and Use",
      content: `
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">6.1 Information We Collect</h3>
        <p>Through cookies and similar technologies, we may collect:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type</li>
          <li>Operating system</li>
          <li>Time zone</li>
          <li>Pages visited</li>
          <li>Time spent on pages</li>
          <li>Links clicked</li>
          <li>Registration and attendance information</li>
        </ul>
  
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">6.2 How We Use This Information</h3>
        <p>We use this information to:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Ensure proper website functionality</li>
          <li>Improve user experience</li>
          <li>Analyze website performance</li>
          <li>Personalize content</li>
          <li>Process event registrations</li>
          <li>Send relevant communications</li>
          <li>Maintain security</li>
        </ul>
      `
    },
    {
      title: "Data Storage and Security",
      content: `<p>We implement appropriate security measures to protect your information. Your data is stored securely and only retained for as long as necessary to fulfill the purposes outlined in this policy.</p>`
    },
    {
      title: "Your Rights",
      content: `
        <p>Under applicable data protection laws, you have the right to:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Request data portability</li>
          <li>Withdraw consent</li>
        </ul>
      `
    },
    {
      title: "Changes to This Policy",
      content: `<p>We reserve the right to modify this policy at any time. Changes will be effective immediately upon posting to the website. We encourage you to review this policy periodically.</p>`
    },
    {
      title: "Contact Us",
      content: `
        <p>If you have questions about our cookie policy or your rights, please contact us at:</p>
        <p class="mt-2">
          <strong>Email:</strong> [Insert Contact Email]<br>
          <strong>Phone:</strong> [Insert Contact Phone]<br>
          <strong>Address:</strong> [Insert Physical Address]
        </p>
      `
    },
    {
      title: "Additional Information",
      content: `
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">11.1 Mobile Devices</h3>
        <p>Our cookie policy also applies to mobile devices. The options to manage cookies on mobile browsers may be different from desktop browsers.</p>
  
        <h3 class="text-xl font-semibold text-orange-500 mt-4 mb-2">11.2 Do Not Track Signals</h3>
        <p>We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place.</p>
      `
    },
    {
      title: "Legal Basis",
      content: `
        <p>We process your personal data based on:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Your consent</li>
          <li>Our legitimate interests</li>
          <li>Legal obligations</li>
          <li>Contract performance</li>
        </ul>
        <p class="mt-4">This policy complies with applicable data protection regulations, including GDPR and other relevant privacy laws.</p>
      `
    }
  ]);
  </script>
  
  <style scoped>
  html {
    scroll-behavior: smooth;
  }
  </style>