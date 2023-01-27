import { Component, OnInit } from '@angular/core';
import { ImageListItem } from './image-list-item';
import { MatCardModule } from '@angular/material/card';
//https://stackblitz.com/edit/angular-material-image-list?file=src%2Fapp%2Fapp.module.ts

@Component({
  selector: 'app-ventera-people',
  templateUrl: './ventera-people.component.html',
  styleUrls: ['./ventera-people.component.scss']
})
export class VenteraPeopleComponent implements OnInit {

  cards = [
    {
      name: "Noble Ackerson",
      title: "",
      src: "../../../assets/headshots/Ackerson_Noble.jpeg"
    },
    {
      name: "Robert Acosta",
      title: "Chief Executive Officer",
      src: "../../../assets/headshots/Acosta_Robert.jpeg"
    },
    {
      name: "Sai Akula",
      title: "",
      src: "../../../assets/headshots/Akula_Sai.jpeg"
    },
    {
      name: "Rivas Alexander",
      title: "",
      src: "../../../assets/headshots/Alexander_Rivas.jpg"
    },
    {
      name: "Khanh Armtrong",
      title: "",
      src: "../../../assets/headshots/Armtrong_Khanh.jpeg"
    },
    {
      name: "Joy Barranis",
      title: "",
      src: "../../../assets/headshots/Barranis_Joy.png"
    },
    {
          name: "Mike Bowles",
    title: "",
    src: "../../../assets/headshots/Bowles_Mike.jpeg"
    },
    {
          name: "Gavin Brennan",
    title: "",
    src: "../../../assets/headshots/Brennan_Gavin.png"
    },
    {
          name: "Nick Crismali",
    title: "",
    src: "../../../assets/headshots/Crismali_Nick.png"
    },
    {
          name: "David Farrell",
    title: "",
    src: "../../../assets/headshots/Farrell_David.jpg"
    },
    {
          name: "Doug Bullard",
    title: "",
    src: "../../../assets/headshots/Bullard_Doug.jpg"
    },
    {
          name: "Brian Evers",
    title: "Chief Information Technology Officer",
    src: "../../../assets/headshots/Evers_Brian.jpg"
    },
    {
          name: "Dave Fitch",
    title: "",
    src: "../../../assets/headshots/Fitch_Dave.jpg"
    },
    {
          name: "Chris Ford",
    title: "",
    src: "../../../assets/headshots/Ford_Chris.png"
    },
    {
          name: "Priti Garg",
    title: "",
    src: "../../../assets/headshots/Garg_Priti.png",
    },
    {
          name: "Sharathchandra Gopal ",
    title: "",
    src: "../../../assets/headshots/Gopal _Sharathchandra.png"
    },
    {
          name: "Park Hyorim",
    title: "",
    src: "../../../assets/headshots/Hyorim_Park.jpeg"
    },

    {
          name: "Sreekanth Katikaneni",
    title: "",
    src: "../../../assets/headshots/Katikaneni_Sreekanth.jpeg"
    },
    {
          name: "Jayson Lamanca",
    title: "",
    src: "../../../assets/headshots/Lamanca_Jayson.jpg"
    },

    {
          name: "Aaron Legier",
    title: "",
    src: "../../../assets/headshots/Legier_Aaron.jpeg"
    },
    {
          name: "Connell Lori O",
    title: "",
    src: "../../../assets/headshots/Lori O_Connell.jpg"
    },
    {
          name: "Hayashi Tang Mana ",
    title: "",
    src: "../../../assets/headshots/Mana _Hayashi Tang.jpg"
    },
    {
          name: "Sooraz Mantena",
    title: "",
    src: "../../../assets/headshots/Mantena_Sooraz.jpeg"
    },
    {
          name: "Nathan McFarland",
    title: "",
    src: "../../../assets/headshots/McFarland_Nathan.jpeg"
    },
    {
          name: "Joe McMahon",
    title: "",
    src: "../../../assets/headshots/McMahon_Joe.jpeg"
    },
    {
          name: "Seth Menghi",
    title: "",
    src: "../../../assets/headshots/Menghi_Seth.jpeg"
    },
    {
          name: "Milver Valenzuela",
    title: "",
    src: "../../../assets/headshots/Valenzuela_Milver.jpg"
    },
    {
          name: "Sarma Musty",
    title: "",
    src: "../../../assets/headshots/Musty_Sarma.jpeg"
    },
    {
          name: "Praveen Nedungottil",
    title: "",
    src: "../../../assets/headshots/Nedungottil_Praveen.png"
    },
    {
          name: "Tanya Netayavichitr",
    title: "",
    src: "../../../assets/headshots/Netayavichitr_Tanya.jpg"
    },
    {
          name: "Terkanian Nick",
    title: "",
    src: "../../../assets/headshots/Nick_Terkanian.png"
    },
    {
          name: "Sood Pallavi",
    title: "",
    src: "../../../assets/headshots/Pallavi_Sood.png"
    },
    {
          name: "Peter Ezekwenna",
    title: "",
    src: "../../../assets/headshots/Ezekwenna_Peter.jpg"
    },
    {
          name: "Angeline Peter",
    title: "",
    src: "../../../assets/headshots/Peter_Angeline.png"
    },
    {
          name: "Christina Pritchett",
    title: "",
    src: "../../../assets/headshots/Pritchett_Christina.jpeg"
    },
    {
          name: "Broderick Rachael",
    title: "",
    src: "../../../assets/headshots/Rachael_Broderick.jpeg"
    },
    {
          name: "Sean Lajoie",
    title: "",
    src: "../../../assets/headshots/Lajoie_Sean.JPG"
    },
    {
          name: "Ryan Serey",
    title: "",
    src: "../../../assets/headshots/Serey_Ryan.jpg"
    },
    {
          name: "Hugh Shaw",
    title: "",
    src: "../../../assets/headshots/Shaw_Hugh.jpg"
    },
    {
          name: "Cully Shelagh",
    title: "",
    src: "../../../assets/headshots/Shelagh_Cully.jpg"
    },
    {
          name: "Jeff Smith",
    title: "",
    src: "../../../assets/headshots/Smith_Jeff.jpg"
    },
    {
          name: "Stephanie Gonthier",
    title: "",
    src: "../../../assets/headshots/Gonthier_Stephanie.jpeg"
    },
    {
          name: "Sankar Subramanian",
    title: "",
    src: "../../../assets/headshots/Subramanian_Sankar.jpeg"
    },
    {
          name: "Sultana Darya",
    title: "",
    src: "../../../assets/headshots/Darya_Sultana.png"
    },
    {
          name: "Jim Surguine",
    title: "",
    src: "../../../assets/headshots/Surguine_Jim.png"
    },
    {
          name: "Tracy Hartsel",
    title: "",
    src: "../../../assets/headshots/Hartsel_Tracy.jpg"
    },
    {
          name: "Trevor Dowd",
    title: "",
    src: "../../../assets/headshots/Dowd_Trevor.PNG"
    },
    {
          name: "Tu Maihi",
    title: "",
    src: "../../../assets/headshots/Maihi_Tu.jpg"
    },
    {
          name: "Tulsi Pathak",
    title: "",
    src: "../../../assets/headshots/Pathak_Tulsi.jpg"
    },
    {
          name: "Peter Ungerleider",
    title: "",
    src: "../../../assets/headshots/Ungerleider_Peter.png"
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
