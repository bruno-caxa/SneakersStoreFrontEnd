import { Component } from '@angular/core';

@Component({
  selector: 'app-sneakers-list',
  standalone: true,
  imports: [],
  templateUrl: './sneakers-list.component.html',
  styleUrl: './sneakers-list.component.scss',
})
export class SneakersListComponent {
  sneakersList = [
    {
      name: 'Adidas Campus',
      price: 160,
      url: 'https://mandstorebnu.com.br/wp-content/uploads/2024/07/IMG_3807.jpg',
    },
    {
      name: 'Adidas Campus',
      price: 160,
      url: 'https://mandstorebnu.com.br/wp-content/uploads/2024/07/IMG_3807.jpg',
    },
    {
      name: 'Adidas Campus',
      price: 160,
      url: 'https://mandstorebnu.com.br/wp-content/uploads/2024/07/IMG_3807.jpg',
    },
    {
      name: 'Adidas Campus',
      price: 160,
      url: 'https://mandstorebnu.com.br/wp-content/uploads/2024/07/IMG_3807.jpg',
    },
    {
      name: 'Nike Air Force',
      price: 250,
      url: 'https://mandstorebnu.com.br/wp-content/uploads/2024/03/IMG_0754.jpg',
    },
  ];
}
