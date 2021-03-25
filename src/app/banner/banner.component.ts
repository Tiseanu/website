import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  motto = "Every day is a second chance!";

  aboutMe = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl turpis, porttitor et finibus id, viverra a metus. Praesent non ante sed orci posuere varius quis sit amet dui. Cras molestie magna orci, id gravida dolor molestie in. Duis sollicitudin turpis quis tortor egestas, ut ultrices nisl elementum. Vestibulum sed ipsum eget nulla laoreet cursus in ac sem. Integer a suscipit justo, quis aliquam sapien. Maecenas et tellus nibh. Vivamus tincidunt eros id commodo pellentesque.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl turpis, porttitor et finibus id, viverra a metus. Praesent non ante sed orci posuere varius quis sit amet dui. Cras molestie magna orci, id gravida dolor molestie in. Duis sollicitudin turpis quis tortor egestas, ut ultrices nisl elementum. Vestibulum sed ipsum eget nulla laoreet cursus in ac sem. Integer a suscipit justo, quis aliquam sapien. Maecenas et tellus nibh. Vivamus tincidunt eros id commodo pellentesque.</p>`;

  work = [
    {
      image: "https://picsum.photos/200",
      title: "Project",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is.",
      time: "9Weeks"
    },
    {
      image: "https://picsum.photos/201",
      title: "Project",
      text: "His is a wider card with supporting text below as a natural lead-in to additional content. This content is a little.",
      time: "2Weeks"
    },
    {
      image: "https://picsum.photos/202",
      title: "Project",
      text: "Is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "2Months"
    },
    {
      image: "https://picsum.photos/204",
      title: "Project",
      text: "A wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "10Days"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
