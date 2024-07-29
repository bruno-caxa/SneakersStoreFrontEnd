import { Component, Renderer2 } from '@angular/core';

export interface NavMenu {
  option: string;
  values: string[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navMenuArray: NavMenu[] = [
    { option: 'PROMOÇÕES', values: [] },
    {
      option: 'NOVIDADES',
      values: ['DC Shoes', 'Vans'],
    },
    {
      option: 'MARCAS',
      values: ['Adidas', 'Mizuno', 'New Balance', 'Nike', 'Oakley', 'Puma'],
    },
  ];

  searchValue = 'O que você deseja?';

  constructor(private renderer: Renderer2) {}

  animationMenuNavBarMobile(left: string, opacity: string) {
    const dropdownContentClass = this.selectRootElement('.dropdown-content');

    this.renderer.setStyle(dropdownContentClass, 'left', left);
    this.renderer.setStyle(dropdownContentClass, 'opacity', opacity);
  }

  openOptionNavBarMobile(option: string) {
    const contentValuesMobileClass = this.selectRootElement(
      '.content-mobile-' + option
    );

    const btnOptionMobileClass = this.selectRootElement(
      '.btn-option-mobile-' + option
    );

    if (contentValuesMobileClass.style.display === 'flex') {
      this.renderer.setStyle(contentValuesMobileClass, 'display', 'none');
      this.renderer.setStyle(btnOptionMobileClass, 'rotate', '0deg');
      return;
    }
    this.renderer.setStyle(contentValuesMobileClass, 'display', 'flex');
    this.renderer.setStyle(btnOptionMobileClass, 'rotate', '90deg');
  }

  openDropDown(option: string) {
    const dropdownContentClass = this.selectRootElement('.content-' + option);

    if (dropdownContentClass.children.length == 0) {
      this.displayValuesInNavbarDropdown(
        dropdownContentClass,
        this.getValuesInNavMenuArray(option)
      );
    }
  }

  private displayValuesInNavbarDropdown(element: any, values: string[]) {
    if (values.length > 0) {
      values.forEach((value) => this.appendChild(element, 'a', value));
      return;
    }
    this.renderer.setStyle(element, 'display', 'none');
  }

  private appendChild(rootElement: any, element: string, text: string) {
    const elementCreated = this.renderer.createElement(element);
    const textCreated = this.renderer.createText(text);
    this.renderer.appendChild(elementCreated, textCreated);
    this.renderer.appendChild(rootElement, elementCreated);
  }

  private getValuesInNavMenuArray(option: string): string[] {
    return this.navMenuArray
      .filter((navMenu) => navMenu.option.includes(option))
      .map((navMenu) => navMenu.values)
      .flat();
  }

  private selectRootElement(element: string): any {
    return this.renderer.selectRootElement(element, true);
  }
}
