<template>
  <div
    id="graduate"
    class="graduate-container cursor-pointer"
    @click="flight"
  >
    <div id="five">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1280.000000 1278.000000"
        preserveAspectRatio="xMidYMid meet"
        class="position-absolute hi"
      >
        <g
          transform="translate(0.000000,1278.000000) scale(0.100000,-0.100000)"
          fill="#f1f1f1"
          stroke="none"
        >
          <path
            d="M8154 12769 c-522 -50 -995 -264 -1325 -599 l-75 -77 -89 39 c-291
128 -556 186 -890 195 -224 6 -384 -9 -585 -53 -855 -191 -1464 -829 -1471
-1540 l-1 -101 -97 -23 c-392 -94 -718 -265 -975 -510 -316 -301 -476 -656
-476 -1053 0 -162 17 -276 62 -417 104 -326 346 -633 673 -851 181 -121 461
-242 690 -298 l90 -22 0 -152 c1 -102 7 -181 18 -240 141 -710 802 -1249 1677
-1368 122 -17 479 -17 595 -1 355 50 676 162 925 323 33 21 64 39 69 39 4 0
34 -21 67 -46 407 -318 955 -479 1505 -444 330 21 597 90 874 225 339 165 612
411 788 710 26 44 30 47 60 41 391 -82 695 -85 1045 -11 751 158 1333 678
1463 1308 95 461 -62 951 -414 1296 l-66 64 19 27 c42 59 132 261 161 360 41
142 51 221 51 380 -1 661 -498 1255 -1257 1503 -243 80 -454 111 -741 112
l-221 0 -23 60 c-95 252 -302 515 -555 707 -413 312 -1014 471 -1571 417z"
          />
          <path
            d="M4243 5395 c-84 -19 -202 -69 -266 -112 -125 -85 -233 -221 -278
-353 -30 -90 -38 -251 -15 -340 52 -201 182 -357 381 -456 313 -155 700 -88
935 162 346 368 164 931 -350 1086 -86 27 -317 34 -407 13z"
          />
          <path
            d="M2406 3664 c-187 -45 -351 -209 -401 -400 -20 -76 -19 -216 1 -285
71 -243 287 -408 534 -409 255 0 481 188 535 445 8 39 15 88 15 110 0 69 -28
177 -66 254 -110 223 -373 344 -618 285z"
          />
          <path
            d="M982 1845 c-73 -20 -103 -38 -153 -88 -73 -73 -94 -125 -94 -237 0
-82 4 -103 26 -150 34 -72 89 -126 167 -163 52 -24 76 -29 135 -29 140 -1 248
66 309 190 29 59 33 76 33 147 0 66 -5 90 -28 141 -69 150 -241 232 -395 189z"
          />
          <path
            d="M185 461 c-50 -13 -89 -37 -128 -80 -120 -133 -32 -356 149 -377 98
-12 189 39 236 130 42 81 19 205 -48 268 -51 48 -146 75 -209 59z"
          />
        </g>
      </svg>
      <div>{{ $t('five') }}</div>
    </div>
    <svg
      id="hand"
      class="position-absolute"
      xmlns="http://www.w3.org/2000/svg"
      width="325"
      height="204"
      viewBox="0 100 325 204"
    >
      <ellipse
        cx="300.47826"
        cy="518.50225"
        rx="7.50055"
        ry="23.89244"
        transform="translate(-473.06891 66.11269) rotate(-44.9779)"
        fill="#2f2e41"
      />
    </svg>
    <svg
      class="position-absolute"
      xmlns="http://www.w3.org/2000/svg"
      width="325"
      height="204"
      viewBox="0 100 325 204"
    >
      <g id="legs">
        <rect
          x="137.95433"
          y="275.42311"
          width="13.08374"
          height="23.44171"
          fill="#2f2e41"
        />
        <ellipse
          cx="139.85742"
          cy="299.1374"
          rx="10.90314"
          ry="4.08868"
          fill="#2f2e41"
        />
        <rect
          x="164.12183"
          y="275.42311"
          width="13.08373"
          height="23.44171"
          fill="#2f2e41"
        />
        <ellipse
          cx="166.02496"
          cy="298.59223"
          rx="10.90314"
          ry="4.08868"
          fill="#2f2e41"
        />
      </g>
      <g>
        <path
          d="M368.04913,412.4563a3.67458,3.67458,0,0,1-2.04749-4.441,1.76625,1.76625,0,0,0,.0799-.40753h0a1.84257,1.84257,0,0,0-3.31046-1.22119h0a1.766,1.766,0,0,0-.2039.36178,3.67459,3.67459,0,0,1-4.441,2.04749,1.76539,1.76539,0,0,0-.40754-.0799h0a1.84259,1.84259,0,0,0-1.2212,3.31046h0a1.76552,1.76552,0,0,0,.36181.20389,3.67462,3.67462,0,0,1,2.04748,4.441,1.76574,1.76574,0,0,0-.07991.40753h0A1.84257,1.84257,0,0,0,362.13728,418.3h0a1.76582,1.76582,0,0,0,.2039-.36179,3.67458,3.67458,0,0,1,4.441-2.04748,1.767,1.767,0,0,0,.40755.07989h0a1.84256,1.84256,0,0,0,1.22119-3.31045h0A1.76749,1.76749,0,0,0,368.04913,412.4563Z"
          transform="translate(-194.5 -298)"
          fill="#f1f1f1"
          style="isolation:isolate"
        />
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 168 115"
          to="360 168 115"
          dur="5s"
          repeatCount="indefinite"
        />
      </g>
      <g>
        <path
          d="M368.04913,412.4563a3.67458,3.67458,0,0,1-2.04749-4.441,1.76625,1.76625,0,0,0,.0799-.40753h0a1.84257,1.84257,0,0,0-3.31046-1.22119h0a1.766,1.766,0,0,0-.2039.36178,3.67459,3.67459,0,0,1-4.441,2.04749,1.76539,1.76539,0,0,0-.40754-.0799h0a1.84259,1.84259,0,0,0-1.2212,3.31046h0a1.76552,1.76552,0,0,0,.36181.20389,3.67462,3.67462,0,0,1,2.04748,4.441,1.76574,1.76574,0,0,0-.07991.40753h0A1.84257,1.84257,0,0,0,362.13728,418.3h0a1.76582,1.76582,0,0,0,.2039-.36179,3.67458,3.67458,0,0,1,4.441-2.04748,1.767,1.767,0,0,0,.40755.07989h0a1.84256,1.84256,0,0,0,1.22119-3.31045h0A1.76749,1.76749,0,0,0,368.04913,412.4563Z"
          transform="translate(-100 -200)"
          fill="#f1f1f1"
          style="isolation:isolate"
        />
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 262 212"
          to="360 262 212"
          dur="8s"
          repeatCount="indefinite"
        />
      </g>
      <g>
        <path
          d="M217.77176,566.343a17.58427,17.58427,0,0,0,16.98013-2.991c5.94728-4.99209,7.81231-13.21366,9.32907-20.82834L248.56858,520l-9.39515,6.46911c-6.75688,4.65223-13.66552,9.45394-18.34348,16.19234s-6.71882,15.93761-2.96132,23.22918"
          transform="translate(-194.5 -298)"
          fill="#e6e6e6"
        />
        <path
          d="M219.22247,595.18022c-1.18251-8.61522-2.39918-17.34184-1.56772-26.04943.73684-7.73336,3.09625-15.2853,7.89965-21.48006a35.73253,35.73253,0,0,1,9.16783-8.30783c.91655-.57839,1.76033.874.84769,1.45016a33.97047,33.97047,0,0,0-13.43763,16.2125c-2.92549,7.44053-3.39524,15.55183-2.89133,23.456.30459,4.77987.95183,9.5284,1.60187,14.27133a.87009.87009,0,0,1-.58678,1.033.8449.8449,0,0,1-1.033-.58676Z"
          transform="translate(-194.5 -298)"
          fill="#f2f2f2"
        />
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 25 300;-10 25 300;0 25 300"
          dur="8s"
          repeatCount="indefinite"
        />
      </g>
      <path
        d="M227.73409,581.35626a12.94434,12.94434,0,0,0,11.27866,5.823c5.711-.271,10.47016-4.25524,14.754-8.039l12.67337-11.18963-8.38733-.40143c-6.03182-.28891-12.21929-.5599-17.96443,1.30232s-11.0435,6.337-12.09387,12.28369"
        transform="translate(-194.5 -298)"
        fill="#e6e6e6"
      />
      <path
        d="M215.87986,600.13256c5.69307-10.0732,12.296-21.26842,24.09536-24.84675a26.88752,26.88752,0,0,1,10.13421-1.04646c1.07613.093.80737,1.75136-.26652,1.659a24.97945,24.97945,0,0,0-16.1733,4.27878A42.03757,42.03757,0,0,0,222.55332,592.173c-1.841,2.80344-3.48986,5.72556-5.13878,8.64376C216.88767,601.74956,215.34683,601.076,215.87986,600.13256Z"
        transform="translate(-194.5 -298)"
        fill="#f2f2f2"
      />
      <g id="body">
        <circle
          cx="157.57996"
          cy="241.62342"
          r="43.06733"
          fill="#2f2e41"
        />
        <ellipse
          cx="393.18361"
          cy="515.50225"
          rx="23.89244"
          ry="7.50055"
          transform="translate(-443.88763 131.25771) rotate(-45.0221)"
          fill="#2f2e41"
        />
        <circle
          cx="155.76794"
          cy="235.5202"
          r="14.71921"
          fill="#fff"
        />
        <circle
          id="eye"
          cx="155.76794"
          cy="235.5202"
          r="4.90643"
          fill="#3f3d56"
        />
        <path
          d="M361.95247,560.74273a9.57244,9.57244,0,0,1-18.83533,3.42884h0l-.00336-.0185c-.94177-5.20214,3.08039-7.043,8.28254-7.98474S361.01076,555.54065,361.95247,560.74273Z"
          transform="translate(-194.5 -298)"
          fill="#fff"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            values="translate(-194.5 -298) scale(1 1);translate(-194.5 -298) scale(1.2 1); translate(-194.5 -298) scale(1 1)"
            dur="8s"
            repeatCount="indefinite"
          />
          <!--          transform-origin: 355px 565px;
              transform: translate(-194.5px ,-298px) scale(1.5,1)-->
        </path>
      </g>
      <path
        d="M394.31009,584.82347a3.6605,3.6605,0,0,0-3.65632,3.65632v7.63736a3.66049,3.66049,0,0,0,3.65632,3.65632l58.8298,0a3.66049,3.66049,0,0,0,3.65632-3.65631v-7.63737a3.6605,3.6605,0,0,0-3.65632-3.65632Z"
        transform="translate(-194.5 -298)"
        fill="#e5e5e5"
      />
      <path
        d="M428.142,579.7372a1.58575,1.58575,0,0,0-2.166.58036l-2.18619,3.78672-2.14238-4.23416a1.58551,1.58551,0,1,0-2.82945,1.43164l1.66723,3.2952h-.611V600h8.15454l0-15.403h-.8616l1.5553-2.6938A1.58577,1.58577,0,0,0,428.142,579.7372Z"
        transform="translate(-194.5 -298)"
        fill="#00a1ff"
      />
    </svg>
    <svg
      id="confederate"
      class="position-absolute"
      xmlns="http://www.w3.org/2000/svg"
      width="325"
      height="204"
      viewBox="0 100 325 204"
    >
      <path
        d="M350.97091,511.375a76.08526,76.08526,0,0,1-22.56494-3.44727,2.52873,2.52873,0,0,1-1.7522-2.39746V488a2.50294,2.50294,0,0,1,2.5-2.5h44a2.50294,2.50294,0,0,1,2.5,2.5v17.52a2.50606,2.50606,0,0,1-1.77881,2.39941A79.18482,79.18482,0,0,1,350.97091,511.375Z"
        transform="translate(-194.5 -298)"
        fill="#00a1ff"
      />
      <path
        d="M375.15377,488v2.93l-23.81006,8.35a2.01556,2.01556,0,0,1-1.37012-.02l-22.81982-8.57V488a2.00583,2.00583,0,0,1,2-2h44A2.00583,2.00583,0,0,1,375.15377,488Z"
        transform="translate(-194.5 -298)"
        opacity="0.2"
      />
      <path
        d="M350.67745,495.8916a2.50248,2.50248,0,0,1-.87866-.15869l-34.10107-12.80469a2.50017,2.50017,0,0,1,.06958-4.70605l32.08544-10.97656a2.52519,2.52519,0,0,1,1.59961-.00684l35.81006,11.937a2.5,2.5,0,0,1,.03638,4.731l-33.79468,11.84472A2.49712,2.49712,0,0,1,350.67745,495.8916Z"
        transform="translate(-194.5 -298)"
        fill="#00a1ff"
      />
      <polygon
        points="125.154 197 124.154 197 124.154 182.5 154.654 182.5 154.654 183.5 125.154 183.5 125.154 197"
        fill="#3f3d56"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isFlight = ref(false)

function flight () {
  if (!isFlight.value) {
    isFlight.value = true
    const h1 = document.getElementById('education-h1')
    const confederate = document.getElementById('confederate')
    const graduate = document.getElementById('graduate')
    const hand = document.getElementById('hand')
    const body = document.getElementById('body')
    const legs = document.getElementById('legs')
    const eye = document.getElementById('eye')
    const five = document.getElementById('five')
    const educationCard = document.getElementById('education-card')
    if (h1 && confederate && educationCard && hand && body && legs && eye && graduate && five) {
      graduate.style.cursor = 'default'
      hand.animate([
        { transform: 'none' },
        { transform: 'translate(0, -25px) rotate(30deg)', transformOrigin: '52% 78%' },
        { transform: 'translate(0, 0) rotate(10deg)', transformOrigin: '52% 78%' }
      ], {
        duration: 500,
        fill: 'forwards'
      })
      legs.animate([
        { transform: 'translate(0, 0)', transformOrigin: '160px 250px' },
        { transform: 'translate(0, -25px) rotate(-30deg)', transformOrigin: '160px 250px' },
        { transform: 'translate(0, 0)', transformOrigin: '160px 250px' }
      ], {
        duration: 500,
        fill: 'forwards'
      })
      body.animate([
        { transform: 'translate(0, 0)' },
        { transform: 'translate(0, -25px)' },
        { transform: 'translate(0, 0)' }
      ], {
        duration: 500,
        fill: 'forwards'
      })
      confederate.animate([
        { transform: 'translate(0, 0)' },
        { transform: 'translate(0, -25px)' },
        { transform: 'translate(0, 0)' }
      ], {
        duration: 500,
        fill: 'forwards'
      })
      eye.animate([
        { transform: 'none' },
        { transform: 'translate(-3px, -5px)' },
        { transform: 'none' }
      ], {
        duration: 500,
        fill: 'forwards'
      })
      const right = h1.offsetLeft + h1.offsetWidth - educationCard.offsetLeft - graduate.offsetLeft - graduate.offsetWidth * 0.5
      const top = -h1.offsetHeight - educationCard.offsetTop - graduate.offsetTop - graduate.offsetHeight * 0.025
      confederate.animate([
        { transform: `translate(${right}px, ${top}px) rotate(15deg)` }
      ], {
        delay: 250,
        duration: 1000,
        fill: 'forwards'
      })
      five.animate([
        { opacity: 0 }
      ], {
        delay: 350,
        duration: 1000,
        fill: 'forwards'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.graduate-container {
  margin: 0 auto;
  width: 80%;
  aspect-ratio: 324/204;
  position: relative;
  @media (min-width: 600px) {
    height: 60%;
    width: auto;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  @media (min-width: 960px) {
    height: 100%;
  }
}

.position-absolute {
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

@keyframes five {
  from {
    transform: scale(.95);
  }
  to {
    transform: scale(1);
  }
}

#five {
  animation: 3s five ease-in-out infinite alternate-reverse;
  width: 100%;
  height: 100%;

  svg {
    top: 10%;
    width: 50%;
    height: 50%;
    transform: scale(-1, 1);
  }

  div {
    position: absolute;
    top: 20%;
    left: 12%;
    font-family: cursive;
    color: initial;
  }
}
</style>
