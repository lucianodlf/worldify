import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    var hash = window.location.hash;
    if (hash) {
      var token = window.location.hash.split('&')[0].split('=')[1];
      this.setToken(token)
      this.router.navigate(['']);
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  public isAuthenticated() {
    return this.getToken();
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getAuthorization() {
    this.spotifyService.retrieveToken(window.location.origin);
  }

}