import { Component, OnInit } from '@angular/core';
import { ImageListItem } from '../../models/image-list-item';

const IMAGES: ImageListItem[] = [
  {
      name: "Noble Ackerson",
      title: "Consultant",
      src: "../../../assets/headshots/Ackerson_Noble.jpeg"
    },
    {
      name: "Robert Acosta",
      title: "Chief Executive Officer",
      src: "../../../assets/headshots/Acosta_Robert.jpeg"
    },
    {
      name: "Sai Akula",
      title: "Consultant",
      src: "../../../assets/headshots/Akula_Sai.jpeg"
    },
    {
      name: "Rivas Alexander",
      title: "Consultant",
      src: "../../../assets/headshots/Alexander_Rivas.jpg"
    },
    {
      name: "Khanh Armtrong",
      title: "Consultant",
      src: "../../../assets/headshots/Armtrong_Khanh.jpeg"
    },
    {
      name: "Joy Barranis",
      title: "Consultant",
      src: "../../../assets/headshots/Barranis_Joy.png"
    },
    // {
    //       name: "Mike Bowles",
    // title: "Consultant",
    // src: "../../../assets/headshots/Bowles_Mike.jpeg"
    // },
    // {
    //       name: "Gavin Brennan",
    // title: "Consultant",
    // src: "../../../assets/headshots/Brennan_Gavin.png"
    // },
    // {
    //       name: "Nick Crismali",
    // title: "Consultant",
    // src: "../../../assets/headshots/Crismali_Nick.png"
    // },
    // {
    //       name: "David Farrell",
    // title: "Consultant",
    // src: "../../../assets/headshots/Farrell_David.jpg"
    // },
    // {
    //       name: "Doug Bullard",
    // title: "Consultant",
    // src: "../../../assets/headshots/Bullard_Doug.jpg"
    // },
    // {
    //       name: "Brian Evers",
    // title: "Chief Information Technology Officer",
    // src: "../../../assets/headshots/Evers_Brian.jpg"
    // },
    // {
    //       name: "Dave Fitch",
    // title: "Consultant",
    // src: "../../../assets/headshots/Fitch_Dave.jpg"
    // },
    // {
    //       name: "Chris Ford",
    // title: "Consultant",
    // src: "../../../assets/headshots/Ford_Chris.png"
    // },
    // {
    //       name: "Priti Garg",
    // title: "Consultant",
    // src: "../../../assets/headshots/Garg_Priti.png",
    // },
    // {
    //       name: "Sharathchandra Gopal ",
    // title: "Consultant",
    // src: "../../../assets/headshots/Gopal _Sharathchandra.png"
    // },
    // {
    //       name: "Park Hyorim",
    // title: "Consultant",
    // src: "../../../assets/headshots/Hyorim_Park.jpeg"
    // },

    // {
    //       name: "Sreekanth Katikaneni",
    // title: "Consultant",
    // src: "../../../assets/headshots/Katikaneni_Sreekanth.jpeg"
    // },
    // {
    //       name: "Jayson Lamanca",
    // title: "Consultant",
    // src: "../../../assets/headshots/Lamanca_Jayson.jpg"
    // },

    // {
    //       name: "Aaron Legier",
    // title: "Consultant",
    // src: "../../../assets/headshots/Legier_Aaron.jpeg"
    // },
    // {
    //       name: "Connell Lori O",
    // title: "Consultant",
    // src: "../../../assets/headshots/Lori O_Connell.jpg"
    // },
    // {
    //       name: "Hayashi Tang Mana ",
    // title: "Consultant",
    // src: "../../../assets/headshots/Mana _Hayashi Tang.jpg"
    // },
    // {
    //       name: "Sooraz Mantena",
    // title: "Consultant",
    // src: "../../../assets/headshots/Mantena_Sooraz.jpeg"
    // },
    // {
    //       name: "Nathan McFarland",
    // title: "Consultant",
    // src: "../../../assets/headshots/McFarland_Nathan.jpeg"
    // },
    // {
    //       name: "Joe McMahon",
    // title: "Consultant",
    // src: "../../../assets/headshots/McMahon_Joe.jpeg"
    // },
    // {
    //       name: "Seth Menghi",
    // title: "Consultant",
    // src: "../../../assets/headshots/Menghi_Seth.jpeg"
    // },
    // {
    //       name: "Milver Valenzuela",
    // title: "Consultant",
    // src: "../../../assets/headshots/Valenzuela_Milver.jpg"
    // },
    // {
    //       name: "Sarma Musty",
    // title: "Consultant",
    // src: "../../../assets/headshots/Musty_Sarma.jpeg"
    // },
    // {
    //       name: "Praveen Nedungottil",
    // title: "Consultant",
    // src: "../../../assets/headshots/Nedungottil_Praveen.png"
    // },
    // {
    //       name: "Tanya Netayavichitr",
    // title: "Consultant",
    // src: "../../../assets/headshots/Netayavichitr_Tanya.jpg"
    // },
    // {
    //       name: "Terkanian Nick",
    // title: "Consultant",
    // src: "../../../assets/headshots/Nick_Terkanian.png"
    // },
    // {
    //       name: "Sood Pallavi",
    // title: "Consultant",
    // src: "../../../assets/headshots/Pallavi_Sood.png"
    // },
    // {
    //       name: "Peter Ezekwenna",
    // title: "Consultant",
    // src: "../../../assets/headshots/Ezekwenna_Peter.jpg"
    // },
    // {
    //       name: "Angeline Peter",
    // title: "Consultant",
    // src: "../../../assets/headshots/Peter_Angeline.png"
    // },
    // {
    //       name: "Christina Pritchett",
    // title: "Consultant",
    // src: "../../../assets/headshots/Pritchett_Christina.jpeg"
    // },
    // {
    //       name: "Broderick Rachael",
    // title: "Consultant",
    // src: "../../../assets/headshots/Rachael_Broderick.jpeg"
    // },
    // {
    //       name: "Sean Lajoie",
    // title: "Consultant",
    // src: "../../../assets/headshots/Lajoie_Sean.JPG"
    // },
    // {
    //       name: "Ryan Serey",
    // title: "Consultant",
    // src: "../../../assets/headshots/Serey_Ryan.jpg"
    // },
    // {
    //       name: "Hugh Shaw",
    // title: "Consultant",
    // src: "../../../assets/headshots/Shaw_Hugh.jpg"
    // },
    // {
    //       name: "Cully Shelagh",
    // title: "Consultant",
    // src: "../../../assets/headshots/Shelagh_Cully.jpg"
    // },
    // {
    //       name: "Jeff Smith",
    // title: "Consultant",
    // src: "../../../assets/headshots/Smith_Jeff.jpg"
    // },
    // {
    //       name: "Stephanie Gonthier",
    // title: "Consultant",
    // src: "../../../assets/headshots/Gonthier_Stephanie.jpeg"
    // },
    // {
    //       name: "Sankar Subramanian",
    // title: "Consultant",
    // src: "../../../assets/headshots/Subramanian_Sankar.jpeg"
    // },
    // {
    //       name: "Sultana Darya",
    // title: "Consultant",
    // src: "../../../assets/headshots/Darya_Sultana.png"
    // },
    // {
    //       name: "Jim Surguine",
    // title: "Consultant",
    // src: "../../../assets/headshots/Surguine_Jim.png"
    // },
    // {
    //       name: "Tracy Hartsel",
    // title: "Consultant",
    // src: "../../../assets/headshots/Hartsel_Tracy.jpg"
    // },
    // {
    //       name: "Trevor Dowd",
    // title: "Consultant",
    // src: "../../../assets/headshots/Dowd_Trevor.PNG"
    // },
    // {
    //       name: "Tu Maihi",
    // title: "Consultant",
    // src: "../../../assets/headshots/Maihi_Tu.jpg"
    // },
    // {
    //       name: "Tulsi Pathak",
    // title: "Consultant",
    // src: "../../../assets/headshots/Pathak_Tulsi.jpg"
    // },
    // {
    //       name: "Peter Ungerleider",
    // title: "Consultant",
    // src: "../../../assets/headshots/Ungerleider_Peter.png"
    // },

];

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  images: ImageListItem[] = IMAGES;
  constructor() { }

  ngOnInit(): void {
  }

}
