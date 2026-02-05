import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent implements AfterViewInit {
  targetDate = new Date('2026-02-07T10:00:00'); 
  targetTime = this.targetDate.getTime();

  @ViewChild('days', { static: true }) days!: ElementRef;
  @ViewChild('hours', { static: true }) hours!: ElementRef;
  @ViewChild('minutes', { static: true }) minutes!: ElementRef;
  @ViewChild('seconds', { static: true }) seconds!: ElementRef;

  ngAfterViewInit(): void {
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown(): void {
    const now = new Date().getTime();
    const diff = this.targetTime - now;

    if (diff <= 0) {
      this.days.nativeElement.innerText = '0';
      this.hours.nativeElement.innerText = '0';
      this.minutes.nativeElement.innerText = '0';
      this.seconds.nativeElement.innerText = '0';
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    this.days.nativeElement.innerText = days;
    this.hours.nativeElement.innerText = hours;
    this.minutes.nativeElement.innerText = minutes;
    this.seconds.nativeElement.innerText = seconds;
  }
}
