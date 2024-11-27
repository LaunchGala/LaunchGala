<template>
    <div class="share-buttons">
      <Button @click="shareOnFacebook" variant="ghost" class="share-button">
        <FacebookIcon class="w-5 h-5" /> Facebook
      </Button>
      <Button @click="shareOnTwitter" variant="ghost" class="share-button">
        <TwitterIcon class="w-5 h-5" /> Twitter
      </Button>
      <Button @click="shareViaEmail" variant="ghost" class="share-button">
        <MailIcon class="w-5 h-5" /> Email
      </Button>
      <Button @click="copyLink" variant="ghost" class="share-button">
        <LinkIcon class="w-5 h-5" /> Copy Link
      </Button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import { Button } from '@/components/ui/button'
  
  // URL and Title of the current page
  const pageUrl = window.location.href;
  const pageTitle = "Elegant Venue in the City Center";
  
  // Share on Facebook
  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    window.open(facebookUrl, '_blank');
  };
  
  // Share on Twitter
  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(pageTitle)}&url=${encodeURIComponent(pageUrl)}`;
    window.open(twitterUrl, '_blank');
  };
  
  // Share via Email
  const shareViaEmail = () => {
    const emailSubject = `Check out this venue: ${pageTitle}`;
    const emailBody = `I found this great venue and thought you might be interested: ${pageUrl}`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };
  
  // Copy Link to Clipboard
  const copyLink = () => {
    navigator.clipboard.writeText(pageUrl).then(
      () => alert('Page link copied to clipboard!'),
      (error) => console.error('Could not copy link: ', error)
    );
  };
  </script>
  
  <style scoped>
  .share-buttons {
    display: flex;
    gap: 10px;
  }
  
  .share-button {
    color: orange;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }
  
  .share-button:hover {
    color: darkorange;
  }
  
  /* Icons can be adjusted for proper sizing */
  </style>
  