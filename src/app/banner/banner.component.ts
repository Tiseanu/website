import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  motto = "Every day is a second chance!";

  work = [
    {
      image: "https://picsum.photos/200",
      title: "Project",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9m"
    },
    {
      image: "https://picsum.photos/201",
      title: "Project",
      text: "His is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "6m"
    },
    {
      image: "https://picsum.photos/202",
      title: "Project",
      text: "Is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "10m"
    },
    {
      image: "https://picsum.photos/204",
      title: "Project",
      text: "A wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "7m"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
