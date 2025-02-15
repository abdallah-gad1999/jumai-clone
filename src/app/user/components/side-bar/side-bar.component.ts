import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent implements OnInit {
  isSmallScreen!: boolean;
  constructor(
    private BreakpointObserver: BreakpointObserver,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.BreakpointObserver.observe(['(max-width:991px)']).subscribe(
      (result) => {
        this.isSmallScreen = result.matches;
        console.log(this.isSmallScreen);
      }
    );
  }

}
