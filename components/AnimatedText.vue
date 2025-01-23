<template>
    <div class="text-center">
      <h1 class="text-3xl sm:text-3xl font-semibold text-orange-600 mb-8 mt-10 relative">
        <span class="relative z-10">{{ displayText }}</span>
        <span 
          class="cursor" 
          :class="{ 'cursor-blink': !isTyping && !isErasing }"
          aria-hidden="true"
        ></span>
      </h1>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const props = defineProps({
    phrases: {
      type: Array,
      default: () => [
        "Book your perfect venue with free sponsorship options available",
        "Hire skilled volunteers to bring professionalism to your event",
        "Connect with & Invite high-profile speakers, advisors and investors",
        "Find the right vendors to fulfill your event needs seamlessly",
        "Partner with leading influencers to enhance your event promotion",
        "Secure the right sponsor with options from product support to financial sponsorship",
        "Explore our AI Agents Lounge for all event and startup needs"
      ]
    },
    typingSpeed: {
      type: Number,
      default: 85
    },
    erasingSpeed: {
      type: Number,
      default: 20
    },
    pauseDuration: {
      type: Number,
      default: 2000
    }
  });
  
  const displayText = ref('');
  const currentPhraseIndex = ref(0);
  const isTyping = ref(true);
  const isErasing = ref(false);
  
  let timer;
  
  const typeText = () => {
    const currentPhrase = props.phrases[currentPhraseIndex.value];
    if (displayText.value.length < currentPhrase.length) {
      displayText.value += currentPhrase[displayText.value.length];
      timer = setTimeout(typeText, props.typingSpeed);
    } else {
      isTyping.value = false;
      timer = setTimeout(startErasing, props.pauseDuration);
    }
  };
  
  const eraseText = () => {
    if (displayText.value.length > 0) {
      displayText.value = displayText.value.slice(0, -1);
      timer = setTimeout(eraseText, props.erasingSpeed);
    } else {
      isErasing.value = false;
      currentPhraseIndex.value = (currentPhraseIndex.value + 1) % props.phrases.length;
      timer = setTimeout(startTyping, props.pauseDuration);
    }
  };
  
  const startTyping = () => {
    isTyping.value = true;
    typeText();
  };
  
  const startErasing = () => {
    isErasing.value = true;
    eraseText();
  };
  
  onMounted(() => {
    startTyping();
  });
  
  onUnmounted(() => {
    clearTimeout(timer);
  });
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');
  
  /* .cursor {
    @apply inline-block w-0.5 h-12 bg-orange-100 ml-1 absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .cursor-blink {
    animation: blink 0.7s infinite;
  } */
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  </style>
  