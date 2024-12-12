<template>
    <div class="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <header class="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-6 shadow-lg">
        <div class="container mx-auto px-4 flex justify-between items-center">
          <a href="/" class="text-3xl font-bold tracking-tight">PartnerShares</a>
          <nav>
            <ul class="flex space-x-6">
              <li><a href="#" class="hover:text-orange-200 transition-colors duration-300">About</a></li>
              <li><a href="#" class="hover:text-orange-200 transition-colors duration-300">Contact</a></li>
              <li><a href="#" class="hover:text-orange-200 transition-colors duration-300">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </header>
  
      <main class="container mx-auto px-4 py-12">
        <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800 mb-4 text-center animate-fade-in-down">
          Create Partner Option Grants
        </h1>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up text-lg">
          Empower your strategic partners with innovative, performance-based option grants. 
          Configure your partner shares below to align incentives and drive long-term value creation.
        </p>
  
        <div class="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-2xl space-y-12 animate-fade-in">
          <nav class="flex justify-center mb-8">
            <ul class="flex space-x-4">
              <li v-for="(section, index) in sections" :key="section.id">
                <button 
                  @click="currentSection = index"
                  class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                  :class="currentSection === index ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-800 hover:bg-orange-200'"
                >
                  {{ section.name }}
                </button>
              </li>
            </ul>
          </nav>
  
          <transition-group name="fade" mode="out-in">
            <section v-if="currentSection === 0" key="company-info" class="space-y-8">
              <h2 class="text-3xl font-semibold text-orange-600 mb-4">Company Information</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="company-name" class="block text-sm font-medium text-gray-700">
                    Company Name
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The legal name of your company</span>
                    </span>
                  </label>
                  <input
                    id="company-name"
                    v-model="companyName"
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>
                <div class="space-y-2">
                  <label for="company-valuation" class="block text-sm font-medium text-gray-700">
                    Company Valuation ($)
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The current estimated value of your company</span>
                    </span>
                  </label>
                  <input
                    id="company-valuation"
                    v-model.number="companyValuation"
                    type="number"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    placeholder="Enter company valuation"
                  />
                </div>
                <div class="space-y-2">
                  <label for="company-jurisdiction" class="block text-sm font-medium text-gray-700">
                    Legal Jurisdiction
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The country or region where your company is legally registered</span>
                    </span>
                  </label>
                  <select
                    id="company-jurisdiction"
                    v-model="companyJurisdiction"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  >
                    <option value="">Select jurisdiction</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="EU">European Union</option>
                    <option value="SG">Singapore</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div class="space-y-2">
                  <label for="company-industry" class="block text-sm font-medium text-gray-700">
                    Industry
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The primary industry your company operates in</span>
                    </span>
                  </label>
                  <input
                    id="company-industry"
                    v-model="companyIndustry"
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    placeholder="Enter company industry"
                  />
                </div>
              </div>
            </section>
  
            <section v-if="currentSection === 1" key="option-pool" class="space-y-8">
              <h2 class="text-3xl font-semibold text-orange-600 mb-4">Partner Option Pool</h2>
              <p class="text-gray-600 mb-6">Define the size and structure of your partner option pool.</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="option-pool-size" class="block text-sm font-medium text-gray-700">
                    Option Pool Size (% of total shares)
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The percentage of total company shares reserved for partner options</span>
                    </span>
                  </label>
                  <input
                    id="option-pool-size"
                    v-model.number="optionPoolSize"
                    type="number"
                    min="0"
                    max="100"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
                <div class="space-y-2">
                  <label for="option-type" class="block text-sm font-medium text-gray-700">
                    Option Type
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The type of options to be granted to partners</span>
                    </span>
                  </label>
                  <select
                    id="option-type"
                    v-model="optionType"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  >
                    <option value="iso">Incentive Stock Options (ISO)</option>
                    <option value="nso">Non-Qualified Stock Options (NSO)</option>
                    <option value="rsu">Restricted Stock Units (RSU)</option>
                    <option value="sar">Stock Appreciation Rights (SAR)</option>
                  </select>
                </div>
                <div class="space-y-2">
                  <label for="strike-price" class="block text-sm font-medium text-gray-700">
                    Strike Price ($)
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The price at which partners can exercise their options</span>
                    </span>
                  </label>
                  <input
                    id="strike-price"
                    v-model.number="strikePrice"
                    type="number"
                    min="0"
                    step="0.01"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
                <div class="space-y-2">
                  <label for="fair-market-value" class="block text-sm font-medium text-gray-700">
                    Fair Market Value ($)
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The current fair market value of a single share</span>
                    </span>
                  </label>
                  <input
                    id="fair-market-value"
                    v-model.number="fairMarketValue"
                    type="number"
                    min="0"
                    step="0.01"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
              </div>
            </section>
  
            <section v-if="currentSection === 2" key="vesting-terms" class="space-y-8">
              <h2 class="text-3xl font-semibold text-orange-600 mb-4">Vesting Terms</h2>
              <p class="text-gray-600 mb-6">Define the vesting schedule and conditions for partner options.</p>
              <div class="space-y-6">
                <div>
                  <label for="vesting-period" class="block text-sm font-medium text-gray-700 mb-2">
                    Vesting Period (years)
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The total time period over which options fully vest</span>
                    </span>
                  </label>
                  <input
                    id="vesting-period"
                    v-model.number="vestingPeriod"
                    type="number"
                    min="0"
                    step="0.5"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label for="cliff-period" class="block text-sm font-medium text-gray-700 mb-2">
                    Cliff Period (months)
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The initial period before vesting begins</span>
                    </span>
                  </label>
                  <input
                    id="cliff-period"
                    v-model.number="cliffPeriod"
                    type="number"
                    min="0"
                    :max="vestingPeriod * 12"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label for="vesting-frequency" class="block text-sm font-medium text-gray-700 mb-2">
                    Vesting Frequency
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">How often options vest after the cliff period</span>
                    </span>
                  </label>
                  <select
                    id="vesting-frequency"
                    v-model="vestingFrequency"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="annually">Annually</option>
                  </select>
                </div>
                <div>
                  <label for="performance-based-vesting" class="flex items-center">
                    <input
                      id="performance-based-vesting"
                      v-model="performanceBasedVesting"
                      type="checkbox"
                      class="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <span class="ml-2 text-sm font-medium text-gray-700">
                      Enable Performance-Based Vesting
                      <span class="tooltip ml-1">ⓘ
                        <span class="tooltiptext">Tie vesting to specific performance metrics or milestones</span>
                      </span>
                    </span>
                  </label>
                </div>
                <div v-if="performanceBasedVesting" class="space-y-4 ml-6">
                  <div>
                    <label for="performance-metric" class="block text-sm font-medium text-gray-700">
                      Performance Metric
                    </label>
                    <input
                      id="performance-metric"
                      v-model="performanceMetric"
                      type="text"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                      placeholder="e.g., Revenue growth, Client acquisition"
                    />
                  </div>
                  <div>
                    <label for="performance-target" class="block text-sm font-medium text-gray-700">
                      Performance Target
                    </label>
                    <input
                      id="performance-target"
                      v-model="performanceTarget"
                      type="text"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                      placeholder="e.g., 20% YoY growth, 50 new clients"
                    />
                  </div>
                </div>
              </div>
            </section>
  
            <section v-if="currentSection === 3" key="exercise-terms" class="space-y-8">
              <h2 class="text-3xl font-semibold text-orange-600 mb-4">Exercise Terms</h2>
              <p class="text-gray-600 mb-6">Define the conditions under which partners can exercise their options.</p>
              <div class="space-y-6">
                <div>
                  <label for="exercise-window" class="block text-sm font-medium text-gray-700 mb-2">
                    Exercise Window (days)
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The period after leaving the partnership during which options can be exercised</span>
                    </span>
                  </label>
                  <input
                    id="exercise-window"
                    v-model.number="exerciseWindow"
                    type="number"
                    min="0"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label for="early-exercise" class="flex items-center">
                    <input
                      id="early-exercise"
                      v-model="earlyExercise"
                      type="checkbox"
                      class="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <span class="ml-2 text-sm font-medium text-gray-700">
                      Allow Early Exercise
                      <span class="tooltip ml-1">ⓘ
                        <span class="tooltiptext">Permit partners to exercise unvested options</span>
                      </span>
                    </span>
                  </label>
                </div>
                <div>
                  <label for="cashless-exercise" class="flex items-center">
                    <input
                      id="cashless-exercise"
                      v-model="cashlessExercise"
                      type="checkbox"
                      class="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <span class="ml-2 text-sm font-medium text-gray-700">
                      Enable Cashless Exercise
                      <span class="tooltip ml-1">ⓘ
                        <span class="tooltiptext">Allow partners to exercise options without upfront cash payment</span>
                      </span>
                    </span>
                  </label>
                </div>
                <div>
                  <label for="expiration-date" class="block text-sm font-medium text-gray-700 mb-2">
                    Option Expiration Date
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The date when unexercised options expire</span>
                    </span>
                  </label>
                  <input
                    id="expiration-date"
                    v-model="expirationDate"
                    type="date"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
              </div>
            </section>
  
            <section v-if="currentSection === 4" key="partner-rights" class="space-y-8">
              <h2 class="text-3xl font-semibold text-orange-600 mb-4">Partner Rights</h2>
              <p class="text-gray-600 mb-6">Define the rights associated with partner options.</p>
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input
                      id="voting-rights"
                      v-model="votingRights"
                      type="checkbox"
                      class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label for="voting-rights" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                  </div>
                  <label for="voting-rights" class="text-sm font-medium text-gray-700">
                    Enable Voting Rights
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">Allows partners to participate in certain company decisions</span>
                    </span>
                  </label>
                </div>
                <div v-if="votingRights" class="ml-14 space-y-4">
                  <div>
                    <label for="voting-power" class="block text-sm font-medium text-gray-700">
                      Voting Power (% of normal shares)
                      <span class="tooltip ml-1">ⓘ
                        <span class="tooltiptext">The voting power of partner options relative to normal shares</span>
                      </span>
                    </label>
                    <input
                      id="voting-power"
                      v-model.number="votingPower"
                      type="number"
                      min="0"
                      max="100"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    />
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input
                      id="information-rights"
                      v-model="informationRights"
                      type="checkbox"
                      class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label for="information-rights" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                  </div>
                  <label for="information-rights" class="text-sm font-medium text-gray-700">
                    Grant Information Rights
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">Provides partners with access to certain company information</span>
                    </span>
                  </label>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input
                      id="pro-rata-rights"
                      v-model="proRataRights"
                      type="checkbox"
                      class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label for="pro-rata-rights" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                  </div>
                  <label for="pro-rata-rights" class="text-sm font-medium text-gray-700">
                    Include Pro-Rata Rights
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">Allows partners to maintain their ownership percentage in future funding rounds</span>
                    </span>
                  </label>
                </div>
              </div>
            </section>
  
            <section v-if="currentSection === 5" key="legal-compliance" class="space-y-8">
              <h2 class="text-3xl font-semibold text-orange-600 mb-4">Legal Compliance</h2>
              <p class="text-gray-600 mb-6">Ensure your partner option grants comply with relevant regulations.</p>
              <div class="space-y-4">
                <div class="flex items-center space-x-2">
                  <input
                    id="sec-compliance"
                    v-model="secCompliance"
                    type="checkbox"
                    class="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label for="sec-compliance" class="text-sm font-medium text-gray-700">
                    Comply with SEC regulations
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">Ensure compliance with Securities and Exchange Commission rules</span>
                    </span>
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    id="rule-701"
                    v-model="rule701Compliance"
                    type="checkbox"
                    class="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label for="rule-701" class="text-sm font-medium text-gray-700">
                    Comply with Rule 701
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">Adhere to SEC Rule 701 for equity compensation plans</span>
                    </span>
                  </label>
                </div>
                <div>
                  <label for="jurisdiction-restrictions" class="block text-sm font-medium text-gray-700">
                    Jurisdiction Restrictions
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">Countries or regions where partner options cannot be offered</span>
                    </span>
                  </label>
                  <textarea
                    id="jurisdiction-restrictions"
                    v-model="jurisdictionRestrictions"
                    rows="3"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    placeholder="Enter any jurisdiction restrictions (e.g., 'Not available in US, China')"
                  ></textarea>
                </div>
                <div>
                  <label for="legal-advisor" class="block text-sm font-medium text-gray-700">
                    Legal Advisor
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">Name of the legal firm or advisor overseeing the option plan</span>
                    </span>
                  </label>
                  <input
                    id="legal-advisor"
                    v-model="legalAdvisor"
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    placeholder="Enter the name of your legal advisor or firm"
                  />
                </div>
              </div>
            </section>
          </transition-group>
  
          <div class="flex justify-between mt-8">
            <button
              @click="previousSection"
              class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300"
              :disabled="currentSection === 0"
            >
              Previous
            </button>
            <button
              v-if="currentSection < sections.length - 1"
              @click="nextSection"
              class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300"
            >
              Next
            </button>
            <button
              v-else
              @click="createPartnerOptions"
              class="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              Create Partner Options
            </button>
          </div>
        </div>
      </main>
  
      <!-- <footer class="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-8 mt-12">
        <div class="container mx-auto px-4 text-center">
          <p class="mb-4">&copy; 2023 PartnerShares. All rights reserved.</p>
          <div class="flex justify-center space-x-4">
            <a href="#" class="hover:text-orange-200 transition-colors duration-300">Privacy Policy</a>
            <a href="#" class="hover:text-orange-200 transition-colors duration-300">Terms of Service</a>
            <a href="#" class="hover:text-orange-200 transition-colors duration-300">Contact Us</a>
          </div>
        </div>
      </footer> -->
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const sections = [
    { id: 'company-info', name: 'Company Info' },
    { id: 'option-pool', name: 'Option Pool' },
    { id: 'vesting-terms', name: 'Vesting Terms' },
    { id: 'exercise-terms', name: 'Exercise Terms' },
    { id: 'partner-rights', name: 'Partner Rights' },
    { id: 'legal-compliance', name: 'Legal Compliance' },
  ]
  
  const currentSection = ref(0)
  
  const nextSection = () => {
    if (currentSection.value < sections.length - 1) {
      currentSection.value++
    }
  }
  
  const previousSection = () => {
    if (currentSection.value > 0) {
      currentSection.value--
    }
  }
  
  // Company Info
  const companyName = ref('')
  const companyValuation = ref(0)
  const companyJurisdiction = ref('')
  const companyIndustry = ref('')
  
  // Option Pool
  const optionPoolSize = ref(10)
  const optionType = ref('nso')
  const strikePrice = ref(0)
  const fairMarketValue = ref(0)
  
  // Vesting Terms
  const vestingPeriod = ref(4)
  const cliffPeriod = ref(12)
  const vestingFrequency = ref('monthly')
  const performanceBasedVesting = ref(false)
  const performanceMetric = ref('')
  const performanceTarget = ref('')
  
  // Exercise Terms
  const exerciseWindow = ref(90)
  const earlyExercise = ref(false)
  const cashlessExercise = ref(false)
  const expirationDate = ref('')
  
  // Partner Rights
  const votingRights = ref(false)
  const votingPower = ref(0)
  const informationRights = ref(false)
  const proRataRights = ref(false)
  
  // Legal Compliance
  const secCompliance = ref(true)
  const rule701Compliance = ref(true)
  const jurisdictionRestrictions = ref('')
  const legalAdvisor = ref('')
  
  const createPartnerOptions = () => {
    console.log('Creating partner options with the following parameters:')
    console.log({
      companyName: companyName.value,
      companyValuation: companyValuation.value,
      companyJurisdiction: companyJurisdiction.value,
      companyIndustry: companyIndustry.value,
      optionPoolSize: optionPoolSize.value,
      optionType: optionType.value,
      strikePrice: strikePrice.value,
      fairMarketValue: fairMarketValue.value,
      vestingPeriod: vestingPeriod.value,
      cliffPeriod: cliffPeriod.value,
      vestingFrequency: vestingFrequency.value,
      performanceBasedVesting: performanceBasedVesting.value,
      performanceMetric: performanceMetric.value,
      performanceTarget: performanceTarget.value,
      exerciseWindow: exerciseWindow.value,
      earlyExercise: earlyExercise.value,
      cashlessExercise: cashlessExercise.value,
      expirationDate: expirationDate.value,
      votingRights: votingRights.value,
      votingPower: votingPower.value,
      informationRights: informationRights.value,
      proRataRights: proRataRights.value,
      secCompliance: secCompliance.value,
      rule701Compliance: rule701Compliance.value,
      jurisdictionRestrictions: jurisdictionRestrictions.value,
      legalAdvisor: legalAdvisor.value
    })
    alert('Partner options creation initiated! Check the console for details.')
  }
  </script>
  
  <style scoped>
  .animate-fade-in-down {
    animation: fadeInDown 0.5s ease-out;
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out;
  }
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .toggle-checkbox:checked {
    right: 0;
    border-color: #f97316;
  }
  
  .toggle-checkbox:checked + .toggle-label {
    background-color: #f97316;
  }
  
  .toggle-checkbox {
    right: 0;
    transition: all 0.3s;
  }
  
  .toggle-label {
    transition: background-color 0.3s;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .tooltip {
    position: relative;
    display: inline-block;
    cursor: help;
  }
  
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -100px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
  </style>
  
  