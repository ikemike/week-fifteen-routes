import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {
  public callNeo(concatString: string) {

      console.log('Calling Neo...');
      
      let c = document.createElement("canvas");
      let parentNode = document.getElementById("matrixNode");

      let ctx = c.getContext("2d");

      // Make the canvas full screen - Thanks Ben, Sylvie & Ross for the fix suggestions!
      c.height = window.innerHeight; 
      c.width = window.innerWidth;

      // No idea what they mean, but these chineese characters look legit
      let chineseCharacters = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
      let numbers = concatString;
      let numbersArray = concatString.split("");
      let cat = 'cat';

      let font_size = 12; 
      let columns = c.width/font_size; //number of columns for the rain
      
      // Stores an array of drops - one per column
      var drops = [];

      // For each column, initiate a new array of drop positions (initialized at the top of the screen)
      for (let i = 0; i < columns; i++) {
          drops[i] = 1;
      }
      
      // Draw the characters onto the canvas
      function draw() {

          ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Translucancy property set here
          ctx.fillRect(0, 0, c.width, c.height);
          
          ctx.fillStyle = "#0F0"; //green text
          ctx.font = font_size + "px arial";

          
          // Loop over drops
          drops.map((aDrop, i) => {
  
              // Pick a random character from the array 
              let text = cat;

              // x = i * font_size, y = value of aDrop * font_size
              ctx.fillText(text, i*font_size, drops[i]*font_size);

              // Send the drop back to the top of the screen randomly after exceeding the max height
              if (aDrop*font_size > c.height && Math.random() > 0.975) {
                  drops[i] = 0;
              }

              // Increment Y Coordinate
              drops[i]++;

          });

      }

  // Set periodic redraw 
  setInterval(draw, 90);

  // Append to placeholder div
  parentNode.appendChild(c);
          
  }
}
