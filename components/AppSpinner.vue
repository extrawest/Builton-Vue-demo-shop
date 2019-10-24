<template>
  <div class="loader"></div>
</template>

<style lang="less" scoped>
  .loader {
    border: 2px solid #fff;
    border-top: 2px solid rgba(170, 154, 240, 0.82);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 800ms linear infinite;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
