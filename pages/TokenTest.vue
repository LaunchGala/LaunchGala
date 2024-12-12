<template>
    <div class="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <header class="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-6 shadow-lg">
        <div class="container mx-auto px-4 flex justify-between items-center">
          <a href="/" class="text-3xl font-bold tracking-tight">TokenizeMyShares</a>
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
          Create Your Tokenized Shares
        </h1>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up text-lg">
       <p class="font-semibold p-2"> Empower your strategic partners with innovative, dividend-paying tokens. </p>
       <p> Our platform enables businesses to compensate partners and service providers through innovative tokens linked to company shares. These customized tokens incorporate features like performance-based vesting, profit-sharing and options for token conversion to traditional shares. This solution offers flexible compensation, enhances liquidity, and strengthens strategic partnerships, all while maintaining governance and operational control.</p>
       <p class="font-semibold p-2 text-2xl "> Configure your tokenized shares below:</p>
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
                  <label for="company-registration" class="block text-sm font-medium text-gray-700">
                    Company Registration Number
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The official registration number of your company</span>
                    </span>
                  </label>
                  <input
                    id="company-registration"
                    v-model="companyRegistration"
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    placeholder="Enter registration number"
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
                <div class="space-y-2">
                  <label for="company-stage" class="block text-sm font-medium text-gray-700">
                    Company Stage
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The current stage of your company's development</span>
                    </span>
                  </label>
                  <select
                    id="company-stage"
                    v-model="companyStage"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  >
                    <option value="seed">Seed</option>
                    <option value="early">Early Stage</option>
                    <option value="growth">Growth</option>
                    <option value="mature">Mature</option>
                  </select>
                </div>
              </div>
            </section>
  
            <section v-if="currentSection === 1" key="token-supply" class="space-y-8">
              <h2 class="text-3xl font-semibold text-orange-600 mb-4">Token Supply</h2>
              <p class="text-gray-600 mb-6">Define the number of tokens to create and how they relate to your existing shares.</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="token-count" class="block text-sm font-medium text-gray-700">
                    Number of Tokens to Create
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The total number of tokens you want to issue</span>
                    </span>
                  </label>
                  <input
                    id="token-count"
                    v-model.number="tokenCount"
                    type="number"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
                <div class="space-y-2">
                  <label for="traditional-shares" class="block text-sm font-medium text-gray-700">
                    Existing Traditional Shares
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The number of traditional shares your company has issued</span>
                    </span>
                  </label>
                  <input
                    id="traditional-shares"
                    v-model.number="traditionalShares"
                    type="number"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
                <div class="space-y-2">
                  <label for="token-name" class="block text-sm font-medium text-gray-700">
                    Token Name
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The full name of your token (e.g., MyCompany Token)</span>
                    </span>
                  </label>
                  <input
                    id="token-name"
                    v-model="tokenName"
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    placeholder="Enter token name (e.g., CompanyToken)"
                  />
                </div>
                <div class="space-y-2">
                  <label for="token-symbol" class="block text-sm font-medium text-gray-700">
                    Token Symbol
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">A short abbreviation for your token (e.g., MYC)</span>
                    </span>
                  </label>
                  <input
                    id="token-symbol"
                    v-model="tokenSymbol"
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    placeholder="Enter token symbol (e.g., CTK)"
                  />
                </div>
              </div>
              <div class="mt-4">
                <label for="token-decimals" class="block text-sm font-medium text-gray-700">
                  Token Decimals
                  <span class="tooltip ml-1">ⓘ
                    <span class="tooltiptext">The number of decimal places for token divisibility (0-18)</span>
                  </span>
                </label>
                <input
                  id="token-decimals"
                  v-model.number="tokenDecimals"
                  type="number"
                  min="0"
                  max="18"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                />
                <p class="text-sm text-gray-600 mt-1">Number of decimal places for token divisibility (0-18)</p>
              </div>
            </section>
  
            <section v-if="currentSection === 2" key="token-economics" class="space-y-8">
              <h2 class="text-3xl font-semibold text-orange-600 mb-4">Token Economics</h2>
              <p class="text-gray-600 mb-6">Configure the economic properties of your tokens, including dividends and conversion options.</p>
              <div class="space-y-8">
                <div>
                  <label for="dividend-percentage" class="block text-sm font-medium text-gray-700 mb-2">
                    Dividend Profit Sharing (%)
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The percentage of profits distributed to token holders as dividends</span>
                    </span>
                  </label>
                  <div class="flex items-center space-x-4">
                    <input
                      id="dividend-percentage"
                      v-model.number="dividendPercentage"
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      class="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span class="text-2xl font-bold text-orange-600 w-16 text-center">{{ dividendPercentage }}%</span>
                  </div>
                  <p class="text-sm text-gray-600 mt-2">Token holders will receive {{ dividendPercentage }}% of the profits of each share as dividends once approved by the board if needed</p>
                </div>
                <div>
                  <label for="conversion-ratio" class="block text-sm font-medium text-gray-700 mb-2">
                    Token Conversion Ratio
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The number of traditional shares one token can be converted into</span>
                    </span>
                  </label>
                  <div class="flex items-center space-x-4">
                    <input
                      id="conversion-ratio"
                      v-model.number="conversionRatio"
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      class="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span class="text-2xl font-bold text-orange-600 w-16 text-center">{{ conversionRatio.toFixed(2) }}</span>
                  </div>
                  <p class="text-sm text-gray-600 mt-2">1 token can be converted to {{ conversionRatio.toFixed(2) }} traditional shares during specific company exit events (IPO, acquisition, etc.)

</p>
                </div>
                <div>
                  <label for="vesting-period" class="block text-sm font-medium text-gray-700 mb-2">
                    Vesting Period (months)
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The period over which tokens gradually become available to the holder</span>
                    </span>
                  </label>
                  <div class="flex items-center space-x-4">
                    <input
                      id="vesting-period"
                      v-model.number="vestingPeriod"
                      type="range"
                      min="0"
                      max="60"
                      step="1"
                      class="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span class="text-2xl font-bold text-orange-600 w-16 text-center">{{ vestingPeriod }}</span>
                  </div>
                  <p class="text-sm text-gray-600 mt-2">Tokens will vest over {{ vestingPeriod }} months</p>
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
                    :max="vestingPeriod"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  />
                  <p class="text-sm text-gray-600 mt-2">Tokens start vesting after {{ cliffPeriod }} months</p>
                </div>
                <div>
                  <label for="dividend-frequency" class="block text-sm font-medium text-gray-700 mb-2">
                    Dividend Frequency
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">How often dividends are distributed to token holders</span>
                    </span>
                  </label>
                  <select
                    id="dividend-frequency"
                    v-model="dividendFrequency"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="semi-annual">Semi-Annual</option>
                    <option value="annual">Annual</option>
                  </select>
                </div>
                <div>
                  <label for="buyback-percentage" class="block text-sm font-medium text-gray-700 mb-2">
                    Buyback Percentage (%)
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">Percentage of profits used to buy back tokens from the market</span>
                    </span>
                  </label>
                  <div class="flex items-center space-x-4">
                    <input
                      id="buyback-percentage"
                      v-model.number="buybackPercentage"
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      class="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span class="text-2xl font-bold text-orange-600 w-16 text-center">{{ buybackPercentage }}%</span>
                  </div>
                  <p class="text-sm text-gray-600 mt-2">{{ buybackPercentage }}% of profits will be used for token buybacks</p>
                </div>
              </div>
            </section>
  
            <section v-if="currentSection === 3" key="token-rights" class="space-y-8">
              <h2 class="text-3xl font-semibold text-orange-600 mb-4">Token Rights</h2>
              <p class="text-gray-600 mb-6">Define the rights associated with token ownership, including voting and trading capabilities.</p>
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
                    Enable Voting Rights per Token
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">Allows token holders to participate in governance decisions</span>
                    </span>
                  </label>
                </div>
                <p class="text-sm text-gray-600 ml-14" :class="{ 'text-green-600': votingRights, 'text-red-600': !votingRights }">
                  {{ votingRights ? "Token holders will have voting rights proportional to their token ownership" : "Token holders will not have voting rights" }}
                </p>
                <div v-if="votingRights" class="ml-14 space-y-4">
                  <div>
                    <label for="voting-threshold" class="block text-sm font-medium text-gray-700">
                      Voting Threshold (%)
                      <span class="tooltip ml-1">ⓘ
                        <span class="tooltiptext">Minimum percentage of tokens required to submit a proposal</span>
                      </span>
                    </label>
                    <input
                      id="voting-threshold"
                      v-model.number="votingThreshold"
                      type="number"
                      min="0"
                      max="100"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    />
                    <p class="text-sm text-gray-600 mt-1">Minimum percentage of tokens required to submit a proposal</p>
                  </div>
                  <div>
                    <label for="quorum" class="block text-sm font-medium text-gray-700">
                      Quorum (%)
                      <span class="tooltip ml-1">ⓘ
                        <span class="tooltiptext">Minimum percentage of tokens that must participate for a vote to be valid</span>
                      </span>
                    </label>
                    <input
                      id="quorum"
                      v-model.number="quorum"
                      type="number"
                      min="0"
                      max="100"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    />
                    <p class="text-sm text-gray-600 mt-1">Minimum percentage of tokens that must participate in a vote for it to be valid</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input
                      id="tradable"
                      v-model="isTradable"
                      type="checkbox"
                      class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label for="tradable" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                  </div>
                  <label for="tradable" class="text-sm font-medium text-gray-700">
                    Tokens are Tradable
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">Allows tokens to be bought and sold on secondary markets</span>
                    </span>
                  </label>
                </div>
                <p class="text-sm text-gray-600 ml-14" :class="{ 'text-green-600': isTradable, 'text-red-600': !isTradable }">
                  {{ isTradable ? "Tokens can be freely traded between parties" : "Tokens cannot be traded and are locked to the initial owner" }}
                </p>
                <div v-if="isTradable" class="ml-14 space-y-4">
                  <div>
                    <label for="transfer-restriction" class="block text-sm font-medium text-gray-700">
                      Transfer Restriction Period (days)
                      <span class="tooltip ml-1">ⓘ
                        <span class="tooltiptext">Period after issuance during which tokens cannot be transferred</span>
                      </span>
                    </label>
                    <input
                      id="transfer-restriction"
                      v-model.number="transferRestriction"
                      type="number"
                      min="0"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    />
                    <p class="text-sm text-gray-600 mt-1">Tokens cannot be transferred for {{ transferRestriction }} days after issuance</p>
                  </div>
                  <div>
                    <label for="max-transfer-amount" class="block text-sm font-medium text-gray-700">
                      Maximum Transfer Amount (%)
                      <span class="tooltip ml-1">ⓘ
                        <span class="tooltiptext">Maximum percentage of total token supply that can be transferred in a single transaction</span>
                      </span>
                    </label>
                    <input
                      id="max-transfer-amount"
                      v-model.number="maxTransferAmount"
                      type="number"
                      min="0"
                      max="100"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    />
                    <p class="text-sm text-gray-600 mt-1">Maximum percentage of total token supply that can be transferred in a single transaction</p>
                  </div>
                </div>
              </div>
            </section>
  
            <section v-if="currentSection === 4" key="blockchain-config" class="space-y-8">
              <h2 class="text-3xl font-semibold text-orange-600 mb-4">Blockchain Configuration</h2>
              <p class="text-gray-600 mb-6">Choose the type of blockchain that will host your tokenized shares.</p>
              <div class="flex space-x-4">
                <div
                  @click="blockchainType = 'public'"
                  class="flex-1 p-4 border-2 rounded-lg cursor-pointer transition-all duration-300"
                  :class="blockchainType === 'public' ? 'border-orange-500 bg-orange-50' : 'border-gray-300'"
                >
                  <h3 class="text-lg font-semibold mb-2">Public Blockchain</h3>
                  <p class="text-sm text-gray-600">Offers transparency and interoperability</p>
                </div>
                <div
                  @click="blockchainType = 'private'"
                  class="flex-1 p-4 border-2 rounded-lg cursor-pointer transition-all duration-300"
                  :class="blockchainType === 'private' ? 'border-orange-500 bg-orange-50' : 'border-gray-300'"
                >
                  <h3 class="text-lg font-semibold mb-2">Private Blockchain</h3>
                  <p class="text-sm text-gray-600">Provides more control and privacy</p>
                </div>
              </div>
              <div class="mt-4" v-if="blockchainType === 'public'">
                <label for="blockchain-network" class="block text-sm font-medium text-gray-700">
                  Select Blockchain Network
                  <span class="tooltip ml-1">ⓘ
                    <span class="tooltiptext">The public blockchain network where your tokens will be deployed</span>
                  </span>
                </label>
                <select
                  id="blockchain-network"
                  v-model="blockchainNetwork"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                >
                  <option value="ethereum">Ethereum</option>
                  <option value="binance">Binance Smart Chain</option>
                  <option value="polygon">Polygon</option>
                  <option value="avalanche">Avalanche</option>
                  <option value="solana">Solana</option>
                </select>
              </div>
              <div class="mt-4" v-if="blockchainType === 'private'">
                <label for="private-blockchain-provider" class="block text-sm font-medium text-gray-700">
                  Private Blockchain Provider
                  <span class="tooltip ml-1">ⓘ
                    <span class="tooltiptext">The private blockchain solution for deploying your tokens</span>
                  </span>
                </label>
                <select
                  id="private-blockchain-provider"
                  v-model="privateBlockchainProvider"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                >
                  <option value="hyperledger">Hyperledger Fabric</option>
                  <option value="quorum">Quorum</option>
                  <option value="corda">R3 Corda</option>
                  <option value="multichain">MultiChain</option>
                </select>
              </div>
              <div class="mt-4">
                <label for="gas-price" class="block text-sm font-medium text-gray-700">
                  Gas Price (Gwei)
                  <span class="tooltip ml-1">ⓘ
                    <span class="tooltiptext">The price you're willing to pay for each unit of gas (transaction fee)</span>
                  </span>
                </label>
                <input
                  id="gas-price"
                  v-model.number="gasPrice"
                  type="number"
                  min="1"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                />
                <p class="text-sm text-gray-600 mt-1">Estimated gas price for contract deployment and token transfers</p>
              </div>
            </section>
  
            <section v-if="currentSection === 5" key="legal-compliance" class="space-y-8">
              <h2 class="text-3xl font-semibold text-orange-600 mb-4">Legal Compliance</h2>
              <p class="text-gray-600 mb-6">Ensure your tokenized shares comply with relevant regulations.</p>
              <div class="space-y-4">
                <div class="flex items-center space-x-2">
                  <input
                    id="kyc-aml"
                    v-model="kycAmlCompliance"
                    type="checkbox"
                    class="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label for="kyc-aml" class="text-sm font-medium text-gray-700">
                    Implement KYC/AML procedures
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">Know Your Customer and Anti-Money Laundering compliance checks</span>
                    </span>
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    id="accredited-investors"
                    v-model="accreditedInvestorsOnly"
                    type="checkbox"
                    class="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label for="accredited-investors" class="text-sm font-medium text-gray-700">
                    Restrict to accredited investors only
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">Limit token sales to investors meeting specific financial criteria</span>
                    </span>
                  </label>
                </div>
                <div>
                  <label for="offering-type" class="block text-sm font-medium text-gray-700">
                    Offering Type
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">The legal framework under which your tokens are being offered</span>
                    </span>
                  </label>
                  <select
                    id="offering-type"
                    v-model="offeringType"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  >
                    <option value="private">Private Placement</option>
                    <option value="public">Public Offering</option>
                    <option value="reg-a">Regulation A+</option>
                    <option value="reg-cf">Regulation Crowdfunding</option>
                  </select>
                </div>
                <div>
                  <label for="jurisdiction-restrictions" class="block text-sm font-medium text-gray-700">
                    Jurisdiction Restrictions
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">Countries or regions where token sales are not permitted</span>
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
                  <label for="lock-up-period" class="block text-sm font-medium text-gray-700">
                    Lock-up Period (months)
                    <span class="tooltip ml-1">ⓘ
                      <span class="tooltiptext">Period during which tokens cannot be sold after initial distribution</span>
                    </span>
                  </label>
                  <input
                    id="lock-up-period"
                    v-model.number="lockUpPeriod"
                    type="number"
                    min="0"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  />
                  <p class="text-sm text-gray-600 mt-1">Period during which tokens cannot be sold after initial distribution</p>
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
              @click="createSmartContract"
              class="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              Create Smart Contract
            </button>
          </div>
        </div>
      </main>
  
      <footer class="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-8 mt-12">
        <div class="container mx-auto px-4 text-center">
          <p class="mb-4">&copy; 2023 TokenizeMyShares. All rights reserved.</p>
          <div class="flex justify-center space-x-4">
            <a href="#" class="hover:text-orange-200 transition-colors duration-300">Privacy Policy</a>
            <a href="#" class="hover:text-orange-200 transition-colors duration-300">Terms of Service</a>
            <a href="#" class="hover:text-orange-200 transition-colors duration-300">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const sections = [
    { id: 'company-info', name: 'Company Info' },
    { id: 'token-supply', name: 'Token Supply' },
    { id: 'token-economics', name: 'Token Economics' },
    { id: 'token-rights', name: 'Token Rights' },
    { id: 'blockchain-config', name: 'Blockchain Config' },
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
  const companyRegistration = ref('')
  const companyValuation = ref(0)
  const companyJurisdiction = ref('')
  const companyIndustry = ref('')
  const companyStage = ref('seed')
  
  // Token Supply
  const tokenCount = ref(1000000)
  const traditionalShares = ref(10000)
  const tokenName = ref('')
  const tokenSymbol = ref('')
  const tokenDecimals = ref(18)
  
  // Token Economics
  const dividendPercentage = ref(50)
  const conversionRatio = ref(0.5)
  const vestingPeriod = ref(12)
  const cliffPeriod = ref(3)
  const dividendFrequency = ref('quarterly')
  const buybackPercentage = ref(0)
  
  // Token Rights
  const votingRights = ref(false)
  const votingThreshold = ref(5)
  const quorum = ref(51)
  const isTradable = ref(false)
  const transferRestriction = ref(0)
  const maxTransferAmount = ref(100)
  
  // Blockchain Config
  const blockchainType = ref('public')
  const blockchainNetwork = ref('ethereum')
  const privateBlockchainProvider = ref('hyperledger')
  const gasPrice = ref(20)
  
  // Legal Compliance
  const kycAmlCompliance = ref(false)
  const accreditedInvestorsOnly = ref(false)
  const offeringType = ref('private')
  const jurisdictionRestrictions = ref('')
  const lockUpPeriod = ref(0)
  
  const createSmartContract = () => {
    console.log('Creating smart contract with the following parameters:')
    console.log({
      companyName: companyName.value,
      companyRegistration: companyRegistration.value,
      companyValuation: companyValuation.value,
      companyJurisdiction: companyJurisdiction.value,
      companyIndustry: companyIndustry.value,
      companyStage: companyStage.value,
      tokenCount: tokenCount.value,
      traditionalShares: traditionalShares.value,
      tokenName: tokenName.value,
      tokenSymbol: tokenSymbol.value,
      tokenDecimals: tokenDecimals.value,
      dividendPercentage: dividendPercentage.value,
      conversionRatio: conversionRatio.value,
      vestingPeriod: vestingPeriod.value,
      cliffPeriod: cliffPeriod.value,
      dividendFrequency: dividendFrequency.value,
      buybackPercentage: buybackPercentage.value,
      votingRights: votingRights.value,
      votingThreshold: votingThreshold.value,
      quorum: quorum.value,
      isTradable: isTradable.value,
      transferRestriction: transferRestriction.value,
      maxTransferAmount: maxTransferAmount.value,
      blockchainType: blockchainType.value,
      blockchainNetwork: blockchainNetwork.value,
      privateBlockchainProvider: privateBlockchainProvider.value,
      gasPrice: gasPrice.value,
      kycAmlCompliance: kycAmlCompliance.value,
      accreditedInvestorsOnly: accreditedInvestorsOnly.value,
      offeringType: offeringType.value,
      jurisdictionRestrictions: jurisdictionRestrictions.value,
      lockUpPeriod: lockUpPeriod.value
    })
    alert('Smart contract creation initiated! Check the console for details.')
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
  
  