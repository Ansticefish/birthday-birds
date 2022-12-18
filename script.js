const tl = gsap.timeline();
const button = document.querySelector(".button");
const cloud = document.querySelector(".cloud");
const newtl = gsap.timeline();
const music = document.querySelector("audio");
const playButton = document.querySelector(".btn-play");

// play music
const playMusic = function () {
  music.muted = false;
  music.src =
    "./song-final.mp3";
  music.play();
};

//  initial animation
const bearCloudMove = function () {
  newtl
    .to(
      ".bear",
      {
        keyframes: [
          {
            y: "15%",
            duration: 0.1
          },
          {
            y: "-2%",
            opacity: 1,
            duration: 0.5,
            ease: "back.in"
          }
        ]
      },
      "+=1"
    )
    .to(".button", {
      opacity: 1,
      rotate: 5,
      duration: 1,
      repeat: -1,
      yoyo: true
    })
    .to(
      [".cloud1", ".cloud2"],
      {
        x: "42%",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "none",
        stagger: 0.1
      },
      "-=5"
    )
    .to(
      [".cloud4", ".button-wrapper"],
      {
        x: "-42%",
        duration: 3,
        repeat: -1,
        yoyo: true,
        stagger: {
          from: "random",
          ease: "power2.inOut"
        }
      },
      "<"
    );
};

// animations (after click)
const skyIconsDisappear = function () {
  tl.to([".bear", ".button"], {
    display: "none",
    duration: 0.1
  });
};
const cloudsDisappear = function () {
  tl.to(".cloud", {
    display: "none",
    duration: 0.1,
    delay: -5.5
  });
};
const birdDrop = function () {
  tl.to(".container", {
    keyframes: [
      {
        y: "-25%",
        opacity: 0.1,
        duration: 8.5
      },
      {
        opacity: 1,
        background:
          "radial-gradient(132.67% 132.67% at 52.19% 32.42%, #FFA756 0%, rgba(255, 86, 6, 0.135417) 74.48%, rgba(255, 77, 0, 0) 100%)",
        duration: 0.5,
        delay: -0.5
      }
    ]
  })
    .to(
      ".bird",
      {
        keyframes: [
          {
            opacity: 1,
            duration: 0.0001
          },
          {
            y: "45vh",
            scale: 1.2,
            rotate: 270,
            ease: "back.out",
            duration: 8
          },
          {
            rotate: 360,
            duration: 3,
            delay: -1.2,
            ease: "back.out"
          }
        ],
        stagger: 0.2
      },
      "< +0.5"
    )
    .to(
      ".eyes",
      {
        opacity: 1,
        duration: 0.2
      },
      "<10%"
    )
    .to(
      ".beak",
      {
        opacity: 1,
        duration: 0.2,
        stagger: 0.1
      },
      "<10%"
    )
    .to(
      [".wing-left", ".wing-right"],
      {
        keyframes: [
          {
            opacity: 1,
            duration: 0.2,
            stagger: 0.1
          },
          {
            rotate: -15,
            duration: 1.5,
            ease: "expo.out",
            repeat: 4,
            yoyo: true
          },
          {
            scale: 0.2,
            duration: 0.4,
            stagger: 0.1
          },
          {
            opacity: 0,
            duration: 1
          }
        ]
      },
      "<10%"
    )
    .to(
      [".foot-left", ".foot-right"],
      {
        keyframes: [
          {
            opacity: 1,
            y: "-1%",
            duration: 0.1
          },
          {
            y: "1%",
            duration: 1.5,
            ease: "expo.out"
          }
        ]
      },
      "<75%"
    );
};
const playerShow = function () {
  tl.to(
    ".player-wrapper",
    {
      keyframes: [
        {
          y: "50vh",
          duration: 9,
          onComplete: playMusic
        },
        {
          display: "block",
          duration: 1
        }
      ]
    },
    "-= 10"
  )
    .to(
      ".volumn",
      {
        rotate: 360,
        duration: 5,
        repeat: -1,
        repeatDelay: -1,
        ease: "back",
        stagger: 0.1
      },
      "-=2"
    )
    .to(
      "p",
      {
        x: "110%",
        duration: 7,
        repeat: -1,
        repeatDelay: 0.2
      },
      "<"
    )
    .to(
      ".btn-play",
      {
        opacity: 0.4,
        duration: 1,
        repeat: -1,
        yoyo: true
      },
      "<"
    );
};
const wordShow = function () {
  tl.to(
    ".word",
    {
      keyframes: [
        {
          opacity: 1,
          y: -10,
          duration: 2,
          ease: "back.out",
          stagger: 0.1
        },
        {
          y: "20%",
          rotateY: 360,
          scale: 0.8,
          duration: 2,
          ease: "back.out",
          stagger: 0.2,
          repeat: -1,
          yoyo: true
        }
      ]
    },
    "-=1"
  );
};

button.addEventListener("click", () => {
  newtl.pause();
  music.src =
    "./song-final.mp3";
  music.play();
  music.muted = true;
  skyIconsDisappear();
  birdDrop();
  cloudsDisappear();
  playerShow();
  wordShow();
});
playButton.addEventListener("click", () => {
  console.log("click");
  playMusic();
});

bearCloudMove();
