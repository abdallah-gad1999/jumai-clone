import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderFixedDirective } from '../../../shared/directive/header-fixed/header-fixed.directive';
import { CommonModule, Location } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-check-header',
  standalone: true,
  imports: [HeaderFixedDirective, CommonModule, RouterLink],
  templateUrl: './check-header.component.html',
  styleUrl: './check-header.component.css',
})
export class CheckHeaderComponent implements OnInit {
  isMobile!: boolean;
  constructor(private Location: Location) {}
  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', []) onResize() {
    this.isMobile = window.innerWidth < 992;
  }

  goBack() {
    this.Location.back();
  }
}
