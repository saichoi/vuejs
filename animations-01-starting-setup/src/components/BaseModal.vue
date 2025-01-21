<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <transition name="modal">
    <dialog open v-if="open">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: ['open'],
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: modal 0.3s ease-out forwards; */
}

.modal-enter-active {
  animation: modal 0.3s ease-out;
}

.modal-leave-active {
  /* revers : modal 애니메이션을 역순으로 재생 */
  animation: modal 0.3s ease-in reverse;
}

/* animation을 넣을 때 css만으로 충분하지 않은 이유 */
/* dialog가 닫힐 때 DOM에서 사라지기 때문에 css를 넣을 수 없다. */
@keyframes modal {
  from {
    opacity: 0;
    transform: translateX(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateX(0px) scale(1);
  }
}
</style>