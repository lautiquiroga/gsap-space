window.addEventListener("resize", function () {
  location.reload();
});

gsap.registerPlugin(ScrollTrigger);

const naveFuego = document.querySelector(".nave-fuego");
const luna = document.querySelector(".luna");
const planeta1 = document.querySelector(".planeta1");
// const planeta2 = document.querySelector(".planeta2");
// const planeta3 = document.querySelector(".planeta3");
// const planeta4 = document.querySelector(".planeta4");
// const planeta5 = document.querySelector(".planeta5");

if (window.matchMedia("(min-width: 1200px)").matches) {
  const tlPC = gsap.timeline({
    scrollTrigger: {
      trigger: ".contenedor__animacion",
      pin: true,
      markers: true,
      start: "top top", // start toma como referencia al contenedor seleccionado
      end: "100% 100%", // end toma como referencia al contenedor padre del contenedor seleccionado
      scrub: true,
    },
  });

  tlPC.to(naveFuego, {
    scale: 2,
    y: "600px",
    duration: 10,
  });

  tlPC.to(
    planeta1,
    {
      scale: 0.2,
      duration: "20",
      y: "-550px",
      x: "-300px",
    },
    "-=10"
  );

  tlPC.to(
    naveFuego,
    {
      y: "550px",
      x: "100px",
      rotate: 50,
      duration: 20,
    },
    "-=10"
  );

  tlPC.to(
    luna,
    {
      y: "-550px",
      scale: 1.5,
      duration: 8,
    },
    "-=10"
  );

  tlPC.to(
    luna,
    {
      y: "-1100px",
      scale: 1,
      duration: 8,
    },
    "-=2"
  );
}

if (window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches) {
  const tlTablet = gsap.timeline({
    scrollTrigger: {
      trigger: ".contenedor__animacion",
      pin: true,
      markers: true,
      start: "top top", // start toma como referencia al contenedor seleccionado
      end: "100% 100%", // end toma como referencia al contenedor padre del contenedor seleccionado
      scrub: true,
    },
  });

  // Animaciones para pantallas grandes
  tlTablet.to(naveFuego, {
    scale: 2,
    y: "30vh",
    duration: 5,
  });

  tlTablet.to(
    planeta1,
    {
      scale: 0.2,
      duration: "10",
      y: "-550px",
      x: "-300px",
    },
    "-=5"
  );

  tlTablet.to(
    naveFuego,
    {
      rotate: 50,
      duration: 20,
    },
    "-=5"
  );

  tlTablet.to(
    luna,
    {
      y: "-100vh",
      scale: 1.5,
      duration: 8,
    },
    "-=10"
  );

  tlTablet.to(
    luna,
    {
      y: "-200vh",
      scale: 1,
      duration: 8,
    },
    "-=2"
  );
}

if (window.matchMedia("(max-width: 767px)").matches) {
  const tlMobile = gsap.timeline({
    scrollTrigger: {
      trigger: ".contenedor__animacion",
      pin: true,
      markers: true,
      start: "top top", // start toma como referencia al contenedor seleccionado
      end: "100% 100%", // end toma como referencia al contenedor padre del contenedor seleccionado
      scrub: true,
    },
  });

  // Animaciones para pantallas pequeñas
  tlMobile.to(naveFuego, {
    scale: 4,
    y: "40vh",
    duration: 5,
  });

  tlMobile.to(
    planeta1,
    {
      scale: 0.2,
      duration: "10",
      y: "-1000px",
      x: "-300px",
    },
    "-=5"
  );

  tlMobile.to(
    naveFuego,
    {
      y: "50vh",
      x: "-10vw",
      rotate: 20,
      duration: 10,
    },
    "-=5"
  );

  tlMobile.to(
    luna,
    {
      y: "-1500px",
      scale: 2,
      duration: 8,
    },
    "-=10"
  );

  tlMobile.to(
    luna,
    {
      y: "-3000px",
      scale: 1,
      duration: 8,
    },
    "-=2"
  );
}
