import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrl: './process.component.css'
})
export class ProcessComponent {
  constructor(private router: Router){}

}


document.addEventListener('DOMContentLoaded', () => {
  const overviewButtons = document.querySelectorAll('.overviewButton');

  overviewButtons.forEach(button => {
      button.addEventListener('click', () => {
          const targetId = button.getAttribute('data-target');
          const targetSection = document.getElementById('overviewSection');
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });

//

const approachButtons = document.querySelectorAll('.approachButton');

approachButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById('approachSection');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//

const researchButtons = document.querySelectorAll('.researchButton');

researchButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById('researchSection');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//

const personButtons = document.querySelectorAll('.personButton');

personButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById('personSection');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//

const interviewButtons = document.querySelectorAll('.interviewButton');

interviewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById('interviewSection');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//

const processButtons = document.querySelectorAll('.processButton');

processButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById('processSection');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//

const finalButtons = document.querySelectorAll('.finalButton');

finalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById('finalSection');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
});
