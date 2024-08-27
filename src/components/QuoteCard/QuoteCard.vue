<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia' // Import storeToRefs
import { useQuotesStore } from '@/stores/quotesStore'

// const category = ref('happiness')
const quoteStore = useQuotesStore()

onMounted(() => {
  fetchQuote()
})

function fetchQuote() {
  quoteStore.fetchQuotes()
}

const { quote, error } = storeToRefs(quoteStore)

// import { useSpeechSynthesis } from '@vueuse/core';

// const text = ref('');
// const { speak, stop, isSpeaking, supported, toggle } = useSpeechSynthesis();

// // Function to start speaking
// const startSpeaking = () => {
//   if (supported.value) {
//     speak({ text: text.value });
//   } else {
//     alert('Speech synthesis is not supported in this browser.');
//   }
// };

// // Function to stop speaking
// const stopSpeaking = () => {
//   stop();
//   startSpeaking("satrt Vue speach")
// };

</script>

<template>
  <div class="quote">
    <span class="quote__sign">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path
          d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"
          fill="currentColor"
        />
      </svg>
    </span>
    <p class="quote__txt">{{ quote[0]?.quote }}</p>

    <span
      ><svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        width="444"
        height="16"
      >
        <g fill="none" fill-rule="evenodd">
          <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"></path>
          <g transform="translate(212)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3"></rect>
            <rect x="14" width="6" height="16" rx="3"></rect>
          </g>
        </g>
      </svg>
    </span>

    <p class="quote__author">{{ quote[0]?.author }}</p>

    <button class="quote__btn" @click="fetchQuote">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <g fill="" fill-rule="">
          <path
            d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
          />
          <path
            fill="#fff"
            d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zM8.5 14a1.5 1.5 0 0 0-1.493 1.356L7 15.5l.007.154a1.5 1.5 0 0 0 2.986 0L10 15.51l-.007-.154A1.5 1.5 0 0 0 8.5 14m7 0a1.5 1.5 0 0 0-1.493 1.356L14 15.51a1.5 1.5 0 0 0 2.993.144L17 15.5a1.5 1.5 0 0 0-1.5-1.5M12 10.5a1.5 1.5 0 0 0-1.493 1.356l-.007.154a1.5 1.5 0 0 0 2.993.144L13.5 12a1.5 1.5 0 0 0-1.5-1.5M8.5 7a1.5 1.5 0 0 0-1.493 1.356L7 8.5l.007.154a1.5 1.5 0 0 0 2.986 0L10 8.51l-.007-.154A1.5 1.5 0 0 0 8.5 7m7 0a1.5 1.5 0 0 0-1.493 1.356L14 8.51a1.5 1.5 0 0 0 2.993.144L17 8.5A1.5 1.5 0 0 0 15.5 7"
          />
        </g>
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.quote {
  max-width: 580px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
  background: #00000079;
  padding: 100px 20px 70px;
  position: relative;
  z-index: 999;

  &__sign {
    max-height: 140px;
    max-width: 140px;
    min-height: 140px;
    min-width: 140px;
    position: absolute;
    top: -70px;
    left: -70px;

    svg {
      width: 100%;
      height: 100%;
      path {
        width: 100%;
        height: 100%;
        fill: #8d8888;
      }
    }
  }

  &__txt {
    text-align: center;
    font-size: 30px;
    color: #ffffff;
  }

  &__author {
    color: navajowhite;
    font-size: 26px;
    width: 100%;
    text-align: end;
    padding: 0 20px;
  }

  &__btn {
    background: #8d8888;
    padding: 5px;
    border-radius: 10px;
    border: none;

    position: absolute;
    bottom: -25px;
    right: -25px;
    cursor: pointer;
    transition: 300ms;
    &:hover {
      background: #a19b9b;
      svg {
        transform: rotate(180deg);
      }
    }

    svg {
      max-height: 60px;
      max-width: 60px;
      min-height: 60px;
      min-width: 60px;
      width: 100%;
      height: 100%;
      transition: 200ms;
      path {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
