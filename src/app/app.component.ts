import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { Subject, Subscription } from 'rxjs';
import { MenuItems } from './app-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private selectedMenuCategory = new Subject<[string, string]>();
  private selectedMenuCategoryChangeSubsctiption: Subscription | undefined;
  private selectedMenuCategoryObservable = this.selectedMenuCategory.asObservable();
  private selectedMenuItemHtmlElements: Array<HTMLElement> = new Array<HTMLElement>(2);

  private setDefaulSelectedtMenuCategory(): void {
    const category = this.menuItems.find(x => x.home) as NbMenuItem;
    if(!category)
      return;

    const categoryTitle = category.title;
    let categoryFirstChildrenTitle = '';

    if (category.children && category.children?.length > 0)
      categoryFirstChildrenTitle = category.children[0].title;

    this.selectedMenuCategory.next([categoryTitle, categoryFirstChildrenTitle]);
  }

  private getSelectedMenuItemHtmlElement(titleValue: string): HTMLElement {
    return document.querySelector(`[title="${titleValue}"]`) as HTMLElement;
  }

  private setHtmlElementTextColor(htmlElement: HTMLElement, color: string): void {
    if (htmlElement)
      htmlElement.style.color = color;
  }

  private resetMenuItemTextColor(htmlElement: HTMLElement): void {
    this.setHtmlElementTextColor(htmlElement, 'black');
  }

  private setSelectedMenuItemTextColor(htmlElement: HTMLElement): void {
    this.setHtmlElementTextColor(htmlElement, '#3366ff');
  }

  menuItems = MenuItems;

  constructor(private menuService: NbMenuService, private router: Router) { }

  ngOnInit(): void {
    this.menuService.onItemClick().subscribe((selectedItem) => {
      this.selectedMenuCategory.next([
        selectedItem.item.parent ? selectedItem.item.parent.title : '',
        selectedItem.item.title
      ]);
    });

    this.selectedMenuCategoryChangeSubsctiption = this.selectedMenuCategoryObservable.subscribe((newValue) => {
      this.resetMenuItemTextColor(this.selectedMenuItemHtmlElements[0]);
      this.resetMenuItemTextColor(this.selectedMenuItemHtmlElements[1]);

      const mainCategoryHtmlElement = this.getSelectedMenuItemHtmlElement(newValue[0]);
      const subCategoryHtmlElement = this.getSelectedMenuItemHtmlElement(newValue[1]);

      this.setSelectedMenuItemTextColor(mainCategoryHtmlElement);
      this.selectedMenuItemHtmlElements[0] = mainCategoryHtmlElement;

      this.setSelectedMenuItemTextColor(subCategoryHtmlElement);
      this.selectedMenuItemHtmlElements[1] = subCategoryHtmlElement;
    });
  }

  ngAfterViewInit(): void {
    this.setDefaulSelectedtMenuCategory();
  }

  ngOnDestroy(): void {
    this.selectedMenuCategoryChangeSubsctiption?.unsubscribe();
  }
}
