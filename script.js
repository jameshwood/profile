document.addEventListener("DOMContentLoaded", function() {
  const snowContainer = document.querySelector('.snow-container');
  const cardGreen = document.querySelector('.card-green .snow-accumulation');

  // Function to create falling snow effect
  function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.innerHTML = '❄️';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;

      snowContainer.appendChild(snowflake);

      setTimeout(() => {
          snowflake.remove();
      }, 10000);
  }

  // Function to create accumulating snow particles on card
  function createSnowParticle() {
      const snowParticle = document.createElement('div');
      snowParticle.classList.add('snow-particle');
      snowParticle.style.left = `${Math.random() * 100}%`;

      cardGreen.appendChild(snowParticle);

      // Occasionally make a snow particle fall down
      if (Math.random() > 0.8) { // 20% chance to fall
          setTimeout(() => {
              snowParticle.style.animation = "accumulate 3s linear forwards";
          }, Math.random() * 2000); // Random delay before it falls
      }

      // Remove particle after it "falls" out of view
      setTimeout(() => {
          snowParticle.remove();
      }, 5000);
  }

  // Create snowflakes falling from the top of the page every 300ms
  setInterval(createSnowflake, 300);

  // Create accumulating snow particles every 500ms
  setInterval(createSnowParticle, 500);
});
