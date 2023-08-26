import { useEffect } from 'react';
import './../styles/solarsystem.css'

export default function SolarSystem() {

  useEffect(() => {
    const mercury = document.getElementById('mercury')!;
    const venus = document.getElementById('venus')!;
    const earth = document.getElementById('earth')!;
    const mars = document.getElementById('mars')!;
    const jupiter = document.getElementById('jupiter')!;
    const saturn = document.getElementById('saturn')!;
    const uranus = document.getElementById('uranus')!;
    const neptune = document.getElementById('neptune')!;
    const pluto = document.getElementById('pluto')!;

    let angle = 0;
    let mercury_angle = 0;
    let venus_angle = 0;
    let earth_angle = 0;
    let mars_angle = 0;
    let jupiter_angle = 0;
    let saturn_angle = 0;
    let uranus_angle = 0;
    let neptune_angle = 0;
    let pluto_angle = 0;

    function animatePlanet(timestamp: number, distance:number, planet: HTMLElement, angle_steps:number, angle:number) {
      const radians = angle * (Math.PI / 180);
      const x = distance * Math.cos(radians);
      const y = distance * Math.sin(radians);
      planet.style.transform = `translate(${x}px, ${y}px)`;
      angle += angle_steps;
      requestAnimationFrame((timestamp) => animatePlanet(timestamp, distance, planet, angle_steps, angle));
    }

    if (mercury) {
      const distance = 50 + 196/2;
      animatePlanet(0, distance, mercury, 1.72, mercury_angle);
    }

    if (venus) {
      const distance = 75 + 196/2;
      animatePlanet(0, distance, venus, 1.26, venus_angle);
    }
    if (earth) {
      const distance = 100 + 196/2;
      animatePlanet(0, distance, earth, 1.07, earth_angle);
    }

    if (mars) {
      const distance = 125 + 196/2;
      animatePlanet(0, distance, mars, 0.86, mars_angle);
    }
    if (jupiter) {
      const distance = 150 + 196/2;
      animatePlanet(0, distance, jupiter, 0.47, jupiter_angle);
    }

    if (saturn) {
      const distance = 175 + 196/2;
      animatePlanet(0, distance, saturn, 0.34, saturn_angle);
    }
    if (uranus) {
      const distance = 200 + 196/2;
      animatePlanet(0, distance, uranus, 0.24, uranus_angle);
    }

    if (neptune) {
      const distance = 225 + 196/2;
      animatePlanet(0, distance, neptune, 0.19, neptune_angle);
    }
    if (pluto) {
      const distance = 250 + 196/2;
      animatePlanet(0, distance, pluto, 0.17, pluto_angle);
    }
  }, []);

  return (
    <div className="space_wrapper">
      <div id='sun'>
        <div id='ring_mercury' className="ring"></div>
        <div id='ring_venus' className="ring"></div>
        <div id='ring_earth' className="ring"></div>
        <div id='ring_mars' className="ring"></div>
        <div id='ring_jupiter' className="ring"></div>
        <div id='ring_saturn' className="ring"></div>
        <div id='ring_uranus' className="ring"></div>
        <div id='ring_neptune' className="ring"></div>
        <div id='ring_pluto' className="ring"></div>
      </div>
      <div id='mercury'></div>
      <div id='venus'></div>
      <div id='earth'></div>
      <div id='mars'></div>
      <div id='jupiter'></div>
      <div id='saturn'></div>
      <div id='uranus'></div>
      <div id='neptune'></div>
      <div id='pluto'></div>
    </div>
  )
}
