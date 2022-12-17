const tl = gsap.timeline();
const button = document.querySelector(".button");

// animations
const skyIconsDisappear = function () {
  tl.to([".buttonWrapper", ".bear", ".button"], {
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
        duration: 8
      },
      {
        opacity: 1,
        background: "#FFBB7C",
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
            y: "10vh",
            scale: 1.2,
            rotate: 270,
            ease: "back.out",
            duration: 8
          },
          {
            rotate: 360,
            duration: 3,
            delay: -1.5,
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
            repeat: 3,
            yoyo: true
          }
        ]
      },
      "<10%"
    )
    .to([".foot-left", ".foot-right"], {
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
    });
};

button.addEventListener("click", () => {
  skyIconsDisappear();
  birdDrop();
  cloudsDisappear();
});
