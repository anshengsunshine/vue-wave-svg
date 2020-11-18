<template>
  <div>
    <svg id="this_flex" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <path d="M 20 30 L 20 180" class="frame" stroke="#1A1919" fill="none" stroke-width="1" />
      <path d="M 10 50 L 10 190" class="frame" stroke="#1A1919" fill="none" stroke-width="1" />
    </svg>
  </div>
</template>
<style scoped>
svg {
    margin: 20% 0 0 0;
}
.house {
    stroke-dasharray: 318;
    stroke-dashoffset: 0;
    animation: house-draw 5s ease-in-out;
    -webkit-animation: house-draw 5s ease-in-out;
}
.flex {
    stroke-dasharray: 1490;
    stroke-dashoffset: 0;
    animation: flex-draw 5s ease-in-out;
    -webkit-animation: flex-draw 5s ease-in-out;
}
.frame {
    stroke-dasharray: 918;
    stroke-dashoffset: 0;
    animation: frame-draw 5s ease-in-out;
    -webkit-animation: frame-draw 5s ease-in-out;
}
@keyframes flex-draw {
    from {
        stroke-dashoffset: 1490;
    }
    to {
        stroke-dashoffset: 0;
    }
}
@keyframes house-draw {
    from {
        stroke-dashoffset: 0;
    }
    to {
        stroke-dashoffset: 318;
    }
}
@keyframes frame-draw {
    from {
        stroke-dashoffset: 918;
    }
    to {
        stroke-dashoffset: 0;
    }
}
@-webkit-keyframes flex-draw {
    from {
        stroke-dashoffset: 1490;
    }
    to {
        stroke-dashoffset: 0;
    }
}
@-webkit-keyframes house-draw {
    from {
        stroke-dashoffset: 318;
    }
    to {
        stroke-dashoffset: 0;
    }
}
@-webkit-keyframes frame-draw {
    from {
        stroke-dashoffset: 918;
    }
    to {
        stroke-dashoffset: 0;
    }
}
</style>
